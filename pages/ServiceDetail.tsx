import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckSquare, Cpu, Database, Code, BarChart } from 'lucide-react';
import { services } from '../data/content';
import NeoButton from '../components/UI/NeoButton';
import SEO from '../components/Utils/SEO';

const iconMap: Record<string, React.ReactNode> = {
  'Cpu': <Cpu size={64} />,
  'Database': <Database size={64} />,
  'Code': <Code size={64} />,
  'BarChart': <BarChart size={64} />,
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-lemtos-offwhite">
      <SEO 
        title={service.title} 
        description={service.shortDescription}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <div className="mb-8">
            <Link to="/#services" className="inline-flex items-center gap-2 text-gray-600 hover:text-lemtos-red font-bold transition-colors">
                <ArrowLeft size={20} /> Back to Services
            </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / Info */}
            <div className="lg:col-span-4 space-y-8">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white border-2 border-black p-8 shadow-neo"
                >
                    <div className="text-lemtos-red mb-6">
                        {iconMap[service.iconName]}
                    </div>
                    <h1 className="font-display font-bold text-4xl mb-4 leading-tight">
                        {service.title}
                    </h1>
                    <div className="h-1 w-20 bg-lemtos-amber mb-6"></div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {service.shortDescription}
                    </p>
                    <Link to="/contact">
                        <NeoButton className="w-full">Get a Quote</NeoButton>
                    </Link>
                </motion.div>

                <div className="bg-lemtos-black text-white p-8 border-2 border-lemtos-amber shadow-neo">
                    <h3 className="font-display font-bold text-2xl mb-4 text-lemtos-amber">Need Help?</h3>
                    <p className="mb-4 text-gray-300">Speak to our experts today to define your requirements.</p>
                    <p className="font-bold text-xl">+91 999.084.9424</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8">
                <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2 }}
                >
                    <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-96 object-cover border-2 border-black shadow-neo mb-12"
                    />
                    
                    <div className="bg-white border-2 border-black p-8 md:p-12">
                        <h2 className="font-display font-bold text-3xl mb-6">Overview</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-10">
                            {service.fullDescription}
                        </p>

                        <h2 className="font-display font-bold text-3xl mb-8">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {service.features.map((feature, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-4 p-4 border border-gray-200 hover:border-lemtos-red hover:bg-red-50 transition-colors"
                                >
                                    <CheckSquare className="text-lemtos-red flex-shrink-0 mt-1" size={24} />
                                    <span className="font-bold text-gray-800 text-lg">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;