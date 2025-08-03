'use client'
import "./schedule.scss";
import Image from "next/image";
import { useSanityData } from "../../lib/sanityContext";

const Schedule = () => {
  const data = useSanityData();
  return (
    <a href="https://calendly.com/ashpreads" className="schedule-button">
      <button>
        {" "}
        <div className="contact-us-text">
          <p>{data.scheduleButton?.text}</p>
        </div>
        <div className="contact-us-arrow">
          {data.scheduleButton && (
            <Image
              src={data.scheduleButton?.icon.url}
              alt="right-arrow"
              width={20}
              height={20}
              priority
            />
          )}
        </div>
      </button>
    </a>
  );
};

export default Schedule;
