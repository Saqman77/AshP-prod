import { useRef, useEffect, forwardRef } from "react";

interface LerpFunction {
  (start: number, end: number, factor: number): number;
}

const lerp: LerpFunction = (start, end, factor) => start + (end - start) * factor;

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ServiceParallaxe = forwardRef<HTMLDivElement, ParallaxImageProps>(
  ({ src, alt, className }, ref) => {
    const imageRef = useRef<HTMLImageElement | null>(null);
    const currentTranslateX = useRef(0);
    const targetTranslateX = useRef(0);
    const rafId = useRef<number | null>(null);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
    const isResetting = useRef(false);

    // Store the initial scroll position
    const initialScrollLeft = useRef(0);

    useEffect(() => {
      const scrollableDiv = ref as React.RefObject<HTMLDivElement>;
      if (!scrollableDiv.current) return;

      initialScrollLeft.current = 0 ;// Store initial scroll position


    //   const mouseMove = (e: MouseEvent) => {
    //     const containerWidth = scrollableDiv.current!.offsetWidth;
    //     delta = (e.clientX / containerWidth) * 2 - 1; // Map to [-1, 1]
        
    //   };

      const onScroll = () => {
        if (isResetting.current) return; // Ignore scroll while resetting

        let off =   scrollableDiv.current!.scrollLeft - initialScrollLeft.current 
        
        targetTranslateX.current =  -off * 2  ; // Update the target translation based on mouse position

        initialScrollLeft.current = scrollableDiv.current!.scrollLeft

        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

        // Detect when scrolling stops
        scrollTimeout.current = setTimeout(() => {
          isResetting.current = true;

        //   // Apply smooth reset animation
          if (imageRef.current) {
            // imageRef.current.style.transition = "transform 1s ease-out";
          }

        //   // Reset after animation completes
          setTimeout(() => {
            
            targetTranslateX.current = 0; // Reset translation
            // currentTranslateX.current = initialScrollLeft.current * 0.5;
            isResetting.current = false;

            if (imageRef.current) {
              imageRef.current.style.transition = "none"; // Remove transition for smooth resume
            }
          }, 10); // Match transition time
        }, 50);
      };

      scrollableDiv.current.addEventListener("scroll", onScroll);
    //   scrollableDiv.current.addEventListener("mousemove", mouseMove);

      return () => {
        scrollableDiv.current?.removeEventListener("scroll", onScroll);
        // scrollableDiv.current?.removeEventListener("mousemove", mouseMove);
        // if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      };
    }, [ref]);

    useEffect(() => {
      const animate = () => {
        if (imageRef.current && !isResetting.current) {
          currentTranslateX.current = lerp(
            currentTranslateX.current,
            targetTranslateX.current,
            0.05
          );
          imageRef.current.style.transform = `translateX(${currentTranslateX.current}px) scale(1.25)`; // Smooth translate
        }
        rafId.current = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        if (rafId.current) {
          cancelAnimationFrame(rafId.current);
        }
      };
    }, []);

    return (
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={className}
        style={{
          willChange: "transform",
          transform: "translateX(0) scale(1.5)",
        }}
      />
    );
  }
);

export default ServiceParallaxe;
