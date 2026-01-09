import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronsRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NeoButton from '../UI/NeoButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    { name: 'Services', path: '/#services' },
    { name: 'About Us', path: '/#about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-transparent ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-black py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group">
             {/* Logo Icon - Chevrons in Amber */}
             <div className="text-lemtos-amber flex items-center transform group-hover:translate-x-1 transition-transform duration-300">
                <ChevronsRight size={40} strokeWidth={3} />
             </div>
             {/* Logo Text - LEMTOS in Red/Black mix or Pure Red based on brand */}
             <div className="font-display font-bold text-3xl tracking-tight leading-none">
                <span className="text-lemtos-amber">LEM</span>
                <span className="text-lemtos-red">TOS</span>
             </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="font-medium text-lg hover:text-lemtos-red transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-lemtos-red after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/#contact">
                <NeoButton variant="primary" className="py-2 px-4 text-sm">
                Contact Us <ArrowRight size={16} />
                </NeoButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 border-2 border-black shadow-neo-hover active:shadow-none active:translate-x-[1px] active:translate-y-[1px] bg-white transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b-2 border-black overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-xl font-display font-bold hover:text-lemtos-red"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/#contact" className="w-full max-w-xs">
                <NeoButton variant="primary" className="w-full">
                    Contact Us
                </NeoButton>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;