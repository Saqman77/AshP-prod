import React from "react";
import ContactUs from "../../get-in-touch-button/ContactUs";
import Schedule from "../../schedule/Schedule";
// import { thirdSectionContent } from './ThirdSectionContent';
import "./ThirdSection.scss";
import Image from "next/image";

interface ThirdSectionProps {
  heading: string;
  paragraph1: string;
  paragraph2?: string;
  image?: string;
}

const ThirdSection = ({
  heading,
  paragraph1,
  paragraph2,
  image,
}: ThirdSectionProps) => {
  return (
    <div className="third-section">
      <div className="third-section-content">
        <div className="left-content">
          <h2>{heading}</h2>
          <p className="top-p">{paragraph1}</p>
          <p className="bot-p">{paragraph2}</p>
          <div className="cta-wrapper">
            <ContactUs />
            <Schedule />
          </div>
        </div>
        <div className="right-content">
          {image && (
            <div className="image-container">
              <Image
                src={image}
                alt="Quality editing services"
                className="section-image"
                width={343}
                height={343}
                quality={100}
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
