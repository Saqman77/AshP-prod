'use client';
import { useRouter } from "next/router";
import { useEffect } from "react";

const ScrollToTop = () => {
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0); // Scroll to the top whenever the route changes
    }
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
