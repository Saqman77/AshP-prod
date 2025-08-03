import { useEffect, useRef, useState } from "react";
// import { freedie } from '../freedyContent'
import FCards from "./fcards/FCards";
import "./fcarousel.scss";
import Image from "next/image";
interface CarouselProps {
  startIndex: number;
  isVisible: boolean;
  onClose: () => void;
  freedie: {
    id: string;
    name: string;
    imgSrc: {url: string};
    desc: string;
    role: string;
    eMail: string;
    links: {
      fb: string;
      insta: string;
      x: string;
      linkedIn: string;
      spotify: string;
      linktree: string;
      youtube: string;
      soundcloud: string;
      bandcamp: string;
      github: string;
      behance: string;
      dribble: string;
      portfolio: string;
      cv: string;
    };
    shout: string;
  }[];
}

const FCarousel: React.FC<CarouselProps> = ({
  startIndex,
  isVisible,
  onClose,
  freedie,
}) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  if (!isVisible) return null;

  return (
    <div className={`pop-up`} ref={carouselRef}>
      <div className="pop-wrapper">
        <div className="p-heading">
          <h2 className="pop-name">{freedie[currentIndex].name}</h2>
          <div className="close" onClick={() => onClose()}>
            Back
          </div>
        </div>
        <div className="p-wrapper">
          <div className="pop-carousel">
            {/* {freedie.map((list) => {
                return( */}
            <FCards
              id={freedie[currentIndex].id}
              name={freedie[currentIndex].name}
              img={freedie[currentIndex].imgSrc.url}
              desc={freedie[currentIndex].desc}
              role={freedie[currentIndex].role}
              mail={freedie[currentIndex].eMail}
              portfolio={freedie[currentIndex].links?.portfolio}
              fb={freedie[currentIndex].links?.fb}
              insta={freedie[currentIndex].links?.insta}
              x={freedie[currentIndex].links?.x}
              link={freedie[currentIndex].links?.linkedIn}
              spotify={freedie[currentIndex].links?.spotify}
              tree={freedie[currentIndex].links?.linktree}
              yt={freedie[currentIndex].links?.youtube}
              sc={freedie[currentIndex].links?.soundcloud}
              bandC={freedie[currentIndex].links?.bandcamp}
              git={freedie[currentIndex].links?.github}
              behance={freedie[currentIndex].links?.behance}
              dribble={freedie[currentIndex].links?.dribble}
              shout={freedie[currentIndex].shout}
              // name={freedie[currentIndex].name}
              cv={freedie[currentIndex].links?.cv}
            />
            {/* )
              })} */}
          </div>
        </div>
        <div className="pagers">
          <div className={`p-left ${currentIndex === 0 ? "disabled" : ""}`}>
            <div
              className="left-name"
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev > 0 ? prev - 1 : freedie.length - 1
                )
              }
            >
              <p className="p-name">
                {freedie.length > 0 && currentIndex > 0
                  ? freedie[currentIndex - 1].name
                  : freedie.length > 0
                  ? freedie[0].name
                  : "No name available"}
              </p>
              <Image
                width={100}
                height={100}
                src={
                  freedie.length > 0 && currentIndex > 0
                    ? freedie[currentIndex - 1].imgSrc.url
                    : freedie.length > 0
                    ? freedie[1].imgSrc.url
                    : "No img available"
                }
                alt="prev-prof"
              />
            </div>
          </div>
          <div
            className={`p-right ${
              currentIndex === freedie.length - 1 ? "disabled" : ""
            }`}
          >
            <div
              className="right-name"
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev < freedie.length - 1 ? prev + 1 : 0
                )
              }
            >
              <Image
                width={100}
                height={100}
                src={
                  freedie.length > 0 && currentIndex < freedie.length - 1
                    ? freedie[currentIndex + 1].imgSrc.url
                    : freedie[0].imgSrc.url
                }
                alt="next-prof"
              />
              <p className="p-name">
                {freedie.length > 0 && currentIndex < freedie.length - 1
                  ? freedie[currentIndex + 1].name
                  : freedie[0].name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FCarousel;
