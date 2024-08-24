import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScroll } from "./pages/scrollContext";

function useScrollToElement() {
  const { pathname } = useLocation();
  const { scrollTo } = useScroll() || {};

  useEffect(() => {
    const section = pathname.slice(1) || '';
    if (scrollTo) {
      scrollTo(section);
    } else {
      console.log('scrollTo function is undefined');
    }
  }, [pathname, scrollTo]);
}

export default useScrollToElement;

