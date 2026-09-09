'use client';

import React from 'react';
import { motion } from 'motion/react';
import sonyXperia5Img from '../src/assets/images/regenerated_image_1788896533800.webp';
import oneplusBackImg from '../src/assets/images/oneplus_back_phone_1788896611661.jpg';
import iphoneBackImg from '../src/assets/images/iphone_back_phone_1788896635550.jpg';
import ipadBackImg from '../src/assets/images/ipad_back_tablet_1788896653767.jpg';
import lgSharpBackImg from '../src/assets/images/lg_sharp_back_1788896669172.jpg';

// Brand Folders List (Reference Vertical Photo Cards)
const BRANDS = [
  {
    id: 'sony-1',
    name: 'Sony Xperia 1',
    badge: 'Flagship 4K',
    count: '',
    image: '/images/sony_xperia_1.jpg',
  },
  {
    id: 'sony-5',
    name: 'Sony Xperia 5',
    badge: 'Compact Flagship',
    count: '',
    image: sonyXperia5Img,
  },
  {
    id: 'oneplus',
    name: 'OnePlus',
    badge: 'Gaming Deals',
    count: '',
    image: oneplusBackImg,
  },
  {
    id: 'apple',
    name: 'Apple iPhone',
    badge: 'Genuine Stock',
    count: '',
    image: iphoneBackImg,
  },
  {
    id: 'ipad',
    name: 'Apple iPad',
    badge: 'Retina & Pro',
    count: '',
    image: ipadBackImg,
  },
  {
    id: 'lg-sharp',
    name: 'LG & Sharp',
    badge: 'Budget Flagship',
    count: '',
    image: lgSharpBackImg,
  },
];

interface BrandCatalogProps {
  onSelectBrand?: (brandId: string) => void;
}

export function BrandCatalog({ onSelectBrand }: BrandCatalogProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  return (
    <section id="catalog" className="w-full bg-zinc-950 py-12 px-4 sm:px-6 text-white border-b border-zinc-900">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Select Brand Folder
          </h2>
          <p className="text-sm text-zinc-400 font-medium mt-1">
            Browse genuine imported stock by brand with verified checking warranty.
          </p>
        </motion.div>

        {/* BRAND FOLDERS GRID (Reference Vertical Visual Cards Layout) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {BRANDS.map((brand) => {
            return (
              <motion.button
                variants={itemVariants}
                key={brand.id}
                type="button"
                onClick={() => onSelectBrand?.(brand.id)}
                className="group relative flex aspect-[3/4] w-full flex-col justify-end overflow-hidden rounded-2xl border border-zinc-800 hover:border-emerald-500/80 text-left transition-all duration-300 shadow-lg hover:scale-[1.02] hover:ring-2 hover:ring-emerald-500/40 cursor-pointer"
              >
                {/* Full Background Card Image */}
                <img
                  src={brand.image}
                  alt={brand.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                {/* Bottom Overlay Content */}
                <div className="relative z-10 p-4 w-full">
                  <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                    {brand.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-semibold text-emerald-400">
                    Tap for Details & Specs
                  </p>

                  {/* Bottom Action Bar */}
                  <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3 text-xs font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <span>Open Page</span>
                    <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default BrandCatalog;
