import React from 'react';
import './WishlistCard.scss';
import { CategorySection } from '../types';
import Image from 'next/image';

interface WishlistCardProps {
    type: 'compatible' | 'incompatible';
    label: string;
    labelIcon: string;
    labelColor: string;
    title: string;
    icon: string;
    fiction?: CategorySection;
    nonfiction?: CategorySection;
    allGenres?: CategorySection;
    description?: string;
    allGenresLabel?: string;
    fictionTitle?: string;
    nonfictionTitle?: string;
}

const WishlistCard: React.FC<WishlistCardProps> = ({
    type,
    label,
    labelIcon,
    labelColor,
    fiction,
    nonfiction,
    allGenres,
    description,
    allGenresLabel,
    fictionTitle,
    nonfictionTitle
}) => {
    return (
        <div className={`wishlist-card ${type}`}>
            <div className="card-header-row">
                <span className={`label-icon ${labelColor}`}>
                    <Image width={100} height={100} src={labelIcon} alt={label} className="icon-svg" quality={100} />
                </span>
                <span className={`label-text ${labelColor}`}>{label}</span>
            </div>
            {type === 'incompatible' && description && (
                <div className="card-description">{description}</div>
            )}
            {type === 'incompatible' && allGenresLabel && (
                <div className="all-genres-label">{allGenresLabel}</div>
            )}
            <div className="card-content">
                {type === 'compatible' && fiction && nonfiction && (
                    <>
                        <div className="section">
                            <div className="section-header">
                                <Image width={100} height={100} src={fiction.icon.url} alt={fiction.label ? fiction.label : ''} className="icon-svg" quality={100} />
                                <h4>{fictionTitle}</h4>
                            </div>
                            <ul className="bullets-grid">
                                {fiction.genres.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="section">
                            <div className="section-header">
                                <Image width={100} height={100} src={nonfiction.icon.url} alt={nonfiction.label ? nonfiction.label : ''} className="icon-svg" quality={100} />
                                <h4>{nonfictionTitle}</h4>
                            </div>
                            <ul className="bullets-grid">
                                {nonfiction.genres.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
                {type === 'incompatible' && allGenres && (
                    <div className="section">
                        <div className="section-header incompatible-sec">
                            {/* <Icon config={allGenres.icon} /> */}
                        </div>
                        <ul className="bullets-grid">
                            {allGenres.genres.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistCard; 