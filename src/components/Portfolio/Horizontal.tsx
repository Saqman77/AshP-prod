import './horizontal.scss'
// import ace from '../../assets/freedi/Spark 82.svg'
import React, { useRef } from "react";
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
    const ctx = gsap.context(() => {
    gsap.to('.main', {
      backgroundColor: '#7163DE',
  
      scrollTrigger: {
        trigger: '.h-heading',
        start: window.innerWidth < 1250 ? 'center 30%':'10% top',
        end: '+=20vh',
        scrub: 1,
        // duration: 2,
        onEnter:()=>{
          gsap.to('.h-heading',{
            color: '#FFF9E3',
          })
        },
        onEnterBack:()=>{
          gsap.to('.h-heading',{
            color: '#7163DE',
          })
        },
        // markers: true,
      },
    });

    gsap.to('.ace',
    {
      // background: 'yellow',
      // fill:"#F9EFCC",
      y:'500%',
      x:'-300%',
      opacity:0,
      scale:5,
      rotate: '360deg',
      ease:'power1.inOut',
      // repeat:1,
      // yoyo: true,
      scrollTrigger:{
        trigger: '.ace',
        start:'top top',
        end:'+=300px',
        scrub: true,
        // pin: true
      }
    })
  // })

  // useLayoutEffect(() => {
  //   
      const spans = document.querySelectorAll('.outro-span')
      if (wrapper.current) {
        ScrollTrigger.create({
          trigger: wrapper.current,
          start: 'top top',
          end: '+=500vh',
          scrub: 1,
          pinType: "fixed",
          pin: true,
          // pinSpacing: false,
          // pinSpacer: ,
          onUpdate: (self) => {
            gsap.to(wrapper.current, {
              x: `${-350 * self.progress}vw`,
              duration: 0.5,
              ease: 'power2.out',
            });
          },
        });
      }

      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger: 'card.id',
          start: 'top top',
          end: '+=400px',
          scrub: 1,
          // markers: true,
          onUpdate: (self) => {
            gsap.to(card.id, {
              x: `${card.endTranslateX * self.progress}px`,
              rotate: `${card.rotate * self.progress * 2}`,
              duration: 0.5,
              ease: 'power2.out',
              
            });
          },
        });
      });

      spans.forEach((span)=>{
        gsap.to(span,{
          backgroundSize: '100% 100%',
          stagger:0.1,
          ease:'power1.out',
          scrollTrigger:{
            trigger: span,
            start: 'top center',
            end: '+=500px',
            scrub: true,
            // markers: true
          }
        })
      
      
        gsap.to('.bold',{
          backgroundSize: '100% 100%',
          // stagger:0.1,
          ease:'power1.inOut',
          scrollTrigger:{
            trigger: '.bold',
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            // markers: true
          }
        })
      })


    }, );
 


    return () => ctx.revert(); // Cleanup animations and ScrollTriggers
  } ,[]);


  return (
    <div className="h-container"
    ref={boxRef}
    >
      <div className="h-grid">
        <div className='ace'>
            <svg width="370" height="370" viewBox="0 0 370 370" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M184.5 28.0008L221.2 0.300781L244.5 39.9008L289.1 28.4008L295.4 73.9008L341 80.3008L329.4 124.801L369.1 148.101L341.3 184.801L369.1 221.501L329.4 244.801L341 289.301L295.4 295.701L289.1 341.201L244.5 329.701L221.2 369.301L184.5 341.601L147.8 369.301L124.5 329.701L80 341.201L73.6 295.701L28.1 289.301L39.7 244.801L0 221.501L27.7 184.801L0 148.101L39.7 124.801L28.1 80.3008L73.6 73.9008L80 28.4008L124.5 39.9008L147.8 0.300781L184.5 28.0008Z" fill="#C1BBF5"/>
            </svg>
        </div>
      </div>
        <section className='h-wrapper'
            ref={wrapper}
        >
            <div className='reveal'> 
              <svg width="48" height="98" viewBox="0 0 48 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_3_240)">
                    <path d="M18.3411 74.1924C18.3411 72.0809 18.3411 69.7582 18.3411 67.6467C18.5525 49.0651 18.9754 30.2725 19.1869 11.6909C19.1869 9.57939 19.1869 7.679 19.3984 5.56747C19.6098 2.82247 20.2442 -0.555987 23.8389 0.0774737C25.3191 0.288627 27.0108 3.45593 27.2222 5.35632C28.0681 20.9817 28.7024 36.3959 29.3368 52.0213C29.5483 55.6109 29.3368 59.2005 31.2399 63.0013C33.7774 58.7782 35.892 54.344 38.6409 50.332C39.9096 48.4317 43.0815 46.3201 44.9846 46.7424C48.7908 47.5871 48.3679 51.8101 47.0992 54.344C41.6013 67.0132 36.1034 79.8936 29.5483 92.1405C25.3191 99.9532 18.9754 99.9532 14.7463 92.1405C9.03698 81.7939 4.80785 70.6028 0.155803 59.834C-0.478567 58.567 1.00163 56.4555 1.42454 54.7663C3.11619 55.3997 5.65367 55.3997 6.4995 56.6667C8.61407 59.2005 9.88281 62.579 11.5745 65.5351C13.2661 68.7024 14.9578 71.8697 16.6494 74.8259C17.0723 74.4036 17.7067 74.1924 18.3411 74.1924Z" fill="#7163DE"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_3_240">
                      <rect width="48" height="98" fill="white"/>
                    </clipPath>
                  </defs>
              </svg>
            </div>
            <h1 className='h-heading'>Who are we?</h1>

            <div className="h-card" id='h-card1'>
                <img src="../2manteam.png" alt="card-img" />
            </div>
            <div className="h-card" id='h-card2'>
                <img src="../5manteam.png" alt="card-img" />
            </div>
            <div className="h-card" id='h-card3'>
                <img src="../casualreading.png" alt="card-img" />
            </div>
            <div className="h-card" id='h-card4'>
                <img src="../3manteam.png" alt="card-img" />
            </div>
        </section>
        <section className='outro'>
            <h3>
            <span className='outro-span'>

                Since 2003, Ash P Reads Editing Services has contributed their expertise to over 200 fiction and nonfiction manuscripts, along with extensive website and social media content. Founded by Ash P, this family-run editing service has collaborated with best-selling authors and an award-winning publisher. They have particular expertise in working with ESL authors, helping bring structure to their stories and developing their unique writing voices. Both editors bring valuable backgrounds in early childhood education and special education, making them particularly well suited for manuscripts related to children and education.
                
            </span> 

            <p className="bold">Cultivating stories, one edit at a time.</p>

            </h3>
            
        </section>
    </div>
  )
}

export default Horizontal