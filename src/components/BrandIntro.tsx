import React from 'react';
import { motion } from 'motion/react';
import { LycanLogo } from './LycanLogo';
import { BRAND_INFO } from '../data/products';
import { Instagram } from 'lucide-react';

export const BrandIntro: React.FC = () => {
  const gsmTiers = [
    {
      weight: "180 GSM",
      name: "Lightweight Classic",
      desc: "Ideal for daily high-breathability streetwear drops and warm climate merchandise.",
      feel: "Silky, compact bio-polish"
    },
    {
      weight: "220 GSM",
      name: "Midweight Structured",
      desc: "Substantial body without stiffness. The preferred gauge for luxury retail polo knits.",
      feel: "Pique / single jersey balance"
    },
    {
      weight: "260 GSM",
      name: "Heavyweight Boxy",
      desc: "Sculptural silhouette that maintains its architectural shape away from the body.",
      feel: "Crisp, dense, no drape cling"
    },
    {
      weight: "300 GSM",
      name: "Ultra-Heavyweight Luxury",
      desc: "The pinnacle of luxury streetwear. Substantial hand feel built for enduring capsule drops.",
      feel: "Armor-weight interlock jersey"
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      
      {/* Background Watermark Wolf Silhouette with subtle hover/scroll presence */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.018]">
        <LycanLogo variant="watermark" className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Brand Story Split with Scroll-triggered Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs uppercase tracking-widest text-zinc-300 font-semibold shadow-sm">
              <LycanLogo variant="emblem" size={16} className="text-zinc-100" />
              <span>The LYCAN Standard</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-heading leading-tight" style={{ textWrap: 'balance' }}>
              We Don't Make Flimsy Merch. We Build Garment Foundations.
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Named after the legendary wolf emblem, LYCAN represents predatory precision, endurance, and uncompromising strength in textile construction. We bridge the gap between inaccessible high-minimum factories and low-grade print shops.
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Every roll of combed cotton is spun from premium long-staple fibers, enzyme bio-washed to eliminate pilling, and tailored with dense 1x1 Lycra ribbing. Whether you are building a boutique streetwear empire or producing performance team kits, our atelier treats your garments with architectural rigor.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] shadow-md"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow & Inquire @lycan_garments</span>
              </a>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-medium uppercase tracking-wider border border-zinc-800 transition-colors"
              >
                <span>Direct Contact: {BRAND_INFO.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Product Editorial Showcase with Staggered Parallax Lift */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-2 gap-4">
              
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 aspect-[3/4] relative group shadow-xl"
                >
                  <img
                    src="/src/assets/images/product_heavyweight_cotton_1791995086441.jpg"
                    alt="Heavyweight Combed Cotton T-Shirt"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-semibold text-white">
                    280 GSM Heavy Single Jersey
                  </div>
                </motion.div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                  <div className="text-xs font-bold text-white uppercase font-heading">
                    Zero Bacon-Neck Guarantee
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-1">
                    Twin-needle collar rib with spandex memory retention.
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                  <div className="text-xs font-bold text-white uppercase font-heading">
                    Reactive Eco Dyeing
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-1">
                    Deep pigment fastness that stays jet-black wash after wash.
                  </div>
                </div>

                <motion.div 
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 aspect-[3/4] relative group shadow-xl"
                >
                  <img
                    src="/src/assets/images/product_luxury_polo_1791995086174.jpg"
                    alt="Luxury Tailored Cotton Polo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-semibold text-white">
                    240 GSM Luxury Pique Polo
                  </div>
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* GSM Fabric Weight Matrix with Cascade Stagger on Scroll */}
        <div className="mt-20 pt-12 border-t border-zinc-900">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Fabric Engineering Tiers
            </span>
            <h3 className="text-2xl font-bold uppercase text-white font-heading mt-1">
              Select Your Exact GSM Density
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gsmTiers.map((tier, index) => (
              <motion.div
                key={tier.weight}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-600 transition-all duration-300 shadow-md group"
              >
                <div className="text-xl font-bold font-mono text-white tabular-nums group-hover:text-zinc-200 transition-colors">
                  {tier.weight}
                </div>
                <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mt-1">
                  {tier.name}
                </div>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {tier.desc}
                </p>
                <div className="mt-4 pt-3 border-t border-zinc-900 text-[11px] text-zinc-500">
                  Touch: <span className="text-zinc-300 font-medium">{tier.feel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
