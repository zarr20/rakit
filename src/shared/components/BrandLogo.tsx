import { useState } from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  className?: string;
}

export function BrandLogo({ size = 'md', showWordmark = true, className = '' }: BrandLogoProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const svgSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div
      onClick={triggerAnimation}
      className={`inline-flex items-center gap-2.5 cursor-pointer select-none group ${className}`}
      title="Click to animate rakit matrix"
    >
      <svg
        className={`${svgSizes[size]} transition-transform duration-300 group-hover:scale-105 ${
          isAnimating ? 'animate-pulse' : ''
        }`}
        viewBox="0 0 100 100"
        role="img"
        aria-label="Modular Matrix Logo"
      >
        <g stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" className="text-slate-300 opacity-60">
          <line x1="20" y1="0" x2="20" y2="100" />
          <line x1="40" y1="0" x2="40" y2="100" />
          <line x1="60" y1="0" x2="60" y2="100" />
          <line x1="80" y1="0" x2="80" y2="100" />
          <line x1="0" y1="20" x2="100" y2="20" />
          <line x1="0" y1="40" x2="100" y2="40" />
          <line x1="0" y1="60" x2="100" y2="60" />
          <line x1="0" y1="80" x2="100" y2="80" />
        </g>

        {/* Left Column Spine */}
        <rect fill="#0F172A" x="20" y="20" width="16" height="16" rx="2.5" />
        <rect fill="#0F172A" x="20" y="40" width="16" height="16" rx="2.5" />
        <rect fill="#0F172A" x="20" y="60" width="16" height="16" rx="2.5" />

        {/* Header Bar */}
        <rect fill="#0F172A" x="40" y="20" width="16" height="16" rx="2.5" />
        <rect fill="#0F172A" x="60" y="20" width="16" height="16" rx="2.5" />

        {/* Center Emerald Accent Node */}
        <rect
          fill="#059669"
          className="transition-transform duration-300 group-hover:scale-110 origin-center"
          x="40"
          y="40"
          width="16"
          height="16"
          rx="3"
        />

        {/* Outer Loop & Anchor */}
        <rect fill="#0F172A" x="60" y="40" width="16" height="16" rx="2.5" />
        <rect fill="#0F172A" x="60" y="60" width="16" height="16" rx="2.5" />
      </svg>

      {showWordmark && (
        <span className={`font-display font-bold tracking-tight text-slate-900 ${textSizes[size]}`}>
          rakit<span className="text-emerald-600">.</span>
        </span>
      )}
    </div>
  );
}
