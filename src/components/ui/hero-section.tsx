import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, Lightbulb } from 'lucide-react';
import heroImage from "@/assets/youth-empowerment-banner.jpg";
const HeroSection = () => {
  return <section className="relative py-section bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="font-heading font-bold leading-tight text-2xl lg:text-3xl uppercase tracking-wider relative">
                <span className="bg-gradient-to-r from-primary-green via-primary-glow to-primary-blue bg-clip-text drop-shadow-2xl filter text-4xl text-gray-950">
                  EMPOWERING YOUTH THROUGH
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary-blue via-primary-glow to-primary-green bg-clip-text drop-shadow-2xl filter text-teal-600">
                  OPPORTUNITIES THAT TRANSFORM
                </span>
                <div className="absolute inset-0 bg-gradient-glow opacity-30 blur-2xl -z-10 transform scale-110"></div>
              </h1>
              <p className="text-xl text-body-text leading-relaxed max-w-lg text-slate-950">
                We connect young people, especially those often excluded to the tools, pathways, and support they need to thrive, lead, and shape the future.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/solutions">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-body font-semibold text-lg px-8 py-4 group">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button variant="outline" size="lg" className="font-body font-semibold text-lg px-8 py-4 border-2">
                  Join a Program
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="relative w-14 h-14 mx-auto mb-3">
                  <div className="absolute inset-0 bg-gradient-primary rounded-full shadow-elegant blur-sm"></div>
                  <div className="relative w-full h-full bg-gradient-primary rounded-full flex items-center justify-center shadow-primary border border-white/20">
                    <Users className="h-7 w-7 text-white drop-shadow-lg filter" />
                  </div>
                </div>
                <p className="font-heading font-bold text-2xl text-foreground">6+</p>
                <p className="text-sm text-body-text font-medium">States Reached</p>
              </div>
              <div className="text-center">
                <div className="relative w-14 h-14 mx-auto mb-3">
                  <div className="absolute inset-0 bg-gradient-primary rounded-full shadow-elegant blur-sm"></div>
                  <div className="relative w-full h-full bg-gradient-primary rounded-full flex items-center justify-center shadow-primary border border-white/20">
                    <Target className="h-7 w-7 text-white drop-shadow-lg filter" />
                  </div>
                </div>
                <p className="font-heading font-bold text-2xl text-foreground">3</p>
                <p className="text-sm text-body-text font-medium">Core Programs</p>
              </div>
              <div className="text-center">
                <div className="relative w-14 h-14 mx-auto mb-3">
                  <div className="absolute inset-0 bg-gradient-primary rounded-full shadow-elegant blur-sm"></div>
                  <div className="relative w-full h-full bg-gradient-primary rounded-full flex items-center justify-center shadow-primary border border-white/20">
                    <Lightbulb className="h-7 w-7 text-white drop-shadow-lg filter" />
                  </div>
                </div>
                <p className="font-heading font-bold text-2xl text-foreground">30K</p>
                <p className="text-sm text-body-text font-medium">Youth Goal by 2030</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img src={heroImage} alt="Youth empowerment and innovation" className="w-full max-w-lg rounded-2xl shadow-elegant object-cover aspect-[4/3]" />
              <div className="absolute inset-0 bg-gradient-subtle opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
