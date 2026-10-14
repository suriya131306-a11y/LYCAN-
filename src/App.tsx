/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { ProductCatalog } from './components/ProductCatalog';
import { CustomizationServices } from './components/CustomizationServices';
import { ManufacturingCapabilities } from './components/ManufacturingCapabilities';
import { OrderQuoteEstimator } from './components/OrderQuoteEstimator';
import { InstagramOrdering } from './components/InstagramOrdering';
import { Footer } from './components/Footer';
import { LogoManagerModal } from './components/LogoManagerModal';
import { FadeInUp } from './components/FadeInUp';
import { Instagram, Sliders, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from './data/products';

export default function App() {
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Buttery-smooth scroll progress bar at the very top
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowScrollTop(latest > 450);
    });
  }, [scrollY]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-zinc-100 selection:text-zinc-950 relative">
      
      {/* Precision Scroll Progress Indicator Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-zinc-500 via-white to-zinc-400 origin-left z-[60] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Top Bar Navigation */}
      <Navbar onOpenEstimator={() => scrollToSection('estimator')} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with Animated Logo Reveal & Parallax Background */}
        <Hero
          onExploreClick={() => scrollToSection('collections')}
          onOpenEstimator={() => scrollToSection('estimator')}
        />

        {/* 2. Brand Introduction & Heavyweight Standards */}
        <FadeInUp viewportMargin="-80px">
          <BrandIntro />
        </FadeInUp>

        {/* 3. Interactive Product Showcase (All 8 Categories) */}
        <FadeInUp viewportMargin="-80px">
          <ProductCatalog />
        </FadeInUp>

        {/* 4. Customization & DTF / Sublimation Services */}
        <FadeInUp viewportMargin="-80px">
          <CustomizationServices />
        </FadeInUp>

        {/* 5. Manufacturing Capabilities & QC Benchmark */}
        <FadeInUp viewportMargin="-80px">
          <ManufacturingCapabilities />
        </FadeInUp>

        {/* 6. Instant Quote Estimator & Pre-Filled DM Generator */}
        <FadeInUp viewportMargin="-80px">
          <OrderQuoteEstimator />
        </FadeInUp>

        {/* 7. Dedicated Instagram Direct Ordering Guide */}
        <FadeInUp viewportMargin="-80px">
          <InstagramOrdering />
        </FadeInUp>
      </main>

      {/* Footer with Clickable Email and Official Instagram Link */}
      <FadeInUp viewportMargin="-50px">
        <Footer />
      </FadeInUp>

      {/* Floating Action Controls */}
      <aside aria-label="Brand and quick order controls" className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        
        {/* Scroll To Top Button (Reveals smoothly upon scrolling) */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 10 }}
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-750 backdrop-blur-md shadow-xl transition-all duration-200 hover:scale-105"
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}

        <button
          type="button"
          onClick={() => setIsLogoModalOpen(true)}
          className="p-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-750 backdrop-blur-md shadow-xl transition-all duration-200 hover:scale-105"
          title="Inspect Official LYCAN Logo Assets"
          aria-label="Inspect Official LYCAN Logo Assets"
        >
          <Sliders className="w-4 h-4" />
        </button>

        <a
          href={BRAND_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 shadow-2xl transition-all duration-200 hover:scale-105 flex items-center justify-center group"
          title="Direct Order on Instagram @lycan_garments"
          aria-label="Direct Order on Instagram @lycan_garments"
        >
          <Instagram className="w-5 h-5 text-zinc-950" />
        </a>
      </aside>

      {/* Modal for Official Brand Logo Management */}
      <LogoManagerModal
        isOpen={isLogoModalOpen}
        onClose={() => setIsLogoModalOpen(false)}
      />

    </div>
  );
}
