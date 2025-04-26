import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
    const location = useLocation();
  
    useEffect(() => {
      // Ensure instant scroll without smooth scrolling
      window.scrollTo(0, 0);
      document.body.style.scrollBehavior = 'auto'; // Disable smooth scrolling if any
    }, [location]); // Trigger on route change
  
    return null;
  };

export default ScrollToTop;