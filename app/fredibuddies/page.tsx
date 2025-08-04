// app/freedie/page.tsx
import Freedie from './Freedie';
import { client } from '../sanity/client';
import { type SanityDocument } from 'next-sanity';

const FREEDIEPAGE_QUERY = `*[_type == "freediePage"]{
  heading {
    headingLeft,
    headingRight
  },
  subHeading,
  cardText,
  storySection {
    heading,
    description[],
    image {
      "url": asset->url
    }
  },
  freedieBuddiesTitle,
  freedieBuddies[]->{
    "id": slug.current,
    name,
    eMail, 
    role,
    desc,
    imgSrc { "url": asset->url },
    links { ... },
  },
  disclaimerText[],
}`;
const options = { next: { revalidate: 120 } };

export async function generateMetadata() {
  const data = await client.fetch<SanityDocument[]>(FREEDIEPAGE_QUERY, {}, options);
  const page = data[0];
  
  const description = page?.cardText ||
    "We are Ash P and Hira P, a sibling duo with more than two decades of experience between us";

  return {
    title: "fredi Buddies | Ash P Reads Editing Services",
    description,
    openGraph: {
      title: "fredi Buddies | Ash P Reads Editing Services",
      description,
      url: "https://ashpreads.com/fredibuddies",
      images: [
        {
          url: "https://ashpreads.com/muslim woman.svg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Fredi Buddies | Ash P Reads Editing Services",
      description,
      images: ["https://ashpreads.com/muslim woman.svg"],
    },
  };
}

export default async function FreediePage() {
  const data = await client.fetch<SanityDocument[]>(FREEDIEPAGE_QUERY, {}, options);
  return <Freedie data={data[0]} />;
}
