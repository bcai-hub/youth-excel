import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Users, Lightbulb } from 'lucide-react';

const ProblemApproachSection = () => {
  return (
    <section className="py-section bg-accent-soft-gray">
      <div className="container mx-auto px-4">
        {/* The Problem */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <h2 className="font-heading font-bold text-foreground mb-6">
              The Problem
            </h2>
          </div>
          
          <div className="space-y-6 text-center">
            <p className="text-xl text-body-text leading-relaxed">
              Across the continent and beyond, millions of young people grow up full of potential but are blocked by systems that overlook, exclude, or under-resource them. Whether it's a lack of access to quality education, limited exposure to future-relevant skills, or absence of mentorship and networks, the barriers are real and rising.
            </p>
            <p className="text-xl text-body-text leading-relaxed">
              Rural youth, girls, and those in low-income settings are most affected. Yet, these same young people are also some of the most resilient, creative, and ready to lead, if given the chance.
            </p>
            <p className="text-xl text-body-text leading-relaxed font-medium">
              At YouthXcel, we don't just see a generation in need, we see a generation of leaders, builders, and change-makers. But without access, even the brightest minds can be dimmed by circumstance. That's why we focus on creating real access to tools, platforms, and spaces that youth can use to build their own path forward.
            </p>
          </div>
        </div>

        {/* Our Approach */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h2 className="font-heading font-bold text-foreground mb-6">
              Our Approach
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-body-text leading-relaxed">
                Our work starts with listening and builds on real needs. We work hand-in-hand with communities and partners to deliver programs that are relevant, practical, and transformative.
              </p>
              <p className="text-lg text-body-text leading-relaxed">
                Whether it's a rural girl gaining digital skills, a young activist accessing a storytelling platform, or a first-generation student getting a scholarship to learn abroad, our goal is to make opportunity personal and accessible.
              </p>
              <p className="text-lg text-body-text leading-relaxed">
                We focus on practical impact, not performative work. We stay grounded in local realities while thinking globally. Through mentorship, skills development, community building, and systems thinking, our approach is built to scale, but never to lose sight of the individual lives we serve.
              </p>
            </div>
          </div>

          <Card className="bg-white border-0 shadow-card">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-6 text-center">
                Youth-Centered Impact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <p className="text-body-text">Listen to real needs first</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <p className="text-body-text">Work hand-in-hand with communities</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <p className="text-body-text">Make opportunity personal and accessible</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <p className="text-body-text">Focus on practical, not performative impact</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <p className="text-body-text">Build to scale while staying personal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemApproachSection;
