import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  ArrowUpDown, 
  Eye, 
  Brain,
  BarChart3,
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Solutions = () => {
  const programs = [
    {
      name: "YouthXChange",
      icon: ArrowUpDown,
      status: "Active",
      tagline: "Bridge the gap between talent and communities",
      description: "YouthXChange bridges the gap between urban/university talent and resources and underserved communities by connecting university students and recent graduates with rural communities through a dynamic exchange of knowledge and delivery of hands-on, locally relevant skills training.",
      features: [
        "Green entrepreneurship training",
        "Basic digital fluency",
        "Financial literacy",
        "Youth-to-youth model",
        "Peer-driven exchange",
        "Grassroots solutions"
      ],
      impact: "Creates a vibrant loop of shared learning and lived experience, fostering peer-driven exchange across social divides.",
      gradient: "from-primary-green to-primary-teal"
    },
    {
      name: "Youth In Scope",
      icon: Eye,
      status: "Active",
      tagline: "Amplifying untold stories, creating real connections",
      description: "#YouthInScope is a storytelling and connection platform that shines a light on youth changemakers often excluded from mainstream narratives and communities where youth are most marginalized.",
      features: [
        "Youth changemaker spotlights",
        "Untold story amplification",
        "Tailored opportunity leads",
        "Resource connections",
        "Network building",
        "Community visibility"
      ],
      impact: "Beyond recognition, each spotlight is followed by efforts to connect featured youth with opportunities, resources, and networks.",
      gradient: "from-primary-teal to-primary-blue"
    },
    {
      name: "Vidi Youth AI",
      icon: Brain,
      status: "Coming Soon",
      tagline: "AI-powered career clarity and purpose discovery",
      description: "Vidi Youth AI is a digital career support tool built around clarity and meaning. It helps young people discover their purpose, align their strengths and interests, and navigate personalized pathways toward learning, work, or income opportunities.",
      features: [
        "Purpose discovery tools",
        "Strength assessment",
        "Interest alignment",
        "Personalized pathways",
        "Career guidance",
        "Real-world context"
      ],
      impact: "Rooted in real-world context, it offers practical next steps that are relevant and empowering for each user.",
      gradient: "from-primary-blue to-primary-green"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-primary">
              Our Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Bridging the gap between 
              <span className="bg-gradient-primary bg-clip-text text-transparent">potential and opportunity</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At YouthXcel, our work is built on a simple but powerful idea: that young people should have 
              a real chance to succeed. We focus on designing practical, relevant, and inclusive programs 
              that support young people to grow, lead, and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our 
              <span className="bg-gradient-primary bg-clip-text text-transparent">flagship programs</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our solutions are driven by the realities of underserved youth, especially in Africa, 
              and built to open doors where they've long been closed.
            </p>
          </div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-primary bg-gradient-card">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${program.gradient} rounded-full`}>
                          <program.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-foreground">{program.name}</h3>
                            <Badge 
                              variant={program.status === "Active" ? "default" : "secondary"}
                              className={program.status === "Active" ? "bg-primary-green text-white" : ""}
                            >
                              {program.status}
                            </Badge>
                          </div>
                          <p className="text-primary font-medium">{program.tagline}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {program.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {program.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary-green flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-white/60 backdrop-blur rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-foreground mb-2">Impact:</h4>
                        <p className="text-sm text-muted-foreground">{program.impact}</p>
                      </div>
                      
                      {program.status === "Active" ? (
                        <Button 
                          className={`bg-gradient-to-r ${program.gradient} border-0 hover:opacity-90`}
                          asChild
                        >
                          <Link to="/contact">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" disabled>
                          Coming Soon
                        </Button>
                      )}
                    </div>
                    
                    {/* Visual */}
                    <div className={`bg-gradient-to-br ${program.gradient} p-8 lg:p-12 flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <program.icon className="w-24 h-24 mx-auto mb-4 opacity-80" />
                        <h4 className="text-2xl font-bold mb-2">{program.name}</h4>
                        <p className="text-white/90">{program.tagline}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reach & Impact */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-primary">
              Reach & Impact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Growing impact 
              <span className="bg-gradient-primary bg-clip-text text-transparent">across Africa</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Even though YouthXcel is still growing, we are already building presence and partnerships 
              across Nigeria and expanding into new regions.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/80 backdrop-blur border-0 shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">12+</div>
                  <div className="text-sm text-muted-foreground mb-2">States Reached</div>
                  <p className="text-xs text-muted-foreground">
                    Through pilot programs and opportunity referrals
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur border-0 shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">30K</div>
                  <div className="text-sm text-muted-foreground mb-2">Youth Target by 2030</div>
                  <p className="text-xs text-muted-foreground">
                    Direct impact through programs
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur border-0 shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">1M</div>
                  <div className="text-sm text-muted-foreground mb-2">Indirect Impact Goal</div>
                  <p className="text-xs text-muted-foreground">
                    Through scalable solutions and partnerships
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/80 backdrop-blur rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Long-term Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our long-term goal is to reach 30,000 youth directly through programs, and indirectly 
                impact 1 million youth through scalable solutions, digital tools, open learning platforms, 
                and ecosystem partnerships by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to be part of the 
              <span className="bg-gradient-primary bg-clip-text text-transparent">solution?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Whether you're a young person looking for opportunities, an organization seeking partnership, 
              or a supporter wanting to invest in youth, we'd love to connect.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary border-0 hover:opacity-90 shadow-primary"
                asChild
              >
                <Link to="/contact">
                  Partner with Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link to="/stories">See Our Impact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;