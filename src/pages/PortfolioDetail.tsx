import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Globe, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const projectData: Record<string, {
  title: string; category: string; image: string; tags: string[];
  client: string; duration: string; year: string;
  overview: string; challenge: string; solution: string;
  results: string[]; techStack: string[];
}> = {
  "e-commerce-platform-redesign": {
    title: "E-Commerce Platform Redesign",
    category: "Shopify Development",
    image: "/images/ecommerce-project.jpg",
    tags: ["Shopify", "UI/UX", "E-commerce"],
    client: "Fashion Retail Brand (US)",
    duration: "8 Weeks",
    year: "2025",
    overview: "A complete redesign and development of a Shopify-based e-commerce platform for a fast-growing fashion retail brand in the United States. The project focused on improving user experience, optimizing conversion funnels, and enhancing mobile shopping experience.",
    challenge: "The client's existing Shopify store suffered from poor mobile UX, slow page loads, and a confusing checkout process resulting in a 70% cart abandonment rate. They needed a modern, performance-optimized storefront that could handle peak traffic during seasonal sales.",
    solution: "We redesigned the entire storefront with a mobile-first approach, implemented a streamlined checkout flow, optimized all images and assets for speed, and integrated advanced product filtering and search functionality. Custom Shopify sections were built for flexible content management.",
    results: ["40% increase in conversion rate within 3 months", "55% reduction in cart abandonment", "Page load time improved from 4.2s to 1.8s", "Mobile revenue increased by 65%", "92/100 Google PageSpeed score achieved"],
    techStack: ["Shopify", "Liquid", "JavaScript", "Tailwind CSS", "Shopify APIs"],
  },
  "saas-dashboard-application": {
    title: "SaaS Dashboard Application",
    category: "React.js Development",
    image: "/images/saas-dashboard.jpg",
    tags: ["React.js", "TypeScript", "D3.js"],
    client: "Analytics SaaS Company (US)",
    duration: "12 Weeks",
    year: "2025",
    overview: "Built a complex, real-time analytics dashboard for a US-based SaaS company. The application features interactive data visualizations, real-time data streams, customizable widgets, and role-based access control for enterprise clients.",
    challenge: "The client needed a dashboard that could handle millions of data points in real-time while maintaining smooth interactions and quick render times. The existing solution was built with legacy technology and couldn't scale to meet growing demand.",
    solution: "We built a modern React.js application with TypeScript for type safety, D3.js for custom data visualizations, and WebSocket connections for real-time data updates. The architecture uses code splitting, virtualized lists, and memoization for optimal performance.",
    results: ["Handles 10M+ data points with sub-second render times", "99.9% uptime maintained since launch", "User engagement increased by 80%", "Customer satisfaction score improved to 4.8/5", "50% reduction in support tickets related to data access"],
    techStack: ["React.js", "TypeScript", "D3.js", "WebSocket", "Redux Toolkit", "Tailwind CSS"],
  },
  "healthcare-portal": {
    title: "Healthcare Portal",
    category: "CMS Development",
    image: "/images/healthcare-portal.jpg",
    tags: ["Drupal", "PHP", "Accessibility"],
    client: "Healthcare Provider Network (UK)",
    duration: "16 Weeks",
    year: "2024",
    overview: "Developed a comprehensive Drupal-based healthcare portal with multi-language support, HIPAA compliance features, patient resource management, and accessible design meeting WCAG 2.1 AA standards.",
    challenge: "The healthcare network needed a centralized portal serving patients, doctors, and administrators across multiple locations. The platform required strict compliance with healthcare data regulations, full accessibility, and support for 5 languages.",
    solution: "We built a custom Drupal solution with role-based content access, multi-language support using Drupal's translation modules, accessible themes meeting WCAG 2.1 AA standards, and secure patient data handling with encryption and audit logging.",
    results: ["Successfully serving 50,000+ monthly active users", "WCAG 2.1 AA compliance achieved across all pages", "Support for 5 languages with automated translation workflows", "HIPAA compliance verified by third-party audit", "30% reduction in patient support inquiries"],
    techStack: ["Drupal 10", "PHP", "MySQL", "Twig", "WCAG 2.1", "REST APIs"],
  },
  "ai-content-platform": {
    title: "AI Content Platform",
    category: "AI Development",
    image: "/images/ai-platform.jpg",
    tags: ["Next.js", "OpenAI", "AI/ML"],
    client: "Digital Marketing Agency (Netherlands)",
    duration: "10 Weeks",
    year: "2025",
    overview: "An AI-powered content management platform that automates content generation, SEO optimization, and publishing workflows. The platform integrates with multiple AI models to generate, edit, and optimize content at scale.",
    challenge: "The client's team was spending 40+ hours weekly on content creation and SEO optimization. They needed an automated solution that could maintain brand voice consistency while scaling content production across multiple channels and languages.",
    solution: "We built a Next.js application integrated with OpenAI's GPT models for content generation, custom fine-tuned models for brand voice consistency, automated SEO scoring and optimization, and a multi-channel publishing workflow with approval stages.",
    results: ["80% reduction in content creation time", "Content output increased from 10 to 50+ articles per month", "Average SEO score improved from 65 to 92", "Brand voice consistency maintained at 95% accuracy", "ROI achieved within 2 months of deployment"],
    techStack: ["Next.js", "TypeScript", "OpenAI API", "PostgreSQL", "Tailwind CSS", "Vercel"],
  },
  "real-estate-website": {
    title: "Real Estate Website",
    category: "Website Design",
    image: "/images/real-estate-site.jpg",
    tags: ["React.js", "Google Maps", "SEO"],
    client: "Real Estate Agency (UAE)",
    duration: "10 Weeks",
    year: "2025",
    overview: "A modern, SEO-optimized real estate website featuring advanced property search with map integration, virtual tour capabilities, lead capture forms, and an agent management portal.",
    challenge: "The client needed a website that could showcase 5,000+ property listings with advanced filtering, map-based search, and generate high-quality leads. The site needed to rank well for competitive real estate keywords in the UAE market.",
    solution: "We built a React.js application with Google Maps integration for interactive property search, lazy-loaded image galleries, virtual tour embeds, structured data for property listings, and an optimized lead capture system with CRM integration.",
    results: ["Ranked on page 1 for 15+ target keywords within 4 months", "300% increase in organic lead generation", "Average session duration increased by 45%", "Property inquiry conversion rate of 8.5%", "Page speed score of 95/100 on mobile"],
    techStack: ["React.js", "Google Maps API", "Node.js", "MongoDB", "Tailwind CSS", "Cloudflare"],
  },
  "corporate-wordpress-site": {
    title: "Corporate WordPress Site",
    category: "WordPress Development",
    image: "/images/corporate-wordpress.jpg",
    tags: ["WordPress", "PHP", "Gutenberg"],
    client: "Multinational Corporation (Germany)",
    duration: "14 Weeks",
    year: "2024",
    overview: "A custom WordPress theme with Gutenberg block editor support for a multinational corporation's global website. The project included custom blocks, multi-site setup for regional offices, and advanced SEO configuration.",
    challenge: "The corporation needed a unified web presence across 12 regional offices while allowing each office to manage local content. The existing site was outdated, inconsistent across regions, and performed poorly in search rankings.",
    solution: "We developed a custom WordPress theme with 20+ custom Gutenberg blocks, set up WordPress Multisite for regional content management, implemented advanced SEO with Yoast integration, and created a design system ensuring brand consistency across all regional sites.",
    results: ["Unified brand presence across 12 regional websites", "Content publishing time reduced by 60%", "Organic traffic increased by 120% across all regions", "Core Web Vitals passed for all regional sites", "Content editors trained and self-sufficient within 2 weeks"],
    techStack: ["WordPress", "PHP", "Gutenberg", "MySQL", "SCSS", "WordPress Multisite"],
  },
};

