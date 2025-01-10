import './Home.scss'
import arrow from '../../assets/home/Frame 42.svg'
import reading from '../../assets/home/muslim woman writing something in a notebook 1.png'
import Cards from '../../components/Home/cards/Cards'
import { cardContent } from '../../components/Home/cards/cardContent'
import ContactUs from '../../components/get-in-touch-button/ContactUs'
import {  useRef } from 'react'

const Home = () => {

  const carouselRef = useRef(null);

  const scrollRight = () => {
    const carousel = carouselRef.current as HTMLElement | null;
    if (carousel) {
      const card = carousel.querySelector('.card'); // Assuming the class of each card is `.card`.
      if (card) {
        const cardWidth = (card as HTMLElement).offsetWidth;
        carousel.scrollBy({ left: cardWidth , behavior: 'smooth' });
      }
    }
  };

  const scrollLeft = () => {
    const carousel = carouselRef.current as HTMLElement | null;
    if (carousel) {
      const card = carousel.querySelector('.card-wrapper'); // Assuming the class of each card is `.card`.
      if (card) {
        const cardWidth = (card as HTMLElement).offsetWidth;
        carousel.scrollBy({ left: -cardWidth , behavior: 'smooth' });
      }
    }
  };

  // useEffect(() => {
    // const carousel = carouselRef.current;
    // Additional logic for initialization if required
  // }, []);

  return (
    <div className="home-wrapper">
      <div className="home-content-top">

        <div className="left-content">
          <div className="main-heading">
            <p className='heading-text'>
              Shaping your stories into <br/> 
              <span className='strong'> great writing,</span>
              &nbsp;one <span className='color-text'> edit</span>
              &nbsp;at a<br/>time..
            </p>
          </div>

          <div className="left-desc">
          Start your journey with a complimentary 30-minute consultation call,<br/>
          a manuscript assessment,
          and a free sample edit of your chosen text.
          </div>
          <div className="button-wrapper">
            <div className="arrow">
              <img src={arrow} alt="arrow-pointing image" className='arrow' />
            </div>
            <div className="inner-container">
            <div className="button-heading">

              <p className='button-desc'>
              Let’s collaborate to elevate your writing to its full potential!
              </p>

              </div>

              <div className="button-container">

              <ContactUs/>

              </div>
              
            </div>
            
          </div>
        </div>

        <div className="right-content">
          <div className="img-container">
            <img src={reading} alt="woman-reading" className='right-img'/>
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="services-heading">
          <p>Our <span className='color-text'>Services</span></p>
        </div>
        <div className="cards-wrapper">
          <div className="left-btn"
          onClick={scrollLeft}
          >L</div>
          <div className="carousel" ref={carouselRef}>
          
            {cardContent.map((card) => {
              return <Cards key={card.id} head={card.heading} backGround={card.backgroundColor} cardImg={card.imgSrc} desc={card.description} {...card} />
            })}
          
          </div>
          <div className="right-btn"
          onClick={scrollRight}
          >R</div>
        </div>
      </div>
    </div>
  )
}

export default Home