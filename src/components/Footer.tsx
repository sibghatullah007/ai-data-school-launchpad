
import React from 'react';
import { Facebook, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/9ba10c78-9523-4f05-ad13-b77c5df816b9.png" 
                alt="AI Data School" 
                className="h-12 w-auto mr-3"
              />
            </div>
            <p className="text-green-100 mb-4 max-w-md">
              Transform your career with hands-on tech training at Pakistan's premier AI and data science institute.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-green-100">
                <MapPin size={16} className="mr-2" />
                <span className="text-sm">AI Data House 787, G-12, Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center text-green-100">
                <Phone size={16} className="mr-2" />
                <span className="text-sm">+92 314 3937859</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('courses')}
                  className="text-green-100 hover:text-white transition-colors text-sm"
                >
                  Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('certification')}
                  className="text-green-100 hover:text-white transition-colors text-sm"
                >
                  Certification
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-green-100 hover:text-white transition-colors text-sm"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('registration')}
                  className="text-green-100 hover:text-white transition-colors text-sm"
                >
                  Register Now
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a
                href="https://facebook.com/aidataschool"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-100 hover:text-white transition-colors text-sm group"
              >
                <Facebook size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                Follow us on Facebook
              </a>
              <a
                href="tel:+923143937859"
                className="flex items-center text-green-100 hover:text-white transition-colors text-sm group"
              >
                <Phone size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                Call for Inquiry
              </a>
              <a
                href="mailto:info@aidataschool.com"
                className="flex items-center text-green-100 hover:text-white transition-colors text-sm group"
              >
                <Mail size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-100 text-sm">
              © 2024 AI Data School. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-green-100 text-sm">
                Powered by AI Data House (SMC Private) Limited
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
