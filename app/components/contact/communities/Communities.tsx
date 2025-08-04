import React from 'react';
import './Communities.scss';
import { Community } from './communityContent';
import Image from 'next/image';

interface ICommunitiesProps {
  heading: {
    icon: {url: string};
    text: string;
  };
  communities: {
    link: string;
    name: string;
  }[];
}

const Communities = ({heading, communities}: ICommunitiesProps) => {

  return (
    <div className="communities">
      <div className="communities-header">
        <div className="header-content">
          <Image
            width={100}
            height={100} 
            src={heading.icon.url} 
            alt="Communities Icon" 
            className="header-icon"
          />
          <h2 className="header-heading">{heading.text}</h2>
        </div>
      </div>
      
      <div className="communities-list">
        {communities && communities.map((community: Community, index: number) => (
          <a 
            key={index}
            className="community-item"
            href={community.link}
            target='_blank'
            rel="noopener noreferrer"
          >
            {community.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Communities;
