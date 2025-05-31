import React, { useState, useEffect } from 'react';
import { Upload, CheckCircle, CreditCard, Calendar } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { initializeGoogleApi, getAuthToken, uploadToDrive, appendToSheet } from '@/lib/googleApi';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    course: '',
    paymentProof: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleApiInitialized, setIsGoogleApiInitialized] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const courses = [
    'Web Development',
    'Artificial Intelligence', 
    'Agentic AI',
    'Data Analysis'
  ];

  useEffect(() => {
    const initGoogleApi = async () => {
      try {
        await initializeGoogleApi();
        setIsGoogleApiInitialized(true);
      } catch (error) {
        console.error('Error initializing Google API:', error);
        toast({
          title: "Error",
          description: "Failed to initialize Google services. Please refresh the page.",
          variant: "destructive"
        });
      }
    };

    initGoogleApi();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const maxSize = 1024 * 1024; // 1MB
      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 1MB",
          variant: "destructive"
        });
        return;
      }
      setFormData(prev => ({
        ...prev,
        paymentProof: file
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.whatsapp || !formData.course) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
          variant: "destructive"
        });
        return;
      }

      // Get authentication token
      try {
        await getAuthToken();
        setIsAuthenticated(true);
      } catch (authError) {
        console.error('Authentication error:', authError);
        toast({
          title: "Authentication Failed",
          description: "Please try again or contact support if the issue persists.",
          variant: "destructive"
        });
        return;
      }

      // Upload file to Google Drive if exists
      let paymentProofLink = '';
      if (formData.paymentProof) {
        try {
          const driveResponse = await uploadToDrive(formData.paymentProof);
          paymentProofLink = driveResponse.webViewLink || '';
        } catch (uploadError) {
          console.error('File upload error:', uploadError);
          toast({
            title: "File Upload Failed",
            description: "There was an error uploading your payment proof. Please try again.",
            variant: "destructive"
          });
          return;
        }
      }

      // Append data to Google Sheet
      try {
        await appendToSheet({
          ...formData,
          paymentProofLink
        });

        toast({
          title: "Registration Successful!",
          description: "We'll contact you within 24 hours to confirm your enrollment.",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          whatsapp: '',
          course: '',
          paymentProof: null
        });
      } catch (sheetError) {
        console.error('Sheet update error:', sheetError);
        toast({
          title: "Registration Failed",
          description: "There was an error saving your registration. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Registration Failed",
        description: "There was an error processing your registration. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📅 Fee & Registration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your spot in Batch 2 with our flexible payment options
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Payment Information */}
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                <CreditCard className="mr-3" size={28} />
                Fee Structure
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total Course Fee:</span>
                  <span className="text-2xl font-bold text-green-800">30,000 PKR</span>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Duration:</strong> 3 Months
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <Calendar className="mr-2" size={24} />
                OR Installment Plan
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Month 1:</span>
                  <span className="font-semibold">15,000 PKR</span>
                </div>
                <div className="flex justify-between">
                  <span>Month 2:</span>
                  <span className="font-semibold">10,000 PKR</span>
                </div>
                <div className="flex justify-between">
                  <span>Month 3:</span>
                  <span className="font-semibold">5,000 PKR</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Payment Information</h4>
              <div className="text-sm space-y-2 text-gray-700">
                <p><strong>Account Title:</strong> AI DATA HOUSE (SMC PRIVATE) LIMITED</p>
                <p><strong>IBAN:</strong> PK50FAYS3627301000000722</p>
                <p><strong>Branch:</strong> 3627 (IBB PRIME MALL TOP CITY, ISB)</p>
                <p><strong>Swift Code:</strong> FAYSPKKA</p>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Registration</h3>
            <p className="text-gray-600 mb-6">Upload proof of payment to confirm your enrollment.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="+92 XXX XXXXXXX"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Course *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Choose your course</option>
                  {courses.map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Payment Screenshot
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                    className="hidden"
                    id="payment-proof"
                  />
                  <label
                    htmlFor="payment-proof"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <Upload className="text-gray-400 mb-2" size={32} />
                    <span className="text-gray-600">
                      {formData.paymentProof ? formData.paymentProof.name : "Click to upload file"}
                    </span>
                    <span className="text-xs text-gray-500 mt-1">
                      Supports: JPG, PNG, PDF, DOC (Max 1MB)
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-800 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2" size={20} />
                    Submit Registration
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
