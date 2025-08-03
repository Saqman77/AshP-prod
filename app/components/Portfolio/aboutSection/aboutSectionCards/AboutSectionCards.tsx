import React from "react";
// import { aboutSectionCardsContent } from './AboutSectionCardsContent';
import "./aboutSectionCards.scss";
import Image from "next/image";

interface AboutSectionCardsProps {
  spark: string;
  cards: {
    paragraph: string;
    highlightedText?: string;
    image1: {url: string};
    image2?: {url: string};
  }[];
}

// interface CardContent {
//     paragraph: string;
//     highlightedText?: string;
//     image1:string;
//     image2?: string;
// }

// interface Card {
//     content: CardContent;
//     className: string;
// }

const AboutSectionCards = ({ spark, cards }: AboutSectionCardsProps) => {
  // const cards: Card[] = [
  //     { content: aboutSectionCardsContent.firstCard, className: 'firstCard' },
  //     { content: aboutSectionCardsContent.secondCard, className: 'secondCard' },
  //     { content: aboutSectionCardsContent.thirdCard, className: 'thirdCard' }
  // ];

  return (
    <div className="aboutSectionCards">
      {cards.map((card, index) => (
        <div key={index} className={`card`}>
          <div className="sparkle big">
            <Image width={100} height={100} src={spark} alt="Sparkle Graphic" />
          </div>
          <p>
            {card.highlightedText ? (
              <>
                <span className="highlighted">{card.highlightedText}</span>
                {card.paragraph.replace(card.highlightedText, "")}
              </>
            ) : (
              card.paragraph
            )}
          </p>
          <div className="imageContainer">
            {card.image1 && card.image2 ? (
              <>
                <div className="circularImage left">
                  <Image
                    width={200}
                    height={200}
                    src={card.image1.url}
                    alt="Card Circular Image"
                  />
                </div>
                <div className="circularImage right">
                  {card.image2 && (
                    <Image
                      width={200}
                      height={200}
                      src={card.image2.url}
                      alt="Card Circular Image"
                    />
                  )}
                </div>
              </>
            ) : (
              <div className="circularImage">
                <Image
                  width={200}
                  height={200}
                  src={card.image1.url}
                  alt="Card Circular Image"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutSectionCards;
