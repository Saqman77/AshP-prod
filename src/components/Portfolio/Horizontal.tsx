import './horizontal.scss'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Horizontal: React.FC = () => {
    const boxRef = useRef<HTMLDivElement | null>(null);
    const wrapper = useRef<HTMLDivElement | null>(null);
    const cards = [
        {id: "#h-card1", endTranslateX: -2000, rotate: 25},
        {id: "#h-card2", endTranslateX: -1000, rotate: -30},
        {id: "#h-card3", endTranslateX: -2000, rotate: 45},
        {id: "#h-card4", endTranslateX: -1500, rotate: -30}
    ]

    useEffect(() => {
        const initializeScrollTrigger = () => {
          if (wrapper.current) {
            ScrollTrigger.create({
              trigger: wrapper.current,
              start: 'top top',
              end: '+=400vh',
              scrub: 1,
              pin: true,
              onUpdate: (self) => {
                gsap.to(wrapper.current, {
                  x: `${-350 * self.progress}vw`,
                  duration: 0.5,
                  ease: 'power3.out'
                });
              }
            });
          }
    
          cards.forEach((card) => {
            ScrollTrigger.create({
              trigger: 'card.id',
              start: 'top top',
              end: '+=400vh',
              scrub: 1,
              onUpdate: (self) => {
                gsap.to(card.id, {
                  x: `${card.endTranslateX * self.progress}px`,
                  rotate: `${card.rotate * self.progress * 2}`,
                  duration: 0.5,
                  ease: 'power3.out'
                });
              }
            });
          });
        };
    
        const handleDOMContentLoaded = () => {
          initializeScrollTrigger();
          ScrollTrigger.refresh(); // Refresh positions after initialization
        };
    
        if (document.readyState === 'loading') {
          // DOM is still loading, wait for it to finish
          document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
        } else {
          // DOM is already loaded
          handleDOMContentLoaded();
        }
    
        return () => {
          document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
          ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Cleanup ScrollTriggers
        };
      }, []);

  return (
    <div className="h-container"
    ref={boxRef}
    >
        <section className='h-wrapper'
            ref={wrapper}
        >
            <h1 className='h-heading'>Who we are?</h1>

            <div className="h-card" id='h-card1'>
                <img src="../Frame 21.svg" alt="" />
            </div>
            <div className="h-card" id='h-card2'>
                <img src="../Frame 21.svg" alt="" />
            </div>
            <div className="h-card" id='h-card3'>
                <img src="../Frame 21.svg" alt="" />
            </div>
            <div className="h-card" id='h-card4'>
                <img src="../Frame 21.svg" alt="" />
            </div>
        </section>
        <section className='outro'>
            <h3>
            Our suite of digital solutions pushes the boundaries of innovation to deliver end-to-end experiences that drive results. From data-driven social campaigns to cutting-edge AI products, we’re redefining what's possible in the digital space. 
            </h3>
        </section>
    </div>
  )
}

export default Horizontal