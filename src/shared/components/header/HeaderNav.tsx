import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Terminal, BookOpen, Layers } from 'lucide-react';

export function HeaderNav() {
  const location = useLocation();
  const path = location.pathname;

  const isHome = path === '/' || path === '';
  const isPlayground = path === '/playground';
  const isSandbox = path === '/sandbox';
  const isDocs = !isHome && !isPlayground && !isSandbox;

  const navItems = [
    {
      label: 'Overview',
      to: '/',
      active: isHome,
      icon: Layers,
    },
    {
      label: 'Docs',
      to: '/docs',
      active: isDocs,
      icon: BookOpen,
      badge: 'Components',
    },
    {
      label: 'Playground',
      to: '/playground',
      active: isPlayground,
      icon: Terminal,
      badge: 'Live',
    },
    {
      label: 'Sandbox',
      to: '/sandbox',
      active: isSandbox,
      icon: Sparkles,
    },
  ];

  return (
    <nav className="hidden md:flex items-center gap-1 font-sans text-xs font-medium">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            to={item.to}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              item.active
                ? 'bg-emerald-50 text-emerald-950 font-semibold border border-emerald-200/60 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${item.active ? 'text-emerald-700' : 'text-slate-400'}`} />
            <span>{item.label}</span>
            {item.badge && (
              <span
                className={`text-[9px] font-mono px-1 py-0.2 rounded ${
                  item.active
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
