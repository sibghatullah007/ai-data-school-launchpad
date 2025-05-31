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

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
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
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
