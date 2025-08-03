import React from "react";
// import { profileContent } from "./firstProfileContent";
import "./Profile.scss";
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

const Profile = ({
  heading,
  subHeading,
  description,
  profileImage,
  socialLinks,
  certificationSectionHeading,
  certificates,
}: IProfileProps) => {
  return (
    <div className="first-profile">
      <div className="first-profile__wrapper">
        <div className="first-profile__top">
          <div className="first-profile__top-left">
            <Image
              src={profileImage.url}
              alt="Ash's-profile"
              width={424}
              height={424}
            />
          </div>
          <div className="first-profile__top-right">
            <div className="first-profile__header">
              <h3 className="name">{heading}</h3>
              <h4 className="title">{subHeading}</h4>
            </div>
            <div className="description">
              {description.map((desc, index) => (
                <p className="description" style={{ marginBottom: "1rem" }} key={index}>{desc}</p>
              ))}
            </div>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url}>
                  <Image
                    width={100}
                    height={100}
                    src={link.icon.url}
                    alt={link.altText}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <span className="seperator"></span>
        <div className="first-profile__bottom">
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
          src={"/about/about-ashp-top-left.svg"}
          alt="background-elemnt"
        />
      </div>
      <div className="element top-right">
        <Image
          width={500}
          height={500}
          src={"/about/ashp-top-right-about.svg"}
          alt="background-elemnt"
        />
      </div>
      <div className="element bottom-right">
        <Image
          width={500}
          height={500}
          src={"/about/ashp-about-bottom-right.svg"}
          alt="background-elemnt"
        />
      </div>
    </div>
  );
};

export default Profile;
