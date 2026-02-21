import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  return (
    <Layout>
      <SEOHead
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Return to WebScoders homepage to explore our web development services."
      canonical="https://webscoders.com/*"
      />
      <section className="section-padding min-h-[70vh] flex items-center">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-8xl md:text-9xl font-bold text-gradient">404</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mt-4">Page Not Found</h2>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button variant="hero" size="lg">
                  <Home size={18} /> Back to Home
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="lg">
                  <Search size={18} /> Browse Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
