import React from 'react';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import StatsBar from '../components/StatsBar';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <StatsBar />
      <CTASection />
    </>
  );
}