import React from "react";
import { contactHeroContent } from "./contactHeroContent";
import "./contactHero.scss";
import ContactForm from "./contactForm/ContactForm";
import ContactBar from "./contactBar/ContactBar";
import Image from "next/image";

interface IContactHeroProps {
  headingLeft: string;
  headingRight: string;
  sendButtonText: string;
  companyEmail: string;
  companyPhone: string;
  name: {
    label?: string;
    placeholderText?: string;
  };
  email: {
    label?: string;
    placeholderText?: string;
  };
  message: {
    label?: string;
    placeholderText?: string;
  };
  phone: {
    label?: string;
    placeholderText?: string;
  };
}

const ContactHero = ({headingLeft, headingRight, companyEmail, companyPhone, sendButtonText, name, email, message, phone}: IContactHeroProps) => {
  return (
    <div className="c-hero-container">
      <div className="fanner">
        <Image
          width={100}
          height={100}
          src={"/contact/contactfan.svg"}
          alt=""
        />
      </div>
      <div className="c-heading">
        {contactHeroContent.icon && (
          <Image
            width={100}
            height={100}
            src={contactHeroContent.icon}
            alt={contactHeroContent.iconAlt || "Heading Icon"}
            className="c-heading-icon"
          />
        )}
        <h1 className="c-heading-title">
          <span style={{ color: "#4B3B74" }}>
            {headingLeft}
          </span>
          <span style={{ color: "#C9549D" }}>
            {headingRight}
          </span>
        </h1>
      </div>
      <div className="c-form-wrapper">
        <ContactForm sendButtonText={sendButtonText} name={name} email={email} message={message} phone={phone} />
        <ContactBar companyEmail={companyEmail} companyPhone={companyPhone} />
      </div>
    </div>
  );
};

export default ContactHero;
