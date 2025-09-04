import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Upload,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
  Camera,
  Save,
  Send,
  ArrowRight,
  Calendar,
  Building
} from 'lucide-react';

const ApplicationPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    education: {},
    preferences: {},
    documents: {}
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    { id: 1, title: 'Personal Information', icon: User, color: 'from-purple-500 to-purple-700' },
    { id: 2, title: 'Educational Background', icon: GraduationCap, color: 'from-cyan-500 to-cyan-700' },
    { id: 3, title: 'Preferences', icon: Briefcase, color: 'from-emerald-500 to-emerald-700' },
    { id: 4, title: 'Document Upload', icon: Upload, color: 'from-pink-500 to-pink-700' },
    { id: 5, title: 'Review & Submit', icon: Send, color: 'from-rose-500 to-orange-500' }
  ];

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    alert('Application submitted successfully! You will receive a confirmation email shortly.');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-300 mb-2">Full Name *</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all backlight-hover"
                  placeholder="Enter your full name"
                  onChange={(e) => handleInputChange('personalInfo', 'fullName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Date of Birth *</label>
                <input 
                  type="date" 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all backlight-hover"
                  onChange={(e) => handleInputChange('personalInfo', 'dateOfBirth', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all backlight-hover"
                  placeholder="your.email@example.com"
                  onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all backlight-hover"
                  placeholder="+91 98765 43210"
                  onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-slate-300 mb-2">Address *</label>
                <textarea 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all backlight-hover" 
                  rows="3"
                  placeholder="Enter your complete address"
                  onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Educational Background</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-300 mb-2">Highest Qualification *</label>
                <select 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backlight-hover"
                  onChange={(e) => handleInputChange('education', 'qualification', e.target.value)}
                >
                  <option value="">Select qualification</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="diploma">Diploma</option>
                  <option value="final-year">Final Year Student</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Field of Study *</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backlight-hover"
                  placeholder="e.g., Computer Science, Commerce"
                  onChange={(e) => handleInputChange('education', 'field', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Institution Name *</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backlight-hover"
                  placeholder="University/College name"
                  onChange={(e) => handleInputChange('education', 'institution', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Year of Passing *</label>
                <select 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backlight-hover"
                  onChange={(e) => handleInputChange('education', 'year', e.target.value)}
                >
                  <option value="">Select year</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2025">2025 (Expected)</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-300 mb-2">CGPA/Percentage *</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backlight-hover"
                  placeholder="e.g., 8.5 CGPA or 85%"
                  onChange={(e) => handleInputChange('education', 'grade', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Internship Preferences</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-300 mb-2">Preferred Sector *</label>
                <select 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all backlight-hover"
                  onChange={(e) => handleInputChange('preferences', 'sector', e.target.value)}
                >
                  <option value="">Select sector</option>
                  <option value="it">Information Technology</option>
                  <option value="finance">Banking & Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="government">Government Services</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Preferred Location *</label>
                <select 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all backlight-hover"
                  onChange={(e) => handleInputChange('preferences', 'location', e.target.value)}
                >
                  <option value="">Select location</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="chennai">Chennai</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="pune">Pune</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-slate-300 mb-2">Skills & Interests</label>
                <textarea 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all backlight-hover" 
                  rows="4"
                  placeholder="Describe your skills, interests, and career goals..."
                  onChange={(e) => handleInputChange('preferences', 'skills', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Document Upload</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Aadhaar Card', key: 'aadhaar', required: true },
                { name: 'Educational Certificate', key: 'education', required: true },
                { name: 'Income Certificate', key: 'income', required: true },
                { name: 'Passport Photo', key: 'photo', required: true },
                { name: 'Resume/CV', key: 'resume', required: false },
                { name: 'Additional Documents', key: 'additional', required: false }
              ].map((doc, index) => (
                <div key={index} className="space-y-3">
                  <label className="block text-slate-300">
                    {doc.name} {doc.required && <span className="text-pink-400">*</span>}
                  </label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-pink-400/50 transition-all backlight-hover glow-border">
                    <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-slate-400 mb-2">Click to upload or drag and drop</p>
                    <p className="text-xs text-slate-500">PDF, JPG, PNG (Max 5MB)</p>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleInputChange('documents', doc.key, e.target.files[0])}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Review & Submit</h3>
            <Card className="bg-white/5 border border-white/10 backlight-hover">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-white mb-4">Application Summary</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-slate-300">Full Name:</span>
                    <span className="text-white">{formData.personalInfo?.fullName || 'Not provided'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-slate-300">Email:</span>
                    <span className="text-white">{formData.personalInfo?.email || 'Not provided'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-slate-300">Qualification:</span>
                    <span className="text-white">{formData.education?.qualification || 'Not provided'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-slate-300">Preferred Sector:</span>
                    <span className="text-white">{formData.preferences?.sector || 'Not provided'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 border border-emerald-400/30 backlight-hover">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Declaration</h4>
                    <p className="text-slate-300 leading-relaxed">
                      I hereby declare that all the information provided in this application is true and correct 
                      to the best of my knowledge. I understand that any false information may lead to 
                      disqualification from the program.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pb-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <section className="text-center mb-20 py-20">
          <h1 className="text-7xl font-black mb-8">
            <span className="block text-gradient-animate">Submit Your</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Application
            </span>
          </h1>
          
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Complete your application in 5 simple steps. Make sure to fill all required fields 
            and upload the necessary documents.
          </p>
        </section>

        {/* Progress Steps */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center relative">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all duration-300 backlight-hover glow-border ${
                  currentStep >= step.id 
                    ? `bg-gradient-to-br ${step.color} text-white scale-110` 
                    : 'bg-white/10 text-slate-400 border border-white/20'
                }`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <span className={`text-sm font-medium transition-colors ${
                  currentStep >= step.id ? 'text-white' : 'text-slate-400'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`absolute top-8 left-16 w-24 h-0.5 transition-colors ${
                    currentStep > step.id ? 'bg-gradient-to-r from-purple-500 to-cyan-500' : 'bg-white/20'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Form Content */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 backlight-hover glow-border">
            <CardContent className="p-12">
              {renderStepContent()}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12">
                <Button 
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  variant="outline"
                  className="border-2 border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-slate-900 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 backlight-hover disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </Button>
                
                {currentStep < 5 ? (
                  <Button 
                    onClick={handleNext}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 backlight-hover glow-border group"
                  >
                    Next
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-12 py-3 rounded-full font-bold transition-all duration-300 hover:scale-110 backlight-hover glow-border group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Submit Application
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Help Section */}
        <section className="mt-20">
          <Card className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-400/30 backlight-hover glow-border">
            <CardContent className="p-8 text-center">
              <AlertCircle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                If you face any issues while filling the application or have questions about the process, 
                our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 backlight-hover">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Support
                </Button>
                <Button variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 backlight-hover">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ApplicationPage;