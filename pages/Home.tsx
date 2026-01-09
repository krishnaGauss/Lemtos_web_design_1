import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Cpu, Database, Code, BarChart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeoButton from '../components/UI/NeoButton';
import { services, stats } from '../data/content';
import SEO from '../components/Utils/SEO';

const iconMap: Record<string, React.ReactNode> = {
  'Cpu': <Cpu size={32} />,
  'Database': <Database size={32} />,
  'Code': <Code size={32} />,
  'BarChart': <BarChart size={32} />,
};

const Home: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Pronounced Parallax Transforms
  const bgShape1Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const bgShape2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  
  // Content Parallax - Deeper depth
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]); // Moves slightly with scroll
  
  // Image Composition Parallax - Elements moving at different speeds
  const imageContainerY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]); 
  const decorRedY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]); // Moves up relative to container
  const decorAmberY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]); // Moves down faster

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full overflow-hidden">
      <SEO 
        title="Home" 
        description="Lemtos Digital helps businesses innovate with AI, ERP solutions, and custom software development. Partner with us for your digital transformation."
      />
      
      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
        <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] opacity-[0.03] pointer-events-none">
             {Array.from({ length: 400 }).map((_, i) => (
                 <div key={i} className="border-[0.5px] border-black h-full w-full"></div>
             ))}
        </div>
        
        {/* Abstract Background Shapes with Parallax */}
        <motion.div 
            style={{ y: bgShape1Y }}
            className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-lemtos-amber rounded-full opacity-10 blur-3xl z-0"
        />
        <motion.div 
            style={{ y: bgShape2Y }}
            className="absolute bottom-20 left-[-10%] w-[600px] h-[600px] bg-lemtos-red rounded-full opacity-5 blur-3xl z-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block bg-lemtos-amber border border-black px-4 py-1 mb-6 shadow-neo-hover font-bold text-sm tracking-wide">
                DIGITAL TRANSFORMATION PARTNER
              </div>
              <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mb-8">
                Empowering Your <span className="text-lemtos-red underline decoration-4 underline-offset-4">Digital</span> Journey
              </h1>
              <p className="text-xl text-gray-700 mb-10 max-w-lg leading-relaxed border-l-4 border-lemtos-amber pl-6">
                At Lemtos, we craft innovative technology solutions that empower businesses to succeed and operate smarter—no matter their size.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <NeoButton className="w-full sm:w-auto">
                    Get Started Now
                  </NeoButton>
                </Link>
                <a href="#services">
                    <NeoButton variant="outline" className="w-full sm:w-auto">
                        Explore Services
                    </NeoButton>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative perspective-1000"
            >
              <motion.div 
                style={{ y: imageContainerY }}
                className="relative z-10 border-4 border-black bg-white p-4 shadow-neo-lg rotate-2 hover:rotate-0 transition-transform duration-500"
              >
                {/* Hero Image: High-tech/Abstract Global Network */}
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                  alt="Digital Innovation" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
              {/* Decorative elements behind image with Parallax */}
              <motion.div 
                style={{ y: decorRedY }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-lemtos-red border-2 border-black z-0" 
              />
              <motion.div 
                style={{ y: decorAmberY }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-lemtos-amber border-2 border-black rounded-full z-0 flex items-center justify-center"
              >
                 <span className="font-display font-bold text-xl">Innovate</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-lemtos-amber border-y-4 border-black py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-bold text-5xl md:text-6xl text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-2">
                  {stat.value}
                </div>
                <div className="font-medium text-black uppercase tracking-wider text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-lemtos-offwhite relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Our <span className="text-lemtos-red">Expertise</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Specialized technology consulting to deliver customized enterprise solutions that drive tangible growth.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service) => (
              <motion.div 
                key={service.id}
                variants={itemVariants}
                className="group bg-white border-2 border-black p-8 shadow-neo hover:shadow-neo-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-lemtos-red/10 border-2 border-black text-lemtos-red group-hover:bg-lemtos-red group-hover:text-white transition-colors">
                    {iconMap[service.iconName]}
                  </div>
                  <span className="text-4xl font-display font-bold text-gray-200 group-hover:text-lemtos-amber transition-colors">
                    0{services.indexOf(service) + 1}
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-lemtos-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {service.shortDescription}
                </p>
                
                <div className="mt-auto">
                    <Link to={`/services/${service.id}`}>
                        <button className="flex items-center gap-2 font-bold text-black border-b-2 border-black pb-1 hover:text-lemtos-red hover:border-lemtos-red transition-all">
                            Learn More <ArrowRight size={18} />
                        </button>
                    </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us / About Brief */}
      <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* About Image: Team Collaboration */}
                        <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                            alt="Our Team" 
                            className="w-full h-auto border-2 border-black shadow-neo"
                        />
                        <div className="absolute -bottom-10 -right-10 bg-white border-2 border-black p-6 shadow-neo max-w-xs hidden md:block">
                            <p className="font-display font-bold text-lg">"We don't just write code; we engineer success."</p>
                        </div>
                    </motion.div>
                </div>
                
                <div className="order-1 lg:order-2">
                    <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
                        Why Choose <span className="bg-lemtos-amber px-2 border border-black">Lemtos?</span>
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        We blend creative thinking with technical excellence. Our approach is rooted in understanding your business deeply before writing a single line of code.
                    </p>
                    
                    <ul className="space-y-4 mb-10">
                        {[
                            "Client-Centric Approach",
                            "Agile Methodology",
                            "Cutting-Edge Tech Stack",
                            "Post-Delivery Support"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 font-medium text-lg">
                                <CheckCircle className="text-lemtos-red" size={24} />
                                {item}
                            </li>
                        ))}
                    </ul>
                    
                    <Link to="/contact">
                        <NeoButton variant="primary">
                            Work With Us
                        </NeoButton>
                    </Link>
                </div>
            </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-black text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
              <h2 className="font-display font-bold text-4xl md:text-6xl mb-8">
                  Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                  Let's build something extraordinary together.
              </p>
              <Link to="/contact">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-lemtos-amber text-black font-bold text-xl px-10 py-4 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                    Start Your Project
                </motion.button>
              </Link>
          </div>
      </section>
    </div>
  );
};

export default Home;