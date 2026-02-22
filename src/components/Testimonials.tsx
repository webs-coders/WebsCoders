import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Anderson",
    role: "CEO, TechVault Inc.",
    country: "🇺🇸 United States",
    text: "WebScoders delivered an outstanding React.js dashboard for our SaaS platform. Their attention to detail and understanding of performance optimization was exceptional. The project was delivered ahead of schedule.",
    rating: 5,
  },
  {
    name: "Sophie Williams",
    role: "Marketing Director, BrightPath",
    country: "🇬🇧 United Kingdom",
    text: "We hired WebScoders for a complete WordPress redesign and the results exceeded expectations. Our organic traffic increased by 60% within three months thanks to their SEO-first approach.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Founder, DesertTech Solutions",
    country: "🇦🇪 UAE",
    text: "Professional, responsive, and incredibly skilled. WebScoders built our e-commerce platform with Shopify and integrated custom AI features that set us apart from competitors. Highly recommended!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "CTO, MapleSoft Digital",
    country: "🇨🇦 Canada",
    text: "The team's expertise in Drupal development is top-notch. They migrated our legacy site to a modern Drupal platform with zero downtime. Communication was transparent throughout the project.",
    rating: 5,
  },
  {
    name: "Emma van der Berg",
    role: "Product Manager, FlowCraft",
    country: "🇳🇱 Netherlands",
    text: "WebScoders helped us build an AI-powered content platform that automates our workflow. Their understanding of both frontend and AI integration is truly impressive.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Director, InnovateTech India",
    country: "🇮🇳 India",
    text: "As a local Ahmedabad business, we're proud to work with WebScoders. They've transformed our digital presence with a stunning website and ongoing SEO support that keeps us ranking on page one.",
    rating: 5,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Testimonials = () => {
  return (
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
          <span className="text-primary font-medium text-sm">Client Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from businesses worldwide who trust WebScoders for their web development needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative p-6 rounded-xl border border-border gradient-card hover:border-primary/30 transition-all duration-300"
            >
              <Quote size={28} className="text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={14} fill="hsl(var(--primary))" className="text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
                <p className="text-xs text-primary mt-1">{t.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
