import React, { useState, useEffect } from 'react';

interface LycanLogoProps {
  variant?: 'horizontal' | 'stacked' | 'emblem' | 'watermark' | 'badge';
  className?: string;
  theme?: 'dark' | 'light' | 'auto';
  showSubtitle?: boolean;
  size?: number | string;
}

export const LycanLogo: React.FC<LycanLogoProps> = ({
  variant = 'horizontal',
  className = '',
  theme = 'auto',
  showSubtitle = false,
  size,
}) => {
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('lycan_custom_logo');
      if (stored) {
        setCustomLogoUrl(stored);
      }
    } catch {
      // Ignore
    }

    const handleStorage = () => {
      try {
        const stored = localStorage.getItem('lycan_custom_logo');
        setCustomLogoUrl(stored || null);
      } catch {
        // Ignore
      }
    };

    window.addEventListener('lycan_logo_updated', handleStorage);
    return () => window.removeEventListener('lycan_logo_updated', handleStorage);
  }, []);

  // Primary Wolf Emblem Vector Geometry
  // Precision geometric vector wolf head with predatory angular brow, ears, and jaw
  const WolfVector = ({ emblemSize = 36, fillClass = "text-zinc-100" }: { emblemSize?: number | string; fillClass?: string }) => (
    <svg
      viewBox="0 0 120 120"
      width={emblemSize}
      height={emblemSize}
      className={`shrink-0 ${fillClass} transition-transform duration-300`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LYCAN Wolf Emblem"
    >
      {/* Outer Head Silhouette & Ears */}
      <polygon points="60,8 76,32 108,22 96,56 116,74 88,86 60,116 32,86 4,74 24,56 12,22 44,32" />
      {/* Forehead & Brow Facets */}
      <polygon points="60,34 72,50 84,48 60,82 36,48 48,50" fill={theme === 'light' ? '#09090b' : '#18181b'} />
      {/* Eyes & Upper Snout Highlights */}
      <polygon points="46,58 40,65 52,65" fill="#f4f4f5" />
      <polygon points="74,58 80,65 68,65" fill="#f4f4f5" />
      {/* Central Snout Ridge */}
      <polygon points="60,54 65,76 60,86 55,76" fill="#71717a" opacity="0.85" />
      {/* Fangs & Lower Jaw Definition */}
      <polygon points="60,94 54,86 66,86" fill="#f4f4f5" />
      <polygon points="50,88 47,94 53,91" fill="#f4f4f5" />
      <polygon points="70,88 73,94 67,91" fill="#f4f4f5" />
    </svg>
  );

  if (customLogoUrl) {
    if (variant === 'watermark') {
      return (
        <img
          src={customLogoUrl}
          alt="LYCAN Emblem Watermark"
          className={`object-contain pointer-events-none select-none opacity-5 grayscale ${className}`}
        />
      );
    }
    return (
      <div className={`flex items-center ${variant === 'stacked' || variant === 'badge' ? 'flex-col gap-2 text-center' : 'gap-3'} ${className}`}>
        <img
          src={customLogoUrl}
          alt="LYCAN Brand Logo"
          className="h-10 w-auto object-contain shrink-0"
        />
        {variant !== 'emblem' && (
          <div className="flex flex-col leading-none">
            <span className="font-heading font-black tracking-[0.25em] text-lg uppercase text-zinc-100">
              LYCAN
            </span>
            {showSubtitle && (
              <span className="text-[9px] uppercase tracking-[0.28em] text-zinc-400 mt-0.5">
                GARMENT ATELIER
              </span>
            )}
          </div>
        )}
      </div>
    );
  }

  if (variant === 'watermark') {
    return (
      <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full text-zinc-100 opacity-[0.035]"
          fill="currentColor"
        >
          <polygon points="60,8 76,32 108,22 96,56 116,74 88,86 60,116 32,86 4,74 24,56 12,22 44,32" />
        </svg>
      </div>
    );
  }

  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <WolfVector emblemSize={size || 36} />
      </div>
    );
  }

  if (variant === 'stacked' || variant === 'badge') {
    return (
      <div className={`flex flex-col items-center text-center gap-3.5 ${className}`}>
        <div className="relative p-4 sm:p-5 rounded-full bg-zinc-900/90 border-2 border-white shadow-2xl backdrop-blur-sm group-hover:border-zinc-200 transition-all duration-300 flex items-center justify-center aspect-square ring-4 ring-white/10">
          <WolfVector emblemSize={size || 56} fillClass="text-zinc-100" />
        </div>
        <div className="flex flex-col items-center">
          <span className="font-heading font-black tracking-[0.3em] text-2xl uppercase text-zinc-100">
            LYCAN
          </span>
          {showSubtitle && (
            <span className="text-[10px] tracking-[0.35em] text-zinc-400 uppercase font-medium mt-1">
              GARMENT MANUFACTURING
            </span>
          )}
        </div>
      </div>
    );
  }

  // Horizontal (Default Navbar & Headers)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-zinc-900 border-2 border-white text-zinc-100 shadow-inner group-hover:border-zinc-200 transition-colors shrink-0">
        <WolfVector emblemSize={size || 20} fillClass="text-zinc-100 group-hover:scale-105 transition-transform" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-heading font-extrabold tracking-[0.24em] text-lg uppercase text-zinc-100">
          LYCAN
        </span>
        {showSubtitle && (
          <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400 font-medium mt-0.5">
            GARMENT ATELIER
          </span>
        )}
      </div>
    </div>
  );
};
