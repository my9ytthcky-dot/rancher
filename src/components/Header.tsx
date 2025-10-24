import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, Star } from 'lucide-react';
import logo from './rancherlogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between container-padding py-4">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Rancher Services logo" className="h-12 w-12 rounded-lg object-cover shadow-soft" />
          <div>
            <p
              className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Rancher Services
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-3 w-3 fill-current text-amber-400" />
                ))}
              </div>
              <span
                className={`text-xs font-semibold tracking-wide transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-white/80'
                }`}
              >
                5/5 client rating
              </span>
            </div>
          </div>
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {['Home', 'Services', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300 focus-ring ${
                isScrolled
                  ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="hidden items-center space-x-4 lg:flex">
          <a href="tel:+1-346-401-0323" className="btn-accent flex items-center space-x-2 font-semibold shadow-soft">
            <Phone size={18} />
            <span>(346) 401-0323</span>
          </a>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`rounded-lg p-2 transition-all duration-300 focus-ring ${
              isScrolled ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 border-b border-gray-100 bg-white/95 backdrop-blur-xl shadow-lg lg:hidden">
          <div className="container-padding space-y-4 py-6">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full rounded-lg px-4 py-3 text-left text-lg font-semibold text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
              >
                {item}
              </button>
            ))}
            <a
              href="tel:+1-346-401-0323"
              className="btn-accent flex items-center justify-center space-x-2 font-semibold"
            >
              <Phone size={20} />
              <span>(346) 401-0323</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
