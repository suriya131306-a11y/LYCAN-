import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRODUCTS, BRAND_INFO } from '../data/products';
import { Instagram, Mail, Copy, Check, Calculator, Sparkles, Send } from 'lucide-react';

export const OrderQuoteEstimator: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>(PRODUCTS[0].id);
  const [quantity, setQuantity] = useState<number>(100);
  const [printOption, setPrintOption] = useState<string>('dtf-single');
  const [copied, setCopied] = useState<boolean>(false);

  const currentProduct = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];

  const printOptions = [
    { id: 'blank', label: 'Plain / Blanks (No Print)', desc: 'Pure unprinted garments ready for embroidery or screen print' },
    { id: 'dtf-single', label: 'Single DTF Placement', desc: 'Front chest or back graphic up to 12"x14"' },
    { id: 'dtf-multi', label: 'Multi-Placement DTF', desc: 'Front logo + Back graphic + Sleeve imprint' },
    { id: 'sublimation', label: 'Full-Bleed Sublimation', desc: 'Edge-to-edge 360° all-over photographic print' }
  ];

  const leadTimeEst = quantity <= 100 ? '5 - 7 Business Days' : quantity <= 500 ? '8 - 12 Business Days' : '12 - 18 Business Days';

  const orderInquirySummary = `🐺 LYCAN Garments Production Inquiry:
━━━━━━━━━━━━━━━━━━━━━
• Garment: ${currentProduct.name}
• Fabric/GSM: ${currentProduct.gsm}
• Quantity: ${quantity} units
• Customization: ${printOptions.find(o => o.id === printOption)?.label}
━━━━━━━━━━━━━━━━━━━━━
Please provide sample quote & turnaround confirmation. Thank you!`;

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(orderInquirySummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInstagramRedirect = () => {
    navigator.clipboard.writeText(orderInquirySummary);
    window.open(BRAND_INFO.instagramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="estimator" className="py-24 bg-zinc-900/50 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with fade-in-up */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-800"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold mb-2">
              Instant Order Estimator
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-heading">
              Estimate Your Production Run
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Configure your garment specifications, calculate estimated lead time, and generate a pre-formatted order inquiry for our Instagram production team.
          </p>
        </motion.div>

        {/* 2-Column Split: Estimator Controls & Live Inquiry Card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* 1. Garment Silhouette Selector */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800">
              <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-3">
                1. Select Garment Foundation (8 Categories)
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700/80 rounded-lg px-4 py-3 text-sm text-zinc-100 font-medium focus:outline-none focus:border-white transition-colors"
              >
                {PRODUCTS.map((prod) => (
                  <option key={prod.id} value={prod.id} className="bg-zinc-900 py-2">
                    {prod.name} ({prod.gsm})
                  </option>
                ))}
              </select>
              <div className="mt-2 text-xs text-zinc-400 flex items-center justify-between">
                <span>{currentProduct.fabric}</span>
                <span className="font-mono tabular-nums">MOQ {currentProduct.moq} pcs</span>
              </div>
            </div>

            {/* 2. Quantity Slider / Stepper */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-wider font-semibold text-zinc-300">
                  2. Production Quantity Tier
                </label>
                <span className="text-base font-bold font-mono tabular-nums text-white">
                  {quantity} Pieces
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="2500"
                step="25"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
              <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
                <button
                  type="button"
                  onClick={() => setQuantity(50)}
                  className={`px-2.5 py-1 rounded ${quantity === 50 ? 'bg-zinc-800 text-white' : 'hover:text-zinc-200'}`}
                >
                  50 (Sample Run)
                </button>
                <button
                  type="button"
                  onClick={() => setQuantity(100)}
                  className={`px-2.5 py-1 rounded ${quantity === 100 ? 'bg-zinc-800 text-white' : 'hover:text-zinc-200'}`}
                >
                  100 (Starter Drop)
                </button>
                <button
                  type="button"
                  onClick={() => setQuantity(500)}
                  className={`px-2.5 py-1 rounded ${quantity === 500 ? 'bg-zinc-800 text-white' : 'hover:text-zinc-200'}`}
                >
                  500 (Full Collection)
                </button>
                <button
                  type="button"
                  onClick={() => setQuantity(1000)}
                  className={`px-2.5 py-1 rounded ${quantity === 1000 ? 'bg-zinc-800 text-white' : 'hover:text-zinc-200'}`}
                >
                  1000+ (Enterprise)
                </button>
              </div>
            </div>

            {/* 3. Customization & Print Mode */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800">
              <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-3">
                3. Print & Customization Technology
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {printOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPrintOption(opt.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      printOption === opt.id
                        ? 'border-white bg-zinc-900 shadow-sm'
                        : 'border-zinc-800/80 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <div className="text-xs font-semibold text-white">
                      {opt.label}
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-1 leading-tight">
                      {opt.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Live Order Summary & Instagram Handoff Column */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 sticky top-24"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl relative overflow-hidden">
              <div className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-1">
                Production Preview
              </div>
              <h3 className="text-xl font-bold uppercase text-white font-heading">
                Ready-To-Send Inquiry
              </h3>

              <div className="mt-4 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 leading-relaxed whitespace-pre-wrap select-all">
                {orderInquirySummary}
              </div>

              {/* Turnaround Estimation Strip */}
              <div className="mt-5 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400">
                    Est. Production Lead Time
                  </div>
                  <div className="text-sm font-bold text-white tabular-nums font-heading">
                    {leadTimeEst}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400">
                    Target Volume
                  </div>
                  <div className="text-sm font-bold text-white tabular-nums font-heading">
                    {quantity} Units
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  onClick={handleInstagramRedirect}
                  className="w-full py-3.5 px-4 rounded-lg bg-white text-zinc-950 font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01]"
                >
                  <Instagram className="w-4 h-4 text-zinc-950" />
                  <span>Send via Instagram DM (@lycan_garments)</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleCopyInquiry}
                    className="py-2.5 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-zinc-100" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied to Clipboard' : 'Copy Inquiry'}</span>
                  </button>

                  <a
                    href={`mailto:${BRAND_INFO.email}?subject=LYCAN Production Order Inquiry - ${quantity} pcs&body=${encodeURIComponent(orderInquirySummary)}`}
                    className="py-2.5 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Direct</span>
                  </a>
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="text-[11px] text-zinc-500">
                  Direct inquiry to {BRAND_INFO.email} or DM @lycan_garments
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
