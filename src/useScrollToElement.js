import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScroll } from "./pages/scrollContext";

function useScrollToElement() {
  // const { pathname } = useLocation();
  // const { scrollTo } = useScroll() || {};

  // useEffect(() => {
  //   if (scrollTo) {
  //     const section = pathname.slice(1) || "home";
  //     scrollTo(section);
  //   }
  // }, [pathname, scrollTo]);

  const { pathname } = useLocation();
  const { scrollTo } = useScroll() || {};

  useEffect(() => {
    const section = pathname.slice(1) || 'home';
    console.log('Current section:', section);
    if (scrollTo) {
      console.log('Attempting to scroll to:', section);
      scrollTo(section);
    } else {
      console.log('scrollTo function is undefined');
    }
  }, [pathname, scrollTo]);
}

export default useScrollToElement;

