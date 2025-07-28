import React from 'react';
import HeroSection from '@/components/ui/hero-section';
import AboutSection from '@/components/ui/about-section';
import ProgramsSection from '@/components/ui/programs-section';
import ImpactSection from '@/components/ui/impact-section';
import ContactSection from '@/components/ui/contact-section';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <ContactSection />
    </div>
  );
};

export default Index;