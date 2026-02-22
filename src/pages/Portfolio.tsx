import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    category: "Shopify Development",
    image: "/images/ecommerce-project.jpg",
    desc: "Complete redesign and development of a Shopify store resulting in 40% increase in conversions.",
    tags: ["Shopify", "UI/UX", "E-commerce"],
  },
  {
    title: "SaaS Dashboard Application",
    category: "React.js Development",
    image: "/images/saas-dashboard.jpg",
    desc: "Built a complex analytics dashboard with real-time data visualization for a US-based SaaS company.",
    tags: ["React.js", "TypeScript", "D3.js"],
  },
  {
    title: "Healthcare Portal",
    category: "CMS Development",
    image: "/images/healthcare-portal.jpg",
    desc: "Developed a Drupal-based healthcare portal with multi-language support and HIPAA compliance.",
    tags: ["Drupal", "PHP", "Accessibility"],
  },
  {
    title: "AI Content Platform",
    category: "AI Development",
    image: "/images/ai-platform.jpg",
    desc: "AI-powered content management platform with automated generation and SEO optimization features.",
    tags: ["Next.js", "OpenAI", "AI/ML"],
  },
  {
    title: "Real Estate Website",
    category: "Website Design",
    image: "/images/real-estate-site.jpg",
    desc: "Modern, SEO-optimized real estate website with advanced property search and virtual tour integration.",
    tags: ["React.js", "Google Maps", "SEO"],
  },
  {
    title: "Corporate WordPress Site",
    category: "WordPress Development",
    image: "/images/corporate-wordpress.jpg",
    desc: "Custom WordPress theme with Gutenberg blocks for a multinational corporation's global website.",
    tags: ["WordPress", "PHP", "Gutenberg"],
  },
];

const Portfolio = () => {
  return (
    <Layout>
      <SEOHead
        title="Portfolio - Our Work & Case Studies"
        description="Explore WebScoders' portfolio of web development projects including React.js apps, Shopify stores, CMS platforms, and AI-powered solutions for global clients."
        keywords="web development portfolio, react.js projects, website design case studies, shopify development projects"
        canonical="https://webscoders.com/portfolio"
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
            <span className="text-primary font-medium text-sm">Our Work</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Take a look at some of our recent projects that showcase our
              expertise in web development, design, and digital transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => {
              const slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              return (
              <Link key={p.title} to={`/portfolio/${slug}`}>
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group rounded-xl border border-border gradient-card overflow-hidden hover:border-primary/30 transition-all duration-300 h-full"
              >
                {/* <div className="h-48 gradient-hero flex items-center justify-center">
                  <ExternalLink size={32} className="text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
                </div> */}
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <span className="text-xs text-primary font-medium">
                    {p.category}
                  </span>
                  <h2 className="font-display text-lg font-semibold mt-1 mb-2">
                    {p.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full border border-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              </Link>
              );
            })}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mt-16 text-center"
          >
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Start Your Project <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
