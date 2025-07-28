import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BookOpen,
  Download,
  ExternalLink,
  Video,
  FileText,
  Users,
  Lightbulb,
  Target,
  ArrowRight,
  Globe
} from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "For Young People",
      icon: Users,
      description: "Tools, guides, and opportunities to help you unlock your potential",
      resources: [
        {
          name: "Scholarship Database",
          type: "database",
          icon: BookOpen,
          description: "Curated list of scholarships, grants, and educational opportunities for African youth",
          status: "live",
          action: "Browse Opportunities"
        },
        {
          name: "Skills Development Toolkit",
          type: "guide",
          icon: Lightbulb,
          description: "Practical guides for building digital, entrepreneurial, and life skills",
          status: "live",
          action: "Download Guide"
        },
        {
          name: "Career Pathway Planner",
          type: "tool",
          icon: Target,
          description: "Interactive tool to help map your career journey and identify next steps",
          status: "coming-soon",
          action: "Coming Soon"
        }
      ]
    },
    {
      title: "For Organizations",
      icon: Globe,
      description: "Resources for partners, schools, and organizations working with youth",
      resources: [
        {
          name: "Youth Program Design Guide",
          type: "guide",
          icon: FileText,
          description: "Best practices for creating youth-centered programs that work",
          status: "live",
          action: "Download Guide"
        },
        {
          name: "Partnership Toolkit",
          type: "toolkit",
          icon: Users,
          description: "Framework for building effective youth empowerment partnerships",
          status: "live",
          action: "Get Toolkit"
        },
        {
          name: "Impact Measurement Framework",
          type: "framework",
          icon: Target,
          description: "Tools and methods for measuring youth program impact",
          status: "coming-soon",
          action: "Coming Soon"
        }
      ]
    }
  ];

  const featuredResources = [
    {
      title: "The State of African Youth: Opportunities and Barriers",
      type: "Research Report",
      description: "Comprehensive analysis of the challenges and opportunities facing young people across Africa, with actionable insights for change-makers.",
      downloadSize: "2.3 MB",
      pages: "45 pages",
      lastUpdated: "December 2024",
      featured: true
    },
    {
      title: "Building Bridges: A Guide to Youth-to-Youth Learning",
      type: "Implementation Guide",
      description: "Step-by-step guide for implementing peer-to-peer learning programs, based on our YouthXChange model.",
      downloadSize: "1.8 MB",
      pages: "32 pages",
      lastUpdated: "November 2024",
      featured: true
    },
    {
      title: "Digital Skills for Rural Youth",
      type: "Training Manual",
      description: "Practical training manual for delivering digital literacy programs in low-resource settings.",
      downloadSize: "3.1 MB",
      pages: "68 pages",
      lastUpdated: "October 2024",
      featured: true
    }
  ];

  const webinarSeries = [
    {
      title: "Youth Voices: Leading Change in Communities",
      date: "January 15, 2025",
      time: "2:00 PM WAT",
      speakers: ["Young community leaders", "YouthXcel team"],
      description: "Hear directly from young changemakers about their journey and impact in their communities.",
      status: "upcoming",
      registrationLink: "/register-webinar-1"
    },
    {
      title: "Partnerships that Work: Lessons from the Field",
      date: "February 12, 2025",
      time: "3:00 PM WAT",
      speakers: ["Partner organizations", "Youth participants"],
      description: "Learn about effective partnership models and what makes youth programs successful.",
      status: "upcoming",
      registrationLink: "/register-webinar-2"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Resources & Tools
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Access guides, toolkits, and resources designed to empower young people 
            and organizations working with youth.
          </p>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-12 border border-primary/10">
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-8 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">📚</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Coming Soon</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're developing comprehensive resources including toolkits, guides, 
                and learning materials to support youth empowerment initiatives. 
                Our resource library will feature practical tools for skill development, 
                career guidance, and leadership training.
              </p>
              <div className="bg-gradient-hero p-6 rounded-lg">
                <p className="text-white font-medium">
                  Be the first to know when our resources go live!
                </p>
                <p className="text-white/80 text-sm mt-2">
                  Contact us at youthexcelteam@gmail.com to stay updated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;