"use client";
import { type SanityDocument } from "next-sanity";
import { client } from "../sanity/client";
import "./Contact.scss";
import ContactHero from "../components/contact/contactHero/ContactHero";
import Communities from "../components/contact/communities/Communities";
import Image from "next/image";
import { useEffect, useState } from "react";

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

// export async function generateMetadata() {
//   const data = await client.fetch<SanityDocument[]>(CONTACTPAGE_QUERY, {}, options);
//   const { contactFormSection } = data[0];

//   return {
//     title: "Contact | Ash P Reads Editing Services",
//     description:
//       contactFormSection?.headingLeft + contactFormSection?.headingRight ||
//       "Let's Talk! We are always ready to help you and answer your",
//     generator: 'Next.js',
//     metadataBase: new URL('https://ashpreads.com/contact'),
//     openGraph: {
//       title: "Contact | Ash P Reads Editing Services",
//       description:
//         contactFormSection?.headingLeft + contactFormSection?.headingRight  ||
//         "Let's Talk! We are always ready to help you and answer your",
//       url: "https://ashpreads.com/contact",
//       siteName: "Ash P Reads Editing Services",
//       images: [
//         {
//           url: contactFormSection?.headingLeft + contactFormSection?.headingRight  || "https://ashpreads.com/muslim woman.svg",
//           width: 1200,
//           height: 630,
//           alt: "Ash P Reads Editing Services",
//         },
//       ],
//       locale: "en_US",
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: "Contact | Ash P Reads Editing Services",
//       description:
//         contactFormSection?.headingLeft + contactFormSection?.headingRight ||
//         "Let's Talk! We are always ready to help you and answer your",
//       images: [ "https://ashpreads.com/muslim woman.svg"],
//     },
//     icons: {
//     icon: [
//       { url: '/favicon.ico' },
//       { url: '/favicon.svg', type: 'image/svg+xml' },
//       { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
//       { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
//       { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' }
//     ],
//     apple: [
//       { url: '/apple-touch-icon.png' }
//     ],
//   },
//   };
// }

const options = { next: { revalidate: 120 } };

const data = await client.fetch<SanityDocument[]>(
  CONTACTPAGE_QUERY,
  {},
  options
);

const Contact = () => {
  const [contactFormSectionData, setContactFormSection] = useState(
    data[0].contactFormSection
  );
  const [communitiesSectionData, setCommunitiesSection] = useState(
    data[0].communitiesSection
  )

  useEffect(() => {
    if (data) {
      setContactFormSection(data[0].contactFormSection);
      setCommunitiesSection(data[0].communitiesSection);
    }
  }, [data]);

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
