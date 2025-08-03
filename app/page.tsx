import "./page.module.scss";
import Hero from "./components/Home/Hero/Hero";
import Results from "./components/Home/Results/Results";
import ThirdSection from "./components/Home/ThirdSection/ThirdSection";
import Wishlist from "./components/Home/Wishlist/Wishlist";
import Services from "./components/Home/Services/Services";
import Testimonial from "./components/Home/Testimonial/Testimonial";
import { type SanityDocument } from "next-sanity";
import { client } from "./sanity/client";

const HOMEPAGE_QUERY = `*[_type == "homepage"]{ 
  introduction {
    title,
    highlightedText,
    scrollDownText,
    bgImageLeft {
      "url": asset->url
    },
    bgImageRight {
      "url": asset->url
    }
  },
  results { 
    title, 
    stats[] { 
      label, 
      value, 
      icon { "url": asset->url } 
    },
    bgImage {
      "url": asset->url
    },
  },
  qualityEditing { 
    title, 
    paragraph1, 
    paragraph2, 
    image { "url": asset->url, alt } 
  },
  wishlist {
    titleMain,
    titleSub,
    titleHighlight,
    descriptionPara1,
    descriptionPara2,
    bgImage {
      "url": asset->url
    },
    wishingForTitle,
    compatibleCardTitle,
    compatibleCardIcon { "url": asset->url },
    compatibleGenres {
      fiction {
        label, 
        icon { "url": asset->url }, 
        genres[]
      },
      nonFiction {
        label, 
        icon { "url": asset->url }, 
        genres[]
      },
    },
    notWishingForTitle,
    incompatibleCardTitle,
    incompatibleCardIcon { "url": asset->url },
    incompatibleGenresDescription,
    incompatibleGenres {
      label, 
      icon { "url": asset->url }, 
      genres[]
    }
  },
  servicesSection {
    title,
    description,
    readMoreText,
    readMoreIcon {
      "url": asset->url
    },
    backText,
    servicesCards[] {
      "id": _key,
      title,
      subtitle,
      description[],
      icon {
       "url": asset->url
      },
      backgroundColor,
    },
    otherServicesCard {
      title,
      subtitle,
      description[],
      icon {
       "url": asset->url
      },
    }
  },
  partnerFeedback {
    title,
    description,
    feedbacks[] {
      feedback,
      author,
      role
    }
  },
}
`;
const options = { next: { revalidate: 30 } };

export async function generateMetadata() {
  const data = await client.fetch<SanityDocument[]>(HOMEPAGE_QUERY, {}, options);
  const { introduction, qualityEditing } = data[0];

  return {
    title: "Home | Ash P Reads Editing Services",
    description:
      introduction?.description ||
      "We are Ash P and Hira P, a sibling duo with more than two decades of experience between us",
    generator: 'Next.js',
    metadataBase: new URL('https://ashpreads.com'),
    openGraph: {
      title: "Home | Ash P Reads Editing Services",
      description:
        introduction?.description ||
        "We are Ash P and Hira P, a sibling duo with more than two decades of experience between us",
      url: "https://ashpreads.com",
      siteName: "Ash P Reads Editing Services",
      images: [
        {
          url: qualityEditing?.image?.url || "https://ashpreads.com/muslim woman.svg",
          width: 1200,
          height: 630,
          alt: "Ash P Reads Editing Services",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Home | Ash P Reads Editing Services",
      description:
        introduction?.description ||
        "We are Ash P and Hira P, a sibling duo with more than two decades of experience between us",
      images: [ qualityEditing?.image?.url || "https://ashpreads.com/muslim woman.svg"],
    },
    icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
  },
  };
}


const Home = async () => {
  const data = await client.fetch<SanityDocument[]>(
    HOMEPAGE_QUERY,
    {},
    options
  );
  const { introduction, results, qualityEditing, wishlist, servicesSection, partnerFeedback } =
    data[0];
  return (
    <div className="home">
      <Hero
        heading={introduction.title}
        contactButtonText={introduction.contactButtonText}
        scheduleButtonText={introduction.scheduleButtonText}
        wordsToHighlight={introduction.highlightedText}
        scrollDownText={introduction.scrollDownText}
      />
      <Results heading={results.title} cards={results.stats} />
      <ThirdSection
        heading={qualityEditing.title}
        paragraph1={qualityEditing.paragraph1}
        paragraph2={qualityEditing.paragraph2}
        image={qualityEditing.image.url}
      />
      <Wishlist
        headingMain={wishlist.titleMain}
        headingSub={wishlist.titleSub}
        headingHighlight={wishlist.titleHighlight}
        descriptionPara1={wishlist.descriptionPara1}
        descriptionPara2={wishlist.descriptionPara2}
        compatibleGenres={wishlist.compatibleGenres}
        incompatibleGenres={wishlist.incompatibleGenres}
        wishingForTitle={wishlist.wishingForTitle}
        compatibleCardTitle={wishlist.compatibleCardTitle}
        compatibleCardIcon={wishlist.compatibleCardIcon.url}
        notWishingForTitle={wishlist.notWishingForTitle}
        incompatibleCardTitle={wishlist.incompatibleCardTitle}
        incompatibleCardIcon={wishlist.incompatibleCardIcon.url}
        incompatibleGenresDescription={wishlist.incompatibleGenresDescription}
      />
      <Services
        title={servicesSection.title}
        description={servicesSection.description}
        readMoreText={servicesSection.readMoreText}
        readMoreIcon={servicesSection.readMoreIcon}
        backText={servicesSection.backText}
        servicesCards={servicesSection.servicesCards}
      />
      <Testimonial heading={partnerFeedback.title} description={partnerFeedback.description} feedbacks={partnerFeedback.feedbacks} />
    </div>
  );
};

export default Home;
