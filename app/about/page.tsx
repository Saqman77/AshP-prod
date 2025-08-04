// 'use client'
// import { useEffect } from "react";
import { type SanityDocument } from "next-sanity";
import { client } from "../sanity/client";
import Horizontal from "../components/Portfolio/aboutHero/Horizontal";
// import './Portfolio.scss'
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { useEffect, useState } from "react";
// import { useThemeContext } from "../utils/ThemeContextProvider";
import AboutSection from "../components/Portfolio/aboutSection/AboutSection";
import Profile from "../components/Portfolio/profile/Profile";
import SecondProfile from "../components/Portfolio/profile/SecondProfile";
import OurWorkWrapper from "../components/Portfolio/pastwork/ourWorkWrapper";
import { Metadata } from "next";

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

const options = { next: { revalidate: 120 } };

export default async function AboutPage() {
  const data = await client.fetch<SanityDocument[]>(
    ABOUTPAGE_QUERY,
    {},
    options
  );
  const [pageData] = data;

  const { heroSection, aboutSection, ashpProfile, hirapProfile, ourWork } =
    pageData;

  return (
    <div className="a-container">
      <Horizontal
        heading={heroSection.heading}
        scrollingImages={heroSection.scrollingImages}
        staticImages={heroSection.staticImages}
      />
      <AboutSection
        smallHeading={aboutSection.smallHeading}
        mainHeadingLeft={aboutSection.mainHeadingLeft}
        mainHeadingRight={aboutSection.mainHeadingRight}
        firstParagraph={aboutSection.firstParagraph}
        secondParagraph={aboutSection.secondParagraph}
        footerHeading={aboutSection.aboutSectionFooterHeading}
        cards={aboutSection.aboutSectionCards}
      />
      <Profile {...ashpProfile} />
      <SecondProfile {...hirapProfile} />
      <OurWorkWrapper
        heading={ourWork.heading}
        services={ourWork.ourWorkList}
      />
    </div>
  );
}

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(ABOUTPAGE_QUERY, {}, options);
  const { aboutSection, ashpProfile } = data[0];

  const description =
    aboutSection?.firstParagraph.text ||
    "We are Ash P and Hira P, a sibling duo with more than two decades of experience between us";

  const ogImage =
    ashpProfile?.profileImage?.url || "https://ashpreads.com/muslim woman.svg";

  return {
    title: "About | Ash P Reads Editing Services",
    description,
    generator: "Next.js",
    metadataBase: new URL("https://ashpreads.com/about"),
    openGraph: {
      title: "About | Ash P Reads Editing Services",
      description,
      url: "https://ashpreads.com/about",
      siteName: "Ash P Reads Editing Services",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Ash P Reads Editing Services",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "About | Ash P Reads Editing Services",
      description,
      images: [ogImage],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        {
          url: "/web-app-manifest-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          url: "/web-app-manifest-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      apple: [{ url: "/apple-touch-icon.png" }],
    },
  };
}