const slugify = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const PortfolioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectData[slug] : null;

  if (!project) {
    return (
      <Layout>
        <SEOHead title="Project Not Found" description="The project you're looking for doesn't exist." />
        <section className="section-padding text-center">
          <div className="container-max">
            <h1 className="font-display text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <Link to="/portfolio"><Button variant="hero">Back to Portfolio</Button></Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead
        title={`${project.title} - Case Study`}
        description={project.overview.slice(0, 155)}
        keywords={project.tags.join(", ") + ", web development case study"}
        canonical={`https://webscoders.com/portfolio/${slug}`}
      />

      <section className="section-padding">
        <div className="container-max max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-8 hover:gap-3 transition-all">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>

            <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-4">{project.category}</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">{project.title}</h1>

            <div className="flex flex-wrap gap-6 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Users size={14} /> {project.client}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {project.year}</span>
              <span className="flex items-center gap-1.5"><Globe size={14} /> {project.duration}</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-8 rounded-xl overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-64 md:h-96 object-cover" loading="lazy" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-12 space-y-10">
            {/* Overview */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
            </div>

            {/* Challenge */}
            <div className="p-6 rounded-xl border border-border gradient-card">
              <h2 className="font-display text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>

            {/* Results */}
            <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
              <h2 className="font-display text-2xl font-bold mb-6">Key Results</h2>
              <div className="space-y-3">
                {project.results.map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-lg border border-border gradient-card text-sm font-medium">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <div className="mt-16 rounded-xl gradient-cta p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground">Have a Similar Project in Mind?</h3>
            <p className="text-primary-foreground/80 mt-2 mb-6 max-w-lg mx-auto">Let's discuss how WebScoders can bring your vision to life with cutting-edge web development.</p>
            <Link to="/contact">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold">
                Get Free Consultation <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioDetail;
