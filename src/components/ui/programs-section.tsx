import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Network, 
  Camera, 
  BrainCircuit, 
  Briefcase,
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ProgramsSection = () => {
  const programs = [
    {
      icon: Network,
      title: "YouthXChange",
      description: "YouthXChange bridges the gap between urban/university talent and resources and underserved communities by connecting university students and recent graduates with rural communities through a dynamic exchange of knowledge and delivery of hands-on, locally relevant skills training. Focused on green entrepreneurship, basic digital fluency, and financial literacy, skills aligned with community needs and tailored to local economies, it unlocks practical pathways to opportunity and income.",
      features: ["Green Entrepreneurship", "Digital Fluency", "Financial Literacy"]
    },
    {
      icon: Camera,
      title: "Youth In Scope",
      description: "#YouthInScope is a storytelling and connection platform that shines a light on youth changemakers often excluded from mainstream narratives and communities where youth are most marginalized. Beyond recognition, each spotlight is followed by efforts to connect featured youth or communities with tailored opportunity leads, resources, and networks.",
      features: ["Youth Stories", "Opportunity Leads", "Network Building"]
    },
    {
      icon: BrainCircuit,
      title: "Vidi Youth AI",
      description: "Vidi Youth AI is a digital career support tool built around clarity and meaning. It helps young people discover their purpose, align their strengths and interests, and navigate personalized pathways toward learning, work, or income opportunities. [Coming Soon]",
      features: ["Career Discovery", "Personalized Pathways", "Purpose Alignment"]
    }
  ];

  return (
    <section className="py-section bg-accent-soft-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-foreground mb-6">
            Our Work
          </h2>
          <p className="text-xl text-body-text leading-relaxed">
            At YouthXcel, our work is built on a simple but powerful idea: that young people should have a real chance to succeed. We focus on bridging the gap between potential and opportunity by designing practical, relevant, and inclusive programs that support young people to grow, lead, and thrive.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-white border-0 shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="relative p-8 text-center">
                  {/* Icon */}
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-primary rounded-2xl shadow-elegant blur-lg group-hover:blur-xl transition-all duration-500"></div>
                    <div className="relative w-full h-full bg-gradient-primary rounded-2xl flex items-center justify-center shadow-primary border border-white/40 group-hover:scale-110 transition-all duration-500">
                      <IconComponent className="h-12 w-12 text-white drop-shadow-xl filter" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-heading font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-body-text mb-6 leading-relaxed text-sm">
                    {program.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center p-3 bg-gradient-to-r from-primary-green/15 to-primary-blue/15 rounded-lg border border-primary/30 shadow-card">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 shadow-primary"></div>
                        <span className="text-sm font-semibold text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
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
