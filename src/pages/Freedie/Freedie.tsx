import { useState, useEffect } from 'react';
import wheel from '../../assets/freedi/Spark 42.svg';
import gear from '../../assets/freedi/Brutalist Shape 181 (1).svg';
import FLists from '../../components/freedie/flist/FLists';
import './Freedie.scss';
import FCarousel from '../../components/freedie/fcarousel/FCarousel';

const Freedie: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isCarouselVisible, setCarouselVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (isCarouselVisible) {
      // Lock body scroll
      setScrollY(window.scrollY); // Save current scroll position
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Unlock body scroll
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY); // Restore scroll position
    }
  }, [isCarouselVisible]);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    setCarouselVisible(true);
  };

  const handleCloseCarousel = () => {
    setCarouselVisible(false);
  };

  return (
    <>
      <FCarousel
        startIndex={selectedIndex}
        isVisible={isCarouselVisible}
        onClose={handleCloseCarousel}
      />
      <div className="f-container">
        <div className="f-wrapper">
          <div className="f-top">
            <div className="f-left">
              <h2 className="f-heading">
                A supportive platform for all <br />
                <span className="f-colour">freelancers</span>
              </h2>
              <p className="fredi-desc">
                Ash P Reads FrEdiBuddies is a collective of verified and authenticated freelancers.
              </p>
            </div>
            <div className="f-right">
              <div className="wheel">
                <img src={wheel} alt="wheel-image" className="wheel-img" />
              </div>
            </div>
          </div>
          <div className="f-bottom">
            <div className="f-headingb">
              <p className="f-hb">Meet Our FrEdiBuddies</p>
            </div>
            <FLists onItemClick={handleItemClick} />
          </div>
        </div>
        <div className="back-gear">
          <div className="f-gear">
            <img src={gear} alt="gear-image" className="gear-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Freedie;
