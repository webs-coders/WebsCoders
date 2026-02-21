import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const categories = [
  {
    title: "Frontend",
    techs: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 / CSS3", level: 98 },
      { name: "JavaScript (ES6+)", level: 95 },
    ],
  },
  {
    title: "CMS Platforms",
    techs: [
      { name: "Drupal", level: 90 },
      { name: "WordPress", level: 88 },
      { name: "Contentful", level: 85 },
      { name: "Shopify", level: 85 },
      { name: "Webflow", level: 82 },
    ],
  },
  {
    title: "Tools & DevOps",
    techs: [
      { name: "Git / GitHub", level: 95 },
      { name: "Figma / Adobe XD", level: 88 },
      { name: "Vercel / Netlify", level: 90 },
      { name: "Docker", level: 80 },
      { name: "CI/CD Pipelines", level: 82 },
    ],
  },
  {
    title: "AI & Emerging",
    techs: [
      { name: "OpenAI / GPT Integration", level: 85 },
      { name: "AI Content Generation", level: 82 },
      { name: "Machine Learning APIs", level: 78 },
      { name: "Progressive Web Apps", level: 88 },
    ],
  },
];

const Technologies = () => {
  return (
    <Layout>
      <SEOHead
        title="Technologies We Use"
        description="Explore our technology stack including React.js, Next.js, TypeScript, Drupal, WordPress, AI integration, and more. WebScoders uses cutting-edge tools for web development."
        keywords="react.js development, next.js, typescript, drupal development, wordpress, AI integration, web technologies"
        canonical="https://webscoders.com/technologies"
      />

      <section className="section-padding">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="max-w-3xl mb-16">
            <span className="text-primary font-medium text-sm">Our Tech Stack</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Technologies <span className="text-gradient">We Master</span>
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              We leverage the latest and most reliable technologies to build fast, scalable, and maintainable web solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                custom={ci}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 md:p-8 rounded-xl border border-border gradient-card"
              >
                <h2 className="font-display text-xl font-semibold mb-6 text-primary">{cat.title}</h2>
                <div className="space-y-5">
                  {cat.techs.map((tech) => (
                    <div key={tech.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium">{tech.name}</span>
                        <span className="text-xs text-muted-foreground">{tech.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          className="h-full rounded-full gradient-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Technologies;
