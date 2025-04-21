import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  // State for category filter
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
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

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'saas', name: 'SaaS Products' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'social', name: 'Social Media' },
    { id: 'mobile', name: 'Mobile Apps' }
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: ["web"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "FashionBoutique Inc.",
      year: "2024",
      description: "A comprehensive e-commerce platform with advanced product filtering, secure checkout, and inventory management."
    },
    {
      id: 2,
      title: "AI Analytics Dashboard",
      category: ["ai", "saas"],
      image: "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "DataInsight Technologies",
      year: "2025",
      description: "Real-time analytics dashboard powered by machine learning algorithms to provide business intelligence insights."
    },
    {
      id: 3,
      title: "Social Media Campaign",
      category: ["social"],
      image: "https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "GreenEarth Foundation",
      year: "2024",
      description: "Multi-platform social media campaign that increased engagement by 200% and drove fundraising success."
    },
    {
      id: 4,
      title: "Healthcare SaaS Solution",
      category: ["saas", "ai"],
      image: "https://images.pexels.com/photos/3861457/pexels-photo-3861457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "MediCare Solutions",
      year: "2025",
      description: "Patient management system with AI-driven diagnosis assistance and secure medical record storage."
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      category: ["mobile", "ai"],
      image: "https://images.pexels.com/photos/373984/pexels-photo-373984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "FitLife Pro",
      year: "2024",
      description: "Mobile application with personalized workout plans, nutrition tracking, and AI-powered coaching."
    },
    {
      id: 6,
      title: "Corporate Website Redesign",
      category: ["web"],
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "Global Investments Ltd",
      year: "2025",
      description: "Complete redesign of corporate website with focus on user experience, accessibility, and conversion optimization."
    },
    {
      id: 7,
      title: "Restaurant Ordering System",
      category: ["web", "mobile"],
      image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "Fine Dining Group",
      year: "2024",
      description: "Integrated ordering system with web and mobile apps, table management, and kitchen display system."
    },
    {
      id: 8,
      title: "Influencer Marketing Platform",
      category: ["social", "saas"],
      image: "https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "SocialConnect",
      year: "2025",
      description: "Platform connecting brands with influencers, featuring campaign management and performance analytics."
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Portfolio</span>
            </motion.h1>
            
            <motion.p variants={item} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12">
              Explore our latest work across various industries. We pride ourselves on delivering exceptional solutions that drive results for our clients.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button 
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section 
        ref={projectsRef}
        className="py-8 md:py-12 pb-24"
      >
        <div className="container-custom">
          <motion.div 
            variants={container}
            initial="hidden"
            animate={projectsInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                variants={item}
                className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-slate-700"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <span className="inline-block text-xs font-semibold text-white bg-primary-600/80 backdrop-blur-sm rounded-full px-3 py-1 mb-2">
                        {project.category.map(cat => {
                          const category = categories.find(c => c.id === cat);
                          return category ? category.name.replace(' Projects', '') : cat;
                        }).join(', ')}
                      </span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{project.client} • {project.year}</p>
                    </div>
                    <a 
                      href={`/portfolio/${project.id}`} 
                      className="h-10 w-10 rounded-full bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 transition-transform duration-300 group-hover:scale-110"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;