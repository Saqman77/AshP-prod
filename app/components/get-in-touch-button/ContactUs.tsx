"use client";
import Link from "next/link";
import "./ContactUs.scss";
import { useThemeContext } from "../../utils/ThemeContextProvider";
import { useSanityData } from "../../lib/sanityContext";
import Image from "next/image";

const ContactUs = () => {
  const data = useSanityData();
  const { closeMenu } = useThemeContext();
  return (
    <Link href="/contact" className="navigate-button" onClick={closeMenu}>
      <button className="contact-us-button">
        <div className="contact-us-text">
          <p>{data.contactButton?.text}</p>
        </div>
        <div className="contact-us-arrow">
          {data.contactButton && (
            <Image
              src={data.contactButton?.icon.url}
              alt="right-arrow"
              width={20}
              height={20}
              priority
            />
          )}
        </div>
      </button>
    </Link>
  );
};

export default ContactUs;
