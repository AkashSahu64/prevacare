import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-cyan-600 mr-2">
              <Activity className="h-8 w-8" />
            </div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
              PrevaCare
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className={`font-medium ${isScrolled ? 'text-slate-600 hover:text-cyan-600' : 'text-white hover:text-cyan-100'} transition-colors`}
            >
              Solutions
            </a>
            <a 
              href="#" 
              className={`font-medium ${isScrolled ? 'text-slate-600 hover:text-cyan-600' : 'text-white hover:text-cyan-100'} transition-colors`}
            >
              For Corporates
            </a>
            <a 
              href="#" 
              className={`font-medium ${isScrolled ? 'text-slate-600 hover:text-cyan-600' : 'text-white hover:text-cyan-100'} transition-colors`}
            >
              For Individuals
            </a>
            <a 
              href="#" 
              className={`font-medium ${isScrolled ? 'text-slate-600 hover:text-cyan-600' : 'text-white hover:text-cyan-100'} transition-colors`}
            >
              About Us
            </a>
            <a 
              href="#" 
              className="bg-cyan-600 text-white px-4 py-2 rounded-md font-medium hover:bg-cyan-700 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-3">
            <a 
              href="#" 
              className="block font-medium text-slate-600 hover:text-cyan-600 transition-colors"
            >
              Solutions
            </a>
            <a 
              href="#" 
              className="block font-medium text-slate-600 hover:text-cyan-600 transition-colors"
            >
              For Corporates
            </a>
            <a 
              href="#" 
              className="block font-medium text-slate-600 hover:text-cyan-600 transition-colors"
            >
              For Individuals
            </a>
            <a 
              href="#" 
              className="block font-medium text-slate-600 hover:text-cyan-600 transition-colors"
            >
              About Us
            </a>
            <a 
              href="#" 
              className="block bg-cyan-600 text-white px-4 py-2 rounded-md font-medium hover:bg-cyan-700 transition-colors text-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;