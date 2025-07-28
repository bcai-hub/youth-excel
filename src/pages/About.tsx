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
  Lightbulb,
  ArrowRight
} from "lucide-react";

const About = () => {
  const pillars = [
    {
      icon: Target,
      title: "Access & Equity",
      description: "We believe that opportunity should not be a privilege. We design our work to reach young people who are most often excluded, especially those in underserved, rural, or low-income communities."
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
              About YouthXcel
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Who We Are
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              YouthXcel is a youth empowerment organization created to ensure that every young person, 
              no matter where they come from, can access the right opportunities to grow, lead, and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Born from understanding 
                  <span className="bg-gradient-primary bg-clip-text text-transparent">inequality</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Born from a deep understanding of the inequalities young people face, particularly in Africa 
                  and underserved communities, YouthXcel exists to close the gap between potential and access. 
                  We believe that young people already have the ideas, energy, and drive to shape a better world, 
                  they just need the support to get there.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  That's where we come in. What drives us is simple but urgent: too many young people with 
                  incredible promise are being left behind.
                </p>
              </div>
              <Card className="bg-gradient-card border-0 shadow-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Our Driving Force</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    At YouthXcel, we are changing that by building intentional programs, partnerships, 
                    and platforms that place youth at the center and empower them with tools that unlock 
                    their agency, confidence, and voice. Our work is rooted in community, equity, and the 
                    belief that access to opportunity should never be a privilege.
                  </p>
                </CardContent>
              </Card>
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
                    To empower young people, especially Africa's most marginalized, by connecting them to 
                    opportunities, resources, and supported pathways that unlock their full potential, 
                    elevate their agency, and equip them to thrive, lead, and create meaningful impact in the world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-primary">
              The Problem
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Millions of young people grow up 
              <span className="bg-gradient-primary bg-clip-text text-transparent">full of potential</span>
              <br />but are blocked by systems
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Across the continent and beyond, millions of young people grow up full of potential but are 
              blocked by systems that overlook, exclude, or under-resource them. Whether it's a lack of 
              access to quality education, limited exposure to future-relevant skills, or absence of 
              mentorship and networks, the barriers are real and rising.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rural youth, girls, and those in low-income settings are most affected. Yet, these same young 
              people are also some of the most resilient, creative, and ready to lead, if given the chance. 
              At YouthXcel, we don't just see a generation in need, we see a generation of leaders, builders, 
              and change-makers.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-primary">
              Our Approach
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              We start with 
              <span className="bg-gradient-primary bg-clip-text text-transparent">listening</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our work starts with listening and builds on real needs. We work hand-in-hand with communities 
              and partners to deliver programs that are relevant, practical, and transformative.
            </p>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-left">
              <p className="text-foreground leading-relaxed mb-4">
                Whether it's a rural girl gaining digital skills, a young activist accessing a storytelling 
                platform, or a first-generation student getting a scholarship to learn abroad, our goal is to 
                make opportunity personal and accessible.
              </p>
              <p className="text-foreground leading-relaxed">
                We focus on practical impact, not performative work. We stay grounded in local realities while 
                thinking globally. Through mentorship, skills development, community building, and systems thinking, 
                our approach is built to scale, but never to lose sight of the individual lives we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-primary">
              Our Core Pillars
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Principles that 
              <span className="bg-gradient-primary bg-clip-text text-transparent">guide everything</span> we do
            </h2>
            <p className="text-lg text-muted-foreground">
              Our work is guided by key principles that reflect what we believe, how we operate, 
              and what we prioritize.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="group hover:shadow-primary transition-all duration-300 bg-gradient-card border-0">
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
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-primary">
              Our Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Youth-led</span> and youth-driven
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              YouthXcel is led by a passionate team of young professionals, mentors, and advocates who bring 
              lived experience, technical knowledge, and a deep commitment to youth equity and transformation.
            </p>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-left mb-8">
              <p className="text-foreground leading-relaxed mb-4">
                Though we are early in our journey, we are backed by a growing network of advisors, partners, 
                and collaborators who believe in our mission and help us build responsibly.
              </p>
              <p className="text-foreground leading-relaxed">
                At our core, we are youth-led and youth-driven. Every member of our team brings a personal 
                understanding of what it means to grow up with potential but without access, and that insight 
                shapes every decision we make.
              </p>
            </div>
            
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
      </section>
    </div>
  );
};

export default About;