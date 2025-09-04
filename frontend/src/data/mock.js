import { 
  Home, 
  FileText, 
  Camera, 
  Users, 
  HelpCircle, 
  BookOpen,
  User,
  GraduationCap,
  Briefcase,
  IndianRupee,
  MapPin
} from 'lucide-react';

export const mockData = {
  languages: [
    'English',
    'हिन्दी (Hindi)',
    'বাংলা (Bengali)',
    'తెలుగు (Telugu)',
    'मराठी (Marathi)',
    'தமிழ் (Tamil)',
    'ગુજરાતી (Gujarati)',
    'ಕನ್ನಡ (Kannada)',
    'മലയാളം (Malayalam)',
    'ਪੰਜਾਬੀ (Punjabi)',
    'ଓଡ଼ିଆ (Odia)',
    'অসমীয়া (Assamese)'
  ],

  navItems: [
    {
      name: 'HOME',
      icon: <Home className="w-4 h-4" />,
      hasDropdown: false
    },
    {
      name: 'GUIDELINES/DOCUMENTATIONS',
      icon: <FileText className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        'Program Guidelines',
        'Application Process',
        'Terms & Conditions',
        'Privacy Policy',
        'Frequently Asked Questions',
        'User Manual'
      ]
    },
    {
      name: 'GALLERY',
      icon: <Camera className="w-4 h-4" />,
      hasDropdown: false
    },
    {
      name: 'ELIGIBILITY',
      icon: <Users className="w-4 h-4" />,
      hasDropdown: false
    },
    {
      name: 'SUPPORT',
      icon: <HelpCircle className="w-4 h-4" />,
      hasDropdown: false
    },
    {
      name: 'COMPENDIUM',
      icon: <BookOpen className="w-4 h-4" />,
      hasDropdown: false
    }
  ],

  eligibility: [
    {
      title: 'Age Requirement',
      description: 'Must be between 21-24 years old',
      icon: <User className="w-5 h-5" />
    },
    {
      title: 'Educational Background',
      description: 'Graduate or final year student from recognized institution',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      title: 'Employment Status',
      description: 'Should not be currently employed in any organization',
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: 'Income Criteria',
      description: 'Family annual income below ₹8 lakhs',
      icon: <IndianRupee className="w-5 h-5" />
    },
    {
      title: 'Residency',
      description: 'Indian citizen with valid government ID proof',
      icon: <MapPin className="w-5 h-5" />
    }
  ],

  benefits: [
    {
      title: 'Monthly Stipend',
      description: '₹4,500 per month + ₹500 additional allowance',
      icon: '💰'
    },
    {
      title: 'One-time Grant',
      description: '₹6,000 one-time payment for skill development',
      icon: '🎯'
    },
    {
      title: 'Sector Selection',
      description: 'Choose from 50+ participating sectors and organizations',
      icon: '🏢'
    },
    {
      title: 'Certification',
      description: 'Government-backed completion certificate',
      icon: '📜'
    },
    {
      title: 'Skill Training',
      description: 'Professional development and training programs',
      icon: '📚'
    },
    {
      title: 'Career Guidance',
      description: 'Mentorship and career counseling support',
      icon: '🎓'
    }
  ],

  sectors: [
    'Information Technology',
    'Banking & Finance',
    'Healthcare',
    'Education',
    'Manufacturing',
    'Agriculture',
    'Tourism & Hospitality',
    'Retail',
    'Telecommunications',
    'Government Services'
  ]
};