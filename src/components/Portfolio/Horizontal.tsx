import './horizontal.scss'
// import ace from '../../assets/freedi/Spark 82.svg'
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
        }
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
  })

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const spans = document.querySelectorAll('.outro-span')
      if (wrapper.current) {
        ScrollTrigger.create({
          trigger: wrapper.current,
          start: 'top top',
          end: '+=500vh',
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            gsap.to(wrapper.current, {
              x: `${-350 * self.progress}vw`,
              duration: 1,
              ease: 'power1.out',
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
            <h1 className='h-heading'>Who we are?</h1>

            <div className="h-card" id='h-card1'>
                <img src="../Frame 21.svg" alt="card-img" />
            </div>
            <div className="h-card" id='h-card2'>
                <img src="../Frame 21.svg" alt="card-img" />
            </div>
            <div className="h-card" id='h-card3'>
                <img src="../Frame 21.svg" alt="card-img" />
            </div>
            <div className="h-card" id='h-card4'>
                <img src="../Frame 21.svg" alt="card-img" />
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
                <span className='space' ></span>
                  Ash P brings over two decades of experience in literary editing across diverse genres and online content. Known among peers as "the book surgeon," she specializes in safe-for-work nonfiction and fiction. She is actively expanding her expertise into new adult (NA), young adult (YA), and children's fiction, as well as graphic novels, memoirs, and comics, particularly those aimed at younger readers.
                
                <span className='space' ></span>
                  Since 2003, she has contributed her expertise to over 200 fiction and nonfiction manuscripts,
                  collaborating with best-selling authors and an award-winning publisher. Her services include developmental editing, manuscript critiques,
                  line and copyediting, proofreading, authenticity, sensitivity, and beta reading. She also uses her skills to create and compile in-house style guides,
                  translate and transcribe subtitles for websites and social media content. She has particular expertise in working with ESL authors, helping to bring structure
                  to their stories while preserving their unique voices. With a BA in Mass Communication, Education, and English literature, and a background in early childhood education, she is particularly well-suited for manuscripts related to children.
                
                <span className='space' > </span>
                  Ash P is a volunteer editor for #RevPit. She is also a member of the Comic Book Editors Alliance,
                  where she is one of many editors being mentored by Steve Colle for comic book editing.
                  She is an active participant in several supportive social spaces and networks for editors like the Neurodivergent
                  Publishing Lounge and the Editors' Lair on Discord, and the Editors Tea Club and EFA BIPOC Chapter on Slack.
                
                Whether working with seasoned authors, ESL, or first-time writers, Ash focuses on polishing manuscripts while retaining each writer's voice, and ensuring their message resonates clearly with their intended audience.
                A self-proclaimed logophile and librocubicularist, she is often found studying a new skill or reading a book on something she loves, in her free time.
                
              </span>
            </h3>
        </section>
    </div>
  )
}

export default Horizontal