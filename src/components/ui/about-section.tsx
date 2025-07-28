import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const values = [
    "Spotlighting untapped voices and talents",
    "Building bridges between potential and opportunity",
    "Creating sustainable pathways for growth"
  ];

  return (
    <section className="py-section bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-card rounded-2xl overflow-hidden shadow-card">
              <img
                src="/lovable-uploads/a9dd3084-b7af-4ebe-825f-6acbc3c6adcd.png"
                alt="Youth community activities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-hover p-6 max-w-xs">
              <p className="font-heading font-bold text-2xl text-primary mb-1">1000+</p>
              <p className="text-body-text text-sm">Lives transformed through our programs</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-foreground">
                About YouthXcel
              </h2>
              <div className="space-y-4">
                <p className="text-body-text leading-relaxed">
                  YouthXcel is dedicated to empowering the next generation by creating equitable access to opportunities, skills development, and mentorship programs that transform lives.
                </p>
                <p className="text-body-text leading-relaxed">
                  We believe every young person deserves the chance to reach their full potential, regardless of their background or circumstances.
                </p>
              </div>
            </div>

            {/* Values List */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-green flex-shrink-0 mt-0.5" />
                  <p className="text-body-text">{value}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link to="/about">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 font-body font-semibold group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;