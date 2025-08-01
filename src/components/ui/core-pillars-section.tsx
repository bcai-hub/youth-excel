import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Scale, 
  Users, 
  Target, 
  Volume2, 
  TrendingUp, 
  Handshake 
} from 'lucide-react';

const CorePillarsSection = () => {
  const pillars = [
    {
      icon: Scale,
      title: "Access & Equity",
      description: "We believe that opportunity should not be a privilege. We design our work to reach young people who are most often excluded, especially those in underserved, rural, or low-income communities, so they can access the same doors others walk through every day."
    },
    {
      icon: Users,
      title: "Youth-Centered Design",
      description: "Young people are not passive recipients, they are co-creators. We involve youth meaningfully in shaping solutions, creating platforms that reflect their realities, perspectives, and ideas."
    },
    {
      icon: Target,
      title: "Relevance & Real-World Skills",
      description: "Our programs are grounded in local realities and global shifts. We focus on practical knowledge, problem-solving, and future-fit skills that prepare young people to respond to the world as it is and as it's changing."
    },
    {
      icon: Volume2,
      title: "Voice, Visibility & Power",
      description: "We center youth stories, perspectives, and leadership, especially from communities where young people are often unheard. We believe in helping youth not only speak, but also be seen, trusted, and followed."
    },
    {
      icon: TrendingUp,
      title: "Systems Thinking & Sustainable Impact",
      description: "Our work considers systems, root causes, and long-term change, ensuring that what we do leads to lasting and meaningful outcomes. We don't just deliver programs, we look at the bigger picture."
    },
    {
      icon: Handshake,
      title: "Collaboration & Community",
      description: "We believe real change happens when we work together. We build strong partnerships, with schools, grassroots groups, institutions, and the youth themselves, to ensure our work stays relevant, trusted, and community-rooted."
    }
  ];

  return (
    <section className="py-section bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-foreground mb-6">
            Our Core Pillars
          </h2>
          <p className="text-xl text-body-text leading-relaxed">
            Our work is guided by key principles that reflect what we believe, how we operate, and what we prioritize. These pillars help ensure everything we do is grounded, thoughtful, and built for impact.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0"
              >
                <CardContent className="p-8">
                  {/* Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-primary opacity-20 group-hover:opacity-40 transition-opacity">
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-body-text leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CorePillarsSection;
