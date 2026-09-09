'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, ArrowDown, Sparkles, CheckCircle2, Zap } from 'lucide-react';
import { HandwritingText } from '@/components/ui/handwriting-text';
import heroBgImage from '@/src/assets/images/hero_dark_bg_1788982226019.jpg';
import sonyShowcaseImg from '@/src/assets/images/sony_1_pristine_1788974938467.jpg';

export function HeroSection() {
  return (
    <section className="relative w-full bg-[#08090d] text-white py-12 md:py-20 border-b border-zinc-800/80 overflow-hidden">
      {/* Background Image Layer with Ambient Vignette */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      >
        {/* High-res Smartphone Tech Background - Clearly visible with proper opacity */}
        <img
          src={heroBgImage}
          alt="Flagship smartphones background"
          loading="eager"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-right-top md:object-right opacity-60 md:opacity-75 transition-opacity duration-500"
        />

        {/* Left-to-right smooth gradient so text on the left is 100% crisp, while phones on the right remain visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090d] via-[#08090d]/85 md:via-[#08090d]/65 to-transparent" />
        
        {/* Top and bottom subtle blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090d]/80 via-transparent to-[#08090d]" />

        {/* Ambient Luminous Glow Accents */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Trust & CTAs (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            
            {/* Store Location Tag */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-md px-3.5 py-1.5 shadow-sm hover:bg-emerald-950/60 transition-colors cursor-default">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-emerald-300 uppercase">
                Shop D18 • Civic Tower, Quetta
              </span>
            </div>

            {/* Main Dynamic Headline */}
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
              Original Imported <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Mobile Kits
              </span>
              <div className="mt-2 block">
                <HandwritingText
                  words={[
                    '100% Genuine Stock',
                    '7 Days Checking Warranty',
                    'All Pakistan Delivery',
                    'Best Market Rates',
                  ]}
                  className="font-black text-2xl sm:text-4xl lg:text-5xl"
                  interval={3000}
                />
              </div>
            </h1>

            {/* Customer Trust Dialog */}
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl font-normal">
              Civic Tower Quetta se 100% original, non-repaired imported mobile kits. Har phone display, battery health, aur overall condition ke liye mukammal check shuda hai.
            </p>

            {/* Key Service Highlights */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md">
              <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-md p-3 shadow-xs hover:border-zinc-700 transition-colors cursor-default">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white tracking-tight">7-Day Checking Warranty</p>
                  <p className="text-[11px] text-zinc-400 font-medium">Checking &amp; replacement policy</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-md p-3 shadow-xs hover:border-zinc-700 transition-colors cursor-default">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Truck className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white tracking-tight">Insured Cargo Dispatch</p>
                  <p className="text-[11px] text-zinc-400 font-medium">Safe delivery across Pakistan</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Action & Direct Catalog Jump */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="https://wa.me/923330952423"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-900/40 hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5 active:scale-95 border border-white/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <svg className="h-5 w-5 fill-current drop-shadow-md relative z-10" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span className="relative z-10 tracking-wide text-white drop-shadow-md">Contact on WhatsApp</span>
              </a>

              <a
                href="#catalog"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700/90 hover:border-zinc-500 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white px-5 py-3.5 text-sm font-semibold backdrop-blur-md transition-all active:scale-95"
              >
                <span>View Stock Catalog</span>
                <ArrowDown className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Floating Flagship Stock Showcase Card (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
            className="lg:col-span-5 hidden sm:block"
          >
            <div className="relative mx-auto max-w-sm rounded-3xl p-1 bg-gradient-to-b from-zinc-700/40 via-zinc-800/30 to-zinc-900/60 shadow-2xl backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[22px] bg-[#0c0d12]/90 border border-zinc-800/80 p-5 hover:border-zinc-700 transition-colors">
                
                {/* Top Badge Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[11px] font-bold uppercase tracking-wider">
                    <Zap className="w-3 h-3" /> Featured Kit
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
                    10/10 Grade Pristine
                  </span>
                </div>

                {/* Showcase Image with Metallic Glow */}
                <div className="relative h-60 w-full rounded-xl overflow-hidden bg-black/60 border border-zinc-800/70 mb-4 group cursor-pointer" onClick={() => { document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  <img
                    src={sonyShowcaseImg}
                    alt="Sony Xperia Flagship Kit"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-zinc-400 font-medium">Sony Xperia 1 Mark Series</p>
                      <p className="text-sm font-black text-white">4K HDR OLED • Snapdragon</p>
                    </div>
                  </div>
                </div>

                {/* Quick Trust Checks */}
                <div className="space-y-1.5 border-t border-zinc-800/70 pt-3 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Tested Screen (Zero Lines / No Shadows)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>85%+ Certified Battery Health</span>
                  </div>
                </div>

                {/* Action in Card */}
                <a
                  href="#catalog"
                  className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-zinc-800/90 hover:bg-zinc-700/90 text-white text-xs font-bold border border-zinc-700/60 transition-colors active:scale-95"
                >
                  <span>Explore All 6 Mobile Categories</span>
                  <ArrowDown className="w-3.5 h-3.5 text-zinc-400" />
                </a>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;

