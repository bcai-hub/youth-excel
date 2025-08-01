import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/projects', label: 'Projects' },
    { href: '/stories', label: 'Stories' },
    { href: '/resources', label: 'Resources' }
  ];

  const aboutDropdownItems = [
    { href: '/who-we-are', label: 'Who We Are' },
    { href: '/our-approach', label: 'Our Approach' },
    { href: '/our-team', label: 'Our Team' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/4d7acd13-e7df-4457-9424-744ebc78df35.png" 
              alt="YouthXcel Logo" 
              className="h-10 w-10"
            />
            <span className="font-heading font-bold text-xl text-foreground">YouthXcel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-body font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-transparent bg-gradient-primary bg-clip-text'
                    : 'text-body-text hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 font-body font-medium transition-colors duration-200 ${
                location.pathname.includes('/about')
                  ? 'text-transparent bg-gradient-primary bg-clip-text'
                  : 'text-body-text hover:text-primary'
              }`}>
                About Us
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-border shadow-card z-50">
                {aboutDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link 
                      to={item.href}
                      className="font-body font-medium text-body-text hover:text-primary w-full"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <Button variant="outline" className="font-body font-medium">
                Get in Touch
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-gradient-primary hover:opacity-90 font-body font-medium">
                Join Us Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block px-3 py-2 rounded-md font-body font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-transparent bg-gradient-primary bg-clip-text'
                      : 'text-body-text hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* About Us Mobile Section */}
              <div className="border-t border-border pt-2 mt-2">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">About Us</div>
                {aboutDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-6 py-2 rounded-md font-body font-medium text-body-text hover:text-primary transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              <div className="pt-4 space-y-2">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full font-body font-medium">
                    Get in Touch
                  </Button>
                </Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-primary hover:opacity-90 font-body font-medium">
                    Join Us Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
