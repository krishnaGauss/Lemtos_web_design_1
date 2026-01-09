import React, { useState } from 'react';
import { contactInfo } from '../../data/content';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Spinner from '../UI/Spinner';

const Footer: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer id="contact" className="bg-lemtos-red text-white border-t-4 border-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-3xl text-lemtos-amber">LEMTOS</h3>
            <p className="text-white/80 max-w-xs">
              Empowering your digital transformation journey with innovation and expertise.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="p-2 bg-white text-lemtos-red border-2 border-black shadow-neo-hover hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-xl mb-6 border-b-2 border-lemtos-amber inline-block pb-1">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-lemtos-amber transition-colors">Home</Link></li>
              <li><Link to="/#services" className="hover:text-lemtos-amber transition-colors">Services</Link></li>
              <li><Link to="/#about" className="hover:text-lemtos-amber transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-lemtos-amber transition-colors">Contact Page</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-xl mb-6 border-b-2 border-lemtos-amber inline-block pb-1">Contact</h4>
            <ul className="space-y-3 text-white/90">
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.email}</li>
              <li className="leading-relaxed">{contactInfo.address}</li>
              <li>GSTN: 09AAGCL4289D1ZA</li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
             <h4 className="font-display font-bold text-xl mb-6 border-b-2 border-lemtos-amber inline-block pb-1">Get Started</h4>
             <p className="mb-4 text-sm">Ready to innovate? Drop your email.</p>
             <form className="flex flex-col gap-2" onSubmit={handleSubscribe}>
                <input 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="px-4 py-2 border-2 border-black text-black focus:outline-none focus:ring-2 focus:ring-lemtos-amber w-full disabled:bg-gray-200 disabled:cursor-not-allowed"
                />
                <button 
                  disabled={isSubmitting}
                  className={`bg-lemtos-amber text-black font-bold py-2 border-2 border-black transition-colors flex justify-center items-center h-[46px] ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:bg-white'
                  }`}
                >
                    {isSubmitting ? <Spinner size={20} /> : 'Subscribe'}
                </button>
             </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Lemtos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;