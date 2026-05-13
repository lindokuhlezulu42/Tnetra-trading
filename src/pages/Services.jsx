import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Palette, Printer, PenTool, Car, Monitor, Gift,
  FileText, Layout, Image, Layers, Award, ArrowRight
} from 'lucide-react';

const serviceCategories = [
  {
    title: 'Graphic Design Services',
    icon: Palette,
    description: 'Creative visual solutions for your brand identity and marketing materials.',
    items: [
      'Corporate Logos', 'Business Cards', 'Letterheads', 'Brochure Design',
      'Flyers & Posters', 'Cover Designs', 'Magazines & Publications',
      'Complement Slips', 'Calendars & Diaries'
    ]
  },
  {
    title: 'Large Format Printing',
    icon: Printer,
    description: 'High-impact, large-scale prints for maximum visibility.',
    items: [
      'Banners & Flex Signs', 'Billboards', 'Vinyl Prints', 'Floor Graphics',
      'One Way Vision', 'Duratrans', 'Wall Branding', 'Light Box Graphics',
      'Hoardings & Outdoor Signage'
    ]
  },
  {
    title: 'Corporate Branding',
    icon: PenTool,
    description: 'Complete brand strategy and identity solutions for your business.',
    items: [
      'Brand Strategy', 'Brand Management', 'Brand Custodianship',
      'Corporate Identity Design', 'Name Generation', 'Point-of-Sale Design',
      'Company Profiles', 'Promotional Collateral'
    ]
  },
  {
    title: 'Vehicle Branding',
    icon: Car,
    description: 'Turn your vehicles into moving advertisements.',
    items: [
      'Full Vehicle Wraps', 'Partial Wraps', 'Vehicle Graphics',
      'Fleet Branding', 'Magnet Stickers', 'Window Graphics'
    ]
  },
  {
    title: 'Website Design',
    icon: Monitor,
    description: 'Modern, responsive websites to grow your online presence.',
    items: [
      'Website Design & Development', 'Website Management',
      'Responsive Design', 'Business Websites', 'Portfolio Sites'
    ]
  },
  {
    title: 'T-Shirts, Branding & Gifting',
    icon: Gift,
    description: 'Branded apparel and promotional merchandise.',
    items: [
      'T-Shirt Printing', 'Embroidery', 'Branded Pens',
      'Branded Cups & Mugs', 'Caps & Beanies', 'Corporate Gifts',
      'School Uniforms', 'Event Merchandise'
    ]
  },
  {
    title: 'Document Printing',
    icon: FileText,
    description: 'Professional document printing and finishing services.',
    items: [
      'Business Cards', 'Flyers & Brochures', 'Company Profiles',
      'Branded Gifts', 'Invoices & Quotations', 'Letterheads',
      'Books & Forms', 'Newsletters'
    ]
  },
  {
    title: 'Events Stationery',
    icon: Layout,
    description: 'Custom stationery and decor for your special events.',
    items: [
      'Welcome Boards', 'Programs', 'Dance Floor Stickers',
      'Table Numbers', 'Selfie Boards', 'Seating Plans',
      'Events Decor', 'Tents & Equipment Hire'
    ]
  },
];

export default function Services() {
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
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/70 max-w-xl mx-auto"
          >
            Comprehensive design, printing and branding solutions tailored to your business needs.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 }}
                className="group bg-card rounded-xl border border-border p-8 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {category.items.map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Something Custom?
          </h2>
          <p className="text-muted-foreground mb-8">
            Don't see exactly what you need? We offer custom solutions. Reach out and let's discuss your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-all hover:gap-3"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}