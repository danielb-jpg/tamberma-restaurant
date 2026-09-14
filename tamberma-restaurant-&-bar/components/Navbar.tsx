import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { GLOVO_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const navBackground = isScrolled || isOpen 
    ? 'bg-charcoal/95 backdrop-blur-md shadow-lg border-b border-white/5' 
    : 'bg-transparent';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-gold tracking-wider">
              TAMBERMA
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-colors ${
                    location.pathname === link.path
                      ? 'text-gold'
                      : 'text-gray-300 hover:text-gold'
                  }`}
                >
                  {link.name.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a 
              href={GLOVO_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal font-bold py-2 px-6 rounded-none transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <ShoppingBag size={18} />
              ORDER NOW
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gold hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-charcoal border-b border-gold/20`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === link.path
                  ? 'text-gold bg-white/5'
                  : 'text-gray-300 hover:text-gold hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={GLOVO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center mt-4 bg-gold text-charcoal font-bold py-3 rounded-none"
          >
            ORDER ON GLOVO
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;