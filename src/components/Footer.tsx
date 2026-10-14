import React from 'react';
import { LycanLogo } from './LycanLogo';
import { BRAND_INFO, PRODUCTS } from '../data/products';
import { Instagram, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-zinc-900">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <LycanLogo variant="stacked" className="items-start text-left" showSubtitle />
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mt-3">
              Professional garment manufacturer and custom apparel atelier. Delivering 180–300 GSM combed cotton, drop shoulder oversized cuts, athletic dry-fit, and certified industrial DTF printing.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-zinc-400" />
                <span>Instagram: {BRAND_INFO.instagramHandle}</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Email: {BRAND_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Product Directory */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-200 font-heading">
              Heavyweight Cotton
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#collections" className="hover:text-zinc-200 transition-colors">
                  100% Cotton Round Neck
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-zinc-200 transition-colors">
                  Cotton Polo Collar T-Shirts
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-zinc-200 transition-colors">
                  Drop Shoulder Oversized
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-zinc-200 transition-colors">
                  French Terry & Heavyweight Fleece
                </a>
              </li>
            </ul>
          </div>

          {/* Technical & Custom */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-200 font-heading">
              Technical & Print
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#collections" className="hover:text-zinc-200 transition-colors">
                  Polyester Dry-Fit Round Neck
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-zinc-200 transition-colors">
                  Polyester Dry-Fit Polo Collar
                </a>
              </li>
              <li>
                <a href="#customization" className="hover:text-zinc-200 transition-colors">
                  Customized Sublimation
                </a>
              </li>
              <li>
                <a href="#customization" className="hover:text-zinc-200 transition-colors">
                  Industrial DTF Printing
                </a>
              </li>
            </ul>
          </div>

          {/* Manufacturing Atelier */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-200 font-heading">
              Manufacturing Atelier
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#manufacturing" className="hover:text-zinc-200 transition-colors">
                  Yarn & Knit Inspection
                </a>
              </li>
              <li>
                <a href="#manufacturing" className="hover:text-zinc-200 transition-colors">
                  Pattern Grading & Cutting
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-zinc-200 transition-colors">
                  Instant Quote Estimator
                </a>
              </li>
              <li>
                <a href="#order-guide" className="hover:text-zinc-200 transition-colors">
                  Instagram Direct Handoff
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Quiet legal, single line, no fake widgets */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {BRAND_INFO.name} ({BRAND_INFO.legalName}). All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-zinc-300 transition-colors">
              Back to Top
            </a>
            <span>·</span>
            <a href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
              Instagram @lycan_garments
            </a>
            <span>·</span>
            <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-zinc-300 transition-colors">
              {BRAND_INFO.email}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
