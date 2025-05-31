import { ArrowRight, Clock, Users, Award } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 'web-development',
      title: 'Web Development',
      image: '/lovable-uploads/WebDevelopment.svg',
      description: 'Build modern, responsive web applications with the latest technologies',
      topics: ['HTML & CSS', 'JavaScript & React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'AI Integration'],
      duration: '3 Months',
      level: 'Beginner to Advanced'
    },
    {
      id: 'artificial-intelligence',
      title: 'Artificial Intelligence',
      image: '/lovable-uploads/MLEngineer.svg',
      description: 'Master machine learning and deep learning to build intelligent systems',
      topics: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Natural Language Processing', 'TensorFlow', 'PyTorch'],
      duration: '3 Months',
      level: 'Intermediate to Advanced'
    },
    {
      id: 'agentic-ai',
      title: 'Agentic AI',
      image: '/lovable-uploads/AgenticAI.svg',
      description: 'Create autonomous AI agents and automation workflows',
      topics: ['Zapier', 'Make.com', 'N8N', 'Relevance AI', 'Synthflow', 'GoHighLevel', 'AI Automation'],
      duration: '3 Months',
      level: 'Beginner to Intermediate'
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      image: '/lovable-uploads/DataAnalyst.svg',
      description: 'Transform raw data into actionable insights with powerful analytics tools',
      topics: ['Excel Advanced', 'Power BI', 'Tableau', 'Looker Studio', 'Python', 'Dashboard Design'],
      duration: '3 Months',
      level: 'Beginner to Advanced'
    }
  ];

  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Career Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-focused courses designed to get you hired in today's competitive tech market
          </p>
        </div>

        <div className="space-y-16">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300`}
            >
              <div className="lg:w-1/2 p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{course.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {course.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center text-gray-600">
                    <Clock size={20} className="mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award size={20} className="mr-2" />
                    <span>{course.level}</span>
                  </div>
                </div>

                <button
                  onClick={scrollToRegistration}
                  className="bg-green-800 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center group"
                >
                  Join Now – Secure Your Spot
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
              
              <div className="lg:w-1/2 p-8 flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-60 h-60 object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
