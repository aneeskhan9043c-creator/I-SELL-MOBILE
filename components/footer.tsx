import React from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, ShieldCheck, ArrowUpRight, Clock } from "lucide-react";

// Official Authentic TikTok Vector Icon
const OfficialTikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.901 2.88 2.896 2.896 0 0 1-2.892-2.897 2.896 2.896 0 0 1 2.892-2.887c.287 0 .563.047.822.133V9.39a6.32 6.32 0 0 0-.822-.054 6.338 6.338 0 0 0-6.336 6.336 6.338 6.338 0 0 0 6.336 6.336 6.338 6.338 0 0 0 6.336-6.336V8.924a8.21 8.21 0 0 0 4.78 1.517V6.992a4.816 4.816 0 0 1-1.002-.306z"/>
  </svg>
);

// Official Authentic WhatsApp Vector Icon
const OfficialWhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.834 11.834 0 005.71 1.467h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export function HoverFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#08090d] text-zinc-100 border-t border-zinc-900 font-sans transition-colors duration-200 overflow-hidden">
      {/* Top High-End Typography Banner for iSELL MOBILE */}
      <div className="border-b border-zinc-900 bg-zinc-950/80 py-8 sm:py-10 px-4 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500 block mb-1">
              Official Store &amp; Certified Stock
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-none">
              iSELL <span className="text-zinc-600 font-light">MOBILE</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 px-3.5 py-2 rounded-full shadow-xs w-fit">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>100% Genuine Imported Stock • 7 Days Replacement Warranty</span>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand Bio & Values (4 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col justify-between space-y-4"
          >
            <div>
              <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
                Quetta&apos;s premier destination for original Japanese &amp; global flagship mobile kits. Tested hardware, transparent condition ratings, and verified nationwide delivery across Pakistan.
              </p>
            </div>

            {/* Quick Badge */}
            <div className="flex items-center gap-3 pt-2 text-xs text-zinc-500 font-medium">
              <span className="inline-flex items-center gap-1.5 text-zinc-300 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                In Stock Daily
              </span>
              <span>•</span>
              <span>Shop D18 Civic Tower</span>
            </div>
          </motion.div>

          {/* Quick Categories (3 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 mb-4">
              Featured Devices
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-zinc-400">
              <li>
                <a href="#catalog" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Sony Xperia Series</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500" />
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Apple iPhone Stock</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500" />
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>OnePlus Flagships</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500" />
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>iPads &amp; Gaming Tablets</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Store Location & Timings (2 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 mb-4">
              Store Timings
            </h3>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-zinc-300 text-xs">Mon – Sat</p>
                  <p className="text-xs text-zinc-500">11:00 AM – 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed text-zinc-500">
                  Art School Road, Quetta
                </p>
              </div>
            </div>
          </motion.div>

          {/* Authentic Contact & Socials (3 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 flex flex-col space-y-3"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 mb-1">
              Direct Contact
            </h3>
            
            {/* Authentic WhatsApp Button */}
            <a
              href="https://wa.me/923330952423"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-emerald-950/40 border border-zinc-800 hover:border-emerald-500/50 transition-all text-sm text-zinc-300 hover:text-emerald-400 font-semibold"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-md bg-[#25D366] text-white shrink-0 shadow-xs">
                  <OfficialWhatsAppIcon className="w-4 h-4" />
                </div>
                <span>WhatsApp Order</span>
              </div>
              <span className="text-xs text-zinc-500 group-hover:text-emerald-500 font-mono">+92 333 0952423</span>
            </a>

            {/* Authentic TikTok Button */}
            <a
              href="https://www.tiktok.com/@isellmobiles"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all text-sm text-zinc-300 hover:text-white font-semibold"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-md bg-black text-white shrink-0 shadow-xs">
                  <OfficialTikTokIcon className="w-4 h-4" />
                </div>
                <span>Follow on TikTok</span>
              </div>
              <span className="text-xs text-zinc-500 group-hover:text-zinc-400 font-mono">@isellmobiles</span>
            </a>
          </motion.div>

        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-zinc-900 bg-black py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-zinc-600">
          <p>© {currentYear} <span className="font-semibold text-zinc-400">iSELL MOBILE</span>. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Civic Tower, Quetta
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
