import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-section__container">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cta-section__card"
        >
          {/* Decorative Glow */}
          <div className="cta-section__glow" />
          
          {/* Content */}
          <div className="cta-section__content">
            <h2 className="cta-section__title">
              Ready to Elevate Your Brand?
            </h2>
            <p className="cta-section__description">
              Let's bring your vision to life. Contact us today for a free consultation and quote.
            </p>
            <Link to="/contact" className="cta-section__button">
              Get Started Today
              <ArrowRight className="cta-section__button-icon" />
            </Link>
          </div>
          
        </motion.div>
        
      </div>
    </section>
  );
}