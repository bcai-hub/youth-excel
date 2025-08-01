import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
const AboutSection = () => {
  const values = ["We link them to real opportunities that open doors", "We connect them to pathways to gain real skills to prepare for life and dignified work", "We offer platforms to share their ideas, change-making journeys and lived experiences", "We provide the tools and support to grow their leadership and confidence"];
  return <section className="py-section bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-card rounded-2xl overflow-hidden shadow-card">
              <img src="/lovable-uploads/a9dd3084-b7af-4ebe-825f-6acbc3c6adcd.png" alt="Youth community activities" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-hover p-6 max-w-xs">
              <p className="font-heading font-bold text-2xl text-primary mb-1"></p>
              <p className="text-body-text text-sm">States reached across Nigeria</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-foreground">
                Who We Are
              </h2>
              <div className="space-y-4">
                <p className="text-body-text leading-relaxed">
                  YouthXcel is a youth empowerment organization helping young people, especially Africa's most marginalized, unlock their potential and thrive through equitable access to opportunity. We believe that with the right support, every young person can lead, innovate, and shape a better future for themselves and their communities.
                </p>
                <p className="text-body-text leading-relaxed">
                  We connect youth to life-changing opportunities, skills, mentorship, and supported pathways that equip them to grow with purpose, confidence, and agency. From education, skills, employment and career to leadership and innovation, we are bridging the gap between talent and access, spotlighting untapped voices, investing in solutions that matter, and building systems where no young person is left behind.
                </p>
                <p className="text-body-text leading-relaxed">
                  Rooted in Africa with a global outlook, YouthXcel is reimagining what it means to invest in youth, centering their realities, stories, and strengths while amplifying what's possible when youth are seen, supported, and equipped to lead.
                </p>
              </div>
            </div>

            {/* Values List */}
            <div className="space-y-4">
              {values.map((value, index) => <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-green flex-shrink-0 mt-0.5" />
                  <p className="text-body-text">{value}</p>
                </div>)}
            </div>

            {/* CTA Button */}
            <Link to="/about">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-body font-semibold group">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
