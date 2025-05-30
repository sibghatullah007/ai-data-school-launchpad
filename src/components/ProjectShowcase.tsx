
import React from 'react';
import { ExternalLink, Github, Lightbulb, Target, Rocket } from 'lucide-react';

const ProjectShowcase = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Capstone Project: Built by Students at AI Data House
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get real experience by contributing to a real AI Data House project during your training
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Lightbulb className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Real-World Application</h3>
              </div>
              <p className="text-gray-600">
                Work on live projects that are actually used by AI Data House and our clients. 
                Your code contributes to real business solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Client Case Studies</h3>
              </div>
              <p className="text-gray-600">
                Solve actual business problems for real clients, giving you invaluable 
                experience in understanding requirements and delivering solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Rocket className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Live Deployment</h3>
              </div>
              <p className="text-gray-600">
                Deploy your projects to live environments, learning about production 
                deployment, monitoring, and maintenance.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-green-600 to-green-700">
                <h3 className="text-2xl font-bold text-white mb-2">Featured Student Project</h3>
                <p className="text-green-100">AI-Powered Analytics Dashboard</p>
              </div>
              
              <div className="p-6">
                <div className="bg-gray-100 h-48 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📊</div>
                    <p className="text-gray-600 font-medium">Interactive Dashboard Preview</p>
                    <p className="text-sm text-gray-500">Real-time data visualization with AI insights</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Technologies Used:</span>
                    <div className="flex space-x-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Python</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">AI/ML</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Project Duration:</span>
                    <span className="font-semibold">4 weeks</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Team Size:</span>
                    <span className="font-semibold">3 students</span>
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-6">
                  <button className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    <Github size={16} />
                    <span>View Code</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
