import './Home.scss'
import arrow from '/src/assets/home/Frame 42.svg'
import reading from '/src/assets/home/image 9.png'
import Cards from '../../components/Home/cards/Cards'
import { cardContent } from '../../components/Home/cards/cardContent'
import { testContent } from '../../components/Home/testimonial/testContent'
import ContactUs from '../../components/get-in-touch-button/ContactUs'
import { useEffect, useRef, useState } from 'react'
import Schedule from '../../components/schedule/Schedule'
// import CardsContainer from '../../components/Home/wish/Wishs'
import Wishs from '../../components/Home/wish/Wishs'
import Tests from '../../components/Home/testimonial/Tests'
// import { useThemeContext } from '../../utils/ThemeContextProvider'
// import { useThemeContext } from '../../utils/ThemeContextProvider'

const Home = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const testCarouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
    // const {isActive, removeClass} = useThemeContext();

    
  
    // useEffect(()=>{
      
    //   if(isActive){
    //     removeClass();
    //     document.documentElement.classList.remove('active')
    //     document.body.classList.remove('active')
    //   }
      // else{
      //   document.documentElement.classList.remove('active')
      //   document.body.classList.remove('active')
      // }
    // },[])
  
  // const { toggleMenu } = useThemeContext();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to manage timeout

  const handleMouseDown = (e: React.MouseEvent) => {
    const carousel = carouselRef.current;
    if (carousel) {
      setIsDragging(true);
      setStartX(e.clientX); // Record initial mouse position
      setScrollStart(carousel.scrollLeft); // Record initial scroll position
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const carousel = carouselRef.current;
    if (carousel) {
      const deltaX = e.clientX - startX; // Difference in mouse position
      carousel.scrollLeft = scrollStart - deltaX; // Adjust scroll position
    }
  };

  const handleMouseUp = () => {
    // timeoutRef.current = setTimeout(() => {
      setIsDragging(false);
    // }, 500); // Delay of 100ms
  };
  const handleTestMouseDown = (e: React.MouseEvent) => {
    const testCarousel = testCarouselRef.current;
    if (testCarousel) {
      setIsDragging(true);
      setStartX(e.clientX); // Record initial mouse position
      setScrollStart(testCarousel.scrollLeft); // Record initial scroll position
    }
  };

  const handleTestMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const testCarousel = testCarouselRef.current;
    if (testCarousel) {
      const deltaX = e.clientX - startX; // Difference in mouse position
      testCarousel.scrollLeft = scrollStart - deltaX; // Adjust scroll position
    }
  };

  const handleTestMouseUp = () => {
    // timeoutRef.current = setTimeout(() => {
      setIsDragging(false);
    // }, 500); // Delay of 100ms
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mousemove',  handleTestMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseup', handleTestMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleTestMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseup', handleTestMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove',handleTestMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseup', handleTestMouseUp);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); // Clear timeout on cleanup
      }
    };
  }, [isDragging]);

  const moveRight = () => {
    const carousel = carouselRef.current as HTMLElement | null;
    if (carousel) {
      const card = carousel.querySelector('.card'); // Assuming the class of each card is `.card`.
      if (card) {
        const cardWidth = (card as HTMLElement).offsetWidth;
        carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
  };
  const testRight = () => {
    const testCarousel = testCarouselRef.current as HTMLElement | null;
    if (testCarousel) {
      const test = testCarousel.querySelector('.test'); // Assuming the class of each card is `.card`.
      if (test) {
        const cardWidth = (test as HTMLElement).offsetWidth;
        testCarousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
  };
  

  const moveLeft = () => {
    const carousel = carouselRef.current as HTMLElement | null;
    if (carousel) {
      const card = carousel.querySelector('.card-wrapper'); // Assuming the class of each card is `.card`.
      if (card) {
        const cardWidth = (card as HTMLElement).offsetWidth;
        carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    }
  };

  const testLeft = () => {
    const testCarousel = testCarouselRef.current as HTMLElement | null;
    if (testCarousel) {
      const test = testCarousel.querySelector('.test-wrapper'); // Assuming the class of each card is `.card`.
      if (test) {
        const cardWidth = (test as HTMLElement).offsetWidth;
        testCarousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    }
  };
  

  return (
    <div className="home-wrapper">
      <div className="home-content-top">
        <div className="left-content">
          <div className="main-heading">
            <p className="heading-text">

              We are a sibling duo with more than<span> </span> 

              <span className="strong">  

                two decades 

              </span>

              <span> </span>of freelance<span> </span>

              <span className="color-text">

                editing experience 

              </span> 

              <span> </span>between us.

              </p>

          </div>

          <div className="left-desc">
          We want your message to resonate clearly with your readers so our flexible rates and payment plans fit all budgets.
          </div>
          <div className="button-wrapper">
            <div className="arrow">
              <img src={arrow} alt="arrow-pointing image" className="arrow" />
            </div>
            <div className="inner-container">
              <div className="button-heading">
                <p className="button-desc">
                  Let’s collaborate to elevate your writing to its full potential!
                </p>
              </div>

              <div className="button-container">
                <ContactUs />
                <Schedule/>
              </div>
            </div>
          </div>
        </div>

        <div className="right-content">
          <div className="img-container">
            <img src={reading} alt="woman-reading" className="right-img" />
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="services-heading">
          <p>
            Our <span className="color-text">Services</span>
          </p>
        </div>
        <div className="cards-wrapper ">
          <div className="left-btn" onClick={moveLeft}>
            L
          </div>
          <div
            className={!isDragging ? 'carousel' : 'carousel dragging'}
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {cardContent.map((card) => {
              return (
                <Cards
                  key={card.id}
                  head={card.heading}
                  backGround={card.backgroundColor}
                  cardImg={card.imgSrc}
                  desc={card.description}
                  isDragging={isDragging}
                  {...card}
                />
              );
            })}
          </div>
          <div className="right-btn" onClick={moveRight}>
            R
          </div>
        </div>
      </div>

      <div className="wish-section">
        <div className="wish-header">
          <p>
            Ash P Reads Manuscript <span className="color-text">Wish List</span>
          </p>
        </div>
        <div className="wish-container ">
            <Wishs/>
        </div>
      </div>

      <div className="test-section">
        <div className="tests-heading">
          <p>
          Client’s <span className="color-text">Testimonials</span>
          </p>
        </div>
        <div className="tests-wrapper">
          <div
            className={!isDragging ? 'test-carousel' : 'test-carousel dragging'}
            ref={testCarouselRef}
            onMouseDown={handleTestMouseDown}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {testContent.map((card) => {
              return (
                <Tests
                  key={card.id}
                  head={card.heading}
                  desc={card.description}
                  // isDragging={isDragging}
                  {...card}
                />
              );
            })}
          </div>
          <div className='lft-rgt'>
            <div className="test-left-btn" onClick={testLeft}>
              <span className='test-indicator'></span>
            </div>
            <div className="test-right-btn" onClick={testRight}>
              <span className='test-indicator'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
