import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Clock, User, Tag, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  // State for search and category filter
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

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

  const [articlesRef, articlesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Categories
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'web-dev', name: 'Web Development' },
    { id: 'saas', name: 'SaaS' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'social-media', name: 'Social Media' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Explore the emerging technologies and approaches that are shaping the future of web development in 2025 and beyond.",
      image: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "web-dev",
      author: "Alex Johnson",
      date: "July 15, 2025",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable SaaS Applications: Architecture Best Practices",
      excerpt: "Learn the architectural patterns and practices that enable SaaS applications to scale efficiently as your user base grows.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "saas",
      author: "Sarah Chen",
      date: "July 8, 2025",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 3,
      title: "Practical Applications of AI in Modern Business",
      excerpt: "Discover how businesses are leveraging artificial intelligence to streamline operations and drive innovation.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "ai",
      author: "David Kim",
      date: "June 30, 2025",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 4,
      title: "Effective Social Media Strategies for B2B Companies",
      excerpt: "Explore tactics that B2B companies can use to build meaningful connections and generate leads through social media.",
      image: "https://images.pexels.com/photos/163184/social-social-media-communication-163184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "social-media",
      author: "Emma Thompson",
      date: "June 22, 2025",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 5,
      title: "The Psychology of UX Design: Creating Intuitive Interfaces",
      excerpt: "Understand the psychological principles that drive effective user experience design and create more intuitive interfaces.",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "design",
      author: "Michael Rodriguez",
      date: "June 15, 2025",
      readTime: "9 min read",
      featured: false
    },
    {
      id: 6,
      title: "How Machine Learning is Transforming Data Analysis",
      excerpt: "Explore how machine learning algorithms are revolutionizing the way businesses analyze and derive insights from data.",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "ai",
      author: "Lisa Wagner",
      date: "June 8, 2025",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 7,
      title: "Monetization Strategies for SaaS Products",
      excerpt: "Learn effective pricing models and monetization strategies to maximize revenue for your SaaS products.",
      image: "https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "saas",
      author: "Alex Johnson",
      date: "May 30, 2025",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 8,
      title: "The Business Value of Digital Transformation",
      excerpt: "Understand how digital transformation initiatives drive business value and competitive advantage in today's market.",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "business",
      author: "Sarah Chen",
      date: "May 22, 2025",
      readTime: "6 min read",
      featured: false
    },
  ];

  // Filter posts based on search query and active category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured);

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
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 variants={item} className="heading-xl mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Blog</span>
            </motion.h1>
            
            <motion.p variants={item} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10">
              Insights, tutorials, and industry perspectives from the WebsCoders team.
            </motion.p>
            
            <motion.div variants={item} className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-4 pr-12 rounded-xl border border-gray-300 dark:border-slate-600 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-12">
          <div className="container-custom">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Featured Article</h2>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="flex items-center gap-4 text-white/80 mb-4">
                  <span className="inline-flex items-center bg-primary-600/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                    <Tag className="w-4 h-4 mr-1" />
                    {categories.find(cat => cat.id === featuredPost.category)?.name}
                  </span>
                  <span className="inline-flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </span>
                  <span className="inline-flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author}
                  </span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">{featuredPost.title}</h3>
                <p className="text-white/90 mb-6 max-w-3xl">{featuredPost.excerpt}</p>
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center text-white font-medium hover:text-primary-300 transition-colors"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Category Filter */}
      <section className="py-8 border-b border-gray-200 dark:border-slate-800 sticky top-[72px] bg-white dark:bg-slate-900 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
            <div className="flex gap-2">
              {categories.map((category) => (
                <button 
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Articles Section */}
      <section 
        ref={articlesRef}
        className="py-16"
      >
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <motion.div 
              variants={container}
              initial="hidden"
              animate={articlesInView ? "show" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post) => (
                <motion.article 
                  key={post.id}
                  variants={item}
                  className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-slate-700"
                >
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm mb-3">
                        <span className="inline-flex items-center bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full px-3 py-1">
                          {categories.find(cat => cat.id === post.category)?.name}
                        </span>
                        <span className="inline-flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{post.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          By {post.author} • {post.date}
                        </span>
                        <span className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center">
                          Read
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                No articles match your current search criteria. Try adjusting your search or browse all articles.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="btn-primary"
              >
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Subscribe to our newsletter to receive the latest articles, news, and updates from our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors flex-grow"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;