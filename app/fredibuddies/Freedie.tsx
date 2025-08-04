'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FLists from '../components/freedie/flist/FLists';
import FCarousel from '../components/freedie/fcarousel/FCarousel';
import FreedieHero from '../components/freedie/FreedieHero/FreedieHero';
import TheStory from '../components/freedie/TheStory/TheStory';
import FreedieSlider from '../components/freedie/freedieSlider/FreedieSlider';
import { useThemeContext } from '../utils/ThemeContextProvider';
import Image from 'next/image';
import './Freedie.scss';
import { type SanityDocument } from 'next-sanity';

const Freedie = ({ data }: { data: SanityDocument }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isCarouselVisible, setCarouselVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const bgref = useRef<HTMLDivElement>(null);
  const { isActive, removeClass } = useThemeContext();
  const [viewMode, setViewModeState] = useState<'slider' | 'list'>('slider');
  const [, setSliderScrollPosition] = useState<number | null>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (isActive) {
      removeClass();
      document.documentElement.classList.remove('active');
      document.body.classList.remove('active');
    }
  }, [isActive, removeClass]);

  useEffect(() => {
  const disclaimerAccepted = localStorage.getItem('freedieDisclaimerAccepted') === 'true';
  setShowDisclaimer(!disclaimerAccepted);
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

  const handleCloseCarousel = () => setCarouselVisible(false);
  const handleScrollPositionChange = (position: number) => setSliderScrollPosition(position);

  const handleViewModeChange = (mode: 'slider' | 'list') => {
    if (mode === viewMode) return;
    setTimeout(() => {
      if (mode === 'list') {
        setTimeout(() => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
          setTimeout(() => {
            const listContainer = listContainerRef.current;
            if (listContainer) {
              listContainer.scrollIntoView({ behavior: 'auto', block: 'start' });
            }
          }, 0);
        }, 0);
      }
      setViewModeState(mode);
    }, 800);
  };

  const handleDisclaimerClose = () => {
    setShowDisclaimer(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('freedieDisclaimerAccepted', 'true');
    }
  };

  return (
    <>
      <FreedieHero heading={data.heading} subHeading={data.subHeading} cardText={data.cardText} />
      <TheStory heading={data.storySection.heading} image={data.storySection.image} description={data.storySection.description} />

      {showDisclaimer && (
        <div className="f-modal">
          <div className="f-modal-content">
            {data.disclaimerText.map((text: string, index: number) => (
              <p key={index} className='modal-p'>
                {text}
                {index !== data.disclaimerText.length - 1 && <span className="spacer"></span>}
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
        freedie={data.freedieBuddies}
      />

      <div className="f-container" ref={bgref}>
        <div className="f-wrapper">
          <div className="f-bottom">
            <div className="f-headingb"></div>
            <div
              className="f-toggle-wrapper"
              ref={listContainerRef}
              style={{ backgroundColor: viewMode === 'slider' ? '#2E2E2E' : '#4B3B74' }}
            >
              {viewMode === 'list' && (
                <div className="f-toggle-header">
                  <div className='toggle-box'>
                    <button onClick={() => handleViewModeChange('slider')}>Discover</button>
                    <span></span>
                    <button className="active" onClick={() => handleViewModeChange('list')}>List</button>
                  </div>
                </div>
              )}
              <div className="f-toggle-content">
                {viewMode === 'slider' ? (
                  <FreedieSlider
                    heading={data.freedieBuddiesTitle}
                    freedie={data.freedieBuddies}
                    onItemClick={handleItemClick}
                    viewMode={viewMode}
                    setViewMode={handleViewModeChange}
                    onScrollPositionChange={handleScrollPositionChange}
                  />
                ) : (
                  <FLists freedie={data.freedieBuddies} onItemClick={handleItemClick} />
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
