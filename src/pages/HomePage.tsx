import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Bot, Globe, Zap, LineChart, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6 text-primary-600" />,
      title: "Web Development",
      description: "Crafting responsive, modern websites with cutting-edge technologies and frameworks.",
      link: "/services#web-development"
    },
    {
      icon: <Database className="w-6 h-6 text-primary-600" />,
      title: "SaaS Products",
      description: "Building scalable software-as-a-service solutions that grow with your business needs.",
      link: "/services#saas-products"
    },
    {
      icon: <Bot className="w-6 h-6 text-primary-600" />,
      title: "AI Solutions",
      description: "Leveraging artificial intelligence to create smart, data-driven applications.",
      link: "/services#ai-solutions"
    },
    {
      icon: <Globe className="w-6 h-6 text-primary-600" />,
      title: "Social Media",
      description: "Strategic social media marketing to boost your brand presence and engagement.",
      link: "/services#social-media"
    },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Fast Performance",
      description: "Optimized websites that load quickly and run smoothly for the best user experience."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "User-Centric Design",
      description: "Intuitive interfaces that delight users and achieve your business goals."
    },
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      title: "Data-Driven Approach",
      description: "Analytics and insights that power informed decisions and strategic growth."
    },
  ];

  const projects = [
    {
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "E-Commerce Platform",
      category: "Web Development",
      link: "/portfolio/ecommerce-platform"
    },
    {
      image: "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "AI Analytics Dashboard",
      category: "SaaS & AI",
      link: "/portfolio/ai-analytics"
    },
    {
      image: "https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Social Media Campaign",
      category: "Digital Marketing",
      link: "/portfolio/social-campaign"
    },
  ];

  const testimonials = [
    {
      quote: "WebsCoders transformed our online presence with their innovative approach and technical expertise. Our conversions increased by 40% in just three months.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The AI solution developed by WebsCoders revolutionized how we handle customer data. Their team's expertise and support were exceptional throughout the project.",
      author: "Michael Chen",
      position: "CTO, DataFlow Systems",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Working with WebsCoders on our SaaS platform was a game-changer. Their attention to detail and commitment to quality exceeded our expectations.",
      author: "Emma Rodriguez",
      position: "Product Manager, CloudSoft",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  // Observer hooks for section animations
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-16 md:py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-400/20 dark:bg-secondary-600/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative">
          <motion.div
            variants={container}
            initial="hidden"
            animate={heroInView ? "show" : "hidden"}
            className="text-center max-w-4xl mx-auto"
          >
            {/* <motion.div variants={item} className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              Launching in 2025 - Join our waiting list
            </motion.div> */}
            
            <motion.h1 variants={item} className="heading-xl mb-6">
              Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Digital Excellence</span> for the Modern Web
            </motion.h1>
            
            <motion.p variants={item} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              WebsCoders empowers businesses with cutting-edge web development, innovative SaaS solutions, AI integration, and strategic social media services.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                Explore Our Work
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={item}
            initial="hidden"
            animate={heroInView ? "show" : "hidden"}
            className="mt-16 md:mt-20 flex justify-center"
          >
            <div className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="WebsCoders Team Working" 
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Transforming Ideas into Digital Reality</h3>
                <p className="text-gray-200">Innovative solutions for forward-thinking businesses</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section 
        ref={servicesRef}
        className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900/50"
      >
        <div className="container-custom">
          <motion.div 
            variants={container}
            initial="hidden"
            animate={servicesInView ? "show" : "hidden"}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={item} className="heading-lg mb-6">
              Our Core Services
            </motion.h2>
            <motion.p variants={item} className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive digital solutions tailored to your business needs. We combine technical expertise with creative innovation.
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate={servicesInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
              >
                <div className="h-14 w-14 rounded-lg bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-5">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={item}
            initial="hidden"
            animate={servicesInView ? "show" : "hidden"}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="py-16 md:py-24 bg-primary-600 text-white overflow-hidden relative"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-700/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-500/50 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative">
          <motion.div 
            variants={container}
            initial="hidden"
            animate={featuresInView ? "show" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={item} className="heading-lg mb-6">
                Why Choose WebsCoders?
              </motion.h2>
              <motion.p variants={item} className="text-lg text-white/90 mb-8">
                We combine technical excellence with creative innovation to deliver solutions that exceed expectations. Our team is dedicated to your success.
              </motion.p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    variants={item}
                    className="flex items-start gap-4"
                  >
                    <div className="h-12 w-12 rounded-lg bg-primary-500 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={item} className="mt-10">
                <Link to="/about" className="inline-flex items-center gap-2 text-white font-medium hover:text-white/90 transition-colors">
                  Learn more about our approach
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
            
            <motion.div variants={item} className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team collaboration" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl transform rotate-3 scale-95 -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section 
        ref={projectsRef}
        className="py-16 md:py-24"
      >
        <div className="container-custom">
          <motion.div 
            variants={container}
            initial="hidden"
            animate={projectsInView ? "show" : "hidden"}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={item} className="heading-lg mb-6">
              Featured Projects
            </motion.h2>
            <motion.p variants={item} className="text-lg text-gray-600 dark:text-gray-400">
              Explore our portfolio of successful projects across various industries and digital solutions.
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate={projectsInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block text-xs font-semibold text-white/80 bg-primary-600/80 backdrop-blur-sm rounded-full px-3 py-1 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <Link 
                    to={project.link}
                    className="inline-flex items-center text-white/90 hover:text-white"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={item}
            initial="hidden"
            animate={projectsInView ? "show" : "hidden"}
            className="text-center mt-12"
          >
            <Link to="/portfolio" className="btn-primary">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900/50"
      >
        <div className="container-custom">
          <motion.div 
            variants={container}
            initial="hidden"
            animate={testimonialsInView ? "show" : "hidden"}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={item} className="heading-lg mb-6">
              Client Testimonials
            </motion.h2>
            <motion.p variants={item} className="text-lg text-gray-600 dark:text-gray-400">
              Don't just take our word for it. Here's what our clients have to say about working with WebsCoders.
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate={testimonialsInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-lg relative border border-gray-100 dark:border-slate-700"
              >
                <div className="mb-8">
                  {/* Quote icon */}
                  <svg className="w-10 h-10 text-primary-100 dark:text-primary-900 absolute top-6 right-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7 12.87c-.48-.22-1.37-.48-1.37-2.05 0-1.27.67-2.97 1.73-4.67 1.13-1.8 2.91-2.93 2.91-2.93l-1.28-1.59c-.19.04-1.84 1.42-3.82 4.36-1.56 2.41-2.5 5.24-2.5 7.31 0 2.82 1.14 4.9 2.97 6.03 1.61.99 3.88 1.17 5.31.52 1.77-.8 2.94-2.55 2.94-4.86-.01-1.61-.62-2.69-2.45-2.69-1.98 0-3.95 1.76-4.44.57ZM20.9 12.87c-.48-.22-1.37-.48-1.37-2.05 0-1.27.67-2.97 1.73-4.67 1.13-1.8 2.92-2.93 2.92-2.93l-1.28-1.59c-.19.04-1.84 1.42-3.82 4.36-1.56 2.41-2.5 5.24-2.5 7.31 0 2.82 1.14 4.9 2.97 6.03 1.61.99 3.88 1.17 5.31.52 1.77-.8 2.94-2.55 2.94-4.86-.01-1.61-.62-2.69-2.45-2.69-1.98 0-3.95 1.76-4.45.57Z" />
                  </svg>
                  <p className="text-gray-700 dark:text-gray-300 relative z-10">"{testimonial.quote}"</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="py-16 md:py-20"
      >
        <div className="container-custom">
          <motion.div 
            variants={container}
            initial="hidden"
            animate={ctaInView ? "show" : "hidden"}
            className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative px-6 py-16 md:p-12 lg:p-16">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="text-white">
                  <motion.h2 variants={item} className="heading-lg mb-6">
                    Ready to Transform Your Digital Presence?
                  </motion.h2>
                  <motion.p variants={item} className="text-white/90 text-lg mb-8">
                    Let's discuss how WebsCoders can help you achieve your business goals with tailored digital solutions.
                  </motion.p>
                  <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center gap-2 justify-center sm:justify-start">
                      Contact Us
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link to="/services" className="border border-white/30 backdrop-blur-sm text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center gap-2 justify-center sm:justify-start">
                      Explore Services
                    </Link>
                  </motion.div>
                </div>
                
                <motion.div variants={item} className="hidden lg:block">
                  <img 
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Team collaboration" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;