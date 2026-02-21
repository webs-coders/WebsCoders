import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Privacy = () => {
  return (
    <Layout>
      <SEOHead
        title="Privacy Policy"
        description="Read WebScoders' privacy policy to understand how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, webscoders privacy"
        canonical="https://webscoders.com/privacy"
      />
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="text-primary font-medium text-sm">Legal</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="mt-4 text-muted-foreground">Last updated: February 21, 2026</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="mt-12 space-y-8 text-sm text-muted-foreground leading-relaxed"
          >
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including your name, email address, phone number, company name, and project details when you fill out our contact form, request a consultation, or communicate with us. We also automatically collect certain information about your device and usage of our website, including IP address, browser type, pages visited, and referring URLs.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to respond to your inquiries, provide our web development services, send project updates and communications, improve our website and services, comply with legal obligations, and protect against fraudulent or unauthorized activity. We do not sell or rent your personal information to third parties.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Data Sharing & Third Parties</h2>
              <p>We may share your information with trusted service providers who assist us in operating our website and conducting our business, such as hosting providers, analytics services, and communication tools. These parties are obligated to keep your information confidential. We may also disclose information when required by law or to protect our rights.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Cookies & Tracking</h2>
              <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings. Essential cookies are necessary for the website to function properly and cannot be disabled.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments. However, no method of transmission over the internet is 100% secure.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at info.webscoders@gmail.com. We will respond to your request within 30 business days.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. International Data Transfers</h2>
              <p>As we serve clients worldwide, your information may be transferred to and processed in countries other than your own. We ensure that appropriate safeguards are in place to protect your data in accordance with applicable data protection laws, including GDPR for European clients.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Contact Us</h2>
              <p>If you have any questions about this privacy policy or our data practices, please contact us at:</p>
              <div className="mt-3 p-4 rounded-lg border border-border bg-card/50">
                <p className="font-medium text-foreground">WebScoders</p>
                <p>Ahmedabad, Gujarat, India</p>
                <p>Email: info.webscoders@gmail.com</p>
                <p>Phone: +91 91063 18135</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
