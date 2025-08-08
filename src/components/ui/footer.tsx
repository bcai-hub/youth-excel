import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Linkedin, Facebook, Instagram, Send, ArrowRight } from 'lucide-react';
const Footer = () => {
  const quickLinks = [{
    href: '/about',
    label: 'About Us'
  }, {
    href: '/solutions',
    label: 'Our Solutions'
  }, {
    href: '/projects',
    label: 'Projects'
  }, {
    href: '/stories',
    label: 'Success Stories'
  }];
  const getInvolvedLinks = [{
    href: '/contact',
    label: 'Join a Program'
  }, {
    href: '/contact',
    label: 'Partner With Us'
  }, {
    href: '/resources',
    label: 'Resources'
  }, {
    href: '/contact',
    label: 'Contact Us'
  }];
  const socialLinks = [{
    icon: Mail,
    href: 'mailto:youthexcelteam@gmail.com',
    label: 'Email',
    hoverColor: 'hover:bg-red-500'
  }, {
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/youthxcel',
    label: 'LinkedIn',
    hoverColor: 'hover:bg-blue-600'
  }, {
    icon: Facebook,
    href: 'https://www.facebook.com/youthx',
    label: 'Facebook',
    hoverColor: 'hover:bg-blue-500'
  }, {
    icon: Instagram,
    href: 'https://www.instagram.com/youthxcel_/',
    label: 'Instagram',
    hoverColor: 'hover:bg-pink-500'
  }];
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription
  };
  return <footer className="bg-footer-bg text-footer-text">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/4d7acd13-e7df-4457-9424-744ebc78df35.png" alt="YouthXcel Logo" className="h-10 w-10" />
              <span className="font-heading font-bold text-2xl text-white">YouthXcel</span>
            </div>
            <p className="text-footer-text/80 leading-relaxed">
              Empowering the next generation through opportunities, skills development, and mentorship programs that transform lives.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-3">
              {socialLinks.map(social => {
              const IconComponent = social.icon;
              return <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white transition-all duration-300 ${social.hoverColor} hover:scale-110`} aria-label={social.label}>
                    <IconComponent className="h-5 w-5" />
                  </a>;
            })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-xl text-white">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map(link => <Link key={link.href} to={link.href} className="block text-footer-text/80 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                  {link.label}
                </Link>)}
            </nav>
          </div>

          {/* Get Involved */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-xl text-white">Get Involved</h3>
            <nav className="space-y-3">
              {getInvolvedLinks.map(link => <Link key={link.href} to={link.href} className="block text-footer-text/80 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                  {link.label}
                </Link>)}
            </nav>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-xl text-white">Stay Updated</h3>
            <p className="text-footer-text/80">
              Subscribe to our newsletter for the latest updates and opportunities.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input type="email" placeholder="Enter your email" className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20" required />
              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 font-body font-semibold group">
                Subscribe
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-3xl text-white mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-xl text-footer-text/80 mb-8">
              Join thousands of young people who are already building brighter futures with YouthXcel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-body font-semibold group">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10 font-body font-semibold text-gray-800">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-footer-text/60 text-sm">
              © 2024 YouthXcel. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-footer-text/60 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-footer-text/60 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
