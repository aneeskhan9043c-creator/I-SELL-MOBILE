import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation2, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LocationMapSection() {
  return (
    <section id="location-section" className="relative w-full py-24 bg-background border-t border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide mb-4"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Our Real Store Location</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-foreground tracking-tight mb-4"
          >
            Visit Our Shop in Quetta
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-base max-w-2xl"
          >
            Experience our premium gaming mobile stock and genuine kits in person. We invite you to visit our physical store for a complete hands-on review.
          </motion.p>
        </div>

        {/* Map & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Shop Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-lg flex flex-col gap-8 h-full"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Store Details</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Address</h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      Shop D18, Civic Tower,<br />
                      Art School Road,<br />
                      Quetta, Balochistan, Pakistan
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Opening Hours</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Monday - Saturday<br />
                      11:00 AM - 10:00 PM
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Contact Number</h4>
                    <p className="text-sm text-muted-foreground mt-1 font-medium">
                      +92 333 0952423
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-auto pt-6 border-t border-border">
              <Button 
                onClick={() => window.open('https://maps.google.com/?q=Civic+Tower,+Art+School+Road,+Quetta', '_blank')}
                className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold py-6 rounded-xl text-base gap-2"
              >
                <Navigation2 className="w-5 h-5" />
                Get Directions
              </Button>
            </div>
          </motion.div>

          {/* Real Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 lg:col-span-2 rounded-2xl overflow-hidden shadow-2xl border border-border bg-zinc-900 min-h-[400px] lg:min-h-[500px] relative group"
          >
            {/* The standard Google Maps iframe embed using query parameters for location */}
            <iframe 
              src="https://maps.google.com/maps?q=Civic%20Tower%2C%20Art%20School%20Road%2C%20Quetta&t=m&z=16&output=embed&iwloc=near" 
              className="absolute inset-0 w-full h-full border-0 grayscale-[0.2] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="I Sell Mobiles Location Map"
            />
            {/* Dark mode overlay blend */}
            <div className="absolute inset-0 pointer-events-none mix-blend-color opacity-30 bg-background dark:opacity-100 dark:bg-black/20 transition-opacity duration-300" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
