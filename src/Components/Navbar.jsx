import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-r from-green-700 to-green-600 shadow-lg' : 'bg-gradient-to-r from-green-700/95 to-green-600/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <img 
              src={logo}
              alt="Culture Farms Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-yellow-300 font-semibold transition-colors duration-200 text-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-yellow-300 font-semibold transition-colors duration-200 text-lg"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('shop')}
              className="text-white hover:text-yellow-300 font-semibold transition-colors duration-200 text-lg"
            >
              Shop With Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-yellow-300 transition-colors"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-green-700 to-green-600 border-t border-green-500 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white hover:text-yellow-300 hover:bg-green-800/50 font-semibold py-3 px-4 rounded transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-yellow-300 hover:bg-green-800/50 font-semibold py-3 px-4 rounded transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('shop')}
              className="block w-full text-left text-white hover:text-yellow-300 hover:bg-green-800/50 font-semibold py-3 px-4 rounded transition-colors"
            >
              Shop With Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}