import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Rocket, Target, Award, ArrowRight } from 'lucide-react';

const AboutPage: React.FC = () => {
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

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Team members data
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Alex has 15+ years of experience in web development and digital strategy, having worked with Fortune 500 companies before founding WebsCoders.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Sarah leads our technical team with expertise in AI and machine learning. She previously worked at Google and has a PhD in Computer Science.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Michael Rodriguez",
      role: "Creative Director",
      bio: "Michael brings 10+ years of UI/UX design experience to our team, with a passion for creating beautiful and functional digital experiences.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Emma Thompson",
      role: "Head of Marketing",
      bio: "Emma specializes in digital marketing strategy and social media campaigns that drive engagement and conversion for our clients.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "David is an expert in full-stack development with specialized knowledge in React, Node.js, and cloud infrastructure.",
      image: "https://images.pexels.com/photos/9950569/pexels-photo-9950569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Lisa Wagner",
      role: "AI Solutions Architect",
      bio: "Lisa designs and implements cutting-edge AI solutions that help our clients leverage the power of machine learning and data analytics.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  // Values data
  const values = [
    {
      icon: <Rocket className="w-6 h-6 text-white" />,
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver forward-thinking solutions."
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Client Focus",
      description: "Understanding and exceeding client expectations is at the core of everything we do."
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Excellence",
      description: "We maintain the highest standards in our work, from code quality to design aesthetics."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork, both within our company and with our clients."
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h1 variants={item} className="heading-xl mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">WebsCoders</span>
              </motion.h1>
              
              <motion.p variants={item} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                We're a team of passionate digital experts committed to creating exceptional web experiences, innovative SaaS products, and cutting-edge AI solutions.
              </motion.p>
              
              <motion.div variants={item} className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md border border-gray-100 dark:border-slate-700">
                  <p className="text-3xl font-bold text-primary-600 mb-2">10+</p>
                  <p className="text-gray-600 dark:text-gray-400">Completed Projects</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md border border-gray-100 dark:border-slate-700">
                  <p className="text-3xl font-bold text-primary-600 mb-2">5+</p>
                  <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md border border-gray-100 dark:border-slate-700">
                  <p className="text-3xl font-bold text-primary-600 mb-2">2+</p>
                  <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md border border-gray-100 dark:border-slate-700">
                  <p className="text-3xl font-bold text-primary-600 mb-2">10+</p>
                  <p className="text-gray-600 dark:text-gray-400">Team Members</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={item} className="relative order-first lg:order-last">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="WebsCoders Team" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl transform rotate-3 scale-95 -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section 
        ref={storyRef}
        className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900/50"
      >
        <div className="container-custom">
          <motion.div
            variants={container}
            initial="hidden"
            animate={storyInView ? "show" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={item} className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="WebsCoders Founding" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl transform -rotate-3 scale-95 -z-10"></div>
            </motion.div>
            
            <div>
              <motion.h2 variants={item} className="heading-lg mb-6">
                Our Story
              </motion.h2>
              
              <motion.div variants={item} className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2024, WebsCoders began with a simple mission: to help businesses succeed in the digital landscape through innovative technology solutions.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a full-service digital agency with expertise across web development, SaaS products, AI solutions, and social media marketing.
                </p>
                <p>
                  Over the years, we've had the privilege of working with clients across various industries, from startups to established enterprises, helping them achieve their business goals through technology.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible in the digital world, staying at the forefront of emerging technologies and design trends to deliver exceptional results for our clients.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section 
        ref={valuesRef}
        className="py-16 md:py-24 bg-primary-600 text-white overflow-hidden relative"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-700/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-500/50 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative">
          <motion.div
            variants={container}
            initial="hidden"
            animate={valuesInView ? "show" : "hidden"}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={item} className="heading-lg mb-6">
              Our Values
            </motion.h2>
            <motion.p variants={item} className="text-lg text-white/90">
              These core principles guide our work and shape our company culture.
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate={valuesInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="h-14 w-14 rounded-lg bg-primary-500 flex items-center justify-center mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Team Section */}
      {/* <section 
        ref={teamRef}
        className="py-16 md:py-24"
      >
        <div className="container-custom">
          <motion.div
            variants={container}
            initial="hidden"
            animate={teamInView ? "show" : "hidden"}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={item} className="heading-lg mb-6">
              Meet Our Team
            </motion.h2>
            <motion.p variants={item} className="text-lg text-gray-600 dark:text-gray-400">
              The talented individuals behind WebsCoders, dedicated to delivering exceptional digital solutions.
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate={teamInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group border border-gray-100 dark:border-slate-700"
              >
                <div className="aspect-[1/1] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}
      
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
                  Join Our Team
                </motion.h2>
                <motion.p variants={item} className="text-white/90 text-lg mb-8">
                  We're always looking for talented individuals to join our growing team. Check out our current openings.
                </motion.p>
                <motion.div variants={item}>
                  <Link to="/careers" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                    View Openings
                    <ArrowRight className="w-5 h-5" />
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

export default AboutPage;