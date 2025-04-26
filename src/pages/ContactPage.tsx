import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from 'emailjs-com';
const ContactPage: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    emailjs.send(
      'service_r7njpr4',        // Your service ID
      'template_b6ap66f',        // Your template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      'HeR_0X-imJNXI5AuL'        // Your public key
    )
    .then(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      setError('Something went wrong. Please try again later.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };
  
  
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
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Contact info
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary-600" />,
      title: "Email Us",
      content: "info@webscoders.com",
      link: "mailto:info@webscoders.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-600" />,
      title: "Call Us",
      content: "+91 9106318135",
      link: "tel:+919106318135"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-600" />,
      title: "Visit Us",
      content: "Ahmedabad, India",
      link: "https://maps.google.com"
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What services does WebsCoders offer?",
      answer: "We offer web development, SaaS products, AI solutions, and social media marketing services. Our team can help with everything from website design to complex AI implementations."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A simple website might take 3-4 weeks, while a custom SaaS solution could take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer various maintenance and support packages to ensure your digital solution continues to perform optimally after launch. Our team is available for updates, bug fixes, and feature enhancements."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on the specific requirements, complexity, and timeline. We provide detailed quotes after understanding your needs during the initial consultation."
    },
    {
      question: "Can you work with clients remotely?",
      answer: "Absolutely! We work with clients around the world. Our process is designed to be effective regardless of geographic location, with clear communication channels and regular progress updates."
    },
  ];

  return (
    <div>
      {/* Contact Section */}
      <section 
        ref={contactRef}
        className="py-16 md:py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative">
          <motion.div
            variants={container}
            initial="hidden"
            animate={contactInView ? "show" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            <div>
              <motion.h1 variants={item} className="heading-xl mb-6">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Touch</span>
              </motion.h1>
              
              <motion.p variants={item} className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                Have a project in mind or want to learn more about our services? We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
              </motion.p>
              
              <motion.div variants={container} className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    // variants={item}
                    className="flex items-start gap-4"
                  >
                    <div className="h-12 w-12 rounded-lg bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                      <a 
                        href={item.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {item.content}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div variants={item} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p className="flex justify-between">
                    <span>Monday to Friday:</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday & Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={item}>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 dark:bg-primary-900/50 text-primary-600 rounded-full mb-4">
                      <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Thanks for reaching out! We'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)} 
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Your Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Subject*
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="Web Development">Web Development</option>
                          <option value="SaaS Products">SaaS Products</option>
                          <option value="AI Solutions">AI Solutions</option>
                          <option value="Social Media">Social Media</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      ></textarea>
                    </div>
                    
                    {error && (
                      <div className="text-red-500 text-sm">
                        {error}
                      </div>
                    )}
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-primary w-full flex justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-700 h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9103570232146!2d72.52206727477044!3d23.027063416161617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85a789f709f3%3A0x247b137594876fa5!2sIscon%20Emporio!5e0!3m2!1sen!2sin!4v1745407488056!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="WebsCoders Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900/50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Find answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-slate-700"
                >
                  <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;