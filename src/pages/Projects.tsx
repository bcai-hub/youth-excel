import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowUpDown, 
  Eye, 
  Brain,
  Users,
  MapPin,
  Calendar,
  ExternalLink,
  ArrowRight
} from "lucide-react";

const Projects = () => {
  const activeProjects = [
    {
      name: "YouthXChange",
      icon: ArrowUpDown,
      location: "Nigeria (Multi-state)",
      timeline: "2024 - Ongoing",
      participants: "200+ youth",
      description: "A dynamic exchange program connecting university students with rural communities for skills training in green entrepreneurship, digital literacy, and financial management.",
      achievements: [
        "Reached 12+ states across Nigeria",
        "Trained 200+ young people in rural communities",
        "Connected 150+ university students as trainers",
        "Established 20+ community learning hubs"
      ],
      impact: "Creating sustainable bridges between urban knowledge and rural communities, fostering peer-to-peer learning and practical skill development.",
      status: "Expanding",
      gradient: "from-primary-green to-primary-teal"
    },
    {
      name: "Youth In Scope",
      icon: Eye,
      location: "Pan-African (Digital)",
      timeline: "2024 - Ongoing",
      participants: "50+ featured youth",
      description: "A storytelling platform highlighting youth changemakers from marginalized communities, connecting their stories to real opportunities and resources.",
      achievements: [
        "Featured 50+ youth changemakers",
        "Connected featured youth to 30+ opportunities",
        "Built network of 100+ opportunity providers",
        "Reached 10,000+ online community members"
      ],
      impact: "Transforming visibility into tangible access, ensuring untold stories become bridges to real opportunities and support.",
      status: "Growing",
      gradient: "from-primary-teal to-primary-blue"
    }
  ];

  const upcomingProjects = [
    {
      name: "Vidi Youth AI",
      icon: Brain,
      expectedLaunch: "Q2 2025",
      description: "AI-powered career discovery platform helping young people find purpose-aligned pathways to learning, work, and income opportunities.",
      features: [
        "Personalized career assessment",
        "Purpose discovery tools",
        "Local opportunity mapping",
        "Skills gap analysis",
        "Pathway recommendations"
      ],
      potentialImpact: "Expected to serve 10,000+ youth in first year with personalized career guidance and opportunity matching.",
      gradient: "from-primary-blue to-primary-green"
    }
  ];

  const impactMetrics = [
    {
      metric: "12+",
      label: "States Reached",
      description: "Across Nigeria through programs and partnerships"
    },
    {
      metric: "500+",
      label: "Youth Supported",
      description: "Through direct programs and opportunity connections"
    },
    {
      metric: "100+",
      label: "Partnerships",
      description: "With organizations, schools, and opportunity providers"
    },
    {
      metric: "30+",
      label: "Communities",
      description: "Rural and underserved areas with active programs"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-primary">
              Our Projects
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Programs that 
              <span className="bg-gradient-primary bg-clip-text text-transparent">open doors</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover how we're bridging the gap between talent and opportunity through innovative, 
              youth-centered programs that create real pathways to success.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Impact 
              <span className="bg-gradient-primary bg-clip-text text-transparent">by the numbers</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              While we're still growing, our programs are already making measurable impact across communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactMetrics.map((item, index) => (
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

      {/* Active Projects */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-primary">
              Active Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Programs 
              <span className="bg-gradient-primary bg-clip-text text-transparent">in action</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our flagship programs are actively transforming lives and communities across Africa.
            </p>
          </div>

          <div className="space-y-12">
            {activeProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-primary bg-white/80 backdrop-blur">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Project Header */}
                    <div className={`bg-gradient-to-br ${project.gradient} p-8 text-white flex flex-col justify-center`}>
                      <div className="flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                        <project.icon className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{project.name}</h3>
                      <div className="space-y-2 text-white/90">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{project.timeline}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{project.participants}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="mt-4 self-start bg-white/20 text-white border-white/30">
                        {project.status}
                      </Badge>
                    </div>

                    {/* Project Details */}
                    <div className="lg:col-span-2 p-8">
                      <h4 className="text-xl font-semibold text-foreground mb-4">About This Project</h4>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-foreground mb-3">Key Achievements</h5>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-primary-green rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-foreground mb-3">Impact</h5>
                          <div className="bg-gradient-card rounded-lg p-4">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {project.impact}
                            </p>
                          </div>
                          <Button 
                            className="mt-4 w-full" 
                            variant="outline"
                            asChild
                          >
                            <Link to="/contact">
                              Learn More
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-primary">
              Coming Soon
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What's 
              <span className="bg-gradient-primary bg-clip-text text-transparent">next</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Exciting new programs in development to expand our impact and reach even more young people.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {upcomingProjects.map((project, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-glow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-full`}>
                          <project.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{project.name}</h3>
                          <p className="text-primary font-medium">Expected Launch: {project.expectedLaunch}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      <div className="bg-white/60 backdrop-blur rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Potential Impact:</h4>
                        <p className="text-sm text-muted-foreground">{project.potentialImpact}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Planned Features:</h4>
                      <div className="space-y-3">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        className="mt-6 w-full" 
                        disabled
                      >
                        Coming Soon
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want to be part of our 
              <span className="bg-gradient-primary bg-clip-text text-transparent">next project?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Whether you're a young person looking for opportunities, an organization seeking partnership, 
              or a community wanting to host a program, we'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary border-0 hover:opacity-90 shadow-primary"
                asChild
              >
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link to="/stories">See Our Impact Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;