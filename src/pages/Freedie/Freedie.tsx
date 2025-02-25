import { useState, useEffect } from 'react';
import wheel from '../../assets/freedi/Brutalist 52.png';
import gear from '../../assets/freedi/Vector2.svg';
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
            While Ash P Reads Editing Services carefully vets all FrEdiBuddies also known as Independent Service Providers for reliability, professionalism, and quality standards, our role is strictly limited to providing referrals between Independent Service Providers and clients seeking their services.
              <span className="spacer"></span>
              Ash P Reads Editing Services makes no guarantee that our FrEdiBuddies will accept recommended projects, nor do we guarantee that our FrEdiBuddies will be awarded any projects for which they are referred. We do not provide or manage service contracts; all contractual arrangements must be established directly between the Independent Service Providers and clients.
              <span className="spacer"></span>
              As a referral service, Ash P Reads Editing Services does not mediate transactions, oversee service delivery, or collect any fees, commissions, or royalties from any transaction. FrEdiBuddies maintain full control over their pricing and service offerings. If you experience any issues with a Service Provider, please contact us at ashpreads@gmail.com so we may evaluate their continued inclusion in our referral network.
              <span className="spacer"></span>
              This disclaimer outlines the complete scope of our service and limitations of our responsibility. All parties agree to these terms when using our referral service.
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
                Ash P Reads &nbsp;
                <span className="f-colour">FrEdiBuddies</span>
              </h2>
              <div className="fredi-desc">
                <span className='bottom-tag'>
                  A supportive platform for all Independent Service Providers.
                </span>
                <span className="spacer"></span>
                <span>
                Ash P Reads FrEdiBuddies is a collective of verified and authenticated Independent Service Providers
                </span>
                <span className="spacer"></span>
                <span>
                When Ash P started out as an independent service provider, 20 or so years ago, the market was fairly new in Pakistan. The learning curve was steep and much was learned through trial and error. Now that independent services and working remotely is recognized as a “real” job, it is an option that many prefer to a regular 9-5 career.
                </span>
                <span className="spacer"></span>
                <span>
                Keeping that in mind, Ash P Reads FrEdiBuddies was created to give budding independent service providers a platform to hone their skills and a safe space where projects and clients are vetted, to prevent them from falling victim to fakes and scam artists.  
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
