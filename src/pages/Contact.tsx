import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail,
  MapPin,
  Phone,
  Clock,
  Users,
  Building,
  Heart,
  MessageCircle,
  Send,
  Linkedin,
  Facebook,
  Instagram
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    type: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      type: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactReasons = [
    {
      icon: Users,
      title: "I'm a Young Person",
      description: "Looking for opportunities, programs, or support",
      action: "Connect with Us"
    },
    {
      icon: Building,
      title: "I'm an Organization",
      description: "Interested in partnership or collaboration",
      action: "Explore Partnership"
    },
    {
      icon: Heart,
      title: "I Want to Support",
      description: "Looking to donate, volunteer, or sponsor programs",
      action: "Get Involved"
    },
    {
      icon: MessageCircle,
      title: "General Inquiry",
      description: "Questions about our work or feedback",
      action: "Ask Questions"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@youthxcel.org",
      description: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: "Nigeria (Multi-state presence)",
      description: "Expanding across Africa"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "Monday to Friday, 9 AM - 5 PM WAT"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-primary">
              Contact Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Let's start a 
              <span className="bg-gradient-primary bg-clip-text text-transparent">conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you're a young person seeking opportunities, an organization looking to partner, 
              or someone who wants to support our mission, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why 
              <span className="bg-gradient-primary bg-clip-text text-transparent">reach out?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Every conversation is an opportunity to create connections, unlock potential, 
              and build bridges to a better future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactReasons.map((reason, index) => (
              <Card key={index} className="group hover:shadow-primary transition-all duration-300 bg-gradient-card border-0 text-center">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {reason.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {reason.description}
                  </p>
                  
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {reason.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-white/80 backdrop-blur border-0 shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="organization">Organization (Optional)</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Your organization"
                      />
                    </div>
                    <div>
                      <Label htmlFor="type">I am a... *</Label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Please select</option>
                        <option value="young-person">Young Person</option>
                        <option value="organization">Organization Representative</option>
                        <option value="educator">Educator</option>
                        <option value="supporter">Supporter/Donor</option>
                        <option value="media">Media/Press</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you, or how you'd like to get involved..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-primary border-0 hover:opacity-90 shadow-primary"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're here to listen, support, and connect. Every message matters to us, 
                  and we're committed to responding thoughtfully and promptly.
                </p>
              </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-primary font-medium mb-1">youthexcelteam@gmail.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Location</h4>
                      <p className="text-primary font-medium mb-1">Nigeria</p>
                      <p className="text-sm text-muted-foreground">Expanding across Africa</p>
                    </div>
                  </div>
                </div>

              {/* Social Media */}
              <div className="border-t pt-8">
                <h4 className="font-semibold text-foreground mb-4">Follow our journey</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href="mailto:youthexcelteam@gmail.com">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href="https://www.linkedin.com/company/youthxcel" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href="https://www.facebook.com/youthx" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href="https://www.instagram.com/youthxcel_/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-white/60 backdrop-blur rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-2">Our Promise</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We value every connection and will respond to your message within 24 hours. 
                  If you need immediate assistance, please indicate that in your message and 
                  we'll prioritize your inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations and Presence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-primary">
              Our Presence
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Growing 
              <span className="bg-gradient-primary bg-clip-text text-transparent">across Africa</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              While based in Nigeria, our programs and partnerships span multiple states and countries. 
              We're building a continent-wide network of youth empowerment.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-card border-0 shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">6+</div>
                  <div className="text-lg font-semibold text-foreground mb-2">States in Nigeria</div>
                  <p className="text-sm text-muted-foreground">
                    Active programs and partnerships across Nigeria
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30+</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Communities</div>
                  <p className="text-sm text-muted-foreground">
                    Rural and underserved areas with active programs
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Countries (Goal)</div>
                  <p className="text-sm text-muted-foreground">
                    Expanding across West Africa by 2025
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
