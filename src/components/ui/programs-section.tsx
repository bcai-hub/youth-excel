import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  GraduationCap, 
  Users, 
  Lightbulb, 
  Target,
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Skill Training",
      description: "Comprehensive training programs designed to equip youth with in-demand skills for the modern workforce.",
      features: ["Technical Skills", "Digital Literacy", "Career Readiness"]
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Connect with experienced professionals who provide guidance, support, and career insights.",
      features: ["1-on-1 Mentoring", "Group Sessions", "Industry Experts"]
    },
    {
      icon: Lightbulb,
      title: "Innovation Challenges",
      description: "Participate in real-world projects and competitions that foster creativity and problem-solving.",
      features: ["Project-Based Learning", "Team Collaboration", "Real Solutions"]
    },
    {
      icon: Target,
      title: "Opportunities",
      description: "Access to internships, scholarships, job placements, and entrepreneurship support.",
      features: ["Job Placement", "Scholarships", "Startup Support"]
    }
  ];

  return (
    <section className="py-section bg-accent-soft-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-foreground mb-6">
            Our Programs & Services
          </h2>
          <p className="text-xl text-body-text leading-relaxed">
            Discover how our comprehensive programs are designed to unlock potential and create pathways to success for every young person.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-white border-0"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                    {program.title}
                  </h3>
                  <p className="text-body-text mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-body-text flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/solutions">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 font-body font-semibold group"
            >
              Explore All Programs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;