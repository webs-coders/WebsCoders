import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const posts = [
  {
    title: "Why React.js is the Best Choice for Modern Web Development in 2026",
    excerpt: "Discover why React.js continues to dominate frontend development and how it can transform your web project with unmatched performance and flexibility.",
    category: "React.js",
    date: "Feb 15, 2026",
    readTime: "5 min",
    slug: "react-js-best-choice-web-development",
    image: "/images/blog-react.jpg",
  },
  {
    title: "How AI is Revolutionizing Website Design and Development",
    excerpt: "From automated content generation to intelligent UX personalization, learn how AI is reshaping the future of web development and what it means for your business.",
    category: "AI Development",
    date: "Feb 10, 2026",
    readTime: "7 min",
    slug: "ai-revolutionizing-website-design",
    image: "/images/blog-ai.jpg",
  },
  {
    title: "Top 10 SEO Strategies for Web Development Companies in 2026",
    excerpt: "Master the latest SEO techniques that every web development company should implement to rank higher on Google and drive organic traffic.",
    category: "SEO",
    date: "Feb 5, 2026",
    readTime: "8 min",
    slug: "seo-strategies-web-development-2026",
    image: "/images/blog-seo.jpg",
  },
  {
    title: "Drupal vs WordPress: Which CMS is Right for Your Business?",
    excerpt: "A comprehensive comparison of two leading CMS platforms to help you make an informed decision for your next web project.",
    category: "CMS",
    date: "Jan 28, 2026",
    readTime: "6 min",
    slug: "drupal-vs-wordpress-comparison",
    image: "/images/blog-cms.jpg",
  },
  {
    title: "The Complete Guide to Hiring a Web Development Company in Ahmedabad",
    excerpt: "What to look for when choosing a web development partner in Ahmedabad — from technical expertise to communication and project management.",
    category: "Business",
    date: "Jan 20, 2026",
    readTime: "6 min",
    slug: "hiring-web-development-company-ahmedabad",
    image: "/images/blog-business.jpg",
  },
  {
    title: "How to Optimize Core Web Vitals for Better Google Rankings",
    excerpt: "A practical guide to improving LCP, CLS, and INP scores to boost your website's performance and search engine rankings.",
    category: "Performance",
    date: "Jan 12, 2026",
    readTime: "9 min",
    slug: "optimize-core-web-vitals-google-rankings",
    image: "/images/blog-performance.jpg",
  },
];

const Blog = () => {
  return (
    <Layout>
      <SEOHead
        title="Blog - Web Development Insights & Tips"
        description="Read the latest insights on web development, React.js, AI, SEO strategies, and digital trends from WebScoders' expert team in Ahmedabad."
        keywords="web development blog, react.js tips, SEO strategies, AI website development, frontend development insights"
        canonical="https://webscoders.com/blog"
     />

      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="max-w-3xl mb-16"
          >
            <span className="text-primary font-medium text-sm">Our Blog</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Insights & <span className="text-gradient">Resources</span>
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Stay updated with the latest trends, tips, and best practices in
              web development, SEO, and digital transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
              <motion.article
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group rounded-xl border border-border gradient-card overflow-hidden hover:border-primary/30 transition-all duration-300 h-full"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-primary">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
