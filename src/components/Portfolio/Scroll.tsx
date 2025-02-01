import { useEffect, useRef, useState } from 'react'
import { services } from './services'
import img1 from '../../assets/about/Ash P.jpg'
import img2 from '../../assets/about/AshPReads-EditingServices-Logo.png'
import img3 from '../../assets/about/Ash P bio.png'
import img4 from '../../assets/about/Hira P Bio .png'
import img5 from '../../assets/about/Hira.jpg'
import ParallaxImage from './ParallaxImage'
import './scroll.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from '@gsap/react'
import ServiceGrid from './ServiceGrid'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


interface ScrollProps {
    startIndex: number;
    isVisible: boolean;
    onClose: () => void;
    onItemClick: (index: number) => void;
}

const Scroll = ({ startIndex, isVisible, onClose, onItemClick }: ScrollProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const [currentIndex, setCurrentIndex] = useState(startIndex);

    useGSAP(() => {
    //   const ctx = gsap.context(() => {
        // const panels = gsap.utils.toArray<HTMLElement>('.ash');
        
        const tl2 = gsap.timeline();
        const tl = gsap.timeline();
          tl.fromTo(
            '.ash .s-text ,.ash .s-heading',
            {
              x: '-100%',
              stagger: 0.1,
              scale: 0,
              opacity: 0,
              ease: 'Power2.easeIn',
            },
            {
              x: '0',
              stagger: 0.1,
              scale: 1,
              opacity: 1,
              scrollTrigger: {
                trigger: '.ash',
                start: 'clamp(-50% top)',
                end: 'clamp(center center)',
                scrub: 1,
                refreshPriority: 1,
                preventOverlaps:true,
                // onEnter: tl.revert ,
                // once:true,
                // markers: true,
                // toggleActions: 'restart none restart none',
                onLeave:()=>{
                    tl.to('.ash .s-text ,.ash .s-heading',{
                        x: '-100%',
                        stagger: 0.1,
                        scale: 0,
                        opacity: 0,
                        ease: 'Power2.easeIn',
                        scrollTrigger: {
                            trigger: '.ash',
                            start: 'clamp(top 10%)',
                            end: 'clamp(+=400px)',
                            scrub:true,
                            preventOverlaps:true,
                            // onScrubComplete:tl.revert,
                            // once:true,
                            // toggleActions: 'restart none restart none',
                            // markers:true
                        }
                    })
                }
              },
            }
          );
            tl.fromTo('.ash .cert-text',{ x:'100%', scale: 0, opacity:0},
            {
              x: '0%',
              scale: 1,
              opacity:1,
              stagger: 0.1,
            //   yoyo: true,
            //   repeat:2,
              scrollTrigger: {
                trigger: ".ash",
                start: 'clamp(-30% top)',
                end: 'clamp(+=200px )',
                // markers: true,
                scrub: true,
                onLeave:()=>{
                    tl.to(".ash .cert-text",{
                         x:'100%',
                         scale: 0,
                         opacity:0,
                        stagger:0.1,
                        scrollTrigger:{
                            trigger:'.ash .cert-list',
                            start:'-40% top',
                            end:'+=600px',
                            scrub: true
                        }
                        })
                }

    }})
          tl2.fromTo(
            '.hira .s-text ,.hira .s-heading',
            {
              x: '-100%',
              stagger: 0.1,
              scale: 0,
              opacity: 0,
              ease: 'Power2.easeIn',
            },
            {
              x: '0',
              stagger: 0.1,
              scale: 1,
              opacity: 1,
              scrollTrigger: {
                trigger: '.hira',
                start: 'clamp(-50% top)',
                end: 'clamp(center center)',
                scrub: 1,
                refreshPriority: 1,
                preventOverlaps:true,
                // onEnter: tl.revert ,
                // once:true,
                // markers: true,
                // toggleActions: 'restart none restart none',
                onLeave:()=>{
                    tl2.to('.hira .s-text ,.hira .s-heading',{
                        x: '-100%',
                        stagger: 0.1,
                        scale: 0,
                        opacity: 0,
                        ease: 'Power2.easeIn',
                        scrollTrigger: {
                            trigger: '.hira',
                            start: 'clamp(top 10%)',
                            end: 'clamp(+=400px)',
                            scrub:true,
                            preventOverlaps:true,
                            // onScrubComplete:tl.revert,
                            // once:true,
                            // toggleActions: 'restart none restart none',
                            // markers:true
                        }
                    })
                }
              },
            }
          );
            tl2.fromTo('.hira .cert-text',{ x:'100%', scale: 0, opacity:0},
            {
              x: '0%',
              scale: 1,
              opacity:1,
              stagger: 0.1,
            //   yoyo: true,
            //   repeat:2,
              scrollTrigger: {
                trigger: ".hira",
                start: 'clamp(-30% top)',
                end: 'clamp(+=200px )',
                // markers: true,
                // onEnter: tl.revert,
                scrub: true,
                // onScrubComplete:tl.revert,
                // refreshPriority: 1,
                // toggleActions: 'play reverse play reverse',
                onLeave:()=>{
                    tl2.to(".hira .cert-text",{
                         x:'100%',
                         scale: 0,
                         opacity:0,
                        stagger:0.1,
                        scrollTrigger:{
                            trigger:'.hira .cert-list',
                            start:'-40% top',
                            end:'+=600px',
                            scrub: true
                        }
                        })
                }
                    // tl.revert()
            //         gsap.fromTo('.cert-text',{ x: '0%', scale: 1, opacity:2 },{
            //             x: '100%',
            //             stagger: 0.1,
            //             scale: 0,
            //             opacity: 0,
            //             ease: 'Power2.easeIn',
            //             scrollTrigger: {
            //                 trigger: panel,
            //                 start: 'clamp(center center)',
            //                 end: 'clamp(center)',
            //                 scrub:true,
            //                 markers:true,
            //                 // onScrubComplete:tl.revert
            //                 // toggleActions: 'restart play restart restart',
            //             }
            //         })
            //    },
            },
            
        

          
  

        });
        tl.fromTo(
            '.panel.ash .panel-front',
            {
            //   backdropFilter: 'blur(50px) brightness(0.7)',
            //   webkitBackdropFilter: 'blur(50px) brightness(0.7)',
                backgroundColor:'#7163DE'
            },
            {
            //   backdropFilter: 'blur(7px) brightness(0.8)',
            //   webkitBackdropFilter: 'blur(7px) brightness(0.8)',
            backgroundColor:'#7163de7c',
              scrollTrigger: {
                trigger: '.ash',
                start: '-20% top',
                end: '+=100px',
                scrub: true,
              },
            }
          );
        tl2.fromTo(
            '.panel.hira .panel-front',
            {
            //   backdropFilter: 'blur(50px) brightness(0.7)',
            //   webkitBackdropFilter: 'blur(50px) brightness(0.7)',
                backgroundColor:'#7163DE'
            },
            {
            //   backdropFilter: 'blur(7px) brightness(0.8)',
            //   webkitBackdropFilter: 'blur(7px) brightness(0.8)',
            backgroundColor:'#7163de7c',
              scrollTrigger: {
                trigger: '.hira',
                start: '-20% top',
                end: '+=100px',
                scrub: true,
              },
            }
          );
        // tl2.fromTo('.ash2-img',{
        //     // height:'0%',
        //     // transform:'translateY(100%)'
        //     scale:0.5
        // },
        // {
        //     // transform:'translateY(0%)',
        //     // height:'100%',
        //     scale:1,
        //     ease:'power2.inOut',
        //     duration:2,
        //     scrollTrigger: {
        //         trigger: '.panel',
        //         start: '-20% top',
        //         end: '+=100px',
        //         scrub: true,
        //       },
        // })

        gsap.fromTo('.projects .panel-front',{
            opacity:'0'
        },{
            backdropFilter:'blur(10px) brightness(0.6)',
            opacity:'1',
            ease:'power1.inOut',
            // backgroundColor: 'rgb(255 152 154 / 82%)',
            scrollTrigger:{
                trigger:'.projects .panel-front',
                start:'-10% top',
                end:'-2%',
                scrub: true,
                // onLeave:  ()=>{
                //     gsap.to('.projects .panel-front',{
                //         opacity:'0'
                //     })
                // },
                // onEnterBack:  ()=>{
                //     gsap.to('.projects .panel-front',{
                //         opacity:'1'
                //     })
                // },
            },
        })
        gsap.fromTo('.projects-hira .panel-front',{
            opacity:'0'
        },{
            backdropFilter:'blur(10px) brightness(0.6)',
            opacity:'1',
            ease:'power1.inOut',
            // backgroundColor: 'rgb(255 152 154 / 82%)',
            scrollTrigger:{
                trigger:'.projects-hira .panel-front',
                start:'-10% top',
                end:'-2%',
                scrub: true,
                // onLeave:  ()=>{
                //     gsap.to('.projects .panel-front',{
                //         opacity:'0'
                //     })
                // },
                // onEnterBack:  ()=>{
                //     gsap.to('.projects .panel-front',{
                //         opacity:'1'
                //     })
                // },
            },
        })
      
  
    //   return () => ctx.revert(); // Clean up the ScrollTrigger and animations on unmount
    },{scope:scrollRef});

    useEffect(() => {
        setCurrentIndex(startIndex);
      }, [startIndex]);
    
  return (
    <div className='s-container' ref={scrollRef}>

        <section className='panel ash'>


        

            <div className="panel-front">
            <div className="panel-top">
                            <h3 className='s-heading'>Ash P</h3>
                        </div>



                <div className="panel-center">

                    <div className="panel-left">

                        <div className='ash2-img'>

                            <ParallaxImage src={img1} alt="" className='s-imgs' />

                        </div>

                    </div>


                    <div className="panel-right">


                            <div className='qualification-wrapper'>
                                <div className='qual-section'>
                                    <h3 className='cert-heading'>
                                        Certifications & Courses
                                    </h3>
                                    <ul className='cert-list'>
                                        <li id='list1'><p className='cert-text'>Digital Marketing</p></li>
                                        <li id='list2'><p className='cert-text'>Freelancing</p></li>
                                        <li id='list3'><p className='cert-text'>Video Editing</p></li>
                                        <li id='list4'><p className='cert-text'>Graphic Design</p></li>
                                        <li id='list5'><p className='cert-text'>Communication & Soft Skills</p></li>
                                        <li id='list6'><p className='cert-text'>Creative Writing</p></li>
                                        <li id='list7'><p className='cert-text'>Digital Literacy</p></li>
                                        <li id='list7'><p className='cert-text'>AI in Teaching</p></li>
                                        <li id='list7'><p className='cert-text'>Google Soft Skills Certification</p></li>
                                        <li id='list7'><p className='cert-text'>Pathways to Publishing</p></li>
                                        <li id='list7'><p className='cert-text'>AI for Editors</p></li>
                                    </ul>
                                </div>
                                <div className='qual-section2'>
                                <h3 className='q-heading'>
                                         Qualifications
                                    </h3>
                                    <ul className='cert-list2'>
                                        <li id='list1'><p className='cert-text'>B.A. in Mass Communication, English Literature, and Education.</p></li>
                                        
                                    </ul>
                            </div>

                            </div>
                           
                    </div>
                    
                </div>


            </div>

            <div className='ash-img'>
                <ParallaxImage src={img2} alt="" className='s-imgs bg' />
            </div>

        </section>


        <section className='panel projects'>

            <div className="panel-front">


                {/* <div className="panel-top">

                    <div className="projects-heading">

                        <h3 className='q-heading'>
                            Qualifications
                        </h3>

                    </div>

                </div> */}

                {/* <div className="panel-certification"
                    style={{
                        gridRow:'4'
                    }}
                >

                    <p className='certification'>
                        B.A. in Mass Communication, English Literature, and Education.
                    </p>

                    
                </div> */}

                <div className="panel-bio" >
                    <p className='bio'>

                        <span>

                            <span>

                                Ash P brings over two decades of experience in literary editing across diverse genres and online content.
                                Known among peers as "the book surgeon", she specializes in safe-for-work nonfiction and fiction for all ages.

                            </span> 

                            <span className='line'
                                style={{
                                    width:'100%',
                                    height:'20px',
                                    display:'inline-block'
                                }}
                            > </span>

                            <span>

                                Ash is a volunteer editor for #RevPit, a verified editor on IAX, and as a member of the Comic Book Editors Alliance, she is being mentored in comic book editing.
                                She is an active participant in several supportive social spaces and networks for editors like the Neurodivergent Publishing Lounge and the Editors' Lair on Discord,
                                and the Editors Tea Club and EFA BIPOC Chapter on Slack.


                            </span>

                            <span className='line'
                                style={{
                                    width:'100%',
                                    height:'20px',
                                    display:'inline-block'
                                }}
                            > </span>

                            <span>
                                A self-proclaimed logophile, lexophile, and librocubicularist, Ash is often reading, networking,
                                or learning a new skill in her free time.
                            </span>

                        </span>

                    </p>
                </div>


            </div>

                <div className='ash-img'>

                    <ParallaxImage src={img3} alt="" className='s-imgs  bg' />

                </div>




        </section>
        <section className='panel hira'>


        

        <div className="panel-front">
        <div className="panel-top">
                        <h3 className='s-heading'>Hira P</h3>
                    </div>



            <div className="panel-center">

                <div className="panel-left">

                    <div className='ash2-img'>

                        <ParallaxImage src={img5} alt="" className='s-imgs' />

                    </div>

                </div>


                <div className="panel-right">


                        <div className='qualification-wrapper'>
                            <div className='qual-section'>
                                <h3 className='cert-heading'>
                                    Certifications & Courses
                                </h3>
                                <ul className='cert-list'>
                                    <li id='list1'><p className='cert-text'>Certification in UCL Leadership development program</p></li>
                                     <li id='list2'><p className='cert-text'>
                                        Certificate in professional studies in education from Bradford College  (an associate college of the University of Bradford)
                                    </p></li> 
                                    <li id='list3'><p className='cert-text'>APTIS C1 English Proficiency</p></li>
                                    <li id='list4'><p className='cert-text'>Special Ed training at PAIIExAKU-IED, and HumQadam Foundation</p></li>
                                    <li id='list5'><p className='cert-text'>Multiple Microsoft certifications, including Microsoft Innovative Educator</p></li>
                                    <li id='list6'><p className='cert-text'>Google Soft Skills Certification</p></li>
                                </ul>
                            </div>
                            <div className='qual-section2'>
                            <h3 className='q-heading'>
                                    Qualifications
                                </h3>
                                <ul className='cert-list2'>
                                    <li id='list1'><p className='cert-text'>B.A. in Mass Communication, English Literature, and Education.</p></li>
                                    
                                </ul>
                        </div>

                        </div>
                    
                </div>
                
            </div>


        </div>

        <div className='ash-img'>
            <ParallaxImage src={img5} alt="" className='s-imgs bg' />
        </div>

        </section>


        <section className='panel projects-hira'>

        <div className="panel-front">


{/* <div className="panel-top">

    <div className="projects-heading">

        <h3 className='q-heading'>
            Qualifications
        </h3>

    </div>

</div> */}

{/* <div className="panel-certification"
    style={{
        gridRow:'4'
    }}
>

    <p className='certification'>
        B.A. in Mass Communication, English Literature, and Education.
    </p>

    
</div> */}

<div className="panel-bio" >
    <p className='bio'>

        <span>

            <span>

            Hira P brings 30 years of experience as an educationist and four years as an editorial professional, specializing in proofreading and beta reading, including a year of copyediting. 

            </span> 

            <span className='line'
                style={{
                    width:'100%',
                    height:'20px',
                    display:'inline-block'
                }}
            > </span>

            <span>

            Her professional journey includes extensive experience in curriculum design, and teacher training, which has honed her ability to communicate effectively and adapt to the diverse needs of her students. 

            </span>

            <span className='line'
                style={{
                    width:'100%',
                    height:'20px',
                    display:'inline-block'
                }}
            > </span>

            <span>
            This has led Hira to have a passion for language and a keen eye for detail. She is committed to delivering excellence and helping clients achieve their vision through well-crafted written materials. Hira P is a verified reader on IAX.
            </span>

        </span>

    </p>
</div>


</div>

                <div className='ash-img'>

 
                    <ParallaxImage src={img4} alt="" className='s-imgs bg' />

                </div>



        </section>

        <section className='our-work'>
            <div className='work-wrapper'>
                <div className="work-heading">
                    <h3 className="s-heading">Our Work</h3>
                </div>
                
                        <ul className='services-list'>
                    {services.map((list: { id: string; service: string }, index: number) => {
                return(
                        <li key={list.id} onClick={() => onItemClick(index)}><p className='s-text'>{list.service}<span className='services-indicator'></span></p> </li>
                    )}
                    )}
                        </ul>
            </div>
        <ServiceGrid
                close={onClose}
                isVisible={isVisible}
                service={services[currentIndex]}
            />
        </section>
        

    </div>
  )
}

export default Scroll