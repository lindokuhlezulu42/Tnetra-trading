import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Handshake, CheckCircle } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'Enhancing our services and our clients\' identity by providing excellent and competitive professional services, while we continue to grow and make an impact in the printing industry.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To become one of the leading design and printing companies in the industry, creating a home for creativity and enthusiasm in a safe working environment for the people of South Africa.',
  },
  {
    icon: Handshake,
    title: 'Our Values',
    text: 'We strive to fulfill our customers\' needs with superior quality and exceptional marketing experience, while maintaining the brand integrity.',
  },
];

const approach = [
  'Deliver projects on time and within budget',
  'Dedicated client service team for every project',
  'Latest technology and design expertise',
  'Pro-active management and experienced professionals',
  'Customer satisfaction as our top priority',
  'Continuous staff training and development',
];

export default function About() {
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
            Since 2016
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/70 max-w-xl mx-auto"
          >
            A team of passionate designers, creative thinkers, and marketing experts.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Who We Are</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Your One-Stop Design & Printing Partner
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Tnetra Trading (Pty) Ltd is a one-stop service provider offering a full range of printing services and customized solutions to a diverse set of clients across all business segments.
                </p>
                <p>
                  We offer the best services in printing, designing, and art technology solutions. We believe in creating value for our customers with an efficient, committed and motivated team trained to proficiently handle the latest and best technology.
                </p>
                <p>
                  From business cards and brochures to wall banners and everything in between, our designers have the experience and creativity to turn your ideas into reality.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-7xl font-bold text-accent">10</p>
                  <p className="text-xl font-semibold text-foreground mt-2">Years</p>
                  <p className="text-muted-foreground mt-1">of Excellence</p>
                  <p className="text-sm text-muted-foreground mt-1">2016 – 2026</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Our Approach</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How We Work</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {approach.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-4"
              >
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}