import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollableElement = document.querySelector(".app-content"); // Target your main scrollable container
    if (scrollableElement) {
      console.log("Scrolling .app-content to top for:", pathname);
      scrollableElement.scrollTo({ top: 0, behavior: "auto" }); // Scroll immediately to top
    } else {
      console.log("Scrolling window to top for:", pathname);
      window.scrollTo(0, 0); // Fallback
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
