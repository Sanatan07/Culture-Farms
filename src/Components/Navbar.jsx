import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../public/assets/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // mark scrolled when past hero / top area so navbar background becomes light
      setIsScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBgClass = isScrolled
    ? 'bg-white/60 backdrop-blur-sm border-b border-[rgba(14,138,74,0.06)]'
    : 'bg-white/0';

  const textColorClass = isScrolled ? 'text-[var(--cf-dark-green)]' : 'text-white';

  return (
    <nav className={`w-full fixed top-0 left-0 z-30 ${navBgClass}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img
            src={logo}
            alt="Culture Farms Logo"
            className="h-15 logo-ring object-contain opacity-100"
            style={{ opacity: 1 }}
          />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-base font-semibold ${textColorClass} hover:text-[var(--cf-mid-green)]`}
          >
            Home
          </button>

          {/* new tag (different name) linking to ProductBenefits section */}
          <button
            onClick={() => scrollToSection('benefits')}
            className={`text-base font-semibold ${textColorClass} hover:text-[var(--cf-mid-green)]`}
          >
            Wellness
          </button>

          <button
            onClick={() => scrollToSection('shop')}
            className={`text-base font-semibold ${textColorClass} hover:text-[var(--cf-mid-green)]`}
          >
            Shop
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`text-base font-semibold ${textColorClass} hover:text-[var(--cf-mid-green)]`}
          >
            About Us
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${textColorClass} p-1`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white/80 border-t border-[rgba(14,138,74,0.04)]">
          <div className="flex flex-col gap-3 rounded-lg p-3">
            <button onClick={() => scrollToSection('home')} className="text-left text-[var(--cf-dark-green)] font-semibold py-3 text-base">Home</button>
            <button onClick={() => scrollToSection('benefits')} className="text-left text-[var(--cf-dark-green)] font-semibold py-3 text-base">Wellness</button>
            <button onClick={() => scrollToSection('shop')} className="text-left text-[var(--cf-dark-green)] font-semibold py-3 text-base">Shop</button>
            <button onClick={() => scrollToSection('about')} className="text-left text-[var(--cf-dark-green)] font-semibold py-3 text-base">About Us</button>
          </div>
        </div>
      )}
    </nav>
  );
}