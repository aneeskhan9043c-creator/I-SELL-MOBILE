import React, { useState } from 'react';
import { Header } from '@/components/ui/header-1';
import { HeroSection } from '@/components/hero-section';
import { BrandCatalog } from '@/components/brand-catalog';
import { ProductDetail } from '@/components/product-detail';
import { TikTokSocialSection } from '@/components/tiktok-social-section';
import { LocationMapSection } from '@/components/location-map-section';
import { HoverFooter } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  Sun,
  Moon,
  ArrowDown,
  Sparkles,
  Layers,
  Code2,
  CheckCircle2,
} from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen w-full bg-background text-foreground transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      {/* Integrated Header-1 Component */}
      <Header />

      {/* Conditional View: Dedicated Brand Detail Page vs Main Catalog */}
      {selectedBrand ? (
        <ProductDetail brandId={selectedBrand} onBack={() => setSelectedBrand(null)} />
      ) : (
        <>
          {/* Hero Section Component */}
          <HeroSection />

          {/* Brand Catalog Section */}
          <BrandCatalog onSelectBrand={(id) => setSelectedBrand(id)} />

          {/* Social Section */}
          <TikTokSocialSection />

          {/* Real Google Map Location Section */}
          <LocationMapSection />

          {/* New Footer */}
          <HoverFooter />
        </>
      )}
    </div>
  );
}
