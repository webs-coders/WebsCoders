import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().max(20).optional(),
  company: z.string().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Ahmedabad, Gujarat, India" },
  { icon: Mail, label: "Email", value: "info.webscoders@gmail.com", href: "mailto:info.webscoders@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 91063 18135", href: "tel:+919106318135" },
  { icon: Clock, label: "Hours", value: "Mon-Sat 9:00 AM - 7:00 PM IST" },
];

// TODO: Replace these with your actual EmailJS credentials from https://www.emailjs.com
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Message Sent Successfully! ✅",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or email us directly at info.webscoders@gmail.com",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8 rounded-xl border border-border gradient-card">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-1.5 block">Full Name *</label>
                    <Input
                      id="name"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-1.5 block">Email *</label>
                    <Input
                      id="email"
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-1.5 block">Phone</label>
                    <Input
                      id="phone"
                      maxLength={20}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-sm font-medium mb-1.5 block">Company</label>
                    <Input
                      id="company"
                      maxLength={100}
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
                    maxLength={2000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project requirements..."
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto" disabled={loading}>
                  {loading ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <>Send Message <Send size={18} /></>}
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
                    {info.href ? (
                      <a href={info.href} className="text-sm text-muted-foreground mt-0.5 hover:text-primary transition-colors">{info.value}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground mt-0.5">{info.value}</p>
                    )}
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

          {/* Google Map */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="mt-16">
            <h2 className="font-display text-2xl font-bold mb-6">Our <span className="text-gradient">Location</span></h2>
            <div className="rounded-xl overflow-hidden border border-border h-[350px] md:h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717463484!2d72.41493089453123!3d23.02063829428498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1708000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WebScoders Location - Ahmedabad, Gujarat, India"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
