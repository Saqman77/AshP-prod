import React, { useRef } from "react";
// import { aboutSectionContent } from './aboutSectionContent';
import AboutSectionCards from "./aboutSectionCards/AboutSectionCards";
import AboutHeading from "./aboutHeading/AboutHeading";
import "./aboutSection.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { getHighlightedText } from "@/app/utils/highlightText";

interface IAboutSectionProps {
  smallHeading: string;
  mainHeadingLeft: string;
  mainHeadingRight: string;
  footerHeading: string;
  firstParagraph: {
    text: string;
    highlightedText1: string[];
    highlightedText2: string[];
  };
  secondParagraph: {
    text: string;
    highlightedText1: string[];
    highlightedText2: string[];
  };
  cards: {
    paragraph: string;
    highlightedText?: string;
    image1:{url: string};
    image2?: {url: string};
  }[];
}

const AboutSection = ({
  smallHeading,
  mainHeadingLeft,
  mainHeadingRight,
  footerHeading,
  firstParagraph,
  secondParagraph,
  cards
}: IAboutSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const sparkles = gsap.utils.toArray<HTMLElement>(".sparkle img");

      sparkles.forEach((sparkle) => {
        // Scale animation
        gsap.fromTo(
          sparkle,
          {
            scale: 0,
            opacity: 0,
            transformOrigin: "center",
          },
          {
            scale: () => gsap.utils.random(0.8, 1.2),
            opacity: 1,
            duration: () => gsap.utils.random(0.5, 0.7),
            ease: "power2.out",
            repeat: -1,
            yoyo: true,
            delay: () => gsap.utils.random(0, 1),
          }
        );

        // Separate opacity animation for appear/disappear effect
        gsap.fromTo(
          sparkle,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.5,
            ease: "power1.out",
            repeat: -1,
            yoyo: true,
            delay: () => gsap.utils.random(0, 1),
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="aboutSection" ref={sectionRef}>
      <h2 className="smallHeading">
        <div className="sparkle big">
          <Image width={24} height={24} src={"/about/sparkle.svg"} alt="" />
        </div>
        {smallHeading}
      </h2>

      <h3 className="mainHeading">
        <div className="sparkle small">
          <Image width={24} height={24} src={"/about/sparkle.svg"} alt="" />
        </div>
        <span className="since">{mainHeadingLeft}</span>{" "}
        <span className="year">{mainHeadingRight}</span>
      </h3>

      <p className="firstParagraph">
        <span className="description">
          {getHighlightedText(
            firstParagraph.text,
            firstParagraph.highlightedText1,
            firstParagraph.highlightedText2
          )}
        </span>
        {/* <span className="companyName">{aboutSectionContent.firstParagraph.companyName}</span>{' '}
                <span className="serviceName">{aboutSectionContent.firstParagraph.serviceName}</span>
                <span className="description">{aboutSectionContent.firstParagraph.description}</span> */}
      </p>

      <p className="secondParagraph">
          {getHighlightedText(
            secondParagraph.text,
            secondParagraph.highlightedText1,
            secondParagraph.highlightedText2
          )}
        {/* {aboutSectionContent.secondParagraph.start}
                <span className="familyRun">
                    <span className="sparkle medium">
                        <Image width={24} height={24} src={"/about/sparkle.svg"} alt="" />
                    </span>
                    {aboutSectionContent.secondParagraph.familyRun}
                </span>
                {aboutSectionContent.secondParagraph.middle}
                <span className="bestSelling">{aboutSectionContent.secondParagraph.bestSelling}<span className="sparkle medium">
                    <Image width={24} height={24} src={"/about/sparkle.svg"} alt="" /></span></span>
                {aboutSectionContent.secondParagraph.authors}
                <span className="awardWinning">{aboutSectionContent.secondParagraph.awardWinning}<span className="sparkle small">
                    <Image width={24} height={24} src={"/about/sparkle.svg"} alt="" /></span></span>{' '}
                <span className="publisher">{aboutSectionContent.secondParagraph.publisher}</span> */}
      </p>

      <AboutSectionCards cards={cards}  spark={"/about/sparkle.svg"} />
      {footerHeading && (
        <AboutHeading heading={footerHeading} spark={"/about/sparkle.svg"} />
      )}
    </section>
  );
};

export default AboutSection;
