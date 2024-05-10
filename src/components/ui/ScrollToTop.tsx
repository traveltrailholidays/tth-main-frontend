'use client';


import { useState, useEffect } from "react";
import { ScrollUp } from "@/assets/svgs/uiSvg";

export default function ScrollToTop() {

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <>
        <div className={`${showScroll ? 'block' : 'hidden'}`} onClick={scrollTop}>
            <ScrollUp height="2.5rem" width="2.5rem" fillColor="#FF5956" strokeWidth="0" strokeColor="currentColor"/>
        </div>
    </>
  )
}