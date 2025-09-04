import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Users,
  Target,
  Award,
  Globe,
  Heart,
  Lightbulb,
  Rocket,
  Shield,
  Star,
  TrendingUp,
  Building,
  BookOpen,
  Zap
} from 'lucide-react';

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const milestones = [
    { year: '2023', title: 'Program Launch', desc: 'Launched with 10 partner organizations' },
    { year: '2024', title: 'Rapid Growth', desc: 'Expanded to 1,200+ organizations nationwide' },
    { year: '2024', title: '50K Students', desc: 'Reached 50,000 registered students milestone' },
    { year: '2025', title: 'Future Vision', desc: 'Aiming for 100,000 students by end of year' }
  ];

  const values = [
    { icon: Target, title: 'Excellence', desc: 'Committed to delivering world-class training and opportunities', color: 'from-purple-500 to-purple-700' },
    { icon: Heart, title: 'Empowerment', desc: 'Empowering students to achieve their career aspirations', color: 'from-pink-500 to-rose-500' },
    { icon: Shield, title: 'Integrity', desc: 'Maintaining highest standards of transparency and ethics', color: 'from-cyan-500 to-teal-500' },
    { icon: Rocket, title: 'Innovation', desc: 'Continuously evolving to meet industry demands', color: 'from-emerald-500 to-green-500' }
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
            <span className="block text-gradient-animate">About Our</span>
            <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Mission
            </span>
          </h1>
          
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            The PM Internship Program is India's flagship initiative to bridge the gap between 
            academic learning and professional excellence, creating opportunities for millions of students.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-purple-900/20 to-purple-700/20 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/70 transition-all duration-500 hover:scale-105 backlight-hover glow-border">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-4xl font-bold text-white flex items-center justify-center space-x-4">
                  <div className="p-4 bg-purple-500/20 rounded-full backlight-hover glow-border">
                    <Target className="w-10 h-10 text-purple-400" />
                  </div>
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xl text-slate-300 leading-relaxed">
                  To empower India's youth with practical skills, real-world experience, and industry connections 
                  that transform their career prospects and contribute to the nation's economic growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/20 to-emerald-700/20 backdrop-blur-xl border border-cyan-400/30 hover:border-cyan-400/70 transition-all duration-500 hover:scale-105 backlight-hover glow-border">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-4xl font-bold text-white flex items-center justify-center space-x-4">
                  <div className="p-4 bg-cyan-500/20 rounded-full backlight-hover glow-border">
                    <Lightbulb className="w-10 h-10 text-cyan-400" />
                  </div>
                  <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Our Vision
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xl text-slate-300 leading-relaxed">
                  To create a world where every student has access to quality internship opportunities, 
                  building a skilled workforce that drives India's position as a global leader.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Program Statistics */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Numbers that showcase our commitment to student success and national development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50,000+', label: 'Students Enrolled', icon: Users, color: 'from-purple-500 to-purple-700' },
              { number: '1,200+', label: 'Partner Organizations', icon: Building, color: 'from-cyan-500 to-cyan-700' },
              { number: '25+', label: 'Industry Sectors', icon: Globe, color: 'from-emerald-500 to-emerald-700' },
              { number: '95%', label: 'Placement Success', icon: TrendingUp, color: 'from-pink-500 to-pink-700' }
            ].map((stat, index) => (
              <Card 
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 backlight-hover glow-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center backlight-hover glow-border`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-3">{stat.number}</div>
                <div className="text-slate-400 text-lg">{stat.label}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Key milestones in our mission to transform Indian education and employment landscape
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 backlight-hover glow-border">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-purple-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-slate-300">{milestone.desc}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="w-2/12 flex justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-slate-900 backlight-hover glow-border"></div>
                </div>
                
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide our mission and shape our commitment to student success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 backlight-hover glow-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center hover:rotate-12 transition-transform duration-300 backlight-hover glow-border`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">{value.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experienced leaders committed to transforming India's education and employment landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Rajesh Kumar', role: 'Program Director', expertise: 'Education Policy & Development' },
              { name: 'Ms. Priya Mehta', role: 'Industry Relations Head', expertise: 'Corporate Partnerships' },
              { name: 'Mr. Arjun Singh', role: 'Technology Lead', expertise: 'Platform Development' }
            ].map((leader, index) => (
              <Card key={index} className="text-center bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 backlight-hover glow-border">
                <CardContent className="p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center backlight-hover glow-border">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{leader.name}</h3>
                  <p className="text-purple-400 mb-3">{leader.role}</p>
                  <p className="text-slate-300">{leader.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-16 border border-purple-400/20 glow-border backlight-hover">
          <h3 className="text-5xl font-black bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-8">
            Join Our Mission
          </h3>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Be part of India's largest skill development initiative. Together, we're building 
            a brighter future for millions of students across the nation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 hover:scale-110 backlight-hover glow-border">
              <BookOpen className="w-6 h-6 mr-2" />
              Learn More
            </Button>
            
            <Button variant="outline" className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 backlight-hover glow-border backdrop-blur-sm bg-white/5">
              <Zap className="w-6 h-6 mr-2" />
              Get Involved
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;