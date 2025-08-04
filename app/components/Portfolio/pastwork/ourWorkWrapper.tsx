'use client';
import { useState } from "react";
import OurWork from "./ourWork"

interface WrapperProps {
  heading: string;
 services: {
    service: string;
    id: string;
    genres: {
      Fiction: {
        name: string;
        projects: {
          name: string;
          link: string;
        }[];
      }[];
      Nonfiction: {
        name: string;
        projects: {
          name: string;
          link: null;
        }[];
      }[];
    };
  }[]
}

export default function OurWorkWrapper({ heading, services }: WrapperProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <OurWork
      heading={heading}
      services={services}
      startIndex={startIndex}
      isVisible={isVisible}
      onClose={() => setIsVisible(false)}
      onItemClick={(i) => {
        setStartIndex(i);
        setIsVisible(true);
      }}
    />
  );
}
