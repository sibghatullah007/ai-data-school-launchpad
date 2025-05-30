
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Hassan",
      course: "Web Development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube video ID
      quote: "AI Data School transformed my career. The hands-on training was exactly what I needed to land my dream job.",
      rating: 5
    },
    {
      id: 2,
      name: "Fatima Ali",
      course: "Data Analysis",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube video ID
      quote: "The instructors are industry experts who really care about student success. Best investment I've made!",
      rating: 5
    },
    {
      id: 3,
      name: "Muhammad Khan",
      course: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube video ID
      quote: "From zero to AI expert in 3 months. The project-based learning approach made all the difference.",
      rating: 5
    },
    {
      id: 4,
      name: "Sara Malik",
      course: "Agentic AI",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube video ID
      quote: "The automation skills I learned here helped me start my own digital agency. Amazing program!",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from graduates who transformed their careers with AI Data School
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 mx-auto max-w-4xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Video Section */}
                      <div className="relative">
                        <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden relative group cursor-pointer">
                          <img
                            src={`https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`}
                            alt="Video thumbnail"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                            <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                              <Play className="text-white" size={32} fill="white" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                            <p className="text-green-600 font-medium">{testimonial.course}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="text-yellow-400 fill-current" size={24} />
                          ))}
                        </div>

                        <blockquote className="text-lg text-gray-700 italic">
                          "{testimonial.quote}"
                        </blockquote>

                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <p className="text-green-800 font-medium text-sm">
                            ✅ Successfully completed {testimonial.course} program
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <ChevronLeft className="text-gray-600" size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <ChevronRight className="text-gray-600" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-green-600 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
