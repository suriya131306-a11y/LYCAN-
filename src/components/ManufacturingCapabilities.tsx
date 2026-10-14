import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ShieldAlert, Cpu, Sparkles, Scale, Gauge } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export const ManufacturingCapabilities: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Yarn Selection & Compact Knitting",
      desc: "We source premium long-staple combed cotton yarns and micro-denier poly filaments. Bio-polishing removes surface fuzz before knitting for an ultra-clean canvas."
    },
    {
      num: "02",
      title: "Laser Pattern Grading & Cut",
      desc: "Precision CAD pattern grading ensures consistent sizing across XS to 4XL. Automated cutting tables eliminate millimeter skew across sleeves, collars, and body lengths."
    },
    {
      num: "03",
      title: "Heavyweight Twin-Needle Assembly",
      desc: "Assembled with industrial 4-thread overlock and twin-needle hems. Lycra-reinforced collar ribs prevent distortion even under heavy streetwear wear."
    },
    {
      num: "04",
      title: "Engineered Print Curing & Heat Press",
      desc: "DTF transfers and sublimation dyes are cured in tunnel dryers and pneumatic heat presses at exact temperature curves for permanent molecular bonding."
    },
    {
      num: "05",
      title: "100% End-Line Quality Inspection",
      desc: "Every single piece is scrutinized for dimensional tolerance, seam tension, print registration, and loose threads before custom folding and polybagging."
    }
  ];

  const comparisons = [
    {
      parameter: "Fabric Weight & Hand Feel",
      standard: "140–160 GSM lightweight semi-translucent jersey",
      lycan: "180–300 GSM sculptural heavyweight combed compact cotton"
    },
    {
      parameter: "Neckband Ribbing Integrity",
      standard: "Stretches out into 'bacon collar' after 3–5 washes",
      lycan: "High-density 1x1 Lycra ribbed collar maintains crisp shape permanently"
    },
    {
      parameter: "Print Longevity",
      standard: "Cheap vinyl/screen ink cracks or peels after 10 washes",
      lycan: "Industrial DTF with elastomeric polyurethane powder; wash-tested 50+ cycles"
    },
    {
      parameter: "Shrinkage & Torque Control",
      standard: "5% to 8% uncontrolled shrinkage and twisted side seams",
      lycan: "Pre-shrunk bio-wash fabric with <2% residual dimensional variance"
    },
    {
      parameter: "Minimum Order Flexibility",
      standard: "500–1,000 pcs rigid MOQ per colorway",
      lycan: "Accessible 50 pcs MOQ per design for agile brand growth & capsule drops"
    }
  ];

  return (
    <section id="manufacturing" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with fade-in-up */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-900"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold mb-2">
              Industrial Discipline
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-heading">
              Manufacturing Capabilities
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Built from the ground up for ambitious streetwear labels, athletic teams, and enterprise clients who demand unyielding garment integrity.
          </p>
        </motion.div>

        {/* 5-Stage Production Workflow */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-500 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl group"
            >
              <div>
                <div className="text-xl font-black font-mono text-zinc-500 group-hover:text-zinc-200 transition-colors mb-2">
                  {step.num}
                </div>
                <h3 className="text-sm font-bold text-white font-heading">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Matrix: Standard Fast Fashion vs LYCAN Spec */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 overflow-hidden shadow-xl"
        >
          <div className="p-6 sm:p-8 border-b border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                Technical Benchmark
              </div>
              <h3 className="text-xl font-bold uppercase text-white font-heading mt-1">
                Standard Commercial T-Shirts vs. LYCAN Industrial Spec
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              5-Point Quality Assurance Standard
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-zinc-950 text-zinc-400 font-medium uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 w-1/4">Specification Factor</th>
                  <th className="px-6 py-4 w-3/8 text-zinc-500">Generic Mass Manufacturer</th>
                  <th className="px-6 py-4 w-3/8 text-white font-bold bg-zinc-900/50">LYCAN Garments Atelier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80 text-zinc-300">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-zinc-200">
                      {row.parameter}
                    </td>
                    <td className="px-6 py-4 text-zinc-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                        <span>{row.standard}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 bg-zinc-900/30 text-zinc-100 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-zinc-100 shrink-0 mt-0.5" />
                        <span>{row.lycan}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
