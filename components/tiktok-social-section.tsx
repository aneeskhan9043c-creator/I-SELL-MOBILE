import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import shopLogo from '@/src/assets/images/shop_logo_v2_1788976801482.jpg';

// Official TikTok SVG Icon
const TikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.901 2.88 2.896 2.896 0 0 1-2.892-2.897 2.896 2.896 0 0 1 2.892-2.887c.287 0 .563.047.822.133V9.39a6.32 6.32 0 0 0-.822-.054 6.338 6.338 0 0 0-6.336 6.336 6.338 6.338 0 0 0 6.336 6.336 6.338 6.338 0 0 0 6.336-6.336V8.924a8.21 8.21 0 0 0 4.78 1.517V6.992a4.816 4.816 0 0 1-1.002-.306z"/>
  </svg>
);

// Official WhatsApp SVG Icon
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.834 11.834 0 005.71 1.467h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Organic SVG Leaf Component
const LeafShape = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M28 4C28 4 16 6 10 16C4 26 4 28 4 28C4 28 8 27 16 20C24 13 28 4 28 4Z"
      fill="currentColor"
    />
    <path
      d="M4 28C8 24 15.5 16.5 28 4"
      stroke="rgba(255, 255, 255, 0.35)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

// Advanced Floating Leaves & Airy Particle Effect
const FloatingLeavesAndParticles = () => {
  // Leaf items with realistic sway & drift physics
  const leaves = React.useMemo(() => {
    return Array.from({ length: 22 }).map((_, i) => {
      const isBlurredBg = i % 3 === 0;
      const size = isBlurredBg ? 28 + (i % 5) * 6 : 14 + (i % 6) * 4;
      return {
        id: `leaf-${i}`,
        left: `${(i * 4.7 + 2) % 100}%`,
        duration: 18 + (i % 7) * 3,
        delay: (i % 8) * 1.8,
        size,
        blur: isBlurredBg ? 'blur(3px)' : 'blur(0px)',
        opacity: isBlurredBg ? 0.25 : 0.45,
        swayAmount: 30 + (i % 4) * 20,
        rotationStart: (i * 45) % 360,
        rotationEnd: ((i * 45) % 360) + 360 * (i % 2 === 0 ? 1 : -1),
        colorClass: i % 2 === 0 
          ? 'text-emerald-400/60 dark:text-emerald-400/50' 
          : 'text-teal-300/50 dark:text-teal-300/40',
      };
    });
  }, []);

  // Soft luminous air particles
  const particles = React.useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: `particle-${i}`,
      left: `${(i * 7 + 3) % 100}%`,
      bottom: `${(i * 6) % 80}%`,
      duration: 10 + (i % 5) * 2,
      delay: i * 0.7,
      size: 3 + (i % 3) * 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Drifting Leaves Layer */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className={`absolute top-[-8%] ${leaf.colorClass}`}
          style={{
            left: leaf.left,
            width: leaf.size,
            height: leaf.size,
            filter: leaf.blur,
            opacity: leaf.opacity,
          }}
          animate={{
            y: ['0vh', '115vh'],
            x: [
              '0px',
              `${leaf.swayAmount}px`,
              `-${leaf.swayAmount}px`,
              '0px'
            ],
            rotate: [leaf.rotationStart, leaf.rotationEnd],
          }}
          transition={{
            y: {
              duration: leaf.duration,
              repeat: Infinity,
              delay: leaf.delay,
              ease: 'linear',
            },
            x: {
              duration: leaf.duration * 0.4,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            },
            rotate: {
              duration: leaf.duration,
              repeat: Infinity,
              delay: leaf.delay,
              ease: 'easeInOut',
            },
          }}
        >
          <LeafShape className="w-full h-full drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]" />
        </motion.div>
      ))}

      {/* Luminous Glowing Air Specks */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-emerald-300/60 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export function TikTokSocialSection() {
  return (
    <section id="tiktok-section" className="relative w-full py-20 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden border-t border-zinc-800/80 shadow-2xl">
      {/* Animated Leaves & Particle Drift Background */}
      <FloatingLeavesAndParticles />
      
      {/* Soft Ambient Radial Light Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 flex flex-col items-center justify-center text-center">
        
        {/* Circular Profile Image (TikTok Style) */}
        <motion.div 
          className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6 group cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
        >
          {/* Subtle Outer Ring */}
          <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-cyan-500 via-zinc-700 to-emerald-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 rounded-full bg-zinc-950" />
          
          <img 
            src={shopLogo}
            alt="I Sell Mobiles Shop Profile"
            className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover object-center shadow-xl border-2 border-zinc-900"
          />
          
          {/* Live indicator bubble */}
          <div className="absolute bottom-2.5 right-2.5 bg-rose-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border-2 border-zinc-950 shadow-md flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            <span>Follow</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl flex flex-col items-center"
        >
          {/* Authentic Clean TikTok Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-white text-xs font-medium tracking-wide mb-3 shadow-xs">
            <TikTokIcon className="w-4 h-4 text-white" />
            <span className="font-bold text-zinc-100">TikTok Official Account</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            I Sell Mobiles
          </h2>
          
          {/* Authentic High-Trust Statement */}
          <p className="text-zinc-400 font-normal mb-8 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Stay connected with I Sell Mobiles on TikTok for daily new stock arrivals, unboxing videos, and exclusive customer deals directly from Shop D18, Civic Tower, Quetta.
          </p>

          {/* Clean Premium Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            {/* TikTok Button */}
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-black hover:bg-zinc-900 text-white font-bold rounded-xl px-7 py-3.5 h-auto text-sm gap-2.5 border border-zinc-800 shadow-md transition-all hover:border-zinc-700 hover:scale-[1.02]"
              onClick={() => window.open('https://www.tiktok.com/@isellmobiles', '_blank')}
            >
              <TikTokIcon className="w-5 h-5 text-white" />
              <span>Follow on TikTok</span>
            </Button>
            
            {/* WhatsApp Button */}
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl px-7 py-3.5 h-auto text-sm gap-2.5 border border-emerald-500/30 shadow-md transition-all hover:scale-[1.02]"
              onClick={() => window.open('https://wa.me/923330952423', '_blank')}
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Order on WhatsApp</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

