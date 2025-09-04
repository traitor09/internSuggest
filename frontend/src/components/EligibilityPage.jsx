import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  CheckCircle,
  X,
  User,
  GraduationCap,
  Briefcase,
  IndianRupee,
  MapPin,
  Calendar,
  Award,
  Target,
  ArrowRight,
  AlertCircle,
  Clock
} from 'lucide-react';
import { mockData } from '../data/mock';

const EligibilityPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedCriteria, setSelectedCriteria] = useState(null);
  const [eligibilityChecked, setEligibilityChecked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const checkEligibility = () => {
    setEligibilityChecked(true);
    // Simulate eligibility check
    setTimeout(() => {
      alert('Based on the criteria, you appear to be eligible! Proceed to application.');
    }, 1000);
  };

  const criteriaDetails = [
    {
      id: 'age',
      icon: User,
      title: 'Age Requirement',
      requirement: '21-24 years old',
      description: 'You must be between 21-24 years old at the time of application',
      details: [
        'Must have completed 21 years',
        'Should not exceed 24 years',
        'Age calculated as on application date',
        'Valid government ID required for verification'
      ],
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Educational Background',
      requirement: 'Graduate or Final Year Student',
      description: 'Completed graduation or in final year from recognized institution',
      details: [
        'Minimum graduation degree required',
        'Final year students eligible',
        'Institution must be UGC/AICTE recognized',
        'All streams and disciplines accepted'
      ],
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      id: 'employment',
      icon: Briefcase,
      title: 'Employment Status',
      requirement: 'Not Currently Employed',
      description: 'Should not be employed full-time in any organization',
      details: [
        'Must not have full-time employment',
        'Part-time/freelance work acceptable',
        'Previous work experience considered',
        'Self-employment cases reviewed individually'
      ],
      color: 'from-emerald-500 to-emerald-700'
    },
    {
      id: 'income',
      icon: IndianRupee,
      title: 'Family Income',
      requirement: 'Below ₹8 Lakhs Annual',
      description: 'Total family income should be less than ₹8 lakhs per annum',
      details: [
        'Combined family income considered',
        'All sources of income included',
        'Income certificate required',
        'Recent tax returns as proof'
      ],
      color: 'from-pink-500 to-pink-700'
    },
    {
      id: 'citizenship',
      icon: MapPin,
      title: 'Citizenship',
      requirement: 'Indian Citizen',
      description: 'Must be an Indian citizen with valid government ID',
      details: [
        'Valid Aadhaar card mandatory',
        'Indian passport acceptable',
        'Voter ID or other government ID',
        'Domicile certificate may be required'
      ],
      color: 'from-rose-500 to-orange-500'
    }
  ];

  return (
    <div className="pb-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <section className="text-center mb-20 py-20">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 rounded-3xl blur-3xl -z-10"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          />
          
          <h1 className="text-7xl font-black mb-8">
            <span className="block text-gradient-animate">Check Your</span>
            <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Eligibility
            </span>
          </h1>
          
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Ensure you meet all the requirements for the PM Internship Program. 
            Review each criterion carefully before applying.
          </p>

          <Button 
            onClick={checkEligibility}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 hover:scale-110 backlight-hover glow-border group"
          >
            <Target className="w-6 h-6 mr-3 group-hover:rotate-90 transition-transform duration-300" />
            Quick Eligibility Check
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </section>

        {/* Detailed Criteria */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Detailed Requirements
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Click on each criterion to learn more about the specific requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {criteriaDetails.map((criteria, index) => (
              <Card 
                key={criteria.id}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 backlight-hover glow-border ${
                  selectedCriteria === criteria.id 
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/30' 
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                } backdrop-blur-sm`}
                onClick={() => setSelectedCriteria(selectedCriteria === criteria.id ? null : criteria.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${criteria.color} rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 backlight-hover glow-border`}>
                    <criteria.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                    {criteria.title}
                  </CardTitle>
                  <div className="text-lg font-semibold text-cyan-400">{criteria.requirement}</div>
                </CardHeader>

                <CardContent>
                  <p className="text-slate-300 mb-4 leading-relaxed">{criteria.description}</p>
                  
                  {selectedCriteria === criteria.id && (
                    <div className="mt-6 space-y-3 animate-fadeInUp">
                      <h4 className="font-bold text-white mb-3 flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2 text-purple-400" />
                        Detailed Requirements:
                      </h4>
                      {criteria.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Eligibility Checklist */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 backdrop-blur-xl border border-emerald-400/30 hover:border-emerald-400/50 glow-border backlight-hover">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl font-bold text-white flex items-center justify-center space-x-4">
                <div className="p-4 bg-emerald-500/20 rounded-full backlight-hover glow-border">
                  <Award className="w-10 h-10 text-emerald-400" />
                </div>
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Self-Assessment Checklist
                </span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="max-w-4xl mx-auto">
              <p className="text-xl text-slate-300 text-center mb-12 leading-relaxed">
                Use this checklist to quickly verify if you meet all requirements
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {mockData.eligibility.map((criteria, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:scale-105 backlight-hover"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center cursor-pointer hover:bg-emerald-400/20 transition-colors">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-lg mb-1">{criteria.title}</h4>
                      <p className="text-slate-300">{criteria.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button 
                  onClick={checkEligibility}
                  className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-16 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:scale-110 backlight-hover glow-border group"
                >
                  <span className="flex items-center gap-3">
                    {eligibilityChecked ? (
                      <>
                        <CheckCircle className="w-6 h-6" />
                        Eligibility Verified
                      </>
                    ) : (
                      <>
                        <Clock className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                        Verify Eligibility
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Important Notes */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 backdrop-blur-xl border border-yellow-400/30 glow-border backlight-hover">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold text-white flex items-center justify-center space-x-3">
                <AlertCircle className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400">Important Notes</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white mb-4">Required Documents:</h4>
                  <ul className="space-y-3">
                    {[
                      'Valid Aadhaar Card',
                      'Educational Certificates',
                      'Income Certificate',
                      'Domicile Certificate',
                      'Recent Passport Photos',
                      'Bank Account Details'
                    ].map((doc, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span className="text-slate-300">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white mb-4">Application Tips:</h4>
                  <ul className="space-y-3">
                    {[
                      'Ensure all documents are valid',
                      'Double-check eligibility criteria',
                      'Prepare digital copies',
                      'Complete application in one session',
                      'Submit before deadline',
                      'Keep application number safe'
                    ].map((tip, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <ArrowRight className="w-5 h-5 text-cyan-400" />
                        <span className="text-slate-300">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="text-center bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-16 border border-purple-400/20 glow-border backlight-hover">
          <h3 className="text-5xl font-black bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-8">
            Ready to Apply?
          </h3>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            If you meet all the eligibility criteria, take the next step towards 
            transforming your career with the PM Internship Program.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 hover:scale-110 backlight-hover glow-border group">
              <CheckCircle className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Start Application
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button variant="outline" className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 backlight-hover glow-border backdrop-blur-sm bg-white/5">
              <AlertCircle className="w-6 h-6 mr-3" />
              Need Help?
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EligibilityPage;