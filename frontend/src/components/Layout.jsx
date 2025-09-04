import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  ChevronDown, 
  Globe, 
  Eye, 
  Type, 
  ThumbsUp, 
  ThumbsDown,
  Home,
  FileText,
  Camera,
  Users,
  Smartphone,
  HelpCircle,
  BookOpen,
  User,
  Menu,
  X
} from 'lucide-react';
import { mockData } from '../data/mock';

const Layout = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [fontSize, setFontSize] = useState('normal');
  const [showDropdown, setShowDropdown] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    console.log(`Language changed to: ${language}`);
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size);
    console.log(`Font size changed to: ${size}`);
  };

  const handleAuthAction = (action) => {
    console.log(`${action} clicked`);
    alert(`${action} functionality will be implemented in backend phase`);
  };

  const navigationItems = [
    { name: 'HOME', icon: <Home className="w-4 h-4" />, path: '/' },
    { name: 'ABOUT', icon: <Users className="w-4 h-4" />, path: '/about' },
    { name: 'ELIGIBILITY', icon: <FileText className="w-4 h-4" />, path: '/eligibility' },
    { name: 'PROGRAMS', icon: <BookOpen className="w-4 h-4" />, path: '/programs' },
    { name: 'APPLICATION', icon: <User className="w-4 h-4" />, path: '/application' },
    { name: 'SUPPORT', icon: <HelpCircle className="w-4 h-4" />, path: '/support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,0.15) 0%, transparent 70%)`
        }}
      />

      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.1}px)`
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-pulse floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, #8B5CF6, #EC4899, #06B6D4)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Top Strip */}
      <div className="fixed top-0 w-full bg-black/90 backdrop-blur-md text-white text-sm py-2 px-4 z-50 border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3 animate-slideIn">
            <span className="text-lg animate-bounce">🇮🇳</span>
            <span className="font-medium">भारत सरकार / Government Of India</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer group">
              <ThumbsUp className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              <ThumbsDown className="w-4 h-4 text-rose-400 group-hover:text-rose-300 transition-colors" />
              <span className="text-xs">Do's & Don'ts</span>
            </div>
            
            <div className="relative">
              <select 
                value={selectedLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-slate-800/80 backdrop-blur text-white text-xs px-3 py-1 rounded-full border border-purple-500/30 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all hover:bg-slate-700/80 glow-border"
              >
                {mockData.languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer">
              <Eye className="w-4 h-4 hover:text-cyan-400 transition-colors" />
              <span className="text-xs">Screen Reader</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <button 
                onClick={() => handleFontSizeChange('small')}
                className="text-xs hover:text-purple-400 transition-all hover:scale-110"
              >
                A-
              </button>
              <button 
                onClick={() => handleFontSizeChange('normal')}
                className="text-sm hover:text-purple-400 transition-all hover:scale-110"
              >
                A
              </button>
              <button 
                onClick={() => handleFontSizeChange('large')}
                className="text-lg hover:text-purple-400 transition-all hover:scale-110"
              >
                A+
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Header */}
      <div className="fixed top-8 w-full backdrop-blur-xl bg-white/5 shadow-2xl z-40 border-b border-white/10 glow-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => navigate('/')}>
            <div className="relative backlight-hover">
              <img 
                src="https://customer-assets.emergentagent.com/job_intern-bharat/artifacts/emtug9ek_image.png" 
                alt="Government Emblem" 
                className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
              />
            </div>
            <div className="group-hover:translate-x-2 transition-transform duration-300">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                PM Internship Program
              </h1>
              <p className="text-sm text-purple-200 font-medium">प्रधानमंत्री इंटर्नशिप योजना</p>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <Button 
              onClick={() => handleAuthAction('Register')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 backlight-hover glow-border group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <User className="w-4 h-4" />
                Register
              </span>
            </Button>
            <Button 
              onClick={() => handleAuthAction('Login')}
              variant="outline"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 backlight-hover glow-border backdrop-blur-sm bg-white/5"
            >
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation */}
      <div className="fixed top-24 w-full bg-slate-900/90 backdrop-blur-md shadow-2xl z-30 border-b border-purple-500/20 glow-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <nav className="hidden md:flex space-x-1 py-4">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center space-x-2 font-medium px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden backlight-hover glow-border ${
                    location.pathname === item.path
                      ? 'text-purple-400 bg-purple-500/20 border-purple-400/50'
                      : 'text-white hover:text-purple-400 hover:bg-white/10'
                  }`}
                >
                  <span className="hover:rotate-12 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="hover:tracking-wide transition-all duration-300">{item.name}</span>
                </button>
              ))}
            </nav>
            
            <button 
              className="md:hidden text-white py-4 hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? 
                <X className="w-6 h-6 rotate-90 transition-transform duration-300" /> : 
                <Menu className="w-6 h-6 hover:rotate-90 transition-transform duration-300" />
              }
            </button>
          </div>
          
          {mobileMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-md py-4 space-y-1 animate-slideDown rounded-lg mb-4 border border-purple-500/20 glow-border">
              {navigationItems.map((item, index) => (
                <button 
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-6 py-3 transition-all duration-200 hover:translate-x-2 rounded-lg mx-2 backlight-hover ${
                    location.pathname === item.path
                      ? 'text-purple-400 bg-purple-500/20'
                      : 'text-white hover:text-purple-400 hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Page Content */}
      <main className="pt-40">
        {children}
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900/90 backdrop-blur-md text-white py-16 mt-20 border-t border-purple-500/20 glow-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-xl text-purple-400 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['About Program', 'Eligibility', 'Application Process', 'Success Stories'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-block backlight-hover">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-xl text-cyan-400 mb-6">Support</h4>
              <ul className="space-y-3">
                {['Help Center', 'Contact Us', 'FAQ', 'Technical Support'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 inline-block backlight-hover">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-xl text-pink-400 mb-6">Resources</h4>
              <ul className="space-y-3">
                {['Guidelines', 'Documentation', 'Gallery', 'Downloads'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-pink-400 transition-all duration-300 hover:translate-x-2 inline-block backlight-hover">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-xl text-emerald-400 mb-6">Government of India</h4>
              <div className="flex items-center space-x-3 mb-6 backlight-hover p-3 rounded-lg glow-border">
                <img 
                  src="https://customer-assets.emergentagent.com/job_intern-bharat/artifacts/emtug9ek_image.png" 
                  alt="Government Emblem" 
                  className="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <p className="text-sm font-medium">सत्यमेव जयते</p>
                  <p className="text-xs text-gray-400">Truth Alone Triumphs</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-500/20 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Government of India. All rights reserved. | प्रधानमंत्री इंटर्नशिप योजना</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;