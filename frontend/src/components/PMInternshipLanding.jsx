import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Star,
  TrendingUp,
  Award,
  Target,
  Calendar,
  Building,
  MapPin,
  Clock,
  ArrowRight,
  Zap,
  Heart,
  Shield,
  User,
  GraduationCap,
  IndianRupee,
  CheckCircle,
  Users,
  Briefcase,
  BookOpen,
  Globe,
  Lightbulb,
  Rocket,
  Trophy,
  Sparkles,
  Play,
  ChevronRight,
  BarChart,
  PieChart,
  TrendingDown
} from 'lucide-react';
import { mockData } from '../data/mock';

const PMInternshipLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: '50,000+', label: 'Students Registered', icon: Users, color: 'from-purple-500 to-purple-700' },
    { number: '1,200+', label: 'Partner Organizations', icon: Building, color: 'from-cyan-500 to-cyan-700' },
    { number: '₹5,000', label: 'Monthly Stipend', icon: IndianRupee, color: 'from-emerald-500 to-emerald-700' },
    { number: '95%', label: 'Success Rate', icon: TrendingUp, color: 'from-pink-500 to-pink-700' }
  ];

  return (
    <div className="pb-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <section className="text-center mb-20 relative py-20">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-3xl blur-3xl"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          ></div>
          
          <div className="relative z-10">
            <h1 className="text-7xl font-black mb-8 leading-tight">
              <span className="block text-gradient-animate">Transform Your</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Career Journey
              </span>
            </h1>
            
            <p className="text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Join India's premier internship program designed to bridge the gap between academia and industry. 
              Gain real-world experience, earn while you learn, and build a successful career foundation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <Button 
                onClick={() => navigate('/application')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 hover:scale-110 backlight-hover glow-border group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Start Your Journey
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 backlight-hover glow-border backdrop-blur-sm bg-white/5"
              >
                <Play className="w-6 h-6 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 backlight-hover glow-border"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Cards Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Your Path to Success
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover if you're eligible and explore the amazing benefits waiting for you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Eligibility Card */}
            <Card 
              className="group relative overflow-hidden bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/70 transition-all duration-500 hover:scale-105 card-glow backlight-hover"
              onMouseEnter={() => setHoveredCard('eligibility')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
              
              <CardHeader className="text-center relative z-10 pb-8">
                <CardTitle className="text-4xl font-bold text-white flex items-center justify-center space-x-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 bg-purple-500/20 rounded-full group-hover:bg-purple-500/40 transition-colors duration-300 group-hover:rotate-12 backlight-hover glow-border">
                    <User className="w-10 h-10 text-purple-400" />
                  </div>
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Are You Eligible?
                  </span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-5 relative z-10">
                {mockData.eligibility.map((criteria, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-5 p-5 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-400/30 group/item hover:scale-105 hover:translate-x-3 backlight-hover glow-border"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 bg-emerald-500/20 rounded-full group-hover/item:bg-purple-500/30 transition-colors duration-300 group-hover/item:rotate-12 backlight-hover">
                      <CheckCircle className="w-6 h-6 text-emerald-400 group-hover/item:text-purple-400 transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white group-hover/item:text-purple-200 transition-colors duration-300 text-xl mb-2">
                        {criteria.title}
                      </h4>
                      <p className="text-slate-300 group-hover/item:text-slate-200 transition-colors duration-300 leading-relaxed">
                        {criteria.description}
                      </p>
                    </div>
                  </div>
                ))}
                
                <Button 
                  onClick={() => navigate('/eligibility')}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-5 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-105 backlight-hover glow-border group/btn relative overflow-hidden mt-8"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Target className="w-6 h-6 group-hover/btn:rotate-90 transition-transform duration-300" />
                    Check Your Eligibility
                    <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </CardContent>
            </Card>

            {/* Benefits Card */}
            <Card 
              className="group relative overflow-hidden bg-gradient-to-br from-pink-900/20 via-rose-900/20 to-red-900/20 backdrop-blur-xl border border-pink-400/30 hover:border-pink-400/70 transition-all duration-500 hover:scale-105 card-glow backlight-hover"
              onMouseEnter={() => setHoveredCard('benefits')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-cyan-500/0 group-hover:from-pink-500/10 group-hover:to-cyan-500/10 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center relative z-10 pb-8">
                <CardTitle className="text-4xl font-bold text-white flex items-center justify-center space-x-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 bg-pink-500/20 rounded-full group-hover:bg-pink-500/40 transition-colors duration-300 group-hover:rotate-12 group-hover:scale-110 backlight-hover glow-border">
                    <IndianRupee className="w-10 h-10 text-pink-400" />
                  </div>
                  <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Amazing Benefits
                  </span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-5 relative z-10">
                {mockData.benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-5 p-5 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-pink-500/10 transition-all duration-300 border border-white/10 hover:border-pink-400/50 group/item hover:scale-105 hover:translate-x-3 backlight-hover glow-border"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 group-hover/item:from-pink-500/40 group-hover/item:to-cyan-500/40 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-12 backlight-hover glow-border">
                      <span className="text-4xl filter drop-shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white group-hover/item:text-pink-200 transition-colors duration-300 text-xl mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-slate-300 group-hover/item:text-slate-200 transition-colors duration-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
                
                <Button 
                  onClick={() => navigate('/application')}
                  className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white py-5 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-105 backlight-hover glow-border group/btn relative overflow-hidden mt-8"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Zap className="w-6 h-6 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Apply Now
                    <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-6">
              Why Choose Our Program?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the benefits of India's most comprehensive internship ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: GraduationCap, title: 'World-Class Training', desc: 'Learn from industry experts and gain cutting-edge skills', color: 'from-blue-500 to-cyan-500' },
              { icon: Building, title: 'Top Organizations', desc: 'Work with leading companies across diverse sectors', color: 'from-emerald-500 to-teal-500' },
              { icon: Award, title: 'Government Certification', desc: 'Earn recognized credentials that boost your career', color: 'from-purple-500 to-pink-500' },
              { icon: TrendingUp, title: 'Career Acceleration', desc: 'Fast-track your professional growth and development', color: 'from-rose-500 to-pink-500' },
              { icon: Shield, title: 'Secure Future', desc: 'Build a stable foundation for long-term success', color: 'from-indigo-500 to-purple-500' },
              { icon: Heart, title: 'Community Support', desc: 'Join a network of ambitious and successful peers', color: 'from-pink-500 to-rose-500' }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 card-glow backlight-hover cursor-pointer"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateY(${scrollY * -0.02 * (index + 1)}px)`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardContent className="p-10 text-center relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 backlight-hover glow-border`}>
                    <feature.icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed text-lg">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real stories from students who transformed their careers through our program
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Priya Sharma', role: 'Software Developer at TCS', story: 'The internship gave me hands-on experience that no classroom could provide.', rating: 5 },
              { name: 'Arjun Patel', role: 'Marketing Executive at Infosys', story: 'I gained practical skills and built a network that helped launch my career.', rating: 5 },
              { name: 'Sneha Gupta', role: 'Data Analyst at Wipro', story: 'The mentorship and training were exceptional. Best decision of my career!', rating: 5 }
            ].map((story, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 backlight-hover glow-border">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 text-lg leading-relaxed italic">"{story.story}"</p>
                  <div>
                    <h4 className="font-bold text-white text-lg">{story.name}</h4>
                    <p className="text-purple-400">{story.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-16 border border-purple-400/20 glow-border backlight-hover">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8">
              Ready to Begin Your Success Story?
            </h3>
            <p className="text-2xl text-slate-300 mb-12 leading-relaxed">
              Join thousands of students who have already transformed their careers. 
              Your journey to success starts with a single step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                onClick={() => navigate('/application')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-16 py-5 rounded-full text-2xl font-bold transition-all duration-300 hover:scale-110 backlight-hover glow-border group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-4">
                  <Sparkles className="w-8 h-8 group-hover:rotate-180 transition-transform duration-500" />
                  Start Your Application
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-slate-400">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-purple-400" />
                <span>Limited Time Registration</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <span>50,000+ Students Enrolled</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider"></div>
      </div>
    </div>
  );
};

export default PMInternshipLanding;