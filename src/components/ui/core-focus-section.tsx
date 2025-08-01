import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  GraduationCap, 
  Briefcase, 
  Volume2, 
  Users, 
  Heart,
  ArrowUpRight 
} from 'lucide-react';

const CoreFocusSection = () => {
  const focusAreas = [
    {
      icon: Target,
      title: "Expanding Access to Opportunities",
      description: "We connect young people to real-world opportunities that help them grow, earn, and build a future with options."
    },
    {
      icon: GraduationCap,
      title: "Skills for Life and Work",
      description: "We deliver practical, relevant, and context-aware skills that help youth navigate today's world, such as starting a business, landing a job, or building something meaningful in their communities."
    },
    {
      icon: Briefcase,
      title: "Learning, Earning & Career Pathways",
      description: "We support young people to pursue meaningful learning and career journeys by bridging the gap between education and real employment through alternative learning routes, career discovery tools, or early work exposure."
    },
    {
      icon: Volume2,
      title: "Youth Voice & Visibility",
      description: "We amplify the voices and stories of young people who are leading change or being left out of the spotlight. We create space for youth narratives to be heard, valued, and supported."
    },
    {
      icon: Users,
      title: "Leadership & Agency",
      description: "We support young people to build confidence, lead with purpose, and take ownership of their paths. We help them shape decisions that affect their lives, their communities, and the world."
    },
    {
      icon: Heart,
      title: "Equity & Inclusion",
      description: "We focus intentionally on youth from rural areas, low-income backgrounds, girls and young women, and other marginalized spaces, ensuring that support reaches those who need it most and has long-term impact."
    }
  ];

  return (
    <section className="py-section bg-accent-soft-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-foreground mb-6">
            Spotlight: Our Core Focus Areas
          </h2>
          <p className="text-xl text-body-text leading-relaxed">
            Six key areas where we focus our efforts to create maximum impact for young people.
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-white border-0"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                    {area.title}
                  </h3>
                  <p className="text-body-text leading-relaxed">
                    {area.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-6 flex justify-end">
                    <ArrowUpRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreFocusSection;
