import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram,
  Mail
} from "lucide-react";
import ourTeamHero from "@/assets/our-team-hero.jpg";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Executive Director",
      image: "/lovable-uploads/4d7acd13-e7df-4457-9424-744ebc78df35.png",
      bio: "Passionate youth advocate with 8+ years in community development and social impact.",
      social: {
        linkedin: "https://linkedin.com/in/alexjohnson",
        twitter: "https://twitter.com/alexjohnson",
        instagram: "https://instagram.com/alexjohnson",
        email: "alex@youthxcel.org"
      }
    },
    {
      name: "Sarah Okafor",
      role: "Program Manager",
      image: "/lovable-uploads/a9dd3084-b7af-4ebe-825f-6acbc3c6adcd.png",
      bio: "Expert in skills development and rural community engagement with focus on youth empowerment.",
      social: {
        linkedin: "https://linkedin.com/in/sarahokafor",
        twitter: "https://twitter.com/sarahokafor",
        instagram: "https://instagram.com/sarahokafor",
        email: "sarah@youthxcel.org"
      }
    },
    {
      name: "Michael Chen",
      role: "Technology Lead",
      image: "/lovable-uploads/4d7acd13-e7df-4457-9424-744ebc78df35.png",
      bio: "Building digital solutions for youth empowerment and creating accessible technology platforms.",
      social: {
        linkedin: "https://linkedin.com/in/michaelchen",
        twitter: "https://twitter.com/michaelchen",
        instagram: "https://instagram.com/michaelchen",
        email: "michael@youthxcel.org"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-primary">
              Our Team
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Youth-led</span> and youth-driven
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              YouthXcel is led by a passionate team of young professionals, mentors, and advocates who bring 
              lived experience, technical knowledge, and a deep commitment to youth equity and transformation.
            </p>
            <img 
              src={ourTeamHero} 
              alt="YouthXcel team members" 
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-glow"
            />
          </div>
        </div>
      </section>

      {/* Team Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-card rounded-2xl p-8 mb-16 shadow-glow">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Personal understanding drives 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> every decision</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Though we are early in our journey, we are backed by a growing network of advisors, partners, 
                  and collaborators who believe in our mission and help us build responsibly.
                </p>
                <p>
                  At our core, we are youth-led and youth-driven. Every member of our team brings a personal 
                  understanding of what it means to grow up with potential but without access, and that insight 
                  shapes every decision we make.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Meet the Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Passionate individuals dedicated to creating equal opportunities for all young people.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur border-0 shadow-glow group hover:shadow-primary transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto relative">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>
                    
                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      <a 
                        href={member.social.linkedin} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a 
                        href={member.social.twitter} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a 
                        href={member.social.instagram} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a 
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Advisory Board Section */}
            <div className="text-center bg-white/80 backdrop-blur rounded-2xl p-12 shadow-glow">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Advisory Board</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our advisory board consists of experienced professionals and thought leaders who guide our strategic 
                direction and ensure we maintain our commitment to youth-centered impact.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary border-0 hover:opacity-90 shadow-primary"
                asChild
              >
                <Link to="/contact">
                  Join Our Mission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
