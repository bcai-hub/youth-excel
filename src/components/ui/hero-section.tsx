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
                Empowering Youth Through Opportunities That Transform.
              </h1>
              <p className="text-xl text-body-text leading-relaxed max-w-lg">
                We connect young people, especially those often excluded to the tools, pathways, and support they need to thrive, lead, and shape the future.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/solutions">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 font-body font-semibold text-lg px-8 py-4 group"
                >
                  Explore Our Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="font-body font-semibold text-lg px-8 py-4 border-2"
                >
                  Partner With Us
                </Button>
              </Link>
              <Link to="/solutions">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="font-body font-semibold text-lg px-8 py-4 border-2"
                >
                  Join a Program
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <p className="font-heading font-bold text-2xl text-foreground">12+</p>
                <p className="text-sm text-body-text">States Reached</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <p className="font-heading font-bold text-2xl text-foreground">3</p>
                <p className="text-sm text-body-text">Core Programs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <p className="font-heading font-bold text-2xl text-foreground">30K</p>
                <p className="text-sm text-body-text">Youth Goal by 2030</p>
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
