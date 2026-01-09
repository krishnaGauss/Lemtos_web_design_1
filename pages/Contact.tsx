import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '../data/content';
import NeoButton from '../components/UI/NeoButton';
import Spinner from '../components/UI/Spinner';
import { Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../components/Utils/SEO';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    alert('Thank you for contacting Lemtos! We will get back to you shortly.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-lemtos-offwhite">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Lemtos Digital. Contact us for inquiries about our digital transformation, AI, and software services."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-5xl mb-6">Get In <span className="text-lemtos-red">Touch</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? We are here to help you transform your ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white border-2 border-black p-8 shadow-neo hover:shadow-neo-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-lemtos-amber p-3 border-2 border-black rounded-full">
                        <Phone size={24} />
                    </div>
                    <h3 className="font-display font-bold text-2xl">Call Us</h3>
                </div>
                <p className="text-lg text-gray-700 pl-[4.5rem]">{contactInfo.phone}</p>
            </div>

            <div className="bg-white border-2 border-black p-8 shadow-neo hover:shadow-neo-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-lemtos-red text-white p-3 border-2 border-black rounded-full">
                        <Mail size={24} />
                    </div>
                    <h3 className="font-display font-bold text-2xl">Email Us</h3>
                </div>
                <p className="text-lg text-gray-700 pl-[4.5rem]">{contactInfo.email}</p>
            </div>

            <div className="bg-white border-2 border-black p-8 shadow-neo hover:shadow-neo-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-black text-white p-3 border-2 border-white ring-2 ring-black rounded-full">
                        <MapPin size={24} />
                    </div>
                    <h3 className="font-display font-bold text-2xl">Visit Us</h3>
                </div>
                <p className="text-lg text-gray-700 pl-[4.5rem]">{contactInfo.address}</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border-2 border-black p-8 md:p-12 shadow-neo-lg"
          >
             <h2 className="font-display font-bold text-3xl mb-8">Send a Message</h2>
             <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block font-bold mb-2">Full Name</label>
                    <input 
                        type="text" 
                        id="name"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full p-4 border-2 border-black bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lemtos-amber transition-shadow disabled:bg-gray-100 disabled:text-gray-400"
                        placeholder="John Doe"
                        required
                        disabled={isSubmitting}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-bold mb-2">Email Address</label>
                    <input 
                        type="email" 
                        id="email"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full p-4 border-2 border-black bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lemtos-amber transition-shadow disabled:bg-gray-100 disabled:text-gray-400"
                        placeholder="john@example.com"
                        required
                        disabled={isSubmitting}
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block font-bold mb-2">Project Details</label>
                    <textarea 
                        id="message"
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full p-4 border-2 border-black bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lemtos-amber transition-shadow disabled:bg-gray-100 disabled:text-gray-400"
                        placeholder="Tell us about your project..."
                        required
                        disabled={isSubmitting}
                    ></textarea>
                </div>
                <NeoButton type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? <Spinner className="text-white" /> : 'Send Inquiry'}
                </NeoButton>
             </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;