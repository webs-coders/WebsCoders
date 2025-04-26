import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center bg-primary-600 rounded-lg overflow-hidden">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-primary-800 dark:text-white">
                WebsCoders
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Crafting digital experiences with innovative technology solutions for the modern web.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" target="_blank" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a> */}
              <a href="https://www.linkedin.com/company/106997113/admin/dashboard/" target="_blank" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a href="#" target="_blank" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a> */}
              <a href="https://www.instagram.com/webscoders/?utm_source=ig_web_button_share_sheet" target="_blank" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a href="#" target="_blank" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                'Web Development', 
                'SaaS Products', 
                'AI Solutions',
                'UI/UX Design',
                'Social Media Marketing'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to="/services"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary-600" />
                <span className="text-gray-600 dark:text-gray-400">info@webscoders.com</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary-600" />
                <span className="text-gray-600 dark:text-gray-400">+91 9106318135</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span className="text-gray-600 dark:text-gray-400">Ahmedabad, India.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} WebsCoders. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white">
                Sitemap
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;