'use client'
import { useState, useEffect, useRef } from 'react';
import { type SanityDocument } from "next-sanity";
import { client } from "../sanity/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FLists from '../components/freedie/flist/FLists';
import './Freedie.scss';
import FCarousel from '../components/freedie/fcarousel/FCarousel';
import { useThemeContext } from '../utils/ThemeContextProvider';
import FreedieHero from '../components/freedie/FreedieHero/FreedieHero';
import TheStory from '../components/freedie/TheStory/TheStory';
import FreedieSlider from '../components/freedie/freedieSlider/FreedieSlider';
import Image from 'next/image';


const FREEDIEPAGE_QUERY = `*[_type == "freediePage"]{
  heading {
    headingLeft,
    headingRight
  },
  subHeading,
  cardText,
  storySection {
    heading,
    description[],
    image {
      "url": asset->url
    }
  },
  freedieBuddies[]->{
    "id": slug.current,
    name,
    eMail, 
    role,
    desc,
    imgSrc { "url": asset->url },
    links { ... },
  },
  disclaimerText[],
}`

const options = { next: { revalidate: 120 } };

const data = await client.fetch<SanityDocument[]>(
      FREEDIEPAGE_QUERY,
      {},
      options
);


gsap.registerPlugin(ScrollTrigger);

const Freedie: React.FC = () => {
  const [freediePageData, setFreediePageData] = useState(data[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isCarouselVisible, setCarouselVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(() => {
    // Check localStorage for disclaimer state
    if (typeof window !== 'undefined') {
      return localStorage.getItem('freedieDisclaimerAccepted') !== 'true';
    }
    return true;
  }); // Show disclaimer initially
  const bgref = useRef<HTMLDivElement>(null)
  const { isActive, removeClass } = useThemeContext();
  const [viewMode, setViewModeState] = useState<'slider' | 'list'>('slider');
  const [, setSliderScrollPosition] = useState<number | null>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      removeClass();
      document.documentElement.classList.remove('active');
      document.body.classList.remove('active');
    }

    if (data) {
      setFreediePageData(data[0]);
    }
  }, [isActive, removeClass, data]);

  // Ensure disclaimer state is synced with localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('freedieDisclaimerAccepted') === 'true') {
      setShowDisclaimer(false);
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

  const handleScrollPositionChange = (position: number) => {
    setSliderScrollPosition(position);
  };

  const handleViewModeChange = (mode: 'slider' | 'list') => {
    if (mode === viewMode) return;
    setTimeout(() => {
      if (mode === 'list') {
        // Add timeout to ensure ScrollTrigger animation has settled
        setTimeout(() => {
          // Kill all ScrollTriggers to unpin the slider
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          // Force a complete page reset by removing any pinned content
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
          // Use a longer timeout to ensure everything is reset
          setTimeout(() => {
            // Get the list container position
            const listContainer = listContainerRef.current;
            if (listContainer) {
              // Use scrollIntoView to scroll to the list component
              listContainer.scrollIntoView({
                behavior: 'auto',
                block: 'start'
              });
            } else {
              console.log('List container not found!');
            }
          }, 0); // Longer timeout to ensure complete reset
        }, 0); // Timeout to ensure ScrollTrigger animation has settled
      }
      setViewModeState(mode);
    }, 800);
  };

  // Handler for closing disclaimer and persisting state
  const handleDisclaimerClose = () => {
    setShowDisclaimer(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('freedieDisclaimerAccepted', 'true');
    }
  };

  return (
    <>
            <FreedieHero heading={freediePageData.heading} subHeading={freediePageData.subHeading} cardText={freediePageData.cardText} />
            <TheStory heading={freediePageData.storySection.heading} image={freediePageData.storySection.image} description={freediePageData.storySection.description} />

      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="f-modal">
          <div className="f-modal-content">
            {freediePageData.disclaimerText.map((text: string, index: number) => (
              <p key={index} className='modal-p'>
                {text}
                {index !== freediePageData.disclaimerText.length - 1 && <span className="spacer"></span>}
              </p>
            ))}
            <div className="f-modal-buttons">
              <button onClick={handleDisclaimerClose}>Agree</button>
              <button onClick={handleDisclaimerClose}>Disagree</button>
            </div>
          </div>
        </div>
      )}

      <FCarousel
        startIndex={selectedIndex}
        isVisible={isCarouselVisible}
        onClose={handleCloseCarousel}
        freedie={freediePageData.freedieBuddies}
      />

      <div className="f-container"
        ref={bgref}
      >
        <div className="f-wrapper">
          {/* <div className="f-top">
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
              </div>
            </div>
            <div className="f-right">
              <div className="wheel">
                <img src={wheel} alt="wheel-image" className="wheel-img" />
              </div>
            </div>
          </div> */}

          <div className="f-bottom">
            <div className="f-headingb">
              {/* <p className="f-hb">Meet Our FrEdiBuddies</p> */}
            </div>
            <div
              className="f-toggle-wrapper"
              ref={listContainerRef}
              style={{ backgroundColor: viewMode === 'slider' ? '#2E2E2E' : '#4B3B74' }}
            >
            {viewMode === 'list' && (
              <div className="f-toggle-header">
                <div className='toggle-box'>
                <button
                  className=""
                  onClick={() => handleViewModeChange('slider')}
                >
                  Discover
                </button>
                <span></span>
                <button
                  className="active"
                  onClick={() => handleViewModeChange('list')}
                >
                  List
                </button>
                </div>
              </div>
            )}
              <div className="f-toggle-content">
                

                {viewMode === 'slider' ? (
                  
                  <FreedieSlider freedie={freediePageData.freedieBuddies} onItemClick={handleItemClick} viewMode={viewMode} setViewMode={handleViewModeChange} onScrollPositionChange={handleScrollPositionChange} />
                ) : (
                  <FLists freedie={freediePageData.freedieBuddies} onItemClick={handleItemClick} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="back-gear">
          <div className="f-gear">
            <Image width={100} height={100} src={"/freedi/Vector2.svg"} alt="gear-image" className="gear-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Freedie;
