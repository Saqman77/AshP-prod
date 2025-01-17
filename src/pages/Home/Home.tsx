import './Home.scss'
import arrow from '/src/assets/home/Frame 42.svg'
import reading from '/src/assets/home/muslim woman writing something in a notebook 1.png'
import Cards from '../../components/Home/cards/Cards'
import { cardContent } from '../../components/Home/cards/cardContent'
import ContactUs from '../../components/get-in-touch-button/ContactUs'
import { useEffect, useRef, useState } from 'react'
// import { useThemeContext } from '../../utils/ThemeContextProvider'

const Home = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
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

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

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

  return (
    <div className="home-wrapper">
      <div className="home-content-top">
        <div className="left-content">
          <div className="main-heading">
            <p className="heading-text">
              Shaping your stories into <br />
              <span className="strong"> great writing,</span>
              &nbsp;one <span className="color-text"> edit</span>
              &nbsp;at a<br />
              time..
            </p>
          </div>

          <div className="left-desc">
            Start your journey with a complimentary 30-minute consultation call,
            <br />
            a manuscript assessment, and a free sample edit of your chosen text.
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
    </div>
  );
};

export default Home;
