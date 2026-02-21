import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const faqs = [
  {
    q: "What web development services does WebScoders offer?",
    a: "WebScoders offers a comprehensive range of web development services including custom website design & development, React.js & Next.js frontend development, CMS development (Drupal, WordPress, Contentful), Shopify & Webflow development, email template design, HTML landing pages, and AI-powered website solutions.",
  },
  {
    q: "How much does it cost to build a website with WebScoders?",
    a: "Website development costs vary based on complexity, features, and technology stack. A basic business website starts from $2,000, while complex web applications can range from $5,000 to $25,000+. We offer a free consultation to provide accurate project estimates tailored to your requirements.",
  },
  {
    q: "How long does it take to develop a website?",
    a: "A typical business website takes 4-6 weeks, while complex web applications may take 8-16 weeks. Timelines depend on project scope, features, design complexity, and client feedback cycles. We follow agile methodology to ensure timely delivery.",
  },
  {
    q: "Do you provide SEO services along with web development?",
    a: "Yes! Every website we build is SEO-optimized from the ground up. This includes proper HTML structure, meta tags, schema markup, Core Web Vitals optimization, and keyword-rich content architecture. We also offer ongoing SEO services for long-term ranking improvements.",
  },
  {
    q: "Can you work with clients outside India?",
    a: "Absolutely! While we're based in Ahmedabad, India, we serve clients worldwide including the US, UK, Australia, UAE, Canada, Germany, Netherlands, and Denmark. We use modern collaboration tools and maintain flexible schedules to accommodate different time zones.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "Our core expertise includes React.js, Next.js, TypeScript, Tailwind CSS, and modern JavaScript. For CMS platforms, we specialize in Drupal, WordPress, and Contentful. We also work with Shopify, Webflow, and integrate AI/ML technologies for next-gen web experiences.",
  },
  {
    q: "Do you offer website maintenance and support?",
    a: "Yes, we offer ongoing website maintenance and support packages that include bug fixes, security updates, performance monitoring, content updates, and feature enhancements. Our support team ensures your website stays fast, secure, and up-to-date.",
  },
  {
    q: "Why should I choose WebScoders over other agencies?",
    a: "WebScoders stands out with a 5-star Upwork rating, 6+ years of experience, and 150+ successful projects. We combine AI-powered development with SEO-first architecture, delivering websites that not only look stunning but also rank on Google and drive real business results.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

interface FAQSectionProps {
  includeSchema?: boolean;
}

const FAQSection = ({ includeSchema = true }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {includeSchema && (
        <SEOHead
          title=""
          description=""
          schema={faqSchema}
        />
      )}
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
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our web development services, process, and expertise.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-border gradient-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-primary transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
