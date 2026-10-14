import React from 'react';
import { motion } from 'motion/react';
import { BRAND_INFO } from '../data/products';
import { Instagram, Send, ShieldCheck, Clock, MessageSquare, ArrowRight, Mail } from 'lucide-react';
import { LycanLogo } from './LycanLogo';

export const InstagramOrdering: React.FC = () => {
  const steps = [
    {
      num: "1",
      title: "Send Tech Pack or Mockup",
      desc: "DM us on Instagram @lycan_garments with your artwork file (AI, PSD, or PNG), desired silhouette, and target quantity."
    },
    {
      num: "2",
      title: "Instant Digital Proof & Pricing",
      desc: "Our production heads calculate your exact wholesale pricing and generate a 3D digital mockup within 2 to 4 hours."
    },
    {
      num: "3",
      title: "Sample Approval & Rapid Bulk Run",
      desc: "We stitch and ship a physical pre-production sample in 3–5 days. Once approved, bulk cutting and dispatch begins."
    }
  ];

  return (
    <section id="order-guide" className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      
      {/* Background Subtle Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none opacity-[0.02]">
        <LycanLogo variant="watermark" className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Card with Scroll Entrance */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs text-zinc-300 font-medium mb-6">
            <Instagram className="w-3.5 h-3.5 text-zinc-100" />
            <span>Official Direct Ordering Channel</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-heading max-w-2xl mx-auto leading-tight" style={{ textWrap: 'balance' }}>
            Fastest Route from Concept to Production
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Skip complex B2B procurement portals. Message our master pattern makers directly on Instagram for instant fabric swatches, custom sampling, and fast turnaround.
          </p>

          {/* Large Instagram Action CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] shadow-2xl"
            >
              <Instagram className="w-4 h-4 text-zinc-950" />
              <span>Connect on Instagram @lycan_garments</span>
              <ArrowRight className="w-4 h-4 text-zinc-950" />
            </a>

            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <Mail className="w-4 h-4 text-zinc-400" />
              <span>{BRAND_INFO.email}</span>
            </a>
          </div>

          {/* 3 Step Visual Flow with Staggered Entrance */}
          <div className="mt-16 pt-12 border-t border-zinc-800/80 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 shadow-md group"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 group-hover:border-white/30 flex items-center justify-center text-xs font-mono font-bold text-white mb-4 transition-colors">
                  0{step.num}
                </div>
                <h3 className="text-sm font-bold uppercase text-white font-heading">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Trust Guarantees */}
          <div className="mt-10 pt-8 border-t border-zinc-850 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-zinc-300" />
              <span>Verified Direct Factory Pricing</span>
            </div>
            <span aria-hidden="true" className="text-zinc-700 hidden sm:inline">·</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-zinc-300" />
              <span>Response Under 2 Hours</span>
            </div>
            <span aria-hidden="true" className="text-zinc-700 hidden sm:inline">·</span>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-zinc-300" />
              <span>Direct Chat with Production Engineers</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
