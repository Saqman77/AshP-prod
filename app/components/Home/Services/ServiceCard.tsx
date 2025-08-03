'use client';
import React, { useState } from 'react';
import { ServiceCard as ServiceCardType } from './servicesCardsContent';
import styles from './ServiceCard.module.scss';
import Image from 'next/image';

interface ServiceCardProps {
    service: ServiceCardType;
    readMoreText: string;
    readMoreIcon: { url: string };
    backText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, readMoreIcon, readMoreText, backText }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);

    const handleFlip = () => {
        setIsFlipping(true);
        setIsFlipped(!isFlipped);
        setTimeout(() => {
            setIsFlipping(false);
        }, 300); // Match the flip transition duration
    };

    return (
        <div className={styles.cardContainer}>
            <div className={`${styles.card} ${isFlipped ? styles.flipped : ''} ${isFlipping ? styles.flipping : ''}`}>
                {/* Front of card */}
                <div className={styles.cardFront} style={{ backgroundColor: service.backgroundColor }}>
                    <div className={styles['serv-header']}>
                        <div className={styles.iconContainer}>
                            <Image width={128} height={128} src={service.icon.url} alt={service.title} className={styles.icon} />
                        </div>
                        <div className={styles['s-header-text']}>
                            <h3 className={styles.title}>{service.title}</h3>
                            <p className={styles.subtitle}>{service.subtitle}</p>
                        </div>
                    </div>
                    <button className={styles.readMore} onClick={handleFlip}>
                        {readMoreText}
                        <Image width={24} height={24} src={readMoreIcon.url} alt="" aria-hidden="true" className={styles.readMoreIcon} />
                    </button>
                </div>

                {/* Back of card */}
                <div className={styles.cardBack} style={{ backgroundColor: service.backgroundColor }}>
                    <div className={styles.description}>
                        {service.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <button className={styles.flipBack} onClick={handleFlip}>
                        {backText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard; 