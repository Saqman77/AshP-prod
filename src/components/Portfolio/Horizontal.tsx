import './horizontal.scss'
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Horizontal: React.FC = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const wrapper = useRef<HTMLDivElement | null>(null);
  

  const cards = [
    { id: '#h-card1', endTranslateX: -2000, rotate: 25 },
    { id: '#h-card2', endTranslateX: -1000, rotate: -30 },
    { id: '#h-card3', endTranslateX: -2000, rotate: 45 },
    { id: '#h-card4', endTranslateX: -1500, rotate: -30 },
  ];

  useGSAP(()=>{
    gsap.to('.main', {
      backgroundColor: '#7163DE',
  
      scrollTrigger: {
        trigger: '.h-heading',
        start: window.innerWidth < 1250 ? 'center 30%':'10% top',
        end: '+=20vh',
        scrub: 1,
        onEnter:()=>{
          gsap.to('.h-heading',{
            color: '#FFF9E3',
          })
        },
        onEnterBack:()=>{
          gsap.to('.h-heading',{
            color: '#7163DE',
          })
        }
        // markers: true,
      },
    });
  })

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const spans = document.querySelectorAll('.outro-span')
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
              ease: 'power3.out',
            });
          },
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
              ease: 'power3.out',
            });
          },
        });
      });

      spans.forEach((span)=>{
        gsap.to(span,{
          backgroundSize: '100% 100%',
          stagger:0.1,
          ease:'power1.inOut',
          scrollTrigger:{
            trigger: '.outro',
            start: 'top center',
            end: 'center',
            scrub: true,
            // markers: true
          }
        })
      })


    }, boxRef);
 


    return () => ctx.revert(); // Cleanup animations and ScrollTriggers
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
              {/* <span className='outro-span'>We are a sibling</span>
              <span className='outro-span'> duo with more than two</span>
              <span className='outro-span'> decades of freelance editing experience</span>
              <span className='outro-span'> between us. Our flexible rates and payment plans accommodate various</span>
              <span className='outro-span'> budgets, and we offer a complimentary 30-minute video consultation call,</span>
              <span className='outro-span'>a manuscript assessment, and an short editing sample of your chosen text.</span>  */}
              <span className='outro-span'>
                We are a sibling
                duo with more than two
                decades of freelance editing experience
                between us. Our flexible rates and payment plans accommodate various
                budgets, and we offer a complimentary 30-minute video consultation call,
                a manuscript assessment, and an short editing sample of your chosen text.
              </span> 
            </h3>
        </section>
    </div>
  )
}

export default Horizontal