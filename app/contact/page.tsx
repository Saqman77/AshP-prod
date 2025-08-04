// "use client";
import { type SanityDocument } from "next-sanity";
import { client } from "../sanity/client";
import "./Contact.scss";
import ContactHero from "../components/contact/contactHero/ContactHero";
import Communities from "../components/contact/communities/Communities";
import Image from "next/image";
import { Metadata } from "next";
// import { useEffect, useState } from "react";

const CONTACTPAGE_QUERY = `*[_type == "contactPage"]{
  contactFormSection {
    headingLeft,
    headingRight,
    contactForm {
      sendButtonText,
      companyEmail,
      companyPhone,
      name {
        label,
        placeholderText,
      },
      email {
        label,
        placeholderText,
      },
      message {
        label,
        placeholderText,
      },
      phone {
        label,
        placeholderText,
      },
    },
  },
  communitiesSection {
    heading {
      text,
      icon {
        "url": asset->url
      },
    },
    communities[] {
      name,
      link
    },
  }
}`;

const options = { next: { revalidate: 120 } };

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(CONTACTPAGE_QUERY);

  const contactFormSectionData = data[0]?.contactFormSection;

  const description =
    contactFormSectionData?.headingLeft +
      contactFormSectionData?.headingRight ||
    "We are Ash P and Hira P, a sibling duo with more than two decades of experience between us";

  return {
    title: "Contact | Ash P Reads Editing Services",
    description,
    openGraph: {
      title: "Contact | Ash P Reads Editing Services",
      description,
      url: "https://ashpreads.com/contact",
      images: [
        {
          url: "https://ashpreads.com/muslim woman.svg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact | Ash P Reads Editing Services",
      description,
      images: ["https://ashpreads.com/muslim woman.svg"],
    },
  };
}

const Contact = async () => {
  const data = await client.fetch<SanityDocument[]>(CONTACTPAGE_QUERY,{}, options); 

  const contactFormSectionData = data[0]?.contactFormSection;
  const communitiesSectionData = data[0]?.communitiesSection;

  return (
    <div className="c-wrapper">
      <div className="backgear">
        <Image src={"/contact/backg.svg"} alt="" width={100} height={100} />
      </div>
      <ContactHero
        headingLeft={contactFormSectionData.headingLeft}
        headingRight={contactFormSectionData.headingRight}
        companyEmail={contactFormSectionData.contactForm.companyEmail}
        companyPhone={contactFormSectionData.contactForm.companyPhone}
        name={contactFormSectionData.contactForm.name}
        email={contactFormSectionData.contactForm.email}
        phone={contactFormSectionData.contactForm.phone}
        message={contactFormSectionData.contactForm.message}
        sendButtonText={contactFormSectionData.contactForm.sendButtonText}
      />
      <Communities heading={communitiesSectionData.heading} communities={communitiesSectionData.communities} />
    </div>
  );
};

export default Contact;
