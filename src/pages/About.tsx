import { motion } from "framer-motion";
import { Target, Award, Users, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const values = [
  { icon: Target, title: "Result-Driven", desc: "Every line of code is written to deliver measurable business outcomes." },
  { icon: Award, title: "Quality First", desc: "We maintain the highest standards with clean, maintainable, scalable code." },
  { icon: Users, title: "Client-Centric", desc: "Your success is our priority — transparent communication at every step." },
  { icon: Heart, title: "Passionate Team", desc: "We love what we do and it shows in every project we deliver." },
];

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About Us - Web Development Agency"
        description="Learn about WebScoders, a leading web development company in Ahmedabad with 6+ years of experience building AI-powered, SEO-optimized websites for global clients."
        keywords="about webscoders, web development agency ahmedabad, frontend development company"
        canonical="https://webscoders.com/about"
      />

      <section className="section-padding">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="max-w-3xl">
            <span className="text-primary font-medium text-sm">About WebScoders</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-2">
              We Build <span className="text-gradient">Digital Experiences</span> That Matter
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Founded in Ahmedabad, India, WebScoders is a full-service web development agency specializing in modern, high-performance digital solutions. With 4+ years of experience and a 5-star Upwork rating, we've helped 50+ clients worldwide transform their digital presence.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team of skilled developers, designers, and strategists combine cutting-edge technologies like React.js, Next.js, and AI with proven SEO strategies to build websites that don't just look great — they rank, convert, and scale.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-max">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core <span className="text-gradient">Values</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-xl border border-border gradient-card text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <v.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
            Our <span className="text-gradient">Story</span>
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="prose-invert space-y-4 text-muted-foreground leading-relaxed">
            <p>WebScoders started with a simple vision: to make world-class web development accessible to businesses of all sizes. What began as a small freelancing venture on Upwork quickly grew into a full-fledged agency trusted by clients across the US, UK, Australia, UAE, and beyond.</p>
            <p>Today, we specialize in React.js development, AI-powered website solutions, CMS platforms like Drupal and WordPress, and end-to-end frontend engineering. Our approach blends technical excellence with strategic thinking — ensuring every website we build not only functions flawlessly but also ranks on search engines and drives real business results.</p>
            <p>Headquartered in Ahmedabad, one of India's fastest-growing tech hubs, we leverage our strategic location to offer premium development services at competitive rates — without compromising on quality, communication, or timelines.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
