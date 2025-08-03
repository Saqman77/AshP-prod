'use client'
// import { useEffect } from "react";
import { type SanityDocument } from "next-sanity";
import { client } from "../sanity/client";
import Horizontal from "../components/Portfolio/aboutHero/Horizontal"
import './Portfolio.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useState } from "react";
import { useThemeContext } from "../utils/ThemeContextProvider";
import AboutSection from "../components/Portfolio/aboutSection/AboutSection";
import Profile from "../components/Portfolio/profile/Profile";
import SecondProfile from "../components/Portfolio/profile/SecondProfile";
import OurWork from "../components/Portfolio/pastwork/ourWork";

const ABOUTPAGE_QUERY = `*[_type == "about"]{
  heroSection {
    heading,
    scrollingImages[] {
      altText,
      image {
        "url": asset->url
      },
    },
    staticImages[] {
      altText,
      image {
        "url": asset->url
      },
    },
  },
  aboutSection {
    smallHeading,
    mainHeadingLeft,
    mainHeadingRight,
    firstParagraph{ text, highlightedText1[], highlightedText2[] },
    secondParagraph{ text, highlightedText1[], highlightedText2[] },
    aboutSectionFooterHeading,
    aboutSectionCards[] {
      "paragraph": description,
      highlightedText,
      image1 { "url": asset->url },
      image2 { "url": asset->url },
    },
  },
  ashpProfile {
    heading,
    subHeading,
    description[],
    profileImage {"url": asset->url },
    socialLinks[] {
      altText,
      "url": href,
      icon { "url": asset->url },
    },
    certificates[],
    certificationSectionHeading,
  },
  hirapProfile {
    heading,
    subHeading,
    description[],
    profileImage {"url": asset->url },
    socialLinks[] {
      altText,
      "url": href,
      icon { "url": asset->url },
    },
    certificationSectionHeading,
    certificates[],
  },
  ourWork {
    heading,
    ourWorkList[] {
      "id": slug.current,
      service,
      genres {
        Fiction[] {
          name,
          projects[] {
            name,
            link,
          },
        },
        Nonfiction[] {
          name,
          projects[] {
            name,
            link,
          },
        },
      },
    }  
  }
}`;

// export async function generateMetadata() {
//   const data = await client.fetch<SanityDocument[]>(ABOUTPAGE_QUERY, {}, options);
//   const { aboutSection, ashpProfile } = data[0];

//   return {
//     title: "About | Ash P Reads Editing Services",
//     description:
//       aboutSection?.firstParagraph.text ||
//       "We are Ash P and Hira P, a sibling duo with more than two decades of experience between us",
//     generator: 'Next.js',
//     metadataBase: new URL('https://ashpreads.com/about'),
//     openGraph: {
//       title: "About | Ash P Reads Editing Services",
//       description:
//         aboutSection?.firstParagraph.text ||
//         "We are Ash P and Hira P, a sibling duo with more than two decades of experience between us",
//       url: "https://ashpreads.com/about",
//       siteName: "Ash P Reads Editing Services",
//       images: [
//         {
//           url: ashpProfile?.profileImage?.url || "https://ashpreads.com/muslim woman.svg",
//           width: 1200,
//           height: 630,
//           alt: "Ash P Reads Editing Services",
//         },
//       ],
//       locale: "en_US",
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: "About | Ash P Reads Editing Services",
//       description:
//         aboutSection?.firstParagraph.text ||
//         "We are Ash P and Hira P, a sibling duo with more than two decades of experience between us",
//       images: [ ashpProfile?.profileImage?.url|| "https://ashpreads.com/muslim woman.svg"],
//     },
//     icons: {
//     icon: [
//       { url: '/favicon.ico' },
//       { url: '/favicon.svg', type: 'image/svg+xml' },
//       { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
//       { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
//       { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' }
//     ],
//     apple: [
//       { url: '/apple-touch-icon.png' }
//     ],
//   },
//   };
// }

const options = { next: { revalidate: 120 } };

const data = await client.fetch<SanityDocument[]>(
      ABOUTPAGE_QUERY,
      {},
      options
);

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// interface PortfolioProps {
//   key: string;
// }

const Portfolio = () => {
  const [heroData, setHeroData] = useState(data[0].heroSection);
  const [aboutSectionData, setAboutSectionData] = useState(data[0].aboutSection)
  const [ashpProfile, setAshpProfile] = useState(data[0].ashpProfile);
  const [hirapProfile, setHirapProfile] = useState(data[0].hirapProfile);
  const [ourWork, setOurWork] = useState(data[0].ourWork);

  useEffect(() => {
    if (data) {
      setHeroData(data[0].heroSection);
      setAboutSectionData(data[0].aboutSection);
      setAshpProfile(data[0].ashpProfile);
      setHirapProfile(data[0].hirapProfile);
      setOurWork(data[0].ourWork);
    }
  },[data])
    
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isServVisible, setServVisible] = useState(false);
  
 // Empty dependency array ensures this runs only on mount and unmount
  const [scrollY, setScrollY] = useState(0);

      const {isActive,removeClass} = useThemeContext();
      
      
      useEffect(()=>{
        if(isActive){
          removeClass();
          document.documentElement.classList.remove('active')
          document.body.classList.remove('active')
        }
      },[])
    

  useEffect(() => {
    if (isServVisible) {
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
  }, [isServVisible]);
 useEffect(()=>{
    const headerP = document.querySelector('.header-blur') as HTMLElement
    const nav = document.querySelector('.nav ul') as HTMLElement
    const btns = document.querySelectorAll('.menu-btn span') as NodeListOf<HTMLElement>;
    if (headerP) {
      headerP.style.background = 'transparent';
      btns.forEach(btn => btn.style.backgroundColor = '#ffffff');
      nav.style.color = '#ffffff';
    }

    return () => {
      if (headerP) {
        headerP.style.background = ''; // Reset to its original value
        nav.style.color = '';
        btns.forEach(btn => btn.style.backgroundColor = '');
      }
    };

 },[])
 const handleItemClick = (index: number) => {
  setSelectedIndex(index);
  setServVisible(true);
};

const handleCloseServ = () => {
  setServVisible(false);
};



  return (
    <div className="a-container">
      <Horizontal heading={heroData.heading} scrollingImages={heroData.scrollingImages} staticImages={heroData.staticImages}/>
      <AboutSection smallHeading={aboutSectionData.smallHeading} mainHeadingLeft={aboutSectionData.mainHeadingLeft} mainHeadingRight={aboutSectionData.mainHeadingRight} firstParagraph={aboutSectionData.firstParagraph} secondParagraph={aboutSectionData.secondParagraph} footerHeading={aboutSectionData.aboutSectionFooterHeading} cards={aboutSectionData.aboutSectionCards} />
      <Profile {...ashpProfile} />
      <SecondProfile {...hirapProfile}/>
      <OurWork
            startIndex={selectedIndex}
            isVisible={isServVisible}
            onClose={handleCloseServ}
            onItemClick={handleItemClick}
            heading={ourWork.heading}
            services={ourWork.ourWorkList}
      />
    </div>
  )
}

export default Portfolio