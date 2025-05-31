
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/05a37190-e0c0-4ec0-8f76-8fa475c5264c.png" 
              alt="AI Data School" 
              className="h-20 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-gray-700 hover:text-green-800 transition-colors"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('certification')}
              className="text-gray-700 hover:text-green-800 transition-colors"
            >
              Certification
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-green-800 transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('registration')}
              className="bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('courses')}
                className="text-gray-700 hover:text-green-800 text-left"
              >
                Courses
              </button>
              <button 
                onClick={() => scrollToSection('certification')}
                className="text-gray-700 hover:text-green-800 text-left"
              >
                Certification
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-green-800 text-left"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('registration')}
                className="bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-green-700 w-fit"
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
