import React from 'react';
import { motion } from 'motion/react';
import { BRAND_INFO } from '../data/products';
import { Instagram, Printer, Sparkles, Tag, CheckCircle2 } from 'lucide-react';

export const CustomizationServices: React.FC = () => {
  const services = [
    {
      title: "Direct-To-Film (DTF) Industrial Printing",
      subtitle: "1200 DPI Micro-Pigment Heat Fusion",
      description: "Direct-To-Film prints provide unmatched color vibrancy, sharp gradient transitions, and high elastomeric flexibility. Bonded with industrial polyurethane adhesive, the print flexes with the fabric without hairline cracks or edge peeling.",
      specs: [
        "Photographic CMYK + High-Opacity White underbase",
        "Wash tested for 50+ machine cycles with zero cracking",
        "Soft-touch matte textured finish",
        "Works seamlessly on 100% cotton, polyester, and blends"
      ],
      idealFor: "Streetwear graphics, complex artwork, multi-color brand insignias"
    },
    {
      title: "High-Definition 360° All-Over Sublimation",
      subtitle: "Molecular Polymer Dye Fusion",
      description: "Disperse dyes are converted to gas under 200°C vacuum pressure, penetrating deeply into polyester filaments. Because the dye bonds at the molecular level, breathability and hand-feel remain 100% untouched.",
      specs: [
        "Edge-to-edge seam-spanning continuous printing",
        "Zero-hand feel – completely indistinguishable from raw fabric",
        "Will never peel, crack, or fade under heavy friction or UV",
        "Flawless color reproduction with infinite gradient depth"
      ],
      idealFor: "Motorsport jerseys, esports apparel, athletic team uniforms"
    },
    {
      title: "Custom Woven Neck Labels & Branded Packaging",
      subtitle: "Private Label Turnkey Finishing",
      description: "Complete private-label finishing to make your garments retail-ready for boutique stores and global e-commerce. We manufacture custom damask woven neck labels, tear-away care tags, branded hangtags, and frosted biodegradable polybags.",
      specs: [
        "High-density 50-denier damask woven neck labels",
        "Heat-seal tagless interior neck branding",
        "Custom branded barcode hangtags & safety pins",
        "Matte frosted zip-lock polybags with custom logo print"
      ],
      idealFor: "Independent fashion labels, creator brands, premium corporate drops"
    }
  ];

  return (
    <section id="customization" className="py-24 bg-zinc-900/40 border-t border-zinc-900 relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header with fade-in-up */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-800"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold mb-2">
              Bespoke Print & Finishing
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-heading">
              Customization Atelier
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Engineered print applications that uphold luxury streetwear longevity. We don't cut corners on ink curing or adhesive polymers.
          </p>
        </motion.div>

        {/* Feature Split Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Macro Craft Imagery with Scroll Reveal */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 relative shadow-xl"
          >
            <div className="aspect-[4/3] lg:aspect-auto lg:h-[340px] w-full relative overflow-hidden group">
              <img
                src="/src/assets/images/craft_dtf_sublimation_1791995087878.jpg"
                alt="LYCAN DTF Printing and Sublimation Craftsmanship"
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              <div className="absolute top-4 left-4 text-xs font-mono bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded border border-zinc-800 text-zinc-300">
                1200 DPI MACRO DENSITY
              </div>
            </div>

            <div className="p-6">
              <div className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2">
                Certified Print Guarantee
              </div>
              <h3 className="text-lg font-bold text-white font-heading">
                Zero Edge Lifting. High-Tensile Elasticity.
              </h3>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Every print undergoes elongation stress testing and hot-water wash verification before batch roll-out. Your graphics remain vivid and intact drop after drop.
              </p>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs text-zinc-400">Ready to test samples?</span>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-zinc-300 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>DM on Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Detailed Service Blocks with Staggered Scroll Entrance */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-600 transition-all duration-300 shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                      0{index + 1}. {service.subtitle}
                    </span>
                    <h4 className="text-lg font-bold text-white font-heading mt-1">
                      {service.title}
                    </h4>
                  </div>
                </div>

                <p className="mt-3 text-xs text-zinc-300 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-zinc-900">
                  {service.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-[11px] text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 text-[11px] text-zinc-500 font-mono">
                  Best For: <span className="text-zinc-400">{service.idealFor}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
