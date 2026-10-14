import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LycanLogo } from './LycanLogo';
import { Instagram, ArrowDownRight, Layers, ShieldCheck, Zap } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

interface HeroProps {
  onExploreClick: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenEstimator }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Parallax motion transforms (Compositor-only properties per guidelines)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);
  const heroY = useTransform(scrollYProgress, [0, 0.75], [0, 45]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const watermarkRotate = useTransform(scrollYProgress, [0, 1], [0, 12]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-zinc-950"
    >
      
      {/* Background Cinematic Image with Subtle Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        <img
          src="/src/assets/images/hero_garment_manufacturing_1791995086361.jpg"
          alt="LYCAN Garment Manufacturing Workshop Atelier"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.12]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />
        <div className="absolute inset-0 subtle-grid opacity-30" />
      </motion.div>

      {/* Giant Ambient Background Wolf Watermark with Scroll Drift */}
      <motion.div 
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0 hidden lg:block opacity-[0.035]"
        style={{ y: watermarkY, rotate: watermarkRotate }}
      >
        <LycanLogo variant="watermark" className="w-full h-full" />
      </motion.div>

      {/* Hero Content Container */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-12 flex-1 flex flex-col justify-center"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7">
            {/* Animated Brand Emblem Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md shadow-2xl">
                <div className="w-6 h-6 flex items-center justify-center text-zinc-100">
                  <LycanLogo variant="emblem" size={24} />
                </div>
                <div className="h-3 w-px bg-zinc-700" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-zinc-300">
                  Official Manufacturing Atelier
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.08] font-heading"
                style={{ textWrap: 'balance' }}
              >
                Heavyweight Standards. <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500">
                  Precision Apparel
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed"
              >
                Industrial-grade T-shirt manufacturing for streetwear labels, sports franchises, and creator capsule releases. From 240–300 GSM drop-shoulder boxy silhouettes to high-breathability dry-fit athletics and zero-crack DTF transfers.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-white text-zinc-950 font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all duration-200 hover:scale-[1.02] shadow-xl group"
              >
                <Instagram className="w-4 h-4 text-zinc-950" />
                <span>Order on Instagram</span>
                <ArrowDownRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-950 -rotate-90 group-hover:rotate-0 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 font-medium text-xs uppercase tracking-wider border border-zinc-800 transition-colors duration-200 backdrop-blur-sm"
              >
                <span>View 8 Product Lines</span>
              </button>

              <button
                type="button"
                onClick={onOpenEstimator}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-zinc-400 hover:text-white text-xs uppercase tracking-wider transition-colors"
              >
                <span>Quote Calculator</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Prominent Official LYCAN Badge Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="relative p-8 sm:p-10 rounded-3xl bg-zinc-950/70 border border-zinc-800 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center group hover:border-zinc-500 transition-all duration-300"
            >
              {/* Radial ambient glow behind emblem */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent rounded-3xl pointer-events-none" />
              
              <div className="relative">
                <LycanLogo variant="badge" size={120} />
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-800/80 w-full flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>EST. ATELIER</span>
                <span>BIO-WASHED HEAVYWEIGHT</span>
              </div>
            </motion.div>
          </div>
        </div>

      </motion.div>

      {/* KPI Proof Strip (Clean Full-Width Strip below hero with staggered scroll reveal) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 border-t border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-zinc-900">
            
            <div className="pt-2 md:pt-0 md:px-4 first:pl-0 flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0 group-hover:border-zinc-600 transition-colors">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white tabular-nums tracking-tight font-heading">
                  150 – 300 GSM
                </div>
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-medium">
                  Combed & Pique Knit
                </div>
              </div>
            </div>

            <div className="pt-2 md:pt-0 md:px-4 flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0 group-hover:border-zinc-600 transition-colors">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white tabular-nums tracking-tight font-heading">
                  Zero-Crack DTF
                </div>
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-medium">
                  1200 DPI Micro-Pigment
                </div>
              </div>
            </div>

            <div className="pt-2 md:pt-0 md:px-4 flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0 group-hover:border-zinc-600 transition-colors">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white tabular-nums tracking-tight font-heading">
                  50+ Wash Tested
                </div>
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-medium">
                  Pre-Shrunk Bio-Polish
                </div>
              </div>
            </div>

            <div className="pt-2 md:pt-0 md:px-4 flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0 group-hover:border-zinc-600 transition-colors">
                <span className="font-heading font-black text-xs text-zinc-300">50K</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white tabular-nums tracking-tight font-heading">
                  Monthly Capacity
                </div>
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-medium">
                  Direct Factory Scalability
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>

    </section>
  );
};
