import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Ahmedabad, Gujarat, India" },
  { icon: Mail, label: "Email", value: "info.webscoders@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 91063 18135" },
  { icon: Clock, label: "Hours", value: "Mon-Sat 9:00 AM - 7:00 PM IST" },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WebScoders",
  description: "Web Development Company in Ahmedabad",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  telephone: "+91 91063 18135",
  email: "info.webscoders@gmail.com",
  url: "https://webscoders.com",
  openingHours: "Mo-Sa 09:00-19:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    ratingCount: "50",
  },
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <Layout>
      <SEOHead
        title="Contact Us - Get Free Consultation"
        description="Contact WebScoders for a free web development consultation. We're a top-rated web development company in Ahmedabad serving clients worldwide."
        keywords="contact web developer, web development consultation, hire frontend developer ahmedabad"
        schema={localBusinessSchema}
        canonical="https://webscoders.com/contact"
      />

      <section className="section-padding">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="max-w-3xl mb-16">
            <span className="text-primary font-medium text-sm">Get In Touch</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Ready to transform your digital presence? Get a free consultation and let's discuss how we can help your business grow.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8 rounded-xl border border-border gradient-card">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-1.5 block">Full Name *</label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-1.5 block">Email *</label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-1.5 block">Phone</label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-sm font-medium mb-1.5 block">Company</label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-1.5 block">Project Details *</label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto">
                  Send Message <Send size={18} />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="lg:col-span-2 space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4 p-5 rounded-xl border border-border gradient-card">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <info.icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{info.label}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{info.value}</p>
                  </div>
                </div>
              ))}

              <div className="p-5 rounded-xl border border-primary/30 bg-primary/5">
                <h3 className="font-display font-semibold text-primary mb-2">Free Consultation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Book a free 30-minute consultation to discuss your project. No strings attached — just actionable insights for your business.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
