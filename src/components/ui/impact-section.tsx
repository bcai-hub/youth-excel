import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star, TrendingUp, Award } from 'lucide-react';

const ImpactSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "1000+",
      label: "Youth Empowered",
      description: "Lives transformed through our programs"
    },
    {
      icon: Award,
      number: "150+",
      label: "Success Stories",
      description: "Young people achieving their goals"
    },
    {
      icon: Star,
      number: "50+",
      label: "Partner Organizations",
      description: "Collaborating for greater impact"
    }
  ];

  const testimonials = [
    {
      quote: "YouthXcel transformed my life by giving me the skills and confidence I needed to pursue my dreams in technology.",
      author: "Sarah Johnson",
      role: "Software Developer",
      rating: 5
    },
    {
      quote: "The mentorship program connected me with incredible leaders who guided my career path and believed in my potential.",
      author: "Michael Chen",
      role: "Entrepreneur",
      rating: 5
    },
    {
      quote: "Through YouthXcel's innovation challenges, I learned to think creatively and solve real-world problems.",
      author: "Aisha Patel",
      role: "Product Designer",
      rating: 5
    }
  ];

  return (
    <section className="py-section bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-foreground mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-body-text leading-relaxed">
            See how we're making a difference in young people's lives and building stronger communities together.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-heading font-bold text-4xl text-foreground mb-2">
                  {stat.number}
                </h3>
                <h4 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {stat.label}
                </h4>
                <p className="text-body-text">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl text-foreground mb-4">
              What Our Community Says
            </h3>
            <p className="text-lg text-body-text">
              Real stories from young people whose lives have been transformed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  
                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-body-text leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author */}
                  <div>
                    <p className="font-heading font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-body-text">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;