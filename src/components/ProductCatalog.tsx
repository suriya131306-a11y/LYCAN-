import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS, ProductItem, BRAND_INFO } from '../data/products';
import { Instagram, ArrowUpRight, X, Check, Ruler, Sparkles, SlidersHorizontal } from 'lucide-react';

interface ProductCatalogProps {
  onSelectForQuote?: (product: ProductItem) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectForQuote }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  const [measurementUnit, setMeasurementUnit] = useState<'inches' | 'cm'>('inches');

  const categories = [
    'All',
    'Heavyweight Cotton',
    'Technical Dry-Fit',
    'Custom Sublimation',
    'Custom Printing'
  ];

  const filteredProducts = selectedFilter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedFilter);

  const handleCopyInquiry = (product: ProductItem) => {
    const text = `Hi LYCAN team! I would like to inquire about manufacturing the following:\n- Product: ${product.name}\n- Fabric/GSM: ${product.gsm}\n- Estimated Qty: ${product.moq} pcs+\nPlease share pricing & sample availability!`;
    navigator.clipboard.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  return (
    <section id="collections" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Editorial Header with fade-in-up */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-900"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold mb-2">
              Manufacturing Catalogue
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-heading">
              Curated Garment Silhouettes
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            All 8 core manufacturing foundations. Sourced from high-density compact yarns, engineered ribbing, and certified commercial printing technologies.
          </p>
        </motion.div>

        {/* Interactive Filter Tabs (Buttons with click handlers per constitution) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar"
        >
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900 rounded-lg border border-zinc-800/80">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap shrink-0 uppercase tracking-wider ${
                  selectedFilter === cat
                    ? 'bg-zinc-100 text-zinc-950 shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-xs text-zinc-400 ml-auto hidden sm:inline tabular-nums">
            Showing {filteredProducts.length} of {PRODUCTS.length} silhouettes
          </span>
        </motion.div>

        {/* Product Cards Grid (3 Columns Desktop, 2 Tablet, 1 Mobile) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between bg-zinc-900/60 border border-zinc-800/80 rounded-xl overflow-hidden hover:border-zinc-500 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <div>
                {/* Product Imagery */}
                <div 
                  className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 cursor-pointer"
                  onClick={() => {
                    setActiveProduct(product);
                    setSelectedColorIndex(0);
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Subtle Top Metadata Bar (Unboxed clean text) */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] text-zinc-300 bg-zinc-950/70 backdrop-blur-md px-3 py-1.5 rounded border border-zinc-800">
                    <span className="font-medium">{product.gsm}</span>
                    <span className="text-zinc-400 font-mono tabular-nums">MOQ {product.moq} pcs</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                      {product.tag}
                    </span>
                    <span className="text-xs text-zinc-400 group-hover:text-white flex items-center gap-1 transition-colors">
                      Specs & Sizing
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5">
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium mb-1">
                    {product.category}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors font-heading leading-snug">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Clean unboxed metadata with bullet separators */}
                  <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center gap-2 text-xs text-zinc-400">
                    <span>{product.leadTime} Lead</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate max-w-[180px]">{product.sizes.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Action Bar (Direct Order via Instagram per instruction) */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setActiveProduct(product);
                    setSelectedColorIndex(0);
                  }}
                  className="w-full py-2.5 px-3 rounded text-xs font-medium bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/60 transition-colors text-center"
                >
                  Tech Specs
                </button>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded text-xs font-semibold bg-zinc-100 hover:bg-white text-zinc-950 transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Order Now</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Tech Specs & Sizing Modal */}
      <AnimatePresence>
        {activeProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-zinc-100"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProduct(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-full sm:w-2/5 aspect-[4/3] rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 shrink-0">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                    {activeProduct.category}
                  </div>
                  <h3 className="text-2xl font-bold uppercase text-white font-heading mt-1">
                    {activeProduct.name}
                  </h3>
                  <div className="mt-2 text-xs font-medium text-zinc-300 bg-zinc-800/80 inline-block px-2.5 py-1 rounded">
                    Fabric Grade: {activeProduct.gsm} · {activeProduct.fabric}
                  </div>
                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    {activeProduct.description}
                  </p>
                </div>
              </div>

              {/* Technical Highlights */}
              <div className="mt-6 pt-6 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeProduct.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <Check className="w-4 h-4 text-zinc-100 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Colorways */}
              <div className="mt-6 pt-6 border-t border-zinc-800">
                <div className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3">
                  Available Color Palette
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {activeProduct.colors.map((color, idx) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColorIndex(idx)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs transition-all ${
                        selectedColorIndex === idx
                          ? 'border-white bg-zinc-800 text-white shadow-sm'
                          : 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-zinc-700"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizing Matrix */}
              <div className="mt-6 pt-6 border-t border-zinc-800">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-zinc-400">
                    <Ruler className="w-4 h-4 text-zinc-300" />
                    <span>Measurement Standard (Garment Flat Lay)</span>
                  </div>
                  <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded border border-zinc-800 text-xs">
                    <button
                      type="button"
                      onClick={() => setMeasurementUnit('inches')}
                      className={`px-2 py-0.5 rounded ${measurementUnit === 'inches' ? 'bg-zinc-800 text-white' : 'text-zinc-500'}`}
                    >
                      Inches
                    </button>
                    <button
                      type="button"
                      onClick={() => setMeasurementUnit('cm')}
                      className={`px-2 py-0.5 rounded ${measurementUnit === 'cm' ? 'bg-zinc-800 text-white' : 'text-zinc-500'}`}
                    >
                      CM
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-lg border border-zinc-800">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-zinc-950 text-zinc-400 font-medium uppercase tracking-wider">
                      <tr>
                        <th className="px-3 py-2">Size</th>
                        <th className="px-3 py-2">Chest Width</th>
                        <th className="px-3 py-2">Body Length</th>
                        <th className="px-3 py-2">Sleeve Length</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/80 font-mono tabular-nums text-zinc-300">
                      <tr>
                        <td className="px-3 py-2 font-semibold text-white">S</td>
                        <td className="px-3 py-2">{measurementUnit === 'inches' ? '38"' : '96 cm'}</td>
                        <td className="px-3 py-2">{measurementUnit === 'inches' ? '27"' : '68 cm'}</td>
                        <td className="px-3 py-2">{measurementUnit === 'inches' ? '8.0"' : '20 cm'}</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold text-white">M</td>
                        <td className="px-3 py-2">{measurementUnit === 'inches' ? '40"' : '101 cm'}</td>
                        <td className="px-3 py-2">{measurementUnit === 'inches' ? '28"' : '71 cm'}</td>
                        <td className="px-3 py-2">{measurementUnit === 'inches' ? '8.5"' : '21 cm'}</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold text-white">L</td>
                        <td className="px-3 py-2">{measurementUnit === 'inches' ? '42"' : '106 cm'}</td>
                        <td className="px-3 py-2">{measurementUnit === 'inches' ? '29"' : '73 cm'}</td>
                        <td className="px-3 py-2">{measurementUnit === 'inches' ? '9.0"' : '23 cm'}</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold text-white">XL</td>
                        <td className="px-3 py-2">{measurementUnit === 'inches' ? '44"' : '112 cm'}</td>
                        <td className="px-3 py-2">{measurementUnit === 'inches' ? '30"' : '76 cm'}</td>
                        <td className="px-3 py-2">{measurementUnit === 'inches' ? '9.5"' : '24 cm'}</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold text-white">2XL</td>
                        <td className="px-3 py-2">{measurementUnit === 'inches' ? '46"' : '117 cm'}</td>
                        <td className="px-3 py-2">{measurementUnit === 'inches' ? '31"' : '78 cm'}</td>
                        <td className="px-3 py-2">{measurementUnit === 'inches' ? '10.0"' : '25 cm'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Order Actions */}
              <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-zinc-400">
                  Minimum Order Quantity: <strong className="text-white tabular-nums">{activeProduct.moq} pieces</strong> per style
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => handleCopyInquiry(activeProduct)}
                    className="flex-1 sm:flex-initial py-2.5 px-4 text-xs font-medium rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
                  >
                    {copiedNotification ? "Inquiry Copied!" : "Copy Order Text"}
                  </button>

                  <a
                    href={BRAND_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-2.5 px-5 text-xs font-semibold uppercase tracking-wider rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 transition-colors shadow-lg"
                  >
                    <Instagram className="w-4 h-4 text-zinc-950" />
                    <span>Inquire via Instagram</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
