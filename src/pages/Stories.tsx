import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Quote,
  MapPin,
  Calendar,
  Star,
  ExternalLink,
  ArrowRight,
  Heart
} from "lucide-react";

const Stories = () => {
  const testimonials = [
    {
      quote: "Before YouthXcel, I didn't even know these kinds of global scholarships existed. Now I've applied to two, and I finally believe I can actually compete.",
      author: "Faith O.",
      age: 19,
      location: "Enugu",
      program: "YouthXChange",
      impact: "Applied to 2 international scholarships",
      category: "Education Access"
    },
    {
      quote: "The sessions opened my mind. No one ever told us about skills like this or how to use them. I'm leaving this program with a plan.",
      author: "Zayyanu A.",
      age: 22,
      location: "Kano",
      program: "YouthXChange",
      impact: "Started a small digital services business",
      category: "Skills Development"
    },
    {
      quote: "It's not just that they share opportunities. They stay with you. They coach you. That made all the difference.",
      author: "Chioma M.",
      age: 24,
      location: "Owerri",
      program: "Youth In Scope",
      impact: "Connected to mentorship program",
      category: "Mentorship"
    }
  ];

  const impactStories = [
    {
      title: "From Rural Village to Global Stage",
      subtitle: "How YouthXChange opened doors for Amina",
      location: "Kaduna State",
      category: "Success Story",
      description: "Amina, a 20-year-old from a rural farming community, discovered digital marketing through our YouthXChange program. Within six months, she was managing social media for three local businesses and saving money for university.",
      outcomes: [
        "Learned digital marketing skills",
        "Started earning income within 3 months",
        "Now mentoring other young women",
        "Secured partial scholarship for university"
      ],
      image: "rural-to-global"
    },
    {
      title: "Building Bridges Across Divides",
      subtitle: "University students find purpose in rural communities",
      location: "Cross River State",
      category: "Program Impact",
      description: "Our YouthXChange program connected 15 university students with rural communities in Cross River. The result? Sustainable learning hubs and friendships that transcend social boundaries.",
      outcomes: [
        "15 university students deployed",
        "5 community learning hubs established",
        "200+ rural youth trained",
        "Ongoing mentorship relationships formed"
      ],
      image: "building-bridges"
    },
    {
      title: "Amplifying Unheard Voices",
      subtitle: "Youth In Scope gives platform to changemakers",
      location: "Multiple States",
      category: "Platform Impact",
      description: "Through Youth In Scope, we've featured 50+ young changemakers from marginalized communities, connecting their stories to real opportunities and resources.",
      outcomes: [
        "50+ youth featured and spotlighted",
        "30+ connected to opportunities",
        "100+ opportunity providers in network",
        "10,000+ community members reached"
      ],
      image: "amplifying-voices"
    }
  ];

  const communityMetrics = [
    {
      metric: "500+",
      label: "Lives Touched",
      description: "Young people directly impacted through our programs"
    },
    {
      metric: "95%",
      label: "Satisfaction Rate",
      description: "Of participants would recommend our programs"
    },
    {
      metric: "80%",
      label: "Follow-up Success",
      description: "Participants still engaged 6 months later"
    },
    {
      metric: "12+",
      label: "States Reached",
      description: "Across Nigeria through programs and partnerships"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-primary">
              Our Stories
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Real stories, 
              <span className="bg-gradient-primary bg-clip-text text-transparent">real impact</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every number tells a story. Every program creates connections. Every young person represents 
              unlimited potential waiting to be unlocked. These are their stories.
            </p>
          </div>
        </div>
      </section>

      {/* Community Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Impact 
              <span className="bg-gradient-primary bg-clip-text text-transparent">in numbers</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Behind every statistic is a young person whose life has been touched by opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {communityMetrics.map((item, index) => (
              <Card key={index} className="text-center bg-gradient-card border-0 shadow-glow">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{item.label}</div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-primary">
              Voices from the Community
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What young people 
              <span className="bg-gradient-primary bg-clip-text text-transparent">are saying</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The most powerful measure of our impact is in the words of the young people we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur border-0 shadow-glow">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-primary">
                        {testimonial.author}, {testimonial.age}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.category}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span>{testimonial.program}</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-card rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">
                        <strong>Impact:</strong> {testimonial.impact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-primary">
              Deep Dive Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transformation 
              <span className="bg-gradient-primary bg-clip-text text-transparent">in action</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Dive deeper into the stories of change, growth, and community impact happening through our programs.
            </p>
          </div>

          <div className="space-y-12">
            {impactStories.map((story, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-primary bg-gradient-card">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Story Content */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="default" className="bg-primary-green text-white">
                          {story.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{story.location}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {story.title}
                      </h3>
                      <p className="text-primary font-medium mb-6">
                        {story.subtitle}
                      </p>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {story.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Key Outcomes:</h4>
                        <div className="space-y-2">
                          {story.outcomes.map((outcome, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <Heart className="w-4 h-4 text-primary-green flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button variant="outline" asChild>
                        <Link to="/contact">
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    
                    {/* Visual Placeholder */}
                    <div className="bg-gradient-primary p-12 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Heart className="w-10 h-10" />
                        </div>
                        <h4 className="text-xl font-semibold mb-2">{story.category}</h4>
                        <p className="text-white/80">{story.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Spotlight */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-primary">
              Youth In Scope
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Spotlighting 
              <span className="bg-gradient-primary bg-clip-text text-transparent">untold stories</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Through our Youth In Scope platform, we amplify the voices of young changemakers from 
              marginalized communities, connecting their stories to real opportunities.
            </p>
            
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Platform Impact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                      <span className="text-muted-foreground">50+ youth changemakers featured</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-teal rounded-full"></div>
                      <span className="text-muted-foreground">30+ connected to opportunities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                      <span className="text-muted-foreground">100+ opportunity providers in network</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">10,000+ community members reached</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe every young person has a story worth telling and potential worth nurturing. 
                    Youth In Scope doesn't just share stories—it turns visibility into access, ensuring 
                    recognition leads to real opportunities and support.
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-primary border-0 hover:opacity-90 shadow-primary"
              asChild
            >
              <Link to="/contact">
                Nominate a Young Changemaker
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your story could be 
              <span className="bg-gradient-primary bg-clip-text text-transparent">next</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Whether you're a young person ready to unlock your potential, or someone who wants to 
              support the next generation, every story starts with a single step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary border-0 hover:opacity-90 shadow-primary"
                asChild
              >
                <Link to="/contact">
                  Share Your Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link to="/projects">See Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;