import './horizontal.scss'
// import ace from '/freedi/Spark 82.svg'
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { horizontalContent } from './horizontal.Content';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface IHorizontalContent {
  heading: string;
  scrollingImages: {
    altText: string;
    image: {
      url: string;
    };
  }[];
  staticImages: {
    altText: string;
    image: {
      url: string;
    };
  }[]
}

const Horizontal = ( { heading, scrollingImages, staticImages }: IHorizontalContent) => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const wrapper = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // Create main timeline
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        start: 'center center',
        end: '+=200px',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to('.h-heading', {
            color: `rgba(221, 141, 161, ${progress})`,
            textShadow: window.innerWidth < 1250 
              ? `0px 3px 4px hsla(0, 0%, 0%, ${0.61 * progress})`
              : `0px 5px 4px hsla(0, 0%, 0%, ${0.61 * progress})`,
            duration: 0.1
          });
        }
      },
    });

    // Create horizontal scroll timeline
    const horizontalTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        start: 'center center',
        end: '+=500px',
        scrub: 1,
        pin: true,
        onUpdate: () => {
          gsap.to(wrapper.current, {
            duration: 0.5,
            ease: 'power2.out',
          });
        },
      },
    });

    // Create cards animation timeline
    const cardsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: window.innerWidth < 1250 ? '+=100vh' : '+=100vh',
        scrub: true,
        onUpdate: (self) => {
          horizontalContent.cards.forEach((card) => {
            gsap.to(card.id, {
              x: `${card.endTranslateX * self.progress}px`,
              rotate: `${card.rotate * self.progress * 2}`,
              ease: 'power3.out',
            });
          });
        },
      },
    });

    // Cleanup function
    return () => {
      mainTimeline.kill();
      horizontalTimeline.kill();
      cardsTimeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { dependencies: [scrollingImages, staticImages] });

  return (
    <div className="h-container"
      ref={boxRef}
    >
      <div className="h-grid">
      </div>
      <section className='h-wrapper'
        ref={wrapper}
      >
        <div className='h-content'>
          <div className="about-left">
            <Image width={250} height={250} src={staticImages[0].image.url} alt={staticImages[0].altText} />
          </div>
          <div className="about-right">
            <Image width={250} height={250} src={staticImages[1].image.url} alt={staticImages[1].altText} />
          </div>
          <h1 className='h-heading'>{heading}</h1>
          <div className="hero-box">
            <p className="scroll-down">{horizontalContent.scrollDown}</p>
            <div className="arrow-wrapper">
              <Image width={250} height={250} src={"/home/arrow-down.svg"} alt="down-arrow" className="down-arrow" />
            </div>
          </div>
        </div>

        {scrollingImages && scrollingImages.map((card, index) => (
          <div className="h-card" id={`h-card${index + 1}`} key={index}>
            <Image width={400} height={400} src={card.image.url} alt={card.altText} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Horizontal