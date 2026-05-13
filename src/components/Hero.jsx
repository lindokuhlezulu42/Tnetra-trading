import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import HeroSlider from './HeroSlider';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start overflow-hidden">
      {/* Sliding background images */}
      <HeroSlider />
      {/* Navy overlay — heaviest top-left, fading right */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(110deg, rgba(18,42,72,0.97) 0%, rgba(18,42,72,0.88) 40%, rgba(18,42,72,0.55) 70%, rgba(18,42,72,0.2) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 pt-28 pb-20 w-full">
        <div className="max-w-lg">

          {/* Cyan pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: '#00bcd4', color: '#fff' }}
          >
            Professional Graphic Design & Printing Solutions
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight mb-5"
          >
            Design That<br />Speaks<br />Volumes
          </motion.h1>

          {/* Company name + description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-white/60 text-sm leading-relaxed mb-10 max-w-sm"
          >
            <span className="text-white/80 font-medium">TNETRA Trading (Pty) Ltd.</span> Professional graphic design, printing & branding solutions for businesses of all sizes across South Africa. Celebrating 10 years of excellence — 2016–2026.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-row gap-4 flex-wrap"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded transition-all hover:gap-3"
              style={{ background: '#00bcd4' }}
            >
              Explore Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            {/* ✅ WhatsApp Button - Opens WhatsApp with pre-filled message */}
           <a
  href="https://wa.me/277658046358?text=Hello%20TNETRA%20Trading!%20I'd%20like%20to%20inquire%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3 text-sm font-semibold rounded hover:bg-white/10 transition-colors"
>
  065 804 6358
</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}