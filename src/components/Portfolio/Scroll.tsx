import img1 from '../../assets/about/Aisha Panjwaneey.jpeg'
// import img2 from '../../assets/about/AshPReads-EditingServices-Logo.png'
import img3 from '../../assets/about/AshPReads-EditingServices-Paid BR.png'
import img4 from '../../assets/about/AshPReads-Editng Services-Line or Content Editing.png'
import img5 from '../../assets/about/Hira.jpg'
import ParallaxImage from './ParallaxImage'
import './scroll.scss'
const Scroll = () => {
  return (
    <div className='s-container'>

        <section className='panel ash'>

            <div className='ash-img'
            // style={{ backgroundImage: `url(${img1})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize:'100% 100%'}}
            >
                <ParallaxImage src={img1} alt="" className='s-imgs' />
            </div>

        </section>


        <section className='panel projects'>

                <div className='ash-img'>

                    <ParallaxImage src={img3} alt="" className='s-imgs' />

                </div>


            {/* <div className="projects-brief">

                <p className='s-text'>
                    Our suite of digital solutions pushes the boundaries of innovation to deliver end-to-end experiences that drive results. 
                    From data-driven social campaigns to cutting-edge AI products, 
                    we’re redefining what's possible in the digital space. 
                </p>

            </div> */}

            {/* <div className="col projects-cover">

                <div className="ash-img">

                    <ParallaxImage src={img4} alt="" className='s-imgs' />

                </div>

            </div> */}


            <div className="col projects-list">

                <div className="project">

                    <h3 className='s-heading'>sunrise</h3>
                    
                    <p className='s-text'>apple music / spotify / youtube</p>

                </div>

                <div className="project">

                    <h3 className='s-heading'>sunrise</h3>

                    <p className='s-text'>apple music / spotify / youtube</p>

                </div>

                <div className="project">

                    <h3 className='s-heading'>sunrise</h3>

                    <p className='s-text'>apple music / spotify / youtube</p>

                </div>
                
                <div className="project">

                    <h3 className='s-heading'>sunrise</h3>

                    <p className='s-text'>apple music / spotify / youtube</p>

                </div>

            </div>

        </section>
        <section className='panel ash'>

            <div className='ash-img'
            // style={{ backgroundImage: `url(${img1})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize:'100% 100%'}}
            >
                <ParallaxImage src={img5} alt="" className='s-imgs' />
            </div>

        </section>


        <section className='panel projects'>

                <div className='ash-img'>

                    <ParallaxImage src={img4} alt="" className='s-imgs' />

                </div>


            {/* <div className="projects-brief">

                <p className='s-text'>
                    Our suite of digital solutions pushes the boundaries of innovation to deliver end-to-end experiences that drive results. 
                    From data-driven social campaigns to cutting-edge AI products, 
                    we’re redefining what's possible in the digital space. 
                </p>

            </div> */}

            {/* <div className="col projects-cover">

                <div className="ash-img">

                    <ParallaxImage src={img4} alt="" className='s-imgs' />

                </div>

            </div> */}


            <div className="col projects-list">

                <div className="project">

                    <h3 className='s-heading'>sunrise</h3>
                    
                    <p className='s-text'>apple music / spotify / youtube</p>

                </div>

                <div className="project">

                    <h3 className='s-heading'>sunrise</h3>

                    <p className='s-text'>apple music / spotify / youtube</p>

                </div>

                <div className="project">

                    <h3 className='s-heading'>sunrise</h3>

                    <p className='s-text'>apple music / spotify / youtube</p>

                </div>
                
                <div className="project">

                    <h3 className='s-heading'>sunrise</h3>

                    <p className='s-text'>apple music / spotify / youtube</p>

                </div>

            </div>

        </section>

        {/* <section className='panel s-about'>

            <div className="col intro">

                <p className='s-text'>Introduction</p>

                <p className='s-text'>
                    Our suite of digital solutions pushes the boundaries of innovation to deliver end-to-end experiences that drive results. 
                    From data-driven social campaigns to cutting-edge AI products, 
                    we’re redefining what's possible in the digital space.
                </p>

            </div>

            <div className="col portrait">

                <div className="portrait-container">
                    <div className="ash-img">
                        <ParallaxImage src={img2} alt="" className='s-imgs' />
                    </div>
                </div>

            </div>

        </section>

        <section className='panel banner'>

            <div className="ash-img">
                <ParallaxImage src={img5} alt="" className='s-imgs' />
            </div>


            <div className="banner-copy">

                <p className='s-text'> heading </p>

                <h3 className='s-heading'> be the first to know </h3>

                <p className='s-text'>
                    be the first to know about my latest music,
                    this is an example text.
                </p>
            </div>
        </section> */}

    </div>
  )
}

export default Scroll