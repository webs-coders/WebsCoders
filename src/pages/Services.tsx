import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, Mail, Globe, Smartphone, Bot, Layout as LayoutIcon, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  {
    icon: Palette,
    title: "Website Design & Development",
    image: "/images/web-design.jpg",
    desc: "Custom, pixel-perfect websites designed to captivate your audience and drive conversions. We create responsive, SEO-friendly designs tailored to your brand identity.",
    features: ["Responsive Design", "UI/UX Design", "Brand Identity", "Conversion Optimization"],
  },
  {
    icon: Code,
    title: "Frontend Development (React.js, Next.js)",
    image: "/images/react-dev.jpg",
    desc: "High-performance single-page applications and progressive web apps built with modern React ecosystem for lightning-fast user experiences.",
    features: ["React.js / Next.js", "TypeScript", "State Management", "API Integration"],
  },
  {
    icon: LayoutIcon,
    title: "HTML Templates & Landing Pages",
    image: "/images/html-landing.jpg",
    desc: "Conversion-focused landing pages and responsive HTML templates optimized for speed, SEO, and lead generation across all devices.",
    features: ["Landing Pages", "Email-Ready HTML", "A/B Testing", "Speed Optimized"],
  },
  {
    icon: Mail,
    title: "Email Template & Newsletter Design",
    image: "/images/email-design.jpg",
    desc: "Professional email templates and newsletter designs that render perfectly across all major email clients and drive engagement.",
    features: ["Cross-Client Compatible", "Responsive Emails", "Newsletter Design", "Campaign Ready"],
  },
  {
    icon: Globe,
    title: "CMS Development (Drupal, WordPress, Contentful)",
    image: "/images/cms.jpg",
    desc: "Scalable content management solutions built on industry-leading platforms, giving you full control over your digital content.",
    features: ["Drupal Development", "WordPress Themes", "Contentful Integration", "Headless CMS"],
  },
  {
    icon: ShoppingBag,
    title: "Shopify & Webflow Development",
    image: "/images/ecommerce.jpg",
    desc: "Beautiful, high-converting e-commerce stores and marketing websites built on Shopify and Webflow platforms.",
    features: ["Shopify Themes", "Webflow Sites", "E-commerce", "Payment Integration"],
  },
  {
    icon: Bot,
    title: "AI-Generated Websites",
    image: "/images/ai-web.jpg",
    desc: "Next-generation websites powered by artificial intelligence — from automated content generation to smart UX personalization.",
    features: ["AI Content", "Smart UX", "Auto Optimization", "ML Integration"],
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    image: "/images/pwa.jpg",
    desc: "App-like experiences delivered through the web. Fast, installable, and engaging PWAs that work offline and across all devices.",
    features: ["Offline Support", "Push Notifications", "App-Like UX", "Cross-Platform"],
  },
];

const Services = () => {
  return (
    <Layout>
      <SEOHead
        title="Web Development Services"
        description="Explore our comprehensive web development services including React.js development, website design, CMS development, AI-powered solutions, and more. Serving clients worldwide from Ahmedabad."
        keywords="web development services, react.js development, website design, CMS development, AI website development, shopify development"
        canonical="https://webscoders.com/services"
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
            <span className="text-primary font-medium text-sm">What We Do</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              From concept to deployment, we offer end-to-end web development
              services that help businesses establish a powerful digital
              presence and achieve measurable growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group p-6 md:p-8 rounded-xl border border-border gradient-card hover:border-primary/30 transition-all duration-300"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-40 object-cover rounded-lg mb-5"
                />
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <s.icon size={24} className="text-primary-foreground" />
                </div>
                <h2 className="font-display text-xl font-semibold mb-3">
                  {s.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground bg-secondary/50"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mt-16 text-center"
          >
            <div className="rounded-2xl gradient-cta p-8 md:p-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                Need a Custom Solution?
              </h2>
              <p className="mt-3 text-primary-foreground/80 max-w-lg mx-auto">
                Let's discuss your project requirements and find the perfect
                solution for your business.
              </p>
              <Link to="/contact" className="inline-block mt-6">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 font-semibold"
                >
                  Get Free Consultation <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
