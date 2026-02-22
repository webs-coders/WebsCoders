import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const blogData: Record<string, {
  title: string; category: string; date: string; readTime: string; image: string;
  metaDesc: string; keywords: string;
  content: { type: "p" | "h2" | "h3" | "ul"; text: string | string[] }[];
}> = {
  "react-js-best-choice-web-development": {
    title: "Why React.js is the Best Choice for Modern Web Development in 2026",
    category: "React.js", date: "Feb 15, 2026", readTime: "5 min",
    image: "/images/blog-react.jpg",
    metaDesc: "Discover why React.js continues to dominate frontend development and how it can transform your web project with unmatched performance and flexibility.",
    keywords: "react.js development, frontend framework 2026, react web development company",
    content: [
      { type: "p", text: "React.js has solidified its position as the go-to JavaScript library for building modern web applications. With its component-based architecture, virtual DOM, and extensive ecosystem, React continues to be the preferred choice for developers and businesses alike in 2026." },
      { type: "h2", text: "The React Ecosystem in 2026" },
      { type: "p", text: "The React ecosystem has matured significantly. Tools like Next.js, Remix, and Vite have made it easier than ever to build production-ready applications. Server Components, introduced in React 18, have fundamentally changed how we think about rendering strategies." },
      { type: "h2", text: "Why Businesses Choose React.js" },
      { type: "ul", text: ["Component Reusability — Build once, use everywhere across your application", "Performance — Virtual DOM and concurrent rendering deliver blazing-fast user experiences", "SEO-Friendly — Server-side rendering and static generation support excellent search engine optimization", "Massive Community — Millions of developers, thousands of libraries, and extensive documentation", "Enterprise Ready — Used by Meta, Netflix, Airbnb, and thousands of Fortune 500 companies"] },
      { type: "h2", text: "React.js Performance Advantages" },
      { type: "p", text: "React's concurrent rendering engine allows applications to remain responsive even during heavy computations. Features like Suspense, lazy loading, and automatic batching ensure optimal Core Web Vitals scores — critical for Google rankings in 2026." },
      { type: "h3", text: "Server Components Revolution" },
      { type: "p", text: "React Server Components allow developers to run components on the server, reducing the JavaScript bundle sent to the client. This results in faster initial page loads, better SEO, and improved user experience on slower devices." },
      { type: "h2", text: "How WebScoders Leverages React.js" },
      { type: "p", text: "At WebScoders, we specialize in building high-performance React.js applications. Our team combines deep React expertise with SEO-first development practices to deliver web applications that not only look stunning but also rank well on Google. As a leading React.js development company in Ahmedabad, we've delivered 150+ projects for clients worldwide." },
      { type: "p", text: "Whether you're building a SaaS dashboard, an e-commerce platform, or a corporate website, React.js provides the flexibility and performance you need. Contact WebScoders today for a free consultation on your next React.js project." },
    ],
  },
  "ai-revolutionizing-website-design": {
    title: "How AI is Revolutionizing Website Design and Development",
    category: "AI Development", date: "Feb 10, 2026", readTime: "7 min",
    image: "/images/blog-ai.jpg",
    metaDesc: "Learn how AI is reshaping web development with automated content generation, intelligent UX personalization, and smarter development workflows.",
    keywords: "AI website development, AI web design, artificial intelligence web development",
    content: [
      { type: "p", text: "Artificial Intelligence is no longer a futuristic concept — it's actively transforming how websites are designed, developed, and optimized. From automated content generation to intelligent user experience personalization, AI is revolutionizing every aspect of web development." },
      { type: "h2", text: "AI-Powered Content Generation" },
      { type: "p", text: "Modern AI tools can generate high-quality, SEO-optimized content at scale. This includes blog posts, product descriptions, meta tags, and even entire page layouts. However, the key lies in combining AI efficiency with human creativity and brand authenticity." },
      { type: "h2", text: "Intelligent UX Personalization" },
      { type: "p", text: "AI algorithms analyze user behavior in real-time to deliver personalized experiences. From dynamic content recommendations to adaptive navigation patterns, AI-driven UX can significantly improve engagement metrics and conversion rates." },
      { type: "ul", text: ["Dynamic content based on user preferences and browsing history", "AI-powered chatbots for instant customer support", "Predictive search with natural language processing", "Automated A/B testing and optimization", "Personalized product recommendations for e-commerce"] },
      { type: "h2", text: "AI in Development Workflows" },
      { type: "p", text: "AI coding assistants have become indispensable tools for developers. They help write cleaner code, catch bugs early, generate tests, and even suggest architectural improvements. This accelerates development timelines while maintaining code quality." },
      { type: "h3", text: "The Role of AI in SEO" },
      { type: "p", text: "AI tools can analyze search patterns, predict keyword trends, and optimize content strategies in real-time. They help identify content gaps, suggest internal linking opportunities, and ensure technical SEO compliance across large websites." },
      { type: "h2", text: "WebScoders' AI-First Approach" },
      { type: "p", text: "At WebScoders, we integrate AI into every stage of web development — from design and content creation to testing and optimization. Our AI-powered web solutions help businesses stay ahead of the competition while reducing development costs and time-to-market." },
    ],
  },
  "seo-strategies-web-development-2026": {
    title: "Top 10 SEO Strategies for Web Development Companies in 2026",
    category: "SEO", date: "Feb 5, 2026", readTime: "8 min",
    image: "/images/blog-seo.jpg",
    metaDesc: "Master the latest SEO techniques that every web development company should implement to rank higher on Google and drive organic traffic in 2026.",
    keywords: "SEO strategies 2026, web development SEO, technical SEO best practices",
    content: [
      { type: "p", text: "Search Engine Optimization continues to evolve rapidly. For web development companies, staying ahead of SEO trends is crucial — not just for clients' websites but also for demonstrating expertise. Here are the top 10 SEO strategies every web development company should master in 2026." },
      { type: "h2", text: "1. Core Web Vitals Optimization" },
      { type: "p", text: "Google's page experience signals remain critical. Optimize Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP) to ensure your websites meet Google's performance standards." },
      { type: "h2", text: "2. AI-Optimized Content Strategy" },
      { type: "p", text: "Use AI tools to identify content gaps, predict search trends, and create comprehensive content clusters. Focus on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals." },
      { type: "h2", text: "3. Schema Markup Implementation" },
      { type: "p", text: "Structured data helps search engines understand your content. Implement Organization, LocalBusiness, FAQ, HowTo, and Product schemas to enhance SERP visibility with rich snippets." },
      { type: "h2", text: "4. Mobile-First Indexing" },
      { type: "p", text: "With mobile-first indexing as the default, every website must deliver flawless mobile experiences. Responsive design, touch-friendly navigation, and fast mobile load times are non-negotiable." },
      { type: "h2", text: "5. Local SEO for Service Businesses" },
      { type: "p", text: "For web development companies targeting local markets, optimize Google Business Profile, build local citations, and create location-specific landing pages. Include city-specific keywords naturally in your content." },
      { type: "ul", text: ["Optimize Google Business Profile with accurate NAP data", "Build local citations on relevant directories", "Create location-specific service pages", "Encourage and respond to Google reviews", "Use local schema markup (LocalBusiness)"] },
      { type: "h2", text: "6-10: Advanced Strategies" },
      { type: "p", text: "Additional strategies include: internal linking optimization, video SEO integration, voice search optimization, programmatic SEO for scalable content, and building topical authority through comprehensive content hubs. Each strategy works together to create a powerful SEO presence that drives sustainable organic growth." },
      { type: "p", text: "At WebScoders, we implement all these strategies for our clients' websites. As a top-rated web development company in Ahmedabad, we combine technical SEO expertise with cutting-edge development practices to deliver websites that rank and convert." },
    ],
  },
  "drupal-vs-wordpress-comparison": {
    title: "Drupal vs WordPress: Which CMS is Right for Your Business?",
    category: "CMS", date: "Jan 28, 2026", readTime: "6 min",
    image: "/images/blog-cms.jpg",
    metaDesc: "A comprehensive comparison of Drupal and WordPress to help you choose the right CMS for your next web project. Expert analysis from WebScoders.",
    keywords: "drupal vs wordpress, CMS comparison, best CMS 2026, drupal development, wordpress development",
    content: [
      { type: "p", text: "Choosing the right Content Management System is one of the most important decisions for any web project. Drupal and WordPress are two of the most popular CMS platforms, each with distinct strengths. Let's break down when to choose each one." },
      { type: "h2", text: "WordPress: The Popular Choice" },
      { type: "p", text: "WordPress powers over 40% of all websites on the internet. Its user-friendly interface, extensive plugin ecosystem, and large community make it the go-to choice for many businesses." },
      { type: "ul", text: ["Intuitive admin interface — easy for non-technical users", "60,000+ plugins for virtually any functionality", "Large community and extensive documentation", "Quick setup and deployment", "Cost-effective for small to medium projects"] },
      { type: "h2", text: "Drupal: The Enterprise Solution" },
      { type: "p", text: "Drupal excels in enterprise environments where security, scalability, and complex content workflows are paramount. It's the CMS of choice for governments, universities, and large corporations." },
      { type: "ul", text: ["Superior security features and regular security updates", "Advanced content modeling with custom entities", "Built-in multilingual support", "Powerful taxonomy and content organization", "Scalable architecture for high-traffic sites"] },
      { type: "h2", text: "Making the Right Choice" },
      { type: "p", text: "Choose WordPress if you need a simple to medium-complexity website with quick time-to-market. Choose Drupal for complex, enterprise-grade applications that require advanced security, scalability, and custom workflows." },
      { type: "p", text: "At WebScoders, we're experts in both Drupal and WordPress development. We help businesses evaluate their needs and choose the right CMS platform. Contact us for a free consultation to discuss your project requirements." },
    ],
  },
  "hiring-web-development-company-ahmedabad": {
    title: "The Complete Guide to Hiring a Web Development Company in Ahmedabad",
    category: "Business", date: "Jan 20, 2026", readTime: "6 min",
    image: "/images/blog-business.jpg",
    metaDesc: "Everything you need to know about hiring a web development company in Ahmedabad. Expert tips on evaluating technical skills, communication, and project management.",
    keywords: "web development company ahmedabad, hire web developer ahmedabad, web development agency india",
    content: [
      { type: "p", text: "Ahmedabad has emerged as a thriving hub for web development talent in India. With hundreds of agencies and freelancers to choose from, finding the right web development partner can be challenging. This guide will help you make an informed decision." },
      { type: "h2", text: "Why Ahmedabad for Web Development?" },
      { type: "p", text: "Ahmedabad offers a unique combination of skilled talent, competitive pricing, and a growing tech ecosystem. The city's web development companies serve clients worldwide, delivering quality solutions at a fraction of the cost compared to Western markets." },
      { type: "h2", text: "Key Factors to Evaluate" },
      { type: "ul", text: ["Portfolio and case studies — review their past work carefully", "Technical expertise — ensure they're proficient in your required tech stack", "Client reviews — check Upwork, Clutch, and Google reviews", "Communication skills — clear, transparent communication is essential", "Project management approach — Agile methodology is preferred", "Post-launch support — ensure they offer maintenance and updates"] },
      { type: "h2", text: "Red Flags to Watch For" },
      { type: "p", text: "Be wary of companies that promise unrealistically low prices, lack a proper portfolio, or don't ask detailed questions about your project requirements. Quality web development requires investment, and the cheapest option rarely delivers the best results." },
      { type: "h2", text: "Why Choose WebScoders" },
      { type: "p", text: "WebScoders stands out as a top-rated web development company in Ahmedabad with 6+ years of experience, a 5-star Upwork rating, and 150+ successfully delivered projects. We combine technical excellence with transparent communication and agile project management to deliver exceptional results for clients worldwide." },
    ],
  },
  "optimize-core-web-vitals-google-rankings": {
    title: "How to Optimize Core Web Vitals for Better Google Rankings",
    category: "Performance", date: "Jan 12, 2026", readTime: "9 min",
    image: "/images/blog-performance.jpg",
    metaDesc: "A practical guide to improving LCP, CLS, and INP scores to boost your website's performance and search engine rankings in 2026.",
    keywords: "core web vitals optimization, LCP CLS INP, website performance SEO, page speed optimization",
    content: [
      { type: "p", text: "Core Web Vitals are a set of real-world, user-centered metrics that quantify key aspects of the user experience. Google uses these metrics as ranking signals, making them essential for any website aiming to rank well in search results." },
      { type: "h2", text: "Understanding the Three Metrics" },
      { type: "h3", text: "Largest Contentful Paint (LCP)" },
      { type: "p", text: "LCP measures loading performance — specifically, how long it takes for the largest content element to become visible. Aim for LCP under 2.5 seconds. Optimize by compressing images, using CDNs, and implementing lazy loading." },
      { type: "h3", text: "Cumulative Layout Shift (CLS)" },
      { type: "p", text: "CLS measures visual stability — unexpected layout shifts that frustrate users. Aim for CLS under 0.1. Always set explicit dimensions for images and videos, and avoid inserting content above existing content dynamically." },
      { type: "h3", text: "Interaction to Next Paint (INP)" },
      { type: "p", text: "INP measures responsiveness — how quickly the page responds to user interactions. Aim for INP under 200ms. Optimize by reducing JavaScript execution time, breaking up long tasks, and using web workers for heavy computations." },
      { type: "h2", text: "Practical Optimization Strategies" },
      { type: "ul", text: ["Optimize and compress all images with modern formats (WebP, AVIF)", "Implement lazy loading for below-the-fold content", "Minimize and defer non-critical JavaScript", "Use font-display: swap for web fonts", "Leverage browser caching and CDN distribution", "Reduce server response time (TTFB)", "Preload critical resources", "Implement code splitting in React applications"] },
      { type: "h2", text: "Measuring and Monitoring" },
      { type: "p", text: "Use tools like Google PageSpeed Insights, Lighthouse, Chrome DevTools, and Google Search Console to measure and monitor your Core Web Vitals. Regular monitoring helps catch regressions before they impact rankings." },
      { type: "p", text: "At WebScoders, performance optimization is built into our development process from day one. Every website we build is optimized for Core Web Vitals, ensuring fast load times, visual stability, and responsive interactions that satisfy both users and search engines." },
    ],
  },
};

