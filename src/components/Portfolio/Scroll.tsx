import { useRef } from 'react'
import img1 from '../../assets/about/Aisha Panjwaneey.jpeg'
import img2 from '../../assets/about/AshPReads-EditingServices-Logo.png'
import img3 from '../../assets/about/AshPReads-EditingServices-Paid BR.png'
import img4 from '../../assets/about/AshPReads-Editng Services-Line or Content Editing.png'
import img5 from '../../assets/about/Hira.jpg'
import ParallaxImage from './ParallaxImage'
import './scroll.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const Scroll = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

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
      
  
    //   return () => ctx.revert(); // Clean up the ScrollTrigger and animations on unmount
    },{scope:scrollRef});
  return (
    <div className='s-container' ref={scrollRef}>

        <section className='panel ash'>

            <div className="panel-front">


                <div className="panel-top">
                   <h3 className='s-heading'>Aisha Panjwaneey - Ash P</h3>
                   {/* <ul className='services-list'>
                    <li><p className='s-text'>Developmental</p></li>
                    <li><p className='s-text'>Line</p></li>
                    <li><p className='s-text'>Copy Editor</p></li>
                    <li><p className='s-text'>Proofreader</p></li>
                    <li><p className='s-text'>Translator</p></li>
                    <li><p className='s-text'>Beta Reader</p></li>
                    <li><p className='s-text'>Sensitivity Reader</p></li>
                   </ul> */}
                </div>

                <div className="panel-center">

                    <div className="panel-left">
                        <ul className='services-list'>
                            <li id='list1'><p className='s-text'>Developmental</p></li>
                            <li id='list2'><p className='s-text'>Line</p></li>
                            <li id='list3'><p className='s-text'>Copy Editor</p></li>
                            <li id='list4'><p className='s-text'>Proofreader</p></li>
                            <li id='list5'><p className='s-text'>Translator</p></li>
                            <li id='list6'><p className='s-text'>Beta Reader</p></li>
                            <li id='list7'><p className='s-text'>Sensitivity Reader</p></li>
                        </ul>


                    </div>

                    <div className="sub-panel-center">


                        <div className='ash2-img'>

                            <ParallaxImage src={img1} alt="" className='s-imgs' />

                        </div>

                        

                    </div>

                    <div className="panel-right">


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
                    
                </div>
                {/* <div className="panel-bottom">

                    <p className='bottom-p'>
                        #RevPit 2025 Editor, Occasional co-host
                        of the Northwest Editors Guild, monthly
                        Editing with Disability/Chronic
                        Illness/Neurodivergence 
                        Virtual Chat, 
                        Mentor for aspiring editors, beta readers, 
                        and freelancers, Coach and Consultant for new authors.

                    </p>

                </div> */}


            </div>

            <div className='ash-img'>
                <ParallaxImage src={img2} alt="" className='s-imgs' />
            </div>

        </section>


        <section className='panel projects'>

            <div className="panel-front">


                <div className="panel-top">

                    <div className="projects-heading">

                        <h3>

                        </h3>

                    </div>

                    <div className="projects-description">

                        <p>

                        </p>

                    </div>


                    <div className="project-lists">
                        <ul>
                            <li>

                            </li>

                            <li>

                            </li>

                            <li>

                            </li>

                            <li>

                            </li>
                            
                            <li>

                            </li>
                        </ul>
                    </div>

                </div>

                <div className="panel-center">


                    
                </div>

                <div className="panel-bottom">

                </div>


            </div>

                <div className='ash-img'>

                    <ParallaxImage src={img3} alt="" className='s-imgs' />

                </div>




        </section>
        <section className='panel hira'>

            <div className="panel-front">


                <div className="panel-top">
                    <h3 className='s-heading'>Hira Panjwaneey</h3>
                </div>

                <div className="panel-center">

                    <div className="panel-left">
                        <ul className='services-list'>
                            <li id='list1'><p className='s-text'>Proofreading</p></li>
                            <li id='list2'><p className='s-text'>Beta Reading</p></li>
                            <li id='list3'><p className='s-text'>Copy Editing</p></li>
                            <li id='list4'><p className='s-text'>Line Editing</p></li>
                            <li id='list5'><p className='s-text'>Manuscript Assessment</p></li>
                            <li id='list6'><p className='s-text'>Critique Reports</p></li>
                            <li id='list7'><p className='s-text'>Revisions</p></li>
                        </ul>


                    </div>

                    <div className="sub-panel-center">


                        <div className='ash2-img'>

                            <ParallaxImage src={img5} alt="" className='s-imgs' />

                        </div>

                        

                    </div>

                    <div className="panel-right">


                        <ul className='cert-list'>
                            <li id='list1'><p className='cert-text'>Curriculum Desig</p></li>
                            <li id='list2'><p className='cert-text'>Teacher Training</p></li>
                            <li id='list3'><p className='cert-text'>Educational Leadership</p></li>
                            <li id='list4'><p className='cert-text'>Content Development</p></li>
                            <li id='list5'><p className='cert-text'>CV Writing</p></li>
                            <li id='list6'><p className='cert-text'>Special Education Support</p></li>
                            {/* <li id='list7'><p className='cert-text'>Digital Literacy</p></li>
                            <li id='list7'><p className='cert-text'>AI in Teaching</p></li>
                            <li id='list7'><p className='cert-text'>Google Soft Skills Certification</p></li>
                            <li id='list7'><p className='cert-text'>Pathways to Publishing</p></li>
                            <li id='list7'><p className='cert-text'>AI for Editors</p></li> */}
                        </ul>

                    </div>
                    
                </div>
                {/* <div className="panel-bottom">

                    <p className='bottom-p'>
                        #RevPit 2025 Editor, Occasional co-host
                        of the Northwest Editors Guild, monthly
                        Editing with Disability/Chronic
                        Illness/Neurodivergence 
                        Virtual Chat, 
                        Mentor for aspiring editors, beta readers, 
                        and freelancers, Coach and Consultant for new authors.

                    </p>

                </div> */}


            </div>
            <div className='ash-img'>
                <ParallaxImage src={img5} alt="" className='s-imgs' />
            </div>

        </section>


        <section className='panel projects'>

                        <div className="panel-front">


                            <div className="panel-top">

                            </div>

                            <div className="panel-center">

                                <div className="panel-left">

                                </div>

                                <div className="panel-center"></div>
                                <div className="panel-right"></div>
                            </div>
                            
                            <div className="panel-bottom"></div>
                        </div>

                <div className='ash-img'>

 
                    <ParallaxImage src={img4} alt="" className='s-imgs' />

                </div>



        </section>

        

    </div>
  )
}

export default Scroll