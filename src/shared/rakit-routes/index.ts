import type { ReactNode } from "react";

// --- Guard Types ---
export interface RouteMeta {
  title?: string;
  protected?: boolean;
  roles?: string[];
  permissions?: string[];
  guestOnly?: boolean;
  redirect?: string;
  layout?: string;
  [key: string]: unknown;
}

export interface AuthState<TUser = unknown> {
  isLogin?: boolean;
  user?: TUser | null;
  roles?: string[];
  permissions?: string[];
}

export interface GuardOptions {
  fallbackRedirect?: string;   // default: "/login"
  forbiddenRedirect?: string;  // default: "/403"
  guestRedirect?: string;      // default: "/"
}

export interface GuardEvaluation {
  allowed: boolean;
  redirect?: string;
  reason?: "unauthenticated" | "guest_only" | "forbidden" | "ok";
}

export interface RouteGuardProps {
  meta?: RouteMeta;
  auth?: AuthState | null;
  options?: GuardOptions;
  children: ReactNode;
  fallback?: ReactNode | ((redirect?: string) => ReactNode);
}

// --- Guard Functions ---
export function hasRole(auth?: AuthState | null, role?: string | string[]): boolean {
  if (!role) return true;
  if (!auth || !auth.roles || auth.roles.length === 0) return false;
  const required = Array.isArray(role) ? role : [role];
  if (required.length === 0) return true;
  return required.some((r) => auth.roles!.includes(r));
}

export function hasPermission(auth?: AuthState | null, permission?: string | string[]): boolean {
  if (!permission) return true;
  if (!auth || !auth.permissions || auth.permissions.length === 0) return false;
  const required = Array.isArray(permission) ? permission : [permission];
  if (required.length === 0) return true;
  return required.every((p) => auth.permissions!.includes(p));
}

export function evaluateGuard(
  meta?: RouteMeta,
  auth?: AuthState | null,
  options: GuardOptions = {}
): GuardEvaluation {
  if (!meta) {
    return { allowed: true, reason: "ok" };
  }

  const {
    fallbackRedirect = "/login",
    forbiddenRedirect = "/403",
    guestRedirect = "/",
  } = options;

  const isLogin = Boolean(auth?.isLogin);

  if (meta.guestOnly && isLogin) {
    return {
      allowed: false,
      redirect: meta.redirect || guestRedirect,
      reason: "guest_only",
    };
  }

  const requiresAuth = Boolean(
    meta.protected ||
    (meta.roles && meta.roles.length > 0) ||
    (meta.permissions && meta.permissions.length > 0)
  );

  if (requiresAuth && !isLogin) {
    return {
      allowed: false,
      redirect: meta.redirect || fallbackRedirect,
      reason: "unauthenticated",
    };
  }

  if (meta.roles && meta.roles.length > 0) {
    if (!hasRole(auth, meta.roles)) {
      return {
        allowed: false,
        redirect: meta.redirect || forbiddenRedirect,
        reason: "forbidden",
      };
    }
  }

  if (meta.permissions && meta.permissions.length > 0) {
    if (!hasPermission(auth, meta.permissions)) {
      return {
        allowed: false,
        redirect: meta.redirect || forbiddenRedirect,
        reason: "forbidden",
      };
    }
  }

  return { allowed: true, reason: "ok" };
}

export function canAccess(
  auth?: AuthState | null,
  meta?: RouteMeta,
  options?: GuardOptions
): boolean {
  return evaluateGuard(meta, auth, options).allowed;
}

export function RouteGuard({
  meta,
  auth,
  options,
  children,
  fallback,
}: RouteGuardProps): ReactNode {
  const result = evaluateGuard(meta, auth, options);

  if (!result.allowed) {
    if (typeof fallback === "function") {
      return fallback(result.redirect);
    }
    return fallback ?? null;
  }

  return children;
}

// --- Resolver Functions ---
export function normalizeImportPath(filePath: string): string {
  return filePath.replace(/\\/g, "/").replace(/\.[^/.]+$/, "");
}

export function toRoutePath(filePath: string, baseDir = ""): string {
  let path = normalizeImportPath(filePath);

  if (baseDir) {
    const normalizedBase = baseDir.replace(/\\/g, "/").replace(/\/$/, "");
    if (path.startsWith(normalizedBase)) {
      path = path.slice(normalizedBase.length);
    }
  }

  path = path.replace(/(^|\/)\([^)]+\)/g, "");
  path = path.replace(/\/+/g, "/");
  if (!path.startsWith("/")) path = "/" + path;

  if (path === "/404" || path === "/_404") {
    return "*";
  }

  path = path.replace(/\[\.\.\..+?\]/g, "*");
  path = path.replace(/\[(.+?)\]/g, ":$1");

  if (path.endsWith("/index")) {
    path = path.slice(0, -"/index".length) || "/";
  }

  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  return path || "/";
}

export function resolveRoutePath(filePath: string, baseDir = ""): string {
  return toRoutePath(filePath, baseDir);
}

// --- Route Sorter ---
export interface RouteItem {
  path: string;
  file: string;
  meta?: RouteMeta;
  groupMeta?: RouteMeta;
  groupName?: string;
  middlewareFile?: string;
  middlewareComponent?: string;
  layoutFiles?: string[];
}

export function sortRoutes(routes: RouteItem[]): RouteItem[] {
  return [...routes].sort((a, b) => {
    if (a.path === "/" && b.path !== "/") return -1;
    if (b.path === "/" && a.path !== "/") return 1;

    const aWildcard = a.path === "*" || a.path.includes("*");
    const bWildcard = b.path === "*" || b.path.includes("*");
    if (aWildcard && !bWildcard) return 1;
    if (!aWildcard && bWildcard) return -1;
    if (aWildcard && bWildcard) {
      if (a.path !== "*" && b.path === "*") return -1;
      if (a.path === "*" && b.path !== "*") return 1;
    }

    const aSegments = a.path.split("/").filter(Boolean);
    const bSegments = b.path.split("/").filter(Boolean);
    const maxLen = Math.max(aSegments.length, bSegments.length);

    for (let i = 0; i < maxLen; i++) {
      const segA = aSegments[i];
      const segB = bSegments[i];

      if (segA === undefined) return 1;
      if (segB === undefined) return -1;

      const isParamA = segA.startsWith(":");
      const isParamB = segB.startsWith(":");

      if (!isParamA && isParamB) return -1;
      if (isParamA && !isParamB) return 1;

      if (segA !== segB) {
        return segA.localeCompare(segB);
      }
    }

    return a.path.localeCompare(b.path);
  });
}
