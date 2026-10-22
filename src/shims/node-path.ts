export function basename(p: string = '', ext?: string): string {
  const f = p.split(/[\\/]/).pop() || '';
  return ext && f.endsWith(ext) ? f.slice(0, -ext.length) : f;
}

export function extname(p: string = ''): string {
  const m = p.match(/\.[^./\\]*$/);
  return m ? m[0] : '';
}

export function dirname(p: string = ''): string {
  const parts = p.split(/[\\/]/);
  parts.pop();
  return parts.join('/') || '.';
}

export function join(...parts: string[]): string {
  return parts.filter(Boolean).join('/').replace(/\/+/g, '/');
}

export function resolve(...parts: string[]): string {
  return join(...parts);
}

export default {
  basename,
  extname,
  dirname,
  join,
  resolve,
};
