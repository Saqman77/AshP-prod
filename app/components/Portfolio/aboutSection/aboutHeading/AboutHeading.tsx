import React from "react";
// import aboutHeadingContent from './AboutHeadingContent';
import "./AboutHeading.scss";
import Image from "next/image";

interface AboutSectionHeadingProps {
  spark: string;
  heading: string;
}

const AboutHeading = ({ spark, heading }: AboutSectionHeadingProps) => {
  return (
    <div className="aboutHeading">
        <h1>
          <div className="sparkle big">
            <Image width={100} height={100} src={spark} alt="" />
          </div>
          {heading}
          <div className="sparkle small">
            <Image width={100} height={100} src={spark} alt="" />
          </div>
          <div className="sparkle medium first">
            <Image width={100} height={100} src={spark} alt="" />
          </div>
          <div className="sparkle medium second">
            <Image width={100} height={100} src={spark} alt="" />
          </div>
          <div className="sparkle medium third">
            <Image width={100} height={100} src={spark} alt="" />
          </div>
          <div className="sparkle medium fourth">
            <Image width={100} height={100} src={spark} alt="" />
          </div>
        </h1>
    </div>
  );
};

export default AboutHeading;
