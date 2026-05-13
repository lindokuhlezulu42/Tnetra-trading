import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ArrowRight, FileImage, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const flyerImages = [
  { src: '/flyer1.jpg', title: 'Flyer Design 1', category: 'Flyers' },
  { src: '/flyer2.jpg', title: 'Flyer Design 2', category: 'Flyers' },
  { src: '/flyer3.jpg', title: 'Flyer Design 3', category: 'Flyers' },
  { src: '/flyer4.jpg', title: 'Flyer Design 4', category: 'Flyers' },
  { src: '/flyer5.jpg', title: 'Flyer Design 5', category: 'Flyers' },
  { src: '/flyer6.jpg', title: 'Flyer Design 6', category: 'Flyers' },
];

const logoImages = [
  { src: '/logo1.jpg', title: 'Logo Design 1', category: 'Logos' },
  { src: '/logo2.jpg', title: 'Logo Design 2', category: 'Logos' },
  { src: '/logo3.jpg', title: 'Logo Design 3', category: 'Logos' },
  { src: '/logo4.jpg', title: 'Logo Design 4', category: 'Logos' },
  { src: '/logo5.jpg', title: 'Logo Design 5', category: 'Logos' },
  { src: '/logo6.jpg', title: 'Logo Design 6', category: 'Logos' },
];

const projectImages = [
  { src: '/Blinds.jpeg', title: 'Window Blinds Installation', category: 'Interior' },
  { src: '/Boards.jpg', title: 'Corporate Signage Boards', category: 'Branding' },
  { src: '/CarBranding.jpg', title: 'Vehicle Branding Wrap', category: 'Branding' },
  { src: '/CarWashBoard.jpeg', title: 'Car Wash Signage', category: 'Signage' },
  { src: '/ClothTables.jpg', title: 'Event Table Styling', category: 'Events' },
  { src: '/RestaurantBoard.jpeg', title: 'Restaurant Menu Boards', category: 'Signage' },
  { src: '/waterSupply.jpg', title: 'Water Supply Solutions', category: 'Infrastructure' },
  { src: '/Thohoyandou.jpeg', title: 'Thohoyandou Community Project', category: 'Community' },
  { src: '/Pills.jpeg', title: 'Healthcare Packaging', category: 'Healthcare' },
  { src: '/book.jpeg', title: 'Educational Material Design', category: 'Print' },
  { src: '/Door.jpeg', title: 'Custom Door Installation', category: 'Construction' },
  { src: '/gazebo.jpeg', title: 'Outdoor Gazebo Build', category: 'Construction' },
  { src: '/Memory.jpeg', title: 'Memorial Installation', category: 'Community' },
  { src: '/Church.jpg', title: 'Church Renovation Project', category: 'Construction' },
  { src: '/Cars.jpg', title: 'Fleet Branding Services', category: 'Branding' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const tabs = [
  { id: 'projects', label: 'All Projects', icon: Eye },
  { id: 'flyers', label: 'Flyers', icon: FileImage },
  { id: 'logos', label: 'Logos', icon: Palette },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('projects');

  const currentImages =
    activeTab === 'flyers' ? flyerImages :
    activeTab === 'logos' ? logoImages :
    projectImages;

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-primary/90 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent text-sm font-semibold uppercase tracking-wider mb-3"
          >
            Our Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/70 max-w-xl mx-auto"
          >
            A curated showcase of our successful projects delivered with quality, precision, and dedication to excellence.
          </motion.p>
        </div>
      </section>

      {/* Tab Buttons */}
      <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-3">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    active
                      ? 'text-white shadow-md'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  style={active ? { background: 'linear-gradient(135deg, #1e3a5f, #00bcd4)' } : {}}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
        >
          {currentImages.map((project, index) => (
            <motion.article
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23f1f5f9' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%2364748b'%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover content - Simplified */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span
                  className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full mb-3 w-fit text-white"
                  style={{ background: '#00bcd4' }}
                >
                  {project.category}
                </span>
                <h3 className="text-white font-semibold text-lg">{project.title}</h3>
              </div>

              {/* Default caption */}
              <div className="p-4 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-foreground font-semibold mt-1 line-clamp-1">{project.title}</h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-all hover:gap-3"
          >
            Have a project in mind? Let's talk
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}