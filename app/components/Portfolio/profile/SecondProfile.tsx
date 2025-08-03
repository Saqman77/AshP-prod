import React from "react";
// import { secondProfileContent } from "./secondProfileContent";
import "./secondProfile.scss";
import Image from "next/image";

interface IProfileProps {
  heading: string;
  subHeading: string;
  description: string[];
  profileImage: { url: string };
  socialLinks: {
    altText: string;
    url: string;
    icon: { url: string };
  }[];
  certificationSectionHeading: string;
  certificates: string[];
}

const SecondProfile = ({
  heading,
  subHeading,
  description,
  profileImage,
  socialLinks,
  certificationSectionHeading,
  certificates,
}: IProfileProps) => {
  return (
    <div className="second-profile">
      <div className="second-profile__wrapper">
        <div className="second-profile__top">
          <div className="second-profile__top-left">
            <Image
              width={424}
              height={424}
              src={profileImage.url}
              alt="Ash's-profile"
            />
          </div>
          <div className="second-profile__top-right">
            <div className="second-profile__header">
              <h3 className="name">{heading}</h3>
              <h4 className="title">{subHeading}</h4>
            </div>
            <div className="description">
              {description.map((desc, index) => (
                <p
                  className="description"
                  style={{ marginBottom: "1rem" }}
                  key={index}
                >
                  {desc}
                </p>
              ))}
            </div>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url}>
                  <Image
                    width={40}
                    height={40}
                    src={link.icon.url}
                    alt={link.altText}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <span className="seperator"></span>
        <div className="second-profile__bottom">
          <h3 className="heading">{certificationSectionHeading}</h3>
          <span className="divider"></span>
          <div className="certifications-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="certification-item">
                <div className="icon">
                  <Image
                    width={24}
                    height={24}
                    src={"/home/greenTick.svg"}
                    alt="check-mark-logo"
                  />
                </div>
                <h4 className="title">{cert}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="element top-left">
        <Image
          width={500}
          height={500}
          src={"/about/hira-top-left-about.svg"}
          alt="background-elemnt"
        />
      </div>
      <div className="element top-right">
        <Image
          width={500}
          height={500}
          src={"/about/hira-top-right-about.svg"}
          alt="background-elemnt"
        />
      </div>
      <div className="element bottom-right">
        <Image
          width={500}
          height={500}
          src={"/about/hira-bottom-right-about.svg"}
          alt="background-elemnt"
        />
      </div>
    </div>
  );
};

export default SecondProfile;
