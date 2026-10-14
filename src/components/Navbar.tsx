import React, { useState } from 'react';
import { LycanLogo } from './LycanLogo';
import { Instagram, Menu, X } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

interface NavbarProps {
  onOpenEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single Brand Element with LYCAN Wolf Emblem & Wordmark */}
        <a 
          href="#home" 
          className="group flex items-center whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
          aria-label="LYCAN Home"
        >
          <LycanLogo variant="horizontal" />
        </a>

        {/* Zone 2: 4-5 Concise Single-Line Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a
            href="#collections"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 tracking-wide text-xs uppercase"
          >
            Collections
          </a>
          <a
            href="#customization"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 tracking-wide text-xs uppercase"
          >
            Customization
          </a>
          <a
            href="#manufacturing"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 tracking-wide text-xs uppercase"
          >
            Manufacturing
          </a>
          <a
            href="#estimator"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 tracking-wide text-xs uppercase"
          >
            Quote Estimator
          </a>
          <a
            href="#order-guide"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 tracking-wide text-xs uppercase"
          >
            Order Guide
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (Instagram Order / Direct Quote) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-zinc-100 hover:bg-white rounded-md transition-all duration-200 hover:scale-[1.02] shadow-sm whitespace-nowrap shrink-0"
          >
            <Instagram className="w-3.5 h-3.5 text-zinc-950" />
            <span>Order on Instagram</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <a
              href="#collections"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 text-xs uppercase tracking-wider"
            >
              Collections (8 Categories)
            </a>
            <a
              href="#customization"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 text-xs uppercase tracking-wider"
            >
              Customization & DTF Printing
            </a>
            <a
              href="#manufacturing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 text-xs uppercase tracking-wider"
            >
              Manufacturing & QC
            </a>
            <a
              href="#estimator"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator?.();
              }}
              className="px-3 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 text-xs uppercase tracking-wider"
            >
              Quote Estimator
            </a>
            <a
              href="#order-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 text-xs uppercase tracking-wider"
            >
              Instagram Order Guide
            </a>
          </div>

          <div className="pt-2 border-t border-zinc-900 flex flex-col gap-2">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-950 rounded-md"
            >
              <Instagram className="w-4 h-4" />
              <span>DM on Instagram @lycan_garments</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
