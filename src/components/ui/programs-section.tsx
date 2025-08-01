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
      icon: Users,
      title: "YouthXChange",
      description: "YouthXChange bridges the gap between urban/university talent and resources and underserved communities by connecting university students and recent graduates with rural communities through a dynamic exchange of knowledge and delivery of hands-on, locally relevant skills training. Focused on green entrepreneurship, basic digital fluency, and financial literacy, skills aligned with community needs and tailored to local economies, it unlocks practical pathways to opportunity and income.",
      features: ["Green Entrepreneurship", "Digital Fluency", "Financial Literacy"]
    },
    {
      icon: Lightbulb,
      title: "Youth In Scope",
      description: "#YouthInScope is a storytelling and connection platform that shines a light on youth changemakers often excluded from mainstream narratives and communities where youth are most marginalized. Beyond recognition, each spotlight is followed by efforts to connect featured youth or communities with tailored opportunity leads, resources, and networks.",
      features: ["Youth Stories", "Opportunity Leads", "Network Building"]
    },
    {
      icon: Target,
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
