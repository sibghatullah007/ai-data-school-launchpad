
import React from 'react';
import { CheckCircle, XCircle, Users, Code, Building, Briefcase } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <CheckCircle className="text-green-600" size={24} />,
      title: "Learn Practical & In-Demand Skills",
      description: "Master technologies that companies are actively hiring for"
    },
    {
      icon: <Code className="text-green-600" size={24} />,
      title: "Hands-On Project-Based Learning",
      description: "Build real projects that you can showcase to employers"
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Industry Experts & Developers",
      description: "Learn from professionals working in top tech companies"
    },
    {
      icon: <Building className="text-green-600" size={24} />,
      title: "Real-time Software House Training",
      description: "Experience the actual working environment of a software house"
    },
    {
      icon: <Briefcase className="text-green-600" size={24} />,
      title: "High Probability of Hiring",
      description: "Direct pathway to employment with our industry connections"
    }
  ];

  const disadvantages = [
    "❌ Miss Out on Future-Proof Skills",
    "❌ No Practical Project Experience", 
    "❌ Lower Visibility in Tech Job Market",
    "❌ Miss Software House Culture Exposure"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Join AI Data School?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your career with practical, industry-aligned training that leads to real opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-8 flex items-center">
              <CheckCircle className="mr-3" size={32} />
              Benefits of Joining
            </h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-300"
                >
                  {benefit.icon}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Disadvantages */}
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-8 flex items-center">
              <XCircle className="mr-3" size={32} />
              Cost of Not Joining
            </h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
              <div className="space-y-4">
                {disadvantages.map((disadvantage, index) => (
                  <div 
                    key={index}
                    className="flex items-center text-red-800 font-medium"
                  >
                    <span className="text-lg">{disadvantage}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-red-100 rounded-lg">
                <p className="text-red-800 font-semibold">
                  Don't let opportunities pass by. The tech industry is rapidly evolving, and the time to upskill is NOW.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
