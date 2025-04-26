import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Bot, Globe , PenTool, Zap, Shield, RefreshCw, Users, Triangle, Layout, Server, Flame, Layers, Palette, Cloud } from 'lucide-react';
import { FaDrupal, FaWordpress } from 'react-icons/fa6';

const ServicesPage: React.FC = () => {
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

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      id: "web-development",
      title: "Web Development",
      icon: <Code className="w-12 h-12 text-primary-600" />,
      categoriesimg:"https://img.freepik.com/free-photo/programming-background-collage_23-2149901791.jpg?t=st=1745550677~exp=1745554277~hmac=82061ebc034ccf72c5e131e9f21e57c928a0b9917ed1d28acb7d6a4cdab8d953&w=1380",
      description: "Crafting responsive, fast, and beautiful websites that represent your brand and drive results.",
      services: [
        { title: "Custom Website Development", description: "Tailored websites built from scratch to meet your unique requirements." },
        { title: "E-commerce Solutions", description: "Full-featured online stores with secure checkout and inventory management." },
        { title: "Progressive Web Apps", description: "Fast, reliable, and engaging applications that work across all devices." },
        { title: "Website Optimization", description: "Performance tuning to ensure your site loads quickly and ranks well." }
      ]
    },
    {
      id: "saas-products",
      title: "SaaS Products",
      icon: <Database className="w-12 h-12 text-primary-600" />,
      description: "Building powerful, scalable software-as-a-service solutions that grow with your business.",
      categoriesimg: "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169850.jpg?t=st=1745549986~exp=1745553586~hmac=3de4800c080b47eaee36909ee05de03fcbffa2aceb89c91fb0eba11762064355&w=1380",
      services: [
        { title: "Custom SaaS Development", description: "End-to-end development of cloud-based applications for your business needs." },
        { title: "Multi-tenant Architecture", description: "Secure, scalable systems that support multiple customers efficiently." },
        { title: "Subscription Management", description: "Robust billing systems with flexible plans and payment processing." },
        { title: "User Analytics", description: "Deep insights into user behavior to drive product improvements." }
      ]
    },
    {
      id: "ai-solutions",
      title: "AI Solutions",
      icon: <Bot className="w-12 h-12 text-primary-600" />,
      categoriesimg: "https://img.freepik.com/free-photo/man-robot-working-together-high-tech-office_23-2151966702.jpg?t=st=1745550142~exp=1745553742~hmac=d75f26668cfd5929e681e3de7f3cb4458906e34099743f66330fd23cb4966d32&w=740",
      description: "Leveraging artificial intelligence to create smart, data-driven applications and experiences.",
      services: [
        { title: "Chatbots & Virtual Assistants", description: "Intelligent conversation agents that enhance customer service." },
        { title: "Predictive Analytics", description: "Data-driven forecasting to inform business decisions." },
        { title: "Machine Learning Integration", description: "Custom ML models tailored to your business challenges." },
        { title: "Natural Language Processing", description: "Smart text analysis for content categorization and sentiment analysis." }
      ]
    },
    {
      id: "social-media",
      title: "Social Media",
      icon: <Globe className="w-12 h-12 text-primary-600" />,
      categoriesimg: "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063126.jpg?t=st=1745550366~exp=1745553966~hmac=bb495335f446d4139b0868740495b83ec540d8776418dcde6f56bb0030e9d94b&w=826",
      description: "Strategic social media marketing to boost your brand presence, engagement, and conversions.",
      services: [
        { title: "Social Media Strategy", description: "Comprehensive plans to achieve your business goals across platforms." },
        { title: "Content Creation", description: "Engaging posts, graphics, and videos that resonate with your audience." },
        { title: "Community Management", description: "Active engagement and relationship building with your followers." },
        { title: "Social Media Analytics", description: "Performance tracking and reporting to optimize your social presence." }
      ]
    },
    // {
    //   id: "mobile-apps",
    //   title: "Mobile Apps",
    //   icon: <Smartphone className="w-12 h-12 text-primary-600" />,
    //   description: "Developing intuitive, high-performance mobile applications for iOS and Android.",
    //   services: [
    //     { title: "Native App Development", description: "Platform-specific apps with optimal performance and user experience." },
    //     { title: "Cross-platform Solutions", description: "Efficient development across multiple platforms without compromising quality." },
    //     { title: "App Store Optimization", description: "Strategies to improve visibility and downloads in app stores." },
    //     { title: "Mobile UI/UX Design", description: "Intuitive interfaces that delight users and drive engagement." }
    //   ]
    // },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      icon: <PenTool className="w-12 h-12 text-primary-600" />,
      description: "Creating beautiful, intuitive interfaces and seamless user experiences that drive engagement.",
      categoriesimg: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038900.jpg?t=st=1745550582~exp=1745554182~hmac=fdc88e188a72676117475a060ada99ed653e1c1b84157258d3e405e3c1d1b685&w=740",
      services: [
        { title: "User Research", description: "Deep understanding of your users' needs, behaviors, and pain points." },
        { title: "Interface Design", description: "Visually appealing UI that aligns with your brand identity." },
        { title: "User Experience Optimization", description: "Streamlined flows that guide users to their goals effortlessly." },
        { title: "Prototyping & Testing", description: "Interactive prototypes and user testing to validate design decisions." }
      ]
    }
  ];

  const technologies = [
    { icon: <Zap />, name: "React" },
    { icon: <Triangle />, name: "Angular" }, // Replace with an Angular icon
    { icon: <Cloud />, name: "Node.js" },
    { icon: <Layout />, name: "Next.js" }, // Replace with Next.js icon
    { icon: <FaWordpress />, name: "WordPress" },
    { icon: <FaDrupal />, name: "Drupal" },
    { icon: <Globe />, name: "GraphQL" },
    { icon: <Bot />, name: "Python" },
    { icon: <Palette />, name: "Tailwind" }, // Tailwind icon or color-related
    { icon: <Layers />, name: ".NET" }, // Consider using a dotnet logo icon
    { icon: <RefreshCw />, name: "Docker" },
    { icon: <Shield />, name: "AWS" },
    { icon: <Database />, name: "MongoDB" },
    { icon: <Flame />, name: "Firebase" },
    { icon: <Database />, name: "PostgreSQL" },
    { icon: <Server />, name: "SQL Server" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and target audience to create a strategic foundation."
    },
    {
      number: "02",
      title: "Planning",
      description: "Detailed project planning with clear timelines, deliverables, and communication protocols."
    },
    {
      number: "03",
      title: "Design",
      description: "Creating intuitive, visually appealing interfaces that align with your brand and user expectations."
    },
    {
      number: "04",
      title: "Development",
      description: "Building robust, scalable solutions using the latest technologies and best practices."
    },
    {
      number: "05",
      title: "Testing",
      description: "Rigorous quality assurance to ensure your solution works flawlessly across all scenarios."
    },
    {
      number: "06",
      title: "Launch",
      description: "Smooth deployment with careful monitoring and immediate support to address any issues."
    },
    {
      number: "07",
      title: "Growth",
      description: "Ongoing optimization, updates, and enhancements to maximize your ROI and user satisfaction."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-16 md:py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative">
          <motion.div
            variants={container}
            initial="hidden"
            animate={heroInView ? "show" : "hidden"}
            className="max-w-4xl"
          >
            <motion.h1 variants={item} className="heading-xl mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Services</span>
            </motion.h1>
            
            <motion.p variants={item} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Comprehensive digital solutions tailored to your unique business needs. From web development and SaaS products to AI solutions and social media strategies.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <a 
                  key={category.id}
                  href={`#${category.id}`}
                  className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {React.cloneElement(category.icon, { className: "w-5 h-5 text-primary-600" })}
                  <span className="font-medium">{category.title}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Services List */}
      <section 
        ref={servicesRef}
        className="py-16 md:py-24"
      >
        <div className="container-custom">
          <motion.div
            variants={container}
            initial="hidden"
            animate={servicesInView ? "show" : "hidden"}
            className="space-y-24"
          >
            {categories.map((category, index) => (
              <div 
                key={category.id}
                id={category.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <motion.div variants={item} className="space-y-6">
                  <div className="h-20 w-20 rounded-2xl bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center">
                    {category.icon}
                  </div>
                  
                  <h2 className="heading-lg">{category.title}</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                  
                  <div className="pt-6 space-y-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex gap-4">
                        <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-primary-600 dark:text-primary-400 font-medium">{serviceIndex + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div variants={item} className="relative order-first lg:order-last">
                  <div className="relative z-10 rounded-xl overflow-hidden shadow-xl h-full">
                    <img 
                      src={category.categoriesimg}
                      alt={category.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block text-white font-medium mb-2">Featured Solution</span>
                      <h3 className="text-2xl text-white font-bold">{category.title}</h3>
                    </div>
                  </div>
                  {index % 2 === 0 ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl transform rotate-3 scale-95 -z-10"></div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-xl transform -rotate-3 scale-95 -z-10"></div>
                  )}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-md mb-6">Technologies We Work With</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We stay at the forefront of technology to deliver cutting-edge solutions for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-slate-700"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-primary-600 dark:text-primary-400">
                {React.cloneElement(tech.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="font-medium">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section 
        ref={processRef}
        className="py-16 md:py-24"
      >
        <div className="container-custom">
          <motion.div
            variants={container}
            initial="hidden"
            animate={processInView ? "show" : "hidden"}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={item} className="heading-lg mb-6">
              Our Process
            </motion.h2>
            <motion.p variants={item} className="text-lg text-gray-600 dark:text-gray-400">
              A structured approach that ensures quality, efficiency, and successful outcomes for every project.
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate={processInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {processSteps.slice(0, 4).map((step, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700"
              >
                <span className="text-5xl font-bold text-primary-100 dark:text-primary-900">{step.number}</span>
                <h3 className="text-xl font-bold mt-4 mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate={processInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
          >
            {processSteps.slice(4).map((step, index) => (
              <motion.div 
                key={index + 4}
                variants={item}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700"
              >
                <span className="text-5xl font-bold text-primary-100 dark:text-primary-900">{step.number}</span>
                <h3 className="text-xl font-bold mt-4 mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
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
              
              <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Get Started?
                </motion.h2>
                <motion.p variants={item} className="text-white/90 text-lg mb-8">
                  Contact us today to discuss your project needs and discover how our services can help your business grow.
                </motion.p>
                <motion.div variants={item}>
                  <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                    Let's Talk
                    <Users className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;