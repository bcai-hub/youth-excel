import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, Lightbulb } from 'lucide-react';
import heroImage from "@/assets/youth-empowerment-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-section bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="font-heading font-bold text-foreground leading-tight">
                Empowering the Next Generation
              </h1>
              <p className="text-xl text-body-text leading-relaxed max-w-lg">
                YouthXcel connects youth with mentors, skills, and opportunities that transform lives and build futures.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 font-body font-semibold text-lg px-8 py-4 group"
                >
                  Join Us Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="font-body font-semibold text-lg px-8 py-4 border-2"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <p className="font-heading font-bold text-2xl text-foreground">500+</p>
                <p className="text-sm text-body-text">Youth Empowered</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <p className="font-heading font-bold text-2xl text-foreground">100+</p>
                <p className="text-sm text-body-text">Programs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <p className="font-heading font-bold text-2xl text-foreground">50+</p>
                <p className="text-sm text-body-text">Opportunities</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={heroImage}
                alt="Youth empowerment and innovation"
                className="w-full max-w-lg rounded-2xl shadow-hover object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;