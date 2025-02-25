import { useState, useEffect } from 'react';
import wheel from '../../assets/freedi/Brutalist 52.png';
import gear from '../../assets/freedi/Brutalist Shape 181 (1).svg';
import FLists from '../../components/freedie/flist/FLists';
import './Freedie.scss';
import FCarousel from '../../components/freedie/fcarousel/FCarousel';
import { useThemeContext } from '../../utils/ThemeContextProvider';

const Freedie: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isCarouselVisible, setCarouselVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(true); // Show disclaimer initially

  const { isActive, removeClass } = useThemeContext();

  useEffect(() => {
    if (isActive) {
      removeClass();
      document.documentElement.classList.remove('active');
      document.body.classList.remove('active');
    }
  }, []);

  useEffect(() => {
    if (isCarouselVisible) {
      setScrollY(window.scrollY);
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
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
      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="f-modal">
          <div className="f-modal-content">
            <p>
              When Ash P started out as an independent service provider, 20 or so years ago, the market was fairly new in Pakistan. The learning curve was steep and much was learned through trial and error. Now that independent services and working remotely is recognized as a “real” job, it is an option that many prefer to a regular 9-5 career. 
              <span className="spacer"></span>
              Keeping that in mind, Ash P Reads FrEdiBuddies was created to give budding independent service providers a platform to hone their skills and a safe space where projects and clients are vetted, to prevent them from falling victim to fakes and scam 
              <span className="spacer"></span>
              artists. Ash P Reads FrEdiBuddies are a collective of independent service providers that have been verified and authenticated by us. 
            </p>
            <div className="f-modal-buttons">
              <button onClick={() => setShowDisclaimer(false)}>Agree</button>
              <button onClick={() => setShowDisclaimer(false)}>Disagree</button>
            </div>
          </div>
        </div>
      )}

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
                A supportive platform for all Independent <br />
                <span className="f-colour">Service Providers.</span>
              </h2>
              <div className="fredi-desc">
                <span>
                  Ash P Reads FrEdiBuddies is a collective of verified and
                  authenticated Independent Service Providers.
                </span>
                <span className="spacer"></span>
                <span>
                  When Ash P started out as an independent service provider 20
                  or so years ago, the market was fairly new in Pakistan. The
                  learning curve was steep, and much was learned through trial
                  and error. Now that independent services and working remotely
                  is recognized as a “real” job, it is an option that many
                  prefer to a regular 9-5 career.
                </span>
                <span className="spacer"></span>
                <span>
                  Keeping that in mind, Ash P Reads FrEdiBuddies was created to
                  give budding independent service providers a platform to hone
                  their skills and a safe space where projects and clients are
                  vetted, to prevent them from falling victim to fakes and
                  scams.
                </span>
              </div>
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
