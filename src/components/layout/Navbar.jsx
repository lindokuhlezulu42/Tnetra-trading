import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_URL = "/logo.jpg";

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },  // ✅ Added Projects link
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Determine if we should use white text (home page + not scrolled)
  const isHomePage = location.pathname === '/';
  const useWhiteText = isHomePage && !scrolled;

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navbar Height */}
        <div className="flex items-center justify-between h-24">

          {/* ✅ LOGO */}
          <Link to="/" className="flex items-center ml-4 md:ml-8">
            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white p-2 shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <img
                src={LOGO_URL}
                alt="Tnetra Trading"
                loading="lazy" 
                className="h-full w-full object-contain rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="45" fill="%2300bcd4"/%3E%3Ctext x="50" y="55" font-size="24" font-weight="bold" fill="white" text-anchor="middle"%3ETNE%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : useWhiteText 
                      ? 'text-white' 
                      : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* ✅ Call Us button - Turquoise color */}
            <a
              href="tel:+27658046358"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#00BCD4', color: 'white' }}
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  role="menuitem"
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-accent/10 text-accent'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="tel:+27658046358"
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold"
                style={{ color: '#00BCD4' }}
              >
                <Phone className="w-4 h-4" />
                065 804 6358
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}