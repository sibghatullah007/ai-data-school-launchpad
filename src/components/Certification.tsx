
import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Certification = () => {
  return (
    <section id="certification" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Award className="text-green-600 mr-3" size={40} />
            <h2 className="text-4xl font-bold text-gray-900">
              Earn Industry-Recognized Certification
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get certified and stand out in the competitive job market with our comprehensive certification program
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-200 shadow-xl">
              <div className="text-center">
                <div className="w-full h-64 bg-white rounded-xl shadow-lg flex items-center justify-center mb-6 border-4 border-green-800">
                  <div className="text-center">
                    <div className="text-green-800 mb-4">
                      <Award size={60} />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">CERTIFICATE</h3>
                    <p className="text-green-700 font-semibold">AI Data School</p>
                    <div className="border-t-2 border-green-300 mt-4 pt-4">
                      <p className="text-green-600">This certifies that</p>
                      <p className="font-bold text-green-800 text-lg">[Student Name]</p>
                      <p className="text-green-600">has successfully completed</p>
                      <p className="font-bold text-green-800">[Course Name]</p>
                    </div>
                  </div>
                </div>
                <p className="text-green-700 font-semibold">Official Certificate Preview</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Your Path to Professional Recognition
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Industry Recognition</h4>
                  <p className="text-gray-600">Certificates recognized by leading tech companies and employers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Portfolio Projects</h4>
                  <p className="text-gray-600">Complete real-world projects that showcase your skills</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Final Assessment</h4>
                  <p className="text-gray-600">Comprehensive evaluation to ensure mastery of skills</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">LinkedIn Verification</h4>
                  <p className="text-gray-600">Add verified skills and certification to your professional profile</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <p className="text-green-800 font-medium">
                📄 <strong>Certificate Requirements:</strong> Receive a signed certificate from AI Data School upon course completion and final project submission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
