/* eslint-disable react/prop-types */
// src/context/ScrollContext.js
import { createContext, useContext, useRef, useCallback } from 'react';

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const homeRef = useRef(null);
  const overviewRef = useRef(null);
  const myFortune11Ref = useRef(null);
  const faqRef = useRef(null);
  const  howToPlayRef= useRef(null);
  const featuresRef = useRef(null);
  const advantRef = useRef(null);

  const scrollTo = useCallback((refName) => {
    const map = {
      '': homeRef,
      home: homeRef,
      overview: overviewRef,
      myfortune11: myFortune11Ref,
      faq:faqRef,
      howtoplay:howToPlayRef,
      features:featuresRef,
      advant:advantRef
    };
    const ref = map[refName];
    if (ref && ref.current) {
      ref.current.scrollIntoView({block:"start", behavior: 'smooth' });
    }
  }, []);

  const value = { homeRef, overviewRef, myFortune11Ref, faqRef, howToPlayRef,featuresRef, advantRef, scrollTo };

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => useContext(ScrollContext);
