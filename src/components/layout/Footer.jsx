import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const LOGO_URL = "/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            {/* Fixed Logo - Visible Inside Circle */}
            <div className="mb-4">
              <div className="h-20 w-20 rounded-full bg-white p-2 shadow-lg flex items-center justify-center">
                <img 
                  src={LOGO_URL} 
                  alt="Tnetra Trading" 
                  loading="lazy" 
                  className="h-full w-full object-contain rounded-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="45" fill="%2300bcd4"/%3E%3Ctext x="50" y="55" font-size="24" font-weight="bold" fill="white" text-anchor="middle"%3ETNE%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mt-4">
              Professional & affordable Graphic Design, Website Design, Branding & Printing services for businesses across South Africa.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Contact', path: '/contact' },
              ].map(link => (
                <Link key={link.path} to={link.path} className="block text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <div className="space-y-3">
              {['Graphic Design', 'Large Format Printing', 'Corporate Branding', 'Vehicle Branding', 'Website Design'].map(service => (
                <p key={service} className="text-sm text-primary-foreground/70">{service}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+27658046358" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                065 804 6358
              </a>
              <a href="tel:+27797784855" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                079 778 4855
              </a>
              <a href="mailto:ramovhathivhi@gmail.com" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                ramovhathivhi@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                Stand 72, Mulenzhe Village, Mulenzhe, 0947
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Tnetra Trading (Pty) Ltd. Reg No. 2016/187320/07. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50">
            10 Year Anniversary · 2016–2026
          </p>
        </div>
      </div>
    </footer>
  );
}