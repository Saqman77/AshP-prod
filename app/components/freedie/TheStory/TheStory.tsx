import React from "react";
import "./TheStory.scss";
// import { theStoryContent } from "./TheStoryContent";
import Image from "next/image";

interface IStoryProps {
  heading: string;
  image: { url: string };
  description: string[];
}

const TheStory = ({ heading, image, description }: IStoryProps) => {
  return (
    <div className="the-story-wrapper">
      <div className="the-story-container">
        <div className="the-story-image-container">
          <Image width={800} height={1000} src={image.url} alt="The Story" />
        </div>
        <div className="the-story-content">
          <h2 className="the-story-heading">{heading}</h2>
          <div>
            {description.map((paragraph, index) => (
              <p key={index} className="the-story-description">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheStory;
