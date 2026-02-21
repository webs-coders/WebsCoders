import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Globe, Code, Zap, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "5.0", label: "Upwork Rating", icon: Star },
];

const services = [
  { icon: Code, title: "Website Design & Development", desc: "Custom, responsive websites built for performance and conversions." },
  { icon: Zap, title: "React.js & Frontend Development", desc: "Lightning-fast SPAs and web apps using modern React ecosystem." },
  { icon: Globe, title: "CMS Development", desc: "Drupal, WordPress & Contentful solutions tailored to your needs." },
  { icon: Users, title: "AI-Powered Web Solutions", desc: "Next-gen websites with AI-generated content and smart UX." },
];

const countries = [
  { flag: "🇺🇸", name: "US" },
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇳🇱", name: "Netherlands" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇩🇰", name: "Denmark" },
  { flag: "🇮🇳", name: "India" },
];

const whyUs = [
  "5-Star Rated on Upwork with 100% Job Success",
  "6+ Years of Proven Industry Experience",
  "AI-Powered Development for Faster Delivery",
  "SEO-Optimized Code Architecture",
  "Dedicated Team for Every Project",
  "Transparent Communication & Agile Process",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WebScoders",
  url: "https://webscoders.com",
  logo: "https://webscoders.com/logo.png",
  description: "Smart Web Solutions with AI Edge - Web Development Company in Ahmedabad",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    ratingCount: "50",
  },
};

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Web Development Company in Ahmedabad"
        description="WebScoders is a top-rated web development company in Ahmedabad offering React.js, AI-powered websites, CMS development, and SEO-optimized solutions for businesses worldwide."
        keywords="web development company ahmedabad, website design company, react.js development, AI website development, frontend developer agency"
        schema={organizationSchema}
        canonical="https://webscoders.com/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 gradient-hero opacity-80" />
        <div className="relative container-max section-padding w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6"
            >
              <Star size={14} fill="currentColor" />
              <span>5-Star Rated on Upwork</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Smart Web Solutions{" "}
              <span className="text-gradient">with AI Edge</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              We're a premium web development company in Ahmedabad, delivering high-performance React.js applications, AI-powered websites, and SEO-optimized solutions for businesses worldwide.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Get Free Consultation
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="hero-outline" size="lg">
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countries Bar */}
      <section className="gradient-cta py-6">
        <div className="container-max px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <span className="text-primary-foreground/70 text-sm font-medium mr-2">Serving Clients In:</span>
            {countries.map((c) => (
              <span
                key={c.name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 backdrop-blur-sm text-primary-foreground text-sm border border-primary-foreground/20"
              >
                <span className="text-base">{c.flag}</span>
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-6 rounded-xl border border-border gradient-card"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary flex items-center justify-center gap-2">
                  {stat.value}
                  {stat.icon && <stat.icon size={20} fill="currentColor" />}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From custom website design to AI-powered development, we deliver smart web solutions that help your business grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group p-6 md:p-8 rounded-xl border border-border gradient-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <s.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="hero-outline">
                View All Services <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Why Choose <span className="text-gradient">WebScoders</span>?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We combine cutting-edge technology with proven expertise to deliver web solutions that outperform the competition. As a top-rated web development company in Ahmedabad, we bring global standards with local dedication.
              </p>
            </motion.div>
            <div className="space-y-4">
              {whyUs.map((item, i) => (
                <motion.div
                  key={item}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card/50"
                >
                  <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="relative rounded-2xl gradient-cta p-8 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(222_60%_60%/0.2),transparent_50%)]" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                Ready to Build Something Amazing?
              </h2>
              <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
                Get a free consultation and discover how our team can transform your digital presence with cutting-edge web solutions.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold">
                    Get Free Consultation <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
