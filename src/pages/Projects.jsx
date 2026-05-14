import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ArrowRight, FileImage, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

// Relative paths work best for GitHub Pages subdirectories
const flyerImages = [
  { src: 'flyer1.jpg', title: 'Flyer Design 1', category: 'Flyers' },
  { src: 'flyer2.jpg', title: 'Flyer Design 2', category: 'Flyers' },
  { src: 'flyer3.jpg', title: 'Flyer Design 3', category: 'Flyers' },
  { src: 'flyer4.jpg', title: 'Flyer Design 4', category: 'Flyers' },
  { src: 'flyer5.jpg', title: 'Flyer Design 5', category: 'Flyers' },
  { src: 'flyer6.jpg', title: 'Flyer Design 6', category: 'Flyers' },
];

const logoImages = [
  { src: 'logo1.jpg', title: 'Logo Design 1', category: 'Logos' },
  { src: 'logo2.jpg', title: 'Logo Design 2', category: 'Logos' },
  { src: 'logo3.jpg', title: 'Logo Design 3', category: 'Logos' },
  { src: 'logo4.jpg', title: 'Logo Design 4', category: 'Logos' },
  { src: 'logo5.jpg', title: 'Logo Design 5', category: 'Logos' },
  { src: 'logo6.jpg', title: 'Logo Design 6', category: 'Logos' },
];

const projectImages = [
  { src: 'Blinds.jpeg', title: 'Window Blinds Installation', category: 'Interior' },
  { src: 'Boards.jpg', title: 'Corporate Signage Boards', category: 'Branding' },
  { src: 'CarBranding.jpg', title: 'Vehicle Branding Wrap', category: 'Branding' },
  { src: 'CarWashBoard.jpeg', title: 'Car Wash Signage', category: 'Signage' },
  { src: 'ClothTables.jpg', title: 'Event Table Styling', category: 'Events' },
  { src: 'RestaurantBoard.jpeg', title: 'Restaurant Menu Boards', category: 'Signage' },
  { src: 'waterSupply.jpg', title: 'Water Supply Solutions', category: 'Infrastructure' },
  { src: 'Thohoyandou.jpeg', title: 'Thohoyandou Community Project', category: 'Community' },
  { src: 'Pills.jpeg', title: 'Healthcare Packaging', category: 'Healthcare' },
  { src: 'book.jpeg', title: 'Educational Material Design', category: 'Print' },
  { src: 'Door.jpeg', title: 'Custom Door Installation', category: 'Construction' },
  { src: 'gazebo.jpeg', title: 'Outdoor Gazebo Build', category: 'Construction' },
  { src: 'Memory.jpeg', title: 'Memorial Installation', category: 'Community' },
  { src: 'Church.jpg', title: 'Church Renovation Project', category: 'Construction' },
  { src: 'Cars.jpg', title: 'Fleet Branding Services', category: 'Branding' },
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
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
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
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white"
          >
            Projects
          </motion.h1>
          <p className="mt-4 text-white/70">
            A showcase of our successful projects.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-20 z-30 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 py-3">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                    activeTab === tab.id
                      ? 'bg-cyan-500 text-white'
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentImages.map((project, index) => (
              <motion.article
                key={index}
                variants={item}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-2xl shadow-lg bg-white"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="font-semibold text-gray-900 mt-1">
                    {project.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-cyan-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-cyan-600 transition-colors"
          >
            Have a project in mind?
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}