const relatedPosts = [
  { slug: "react-js-best-choice-web-development", title: "Why React.js is the Best Choice for Modern Web Development", category: "React.js" },
  { slug: "ai-revolutionizing-website-design", title: "How AI is Revolutionizing Website Design", category: "AI Development" },
  { slug: "seo-strategies-web-development-2026", title: "Top 10 SEO Strategies for 2026", category: "SEO" },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogData[slug] : null;

  if (!post) {
    return (
      <Layout>
        <SEOHead title="Post Not Found" description="The blog post you're looking for doesn't exist." />
        <section className="section-padding text-center">
          <div className="container-max">
            <h1 className="font-display text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog"><Button variant="hero">Back to Blog</Button></Link>
          </div>
        </section>
      </Layout>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Organization", name: "WebScoders" },
    publisher: { "@type": "Organization", name: "WebScoders", logo: { "@type": "ImageObject", url: "https://webscoders.com/logo.png" } },
    image: `https://webscoders.com${post.image}`,
  };

  return (
    <Layout>
      <SEOHead
        title={post.title}
        description={post.metaDesc}
        keywords={post.keywords}
        canonical={`https://webscoders.com/blog/${slug}`}
        schema={articleSchema}
      />

      <article className="section-padding">
        <div className="container-max max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-8 hover:gap-3 transition-all">
              <ArrowLeft size={16} /> Back to Blog
            </Link>

            <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><User size={14} /> WebScoders Team</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime} read</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 rounded-xl overflow-hidden"
          >
            <img src={post.image} alt={post.title} className="w-full h-64 md:h-80 object-cover" loading="lazy" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 prose prose-invert max-w-none"
          >
            {post.content.map((block, i) => {
              if (block.type === "h2") return <h2 key={i} className="font-display text-2xl font-bold mt-10 mb-4 text-foreground">{block.text}</h2>;
              if (block.type === "h3") return <h3 key={i} className="font-display text-xl font-semibold mt-8 mb-3 text-foreground">{block.text}</h3>;
              if (block.type === "ul" && Array.isArray(block.text)) return (
                <ul key={i} className="space-y-2 my-4 ml-4">
                  {block.text.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              );
              return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{block.text as string}</p>;
            })}
          </motion.div>

          {/* Related Posts */}
          <div className="mt-16 pt-10 border-t border-border">
            <h3 className="font-display text-xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedPosts.filter(rp => rp.slug !== slug).slice(0, 3).map((rp) => (
                <Link key={rp.slug} to={`/blog/${rp.slug}`} className="p-4 rounded-xl border border-border gradient-card hover:border-primary/30 transition-all group">
                  <span className="text-xs text-primary">{rp.category}</span>
                  <p className="font-display font-semibold text-sm mt-1 group-hover:text-primary transition-colors">{rp.title}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl gradient-cta p-8 text-center">
            <h3 className="font-display text-xl font-bold text-primary-foreground">Need Expert Web Development?</h3>
            <p className="text-primary-foreground/80 text-sm mt-2 mb-6">Get a free consultation from our team of experienced developers.</p>
            <Link to="/contact">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold">
                Get Free Consultation <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
