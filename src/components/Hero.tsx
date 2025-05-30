
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const courses = [
    { name: 'Web Development', id: 'web-dev' },
    { name: 'Artificial Intelligence', id: 'ai' },
    { name: 'Agentic AI', id: 'agentic-ai' },
    { name: 'Data Analysis', id: 'data-analysis' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-800 via-green-700 to-green-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="text-yellow-400 mr-2" size={32} />
          <span className="bg-yellow-400 text-green-900 px-4 py-2 rounded-full font-bold text-sm">
            🔥 BATCH 2 NOW STARTING
          </span>
          <Sparkles className="text-yellow-400 ml-2" size={32} />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Secure Your Seat Today!
        </h1>
        
        <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto">
          Master the Future with Onsite Hands-On Tech Training
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {courses.map((course, index) => (
            <button
              key={course.id}
              onClick={() => scrollToSection('courses')}
              className="group bg-white text-green-800 px-6 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <span className="flex items-center justify-center">
                {course.name}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </button>
          ))}
        </div>

        <div className="text-green-100 text-lg">
          <p className="mb-2">🕐 Training Hours: 12 PM – 9 PM</p>
          <p>📍 Onsite Program at AI Data House, G-12, Islamabad</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
