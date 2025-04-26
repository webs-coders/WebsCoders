import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import NotFoundPage from './pages/NotFoundPage';
import CustomCursor from './components/ui/CustomCursor';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  // Intersection observer for animation
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Handle custom cursor
  useEffect(() => {
    
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    if (!cursor) return;
    
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', moveCursor);
    
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        cursor.classList.add('scale-150');
        cursor.style.borderColor = 'rgb(139, 92, 246)';
      });
      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('scale-150');
        cursor.style.borderColor = 'rgb(27, 112, 245)';
      });
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => {});
        link.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <div ref={ref} className={`min-h-screen ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
        <Layout>
        <ScrollToTop /> {/* Add ScrollToTop here */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* <Route path="/blog" element={<BlogPage />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;