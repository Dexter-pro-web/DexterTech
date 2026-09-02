import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // This empty dependency ensures the effect runs only once after refresh

  return null;
}

export default ScrollToTop;
