import { useEffect, useRef, useState } from "react";
import "./fcards.scss";
import Image from "next/image";

interface FCardsProps {
  id: string;
  name: string;
  img: string;
  desc: string;
  role: string;
  mail: string;
  portfolio: string;
  fb: string;
  insta: string;
  x: string;
  link: string;
  spotify: string;
  tree: string;
  yt: string;
  cv: string;
  sc: string;
  git: string;
  bandC: string;
  behance: string;
  dribble: string;
  shout: string;
}

const ShoutoutPopup: React.FC<{ message: string }> = ({ message }) => {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      setFadeOut(false);

      const fadeTimer = setTimeout(() => setFadeOut(true), 5000);
      const hideTimer = setTimeout(() => setVisible(false), 5500);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [message]);

  if (!visible) return null;

  return (
    <div className={`shoutout-popup ${fadeOut ? "fade-out" : "fade-in"}`}>
      <p className="shouter">{message}</p>
    </div>
  );
};

const FCards: React.FC<FCardsProps> = ({
  id,
  name,
  img,
  desc,
  role,
  mail,
  portfolio,
  fb,
  insta,
  x,
  link,
  spotify,
  tree,
  yt,
  sc,
  bandC,
  git,
  behance,
  dribble,
  shout,
  cv,
}) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 350;

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.classList.remove("active");
      void carouselElement.offsetWidth;
      carouselElement.classList.add("active");
    }
  }, [id]);

  return (
    <div className="f-card" id={id} ref={carouselRef}>
      {shout && <ShoutoutPopup message={shout} key={shout} />}
      <div className="card-top">
        <div
          className="left-img"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <Image
            width={900}
            height={500}
            src={img}
            alt="profile-photo"
            className="l-img"
          />
        </div>
        <div className="right-main">
          <div className="right-role">
            <h3 className="main-name">{name}</h3>
            <p className="main-role">{role}</p>
          </div>
          <div className="right-desc">
            <p className="r-desc">
              {isExpanded ? (
                desc.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))
              ) : (
                <>
                  {desc.substring(0, maxLength)}
                  {desc.length > maxLength && (
                    <>
                      ...{" "}
                      <button
                        className="read-more-btn"
                        onClick={() => setIsExpanded(true)}
                      >
                        Read More
                      </button>
                    </>
                  )}
                </>
              )}
              {isExpanded && (
                <button
                  className="read-more-btn"
                  onClick={() => setIsExpanded(false)}
                >
                  Read Less
                </button>
              )}
            </p>
          </div>
          <div className="socials">
            {fb && (
              <a href={fb} className="f-social">
                <Image
                  width={40}
                  height={40}
                  src={"/freedi/Facebook.png"}
                  alt="social-icon"
                />
              </a>
            )}
            {insta && (
              <a href={insta} className="f-social">
                <Image
                  width={40}
                  height={40}
                  src={"/freedi/insta.png"}
                  alt="social-icon"
                />
              </a>
            )}
            {x && (
              <a href={x} className="f-social">
                <Image
                  width={40}
                  height={40}
                  src={"/freedi/X.png"}
                  alt="social-icon"
                />
              </a>
            )}
            {link && (
              <a href={link} className="f-social">
                <Image
                  width={40}
                  height={40}
                  src={"/freedi/linked.png"}
                  alt="social-icon"
                />
              </a>
            )}
            {spotify && (
              <a href={spotify} className="f-social">
                <Image
                  width={40}
                  height={40}
                  src={"/freedi/Spotify.png"}
                  alt="social-icon"
                />
              </a>
            )}
            {tree && (
              <a href={tree} className="f-social">
                <Image
                  width={40}
                  height={40}
                  src={"/freedi/linktree-logo-icon.svg"}
                  alt="social-icon"
                />
              </a>
            )}
            {yt && (
              <a href={yt} className="f-social">
                <Image
                  width={40}
                  height={40}
                  src={"/freedi/youtube.png"}
                  alt="social-icon"
                />
              </a>
            )}
            {sc && (
              <a href={sc} className="f-social">
                <Image
                  width={40}
                  height={40}
                  src={"/freedi/soundcloud.svg"}
                  alt="social-icon"
                />
              </a>
            )}
            {bandC && (
              <a href={bandC} className="f-social">
                <Image
                  width={40}
                  height={40}
                  src={"/freedi/bandcamp.png"}
                  alt="social-icon"
                />
              </a>
            )}
            {git && (
              <a href={git} className="f-social">
                <Image
                  width={40}
                  height={40}
                  src={"/freedi/github.png"}
                  alt="social-icon"
                />
              </a>
            )}
            {behance && (
              <a href={behance} className="f-social">
                <Image
                  width={40}
                  height={40}
                  src={"/freedi/behance-svgrepo-com.svg"}
                  alt="social-icon"
                />
              </a>
            )}
            {dribble && (
              <a href={dribble} className="f-social">
                <Image
                  width={40}
                  height={40}
                  src={"/freedi/dribbble-svgrepo-com.svg"}
                  alt="social-icon"
                />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="card-bottom">
        <div className="f-contact">
          <div className="mail-wrapper">
            <p className="mail">
              <span className="mail-span">E-mail:&nbsp; </span>
              <a
                href={`mailto:${mail}?subject=AshP%20Referral%`}
                className="freed-a"
              >
                {mail}
              </a>
            </p>
          </div>
          <div className="phone-wrapper">
            {portfolio && (
            <p className="phone">
              <span className="phone-span">Portfolio:&nbsp; </span>
                <a href={portfolio}>
                  <Image
                    width={100}
                    height={100}
                    src={"/freedi/internet-svgrepo-com.svg"}
                    alt="social-icon"
                    className="port-icon"
                  />
                </a>
            </p>
              )}
            {cv && (
              <p className="phone">
                <span className="phone-span">Download CV:&nbsp; </span>
                <a href={cv}>
                  <Image
                    width={100}
                    height={100}
                    src={"/freedi/download.svg"}
                    alt="social-icon"
                    className="port-icon"
                  />
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FCards;
