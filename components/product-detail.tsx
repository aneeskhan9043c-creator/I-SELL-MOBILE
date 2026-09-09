'use client';

import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  Phone,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Tag,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PRODUCTS, ProductData } from '@/src/data/products';

interface ProductDetailProps {
  brandId: string;
  onBack: () => void;
}

export function ProductDetail({ brandId, onBack }: ProductDetailProps) {
  const [showFullSpecs, setShowFullSpecs] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Reset toggle when brand changes
    setShowFullSpecs(false);
  }, [brandId]);

  const product: ProductData | undefined = PRODUCTS[brandId];

  if (!product) {
    return (
      <div className="w-full text-center py-20 text-muted-foreground">
        <p>Product information not found.</p>
        <Button onClick={onBack} variant="outline" className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full bg-background text-foreground transition-colors py-6 sm:py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* Navigation & Breadcrumb Header */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
          <Button
            variant="outline"
            size="sm"
            onClick={onBack}
            className="gap-2 rounded-xl font-bold hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
            id="back-to-catalog-btn"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Brands</span>
          </Button>

          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Shop D18 • Civic Tower, Quetta</span>
          </div>
        </div>

        {/* Product Showcase Header */}
        <div className="mb-6 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            {product.title}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1 font-medium">
            {product.subtitle}
          </p>
        </div>

        {/* 1. Main Hero Image Container (Top Condition Displayed First) */}
        <div className="relative w-full overflow-hidden rounded-2xl border-2 border-zinc-300 dark:border-zinc-800 bg-zinc-950 shadow-xl mb-8 group">
          {/* Picture of Product */}
          <div className="relative aspect-4/3 sm:aspect-16/9 w-full flex items-center justify-center bg-zinc-900 overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 pointer-events-none" />
          </div>

          {/* Premium Price Tag overlaying the bottom right of the image */}
          <div className="absolute bottom-4 right-4 z-30">
            <div className="inline-flex flex-col items-end">
              <span className="text-xs font-bold text-emerald-300 drop-shadow-md">Starting from</span>
              <span className="text-3xl sm:text-4xl font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] tracking-tight">
                {product.startingPrice}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          
          {/* 2. Available Conditions & Pricing */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-foreground mb-4 flex items-center gap-2">
              <Tag className="h-6 w-6 text-emerald-500" />
              Available Conditions & Pricing
            </h2>
            <p className="text-sm text-muted-foreground mb-5 font-medium">
              Choose the condition that fits your budget. Every variant has the exact same hardware specs, only the physical or display condition differs.
            </p>

            <div className="space-y-4">
              {product.variants.map((variant, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col sm:flex-row items-stretch overflow-hidden rounded-2xl border-2 transition-colors shadow-sm ${
                    index === 0 
                      ? 'border-emerald-500/30 bg-emerald-500/5' 
                      : 'border-border bg-card hover:border-zinc-400 dark:hover:border-zinc-700'
                  }`}
                >
                  {/* Variant Image */}
                  <div className="w-full sm:w-48 shrink-0 bg-black aspect-video sm:aspect-square relative overflow-hidden">
                    <img
                      src={variant.image}
                      alt={variant.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Variant Details */}
                  <div className="flex-1 p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`${variant.gradeColor} text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wide shadow-sm`}>
                          {variant.grade}
                        </span>
                        <h3 className="font-bold text-foreground text-lg leading-tight">{variant.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground font-medium mb-3">
                        {variant.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                      <p className="text-2xl font-black text-foreground">{variant.price}</p>
                      <a
                        href={`https://wa.me/923330952423?text=${encodeURIComponent(variant.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-colors shrink-0 ${
                          index === 0 
                            ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md' 
                            : 'bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-black text-white shadow-sm'
                        }`}
                      >
                        <Phone className="h-4 w-4" />
                        <span>Order via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Simple Text Description */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-foreground mb-4">
              {product.descriptionTitle}
            </h2>
            
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-xs text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
              <p className="mb-4 text-foreground">
                {product.descriptionIntro}
              </p>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showFullSpecs ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {product.descriptionParagraphs.map((para, i) => (
                  <p key={i} className="mb-4">{para}</p>
                ))}
                
                <div className="flex items-center gap-2 mt-4 p-3 bg-accent/50 rounded-lg text-amber-600 dark:text-amber-400 font-bold text-xs">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>Shop D18 provides a complete 7-day checking warranty. Delivery is available all over Pakistan.</span>
                </div>
              </div>

              <button
                onClick={() => setShowFullSpecs(!showFullSpecs)}
                className="mt-2 flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors"
              >
                {showFullSpecs ? (
                  <><span>Show Less</span> <ChevronUp className="h-4 w-4" /></>
                ) : (
                  <><span>Read Full Specs</span> <ChevronDown className="h-4 w-4" /></>
                )}
              </button>
            </div>
          </div>

          {/* Bottom Back Button */}
          <div className="pt-4 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={onBack}
              className="gap-2 rounded-xl font-bold px-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to All Brand Folders</span>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}

