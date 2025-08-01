import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, TrendingUp, Target, Calendar } from 'lucide-react';

const ReachImpactSection = () => {
  return (
    <section className="py-section bg-accent-soft-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-foreground mb-6">
            Reach & Impact
          </h2>
          <p className="text-xl text-body-text leading-relaxed">
            Even though YouthXcel is still growing, we are already building presence and partnerships across Nigeria and expanding into new regions.
          </p>
        </div>

        {/* Current Impact */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-white border-0 shadow-card text-center group hover:shadow-hover transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-3xl text-foreground mb-2">12+</h3>
              <p className="text-body-text font-medium">States Reached</p>
              <p className="text-sm text-body-text mt-2">Across Nigeria</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-card text-center group hover:shadow-hover transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-3xl text-foreground mb-2">Growing</h3>
              <p className="text-body-text font-medium">Youth Supported</p>
              <p className="text-sm text-body-text mt-2">Through programs & opportunities</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-card text-center group hover:shadow-hover transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-3xl text-foreground mb-2">3</h3>
              <p className="text-body-text font-medium">Core Programs</p>
              <p className="text-sm text-body-text mt-2">Active & upcoming</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-card text-center group hover:shadow-hover transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-3xl text-foreground mb-2">2030</h3>
              <p className="text-body-text font-medium">Target Year</p>
              <p className="text-sm text-body-text mt-2">For major impact goals</p>
            </CardContent>
          </Card>
        </div>

        {/* 2030 Goals */}
        <div className="bg-gradient-card rounded-3xl p-12 text-center">
          <h3 className="font-heading font-bold text-3xl text-foreground mb-8">
            Our 2030 Goals
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-card">
              <CardContent className="p-8">
                <h4 className="font-heading font-bold text-4xl text-primary mb-4">30,000</h4>
                <p className="text-lg font-semibold text-foreground mb-2">Youth Directly Impacted</p>
                <p className="text-body-text">Through our core programs and direct interventions</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-card">
              <CardContent className="p-8">
                <h4 className="font-heading font-bold text-4xl text-primary mb-4">1M</h4>
                <p className="text-lg font-semibold text-foreground mb-2">Youth Indirectly Reached</p>
                <p className="text-body-text">Through scalable solutions, digital tools, and partnerships</p>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-lg text-body-text leading-relaxed mt-8 max-w-3xl mx-auto">
            Through our pilot programs and opportunity referrals, we have supported youth from 12+ states with upskilling, guidance and global opportunities and we are just getting started.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReachImpactSection;
