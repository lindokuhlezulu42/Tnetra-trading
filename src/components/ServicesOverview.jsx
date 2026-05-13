import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Printer, PenTool, Car, Monitor, Gift, ArrowRight } from 'lucide-react';
import './ServicesOverview.css';

const services = [
  { icon: Palette, title: 'Graphic Design', desc: 'Logos, branding, corporate identity, brochures and promotional materials.' },
  { icon: Printer, title: 'Large Format Printing', desc: 'Banners, billboards, posters, flex signs and vinyl prints.' },
  { icon: PenTool, title: 'Corporate Branding', desc: 'Complete brand identity design, strategy, and management.' },
  { icon: Car, title: 'Vehicle Branding', desc: 'Eye-catching vehicle wraps and graphics for your fleet.' },
  { icon: Monitor, title: 'Website Design', desc: 'Modern, responsive websites designed to grow your business.' },
  { icon: Gift, title: 'T-Shirts & Gifting', desc: 'Branded apparel, promotional gifts, and embroidered items.' },
];

export default function ServicesOverview() {
  return (
    <section className="services-overview">
      <div className="services-overview__container">
        
        {/* Header */}
        <div className="services-overview__header">
          <p className="services-overview__subtitle">What We Do</p>
          <h2 className="services-overview__title">Our Services</h2>
          <p className="services-overview__description">
            From concept to completion, we deliver high-quality design and print solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-overview__grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={service.title} className="services-overview__card">
                <div className="services-overview__icon-wrapper">
                  <IconComponent className="services-overview__icon" />
                </div>
                <h3 className="services-overview__card-title">{service.title}</h3>
                <p className="services-overview__card-desc">{service.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="services-overview__footer">
          <Link to="/services" className="services-overview__link">
            View All Services
            <ArrowRight className="services-overview__link-icon" />
          </Link>
        </div>

      </div>
    </section>
  );
}