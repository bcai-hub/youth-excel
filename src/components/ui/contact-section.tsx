import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "youthexcelteam@gmail.com",
      description: "Get in touch with our team"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We'll get back to you quickly"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:youthxcelteam@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Redirecting to email client",
      description: "Your default email client will open with the message.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-section bg-accent-soft-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-body-text leading-relaxed">
            Youth are not just the future, they're shaping the present. We're here to stand with them until access is no longer a privilege.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white border-0 shadow-card">
            <CardContent className="p-8">
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90 font-body font-semibold group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-body-text leading-relaxed mb-8">
                We're here to support you on your journey. Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="font-medium text-primary mb-1">{info.details}</p>
                      <p className="text-body-text text-sm">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional CTA */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6">
                <h4 className="font-heading font-semibold text-xl text-foreground mb-3">
                  Ready to get involved?
                </h4>
                <div className="flex flex-col gap-3">
                  <Button className="bg-gradient-primary hover:opacity-90 font-body font-semibold w-full">
                    Support Our Work
                  </Button>
                  <Button variant="outline" className="font-body font-semibold w-full">
                    See Opportunities for Youth
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
