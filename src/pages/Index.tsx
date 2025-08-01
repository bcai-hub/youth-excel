import React from 'react';
import HeroSection from '@/components/ui/hero-section';
import IntroSection from '@/components/ui/intro-section';
import WhyWeExistSection from '@/components/ui/why-we-exist-section';
import CoreFocusSection from '@/components/ui/core-focus-section';
import VisionMissionSection from '@/components/ui/vision-mission-section';
import ProblemApproachSection from '@/components/ui/problem-approach-section';
import CorePillarsSection from '@/components/ui/core-pillars-section';
import ProgramsSection from '@/components/ui/programs-section';
import ReachImpactSection from '@/components/ui/reach-impact-section';
import ImpactSection from '@/components/ui/impact-section';
import ContactSection from '@/components/ui/contact-section';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <WhyWeExistSection />
      <CoreFocusSection />
      <VisionMissionSection />
      <ProblemApproachSection />
      <CorePillarsSection />
      <ProgramsSection />
      <ReachImpactSection />
      <ImpactSection />
      <ContactSection />
    </div>
  );
};

export default Index;
