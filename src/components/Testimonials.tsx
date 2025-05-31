import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Mahnoor Malik",
      course: "Senior Data Analyst at AI Data House",
      image: "/lovable-uploads/mahnoor.png",
      videoId: "wLITv_4gYyg",
      quote: "AI Data School provided me with the perfect platform to grow into a leadership role. The advanced analytics training and mentorship helped me excel in my career.",
      rating: 5
    },
    {
      id: 2,
      name: "Muhammad Dawood",
      course: "Agentic AI Intern at AI Data House",
      image: "/lovable-uploads/dawood.png",
      videoId: "3XxomATYX9w",
      quote: "As an intern, I'm amazed by the practical exposure I'm getting. Working on real AI automation projects has accelerated my learning curve tremendously.",
      rating: 5
    },
    {
      id: 3,
      name: "Muhammad Shoaib",
      course: "Data Analyst Intern at AI Data House",
      image: "/lovable-uploads/shoiab.png",
      videoId: "BF5s1fYnPuM",
      quote: "The internship program here is exceptional. I've learned more in three months than I did in my entire academic career. The hands-on experience is invaluable.",
      rating: 5
    },
    {
      id: 4,
      name: "Uzair Razzaq",
      course: "AI Engineer at AI Data House",
      image: "/lovable-uploads/uzair.png",
      videoId: "EG8gAkCb0LA",
      quote: "The advanced AI engineering skills I developed here have opened up incredible opportunities. The program's focus on cutting-edge technologies is exactly what the industry needs.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleVideoClick = (videoId: string) => {
    setPlayingVideo(videoId);
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
                        {playingVideo === testimonial.videoId ? (
                          <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden">
                            <iframe
                              src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1`}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          </div>
                        ) : (
                          <div 
                            className="aspect-video bg-gray-900 rounded-xl overflow-hidden relative group cursor-pointer"
                            onClick={() => handleVideoClick(testimonial.videoId)}
                          >
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
                        )}
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
