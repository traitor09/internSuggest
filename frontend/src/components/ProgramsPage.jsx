import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Building,
  Users,
  Calendar,
  MapPin,
  Clock,
  Star,
  Award,
  TrendingUp,
  Target,
  Zap,
  Globe,
  Code,
  Briefcase,
  Heart,
  Shield,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Filter,
  Search
} from 'lucide-react';

const ProgramsPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', name: 'All Programs', icon: Globe, count: 12 },
    { id: 'technology', name: 'Technology', icon: Code, count: 4 },
    { id: 'business', name: 'Business & Finance', icon: Briefcase, count: 3 },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, count: 2 },
    { id: 'government', name: 'Government', icon: Shield, count: 3 }
  ];

  const programs = [
    {
      id: 1,
      title: 'Software Development Internship',
      company: 'TCS',
      category: 'technology',
      duration: '6 months',
      location: 'Bangalore, Mumbai',
      stipend: '₹25,000/month',
      rating: 4.8,
      participants: 500,
      description: 'Work on cutting-edge software projects with industry mentors',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      highlights: ['Industry Certification', 'Real Projects', 'Mentorship'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 2,
      title: 'Data Science & Analytics',
      company: 'Infosys',
      category: 'technology',
      duration: '4 months',
      location: 'Hyderabad, Chennai',
      stipend: '₹30,000/month',
      rating: 4.9,
      participants: 300,
      description: 'Learn data science with real-world datasets and AI projects',
      skills: ['Python', 'Machine Learning', 'SQL', 'Tableau'],
      highlights: ['AI Projects', 'Data Certification', 'Industry Exposure'],
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      company: 'Wipro',
      category: 'business',
      duration: '3 months',
      location: 'Delhi, Pune',
      stipend: '₹20,000/month',
      rating: 4.7,
      participants: 250,
      description: 'Master digital marketing strategies and campaign management',
      skills: ['SEO', 'Google Ads', 'Social Media', 'Analytics'],
      highlights: ['Google Certification', 'Live Campaigns', 'Portfolio Building'],
      color: 'from-emerald-500 to-emerald-700'
    },
    {
      id: 4,
      title: 'Financial Analyst Program',
      company: 'HDFC Bank',
      category: 'business',
      duration: '5 months',
      location: 'Mumbai, Bangalore',
      stipend: '₹28,000/month',
      rating: 4.6,
      participants: 200,
      description: 'Develop financial modeling and analysis skills',
      skills: ['Excel', 'Financial Modeling', 'Risk Analysis', 'Bloomberg'],
      highlights: ['CFA Preparation', 'Client Interaction', 'Market Analysis'],
      color: 'from-pink-500 to-pink-700'
    },
    {
      id: 5,
      title: 'Healthcare Management',
      company: 'Apollo Hospitals',
      category: 'healthcare',
      duration: '4 months',
      location: 'Chennai, Delhi',
      stipend: '₹22,000/month',
      rating: 4.5,
      participants: 150,
      description: 'Learn healthcare operations and patient management',
      skills: ['Healthcare Systems', 'Patient Care', 'Medical Records', 'Quality Assurance'],
      highlights: ['Hospital Exposure', 'Patient Interaction', 'Healthcare Certification'],
      color: 'from-rose-500 to-rose-700'
    },
    {
      id: 6,
      title: 'Public Policy Research',
      company: 'Ministry of Electronics & IT',
      category: 'government',
      duration: '6 months',
      location: 'New Delhi',
      stipend: '₹35,000/month',
      rating: 4.8,
      participants: 100,
      description: 'Research and analyze public policies for digital India initiatives',
      skills: ['Policy Research', 'Data Analysis', 'Report Writing', 'Stakeholder Engagement'],
      highlights: ['Government Exposure', 'Policy Impact', 'Research Publication'],
      color: 'from-indigo-500 to-indigo-700'
    }
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <span className="block text-gradient-animate">Explore</span>
            <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Programs
            </span>
          </h1>
          
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Discover internship opportunities across various sectors with leading organizations. 
            Find the perfect program that matches your career aspirations.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
              <input 
                type="text"
                placeholder="Search programs or companies..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all backlight-hover glow-border"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 backlight-hover glow-border ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                      : 'border border-white/20 text-slate-300 hover:border-white/40'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Program Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '1,200+', label: 'Partner Organizations', icon: Building, color: 'from-purple-500 to-purple-700' },
              { number: '50+', label: 'Program Categories', icon: Target, color: 'from-cyan-500 to-cyan-700' },
              { number: '25+', label: 'Cities Covered', icon: MapPin, color: 'from-emerald-500 to-emerald-700' },
              { number: '95%', label: 'Placement Rate', icon: TrendingUp, color: 'from-pink-500 to-pink-700' }
            ].map((stat, index) => (
              <Card 
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 backlight-hover glow-border"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center backlight-hover glow-border`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Programs Grid */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Featured Programs
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {filteredPrograms.length} programs found matching your criteria
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPrograms.map((program, index) => (
              <Card 
                key={program.id}
                className="group overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 backlight-hover glow-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 bg-gradient-to-br ${program.color} rounded-lg backlight-hover glow-border`}>
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 font-semibold">{program.rating}</span>
                      </div>
                      <span className="text-sm text-slate-400">{program.participants} participants</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                    {program.title}
                  </CardTitle>
                  
                  <p className="text-lg text-purple-400 font-semibold mb-4">{program.company}</p>
                  <p className="text-slate-300 leading-relaxed">{program.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Program Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-cyan-400" />
                      <span className="text-slate-300">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                      <span className="text-slate-300">{program.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span className="text-slate-300">{program.stipend}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-pink-400" />
                      <span className="text-slate-300">{program.participants} enrolled</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-purple-400" />
                      Skills You'll Learn:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30 backlight-hover"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-400" />
                      Program Highlights:
                    </h4>
                    <div className="space-y-2">
                      {program.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span className="text-slate-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button className={`flex-1 bg-gradient-to-r ${program.color} hover:opacity-90 text-white py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 backlight-hover glow-border group`}>
                      <span className="flex items-center justify-center gap-2">
                        Apply Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                    
                    <Button variant="outline" className="border border-white/20 text-slate-300 hover:border-white/40 hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 backlight-hover">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              How to Apply
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Follow these simple steps to start your internship journey
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Choose Program', desc: 'Browse and select your preferred internship program', icon: Target, color: 'from-purple-500 to-purple-700' },
              { step: 2, title: 'Check Eligibility', desc: 'Verify you meet all the program requirements', icon: CheckCircle, color: 'from-cyan-500 to-cyan-700' },
              { step: 3, title: 'Submit Application', desc: 'Complete the application form with required documents', icon: Calendar, color: 'from-emerald-500 to-emerald-700' },
              { step: 4, title: 'Start Internship', desc: 'Begin your journey after selection and onboarding', icon: Lightbulb, color: 'from-pink-500 to-pink-700' }
            ].map((step, index) => (
              <Card key={index} className="text-center bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 backlight-hover glow-border">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-2xl font-bold text-white backlight-hover glow-border relative`}>
                    {step.step}
                    <step.icon className="absolute inset-0 w-8 h-8 m-auto opacity-20" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-16 border border-purple-400/20 glow-border backlight-hover">
          <h3 className="text-5xl font-black bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-8">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Don't wait! Join thousands of students who are already building their careers 
            through our comprehensive internship programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 hover:scale-110 backlight-hover glow-border group">
              <Calendar className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Apply Now
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button variant="outline" className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 backlight-hover glow-border backdrop-blur-sm bg-white/5">
              <Filter className="w-6 h-6 mr-3" />
              Browse All Programs
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProgramsPage;