import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    src: '/Blinds.jpeg',
    alt: 'Professional printing press',
  },
  {
    src: '/waterSupply.jpg',
    alt: 'Mangwele water branding billboard',
  },
  {
    src: '/CarWashBoard.jpeg',
    alt: 'Kharishume Carwash billboard',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${slides[current].src}')` }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
    </AnimatePresence>
  );
}