import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Users } from "lucide-react";
import whoWeAreHero from "@/assets/who-we-are-hero.jpg";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-primary">
              Who We Are
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              About YouthXcel
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Empowering young people through opportunities that transform lives and communities.
            </p>
            <img 
              src={whoWeAreHero} 
              alt="YouthXcel team collaboration" 
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-glow"
            />
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Closing the gap between 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> potential and access</span>
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                YouthXcel is a youth empowerment organization created to ensure that every young person, 
                no matter where they come from, can access the right opportunities to grow, lead, and thrive. 
                Born from a deep understanding of the inequalities young people face, particularly in Africa 
                and underserved communities, YouthXcel exists to close the gap between potential and access.
              </p>
              <p>
                We believe that young people already have the ideas, energy, and drive to shape a better world, 
                they just need the support to get there. That's where we come in.
              </p>
              <p>
                What drives us is simple but urgent: too many young people with incredible promise are being left behind. 
                At YouthXcel, we are changing that by building intentional programs, partnerships, and platforms that 
                place youth at the center and empower them with tools that unlock their agency, confidence, and voice. 
                Our work is rooted in community, equity, and the belief that access to opportunity should never be a privilege.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 text-primary">
                Vision & Mission
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our North Star
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur border-0 shadow-glow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Vision</h3>
                  <p className="text-foreground leading-relaxed">
                    A future where every young person is equipped, empowered, and thriving with purpose 
                    and equal access to opportunities that shape a sustainable and inclusive future.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur border-0 shadow-glow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Mission</h3>
                  <p className="text-foreground leading-relaxed">
                    To empower young people, especially Africa's most marginalized, by building scalable solutions 
                    and connecting them to opportunities, resources, and supported pathways that unlock their full 
                    potential, elevate their agency, and equip them to thrive, lead, and create meaningful impact in the world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Why */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 text-primary">
                Our Why
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Millions of young people grow up 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> full of potential</span>
                <br />but are blocked by systems
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                Across the continent and beyond, millions of young people grow up full of potential but are 
                blocked by systems that overlook, exclude, or under-resource them. Whether it's a lack of 
                access to quality education, limited exposure to future-relevant skills, or absence of 
                mentorship and networks, the barriers are real and rising.
              </p>
              <p>
                Rural youth, girls, and those in low-income settings are most affected. Yet, these same young 
                people are also some of the most resilient, creative, and ready to lead, if given the chance.
              </p>
              <p>
                At YouthXcel, we don't just see a generation in need, we see a generation of leaders, builders, 
                and change-makers. But without access, even the brightest minds can be dimmed by circumstance. 
                That's why we focus on creating real access to tools, platforms, and spaces that youth can use 
                to build their own path forward.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary border-0 hover:opacity-90 shadow-primary"
                asChild
              >
                <Link to="/solutions">
                  See Our Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
