import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Users, 
  Heart, 
  BookOpen, 
  Lightbulb
} from "lucide-react";
import ourApproachHero from "@/assets/our-approach-hero.jpg";

const OurApproach = () => {
  const pillars = [
    {
      icon: Target,
      title: "Access & Equity",
      description: "We believe that opportunity should not be a privilege. We design our work to reach young people who are most often excluded, especially those in underserved, rural, or low-income communities, so they can access the same doors others walk through every day."
    },
    {
      icon: Users,
      title: "Youth-Centered Design",
      description: "Young people are not passive recipients, they are co-creators. We involve youth meaningfully in shaping solutions, creating platforms that reflect their realities, perspectives, and ideas."
    },
    {
      icon: BookOpen,
      title: "Relevance & Real-World Skills",
      description: "Our programs are grounded in local realities and global shifts. We focus on practical knowledge, problem-solving, and future-fit skills that prepare young people to respond to the world as it is and as it's changing."
    },
    {
      icon: Eye,
      title: "Voice, Visibility & Power",
      description: "We center youth stories, perspectives, and leadership, especially from communities where young people are often unheard. We believe in helping youth not only speak, but also be seen, trusted, and followed."
    },
    {
      icon: Lightbulb,
      title: "Systems Thinking & Sustainable Impact",
      description: "Our work considers systems, root causes, and long-term change, ensuring that what we do leads to lasting and meaningful outcomes. We don't just deliver programs, we look at the bigger picture."
    },
    {
      icon: Heart,
      title: "Collaboration & Community",
      description: "We believe real change happens when we work together. We build strong partnerships, with schools, grassroots groups, institutions, and the youth themselves, to ensure our work stays relevant, trusted, and community-rooted."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-primary">
              Our Approach
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              We start with 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> listening</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our work starts with listening and builds on real needs. We work hand-in-hand with communities 
              and partners to deliver programs that are relevant, practical, and transformative.
            </p>
            <img 
              src={ourApproachHero} 
              alt="Community collaboration and partnership" 
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-glow"
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Making opportunity 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> personal and accessible</span>
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6 mb-12">
              <p>
                Whether it's a rural girl gaining digital skills, a young activist accessing a storytelling 
                platform, or a first-generation student getting a scholarship to learn abroad, our goal is to 
                make opportunity personal and accessible.
              </p>
              <p>
                We focus on practical impact, not performative work. We stay grounded in local realities while 
                thinking globally. Through mentorship, skills development, community building, and systems thinking, 
                our approach is built to scale, but never to lose sight of the individual lives we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 text-primary">
                Our Core Pillars
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Principles that 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> guide everything</span> we do
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our work is guided by key principles that reflect what we believe, how we operate, 
                and what we prioritize. These pillars help ensure everything we do is grounded, thoughtful, and built for impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <Card key={index} className="group hover:shadow-primary transition-all duration-300 bg-white/80 backdrop-blur border-0">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary border-0 hover:opacity-90 shadow-primary"
                asChild
              >
                <Link to="/projects">
                  See Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurApproach;
