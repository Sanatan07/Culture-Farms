import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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

  const navBg = isScrolled
    ? 'bg-[var(--cf-bg)]/90 backdrop-blur-sm border-b border-[rgba(14,138,74,0.04)]'
    : 'bg-transparent';
  const textColor = isScrolled ? 'text-cf-dark' : 'text-white';

  return (
    <nav className={`w-full fixed top-0 left-0 z-30 transition-colors ${navBg}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img src={logo} alt="Culture Farms Logo" className="h-16 logo-ring" />
          {/* <span className={`font-semibold ${textColor}`}>Culture Farms</span> */}
        </div>

        {/* Desktop links */}
        <div className={`hidden md:flex items-center gap-6`}>
          <button onClick={() => scrollToSection('home')} className={`text-sm font-semibold ${textColor} hover:text-[var(--cf-mid-green)]`}>Home</button>
          <button onClick={() => scrollToSection('shop')} className={`text-sm font-semibold ${textColor} hover:text-[var(--cf-mid-green)]`}>Shop</button>
          <button onClick={() => scrollToSection('about')} className={`text-sm font-semibold ${textColor} hover:text-[var(--cf-mid-green)]`}>About Us</button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${textColor} p-1`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-3 bg-[rgba(255,255,255,0.02)] rounded-lg p-3 shadow-sm">
            <button onClick={() => scrollToSection('home')} className="text-left text-white/90 font-semibold py-2">Home</button>
            <button onClick={() => scrollToSection('shop')} className="text-left text-white/90 font-semibold py-2">Shop</button>
            <button onClick={() => scrollToSection('about')} className="text-left text-white/90 font-semibold py-2">About Us</button>
          </div>
        </div>
      )}
    </nav>
  );
}