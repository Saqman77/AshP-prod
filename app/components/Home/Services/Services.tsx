import React from 'react';
// import { servicesContent } from './servicesContent';
// import { servicesCardsContent } from './servicesCardsContent';
import ServiceCard from './ServiceCard';
import styles from './Services.module.scss';

interface IServicesProps {
    title: string;
    description: string;
    readMoreText: string;
    readMoreIcon: { url: string };
    backText: string;
    servicesCards: {
        id: string;
        title: string;
        subtitle: string;
        description: string[];
        icon: { url: string };
        backgroundColor: string;
    }[];
}

const Services = ({title, description, readMoreText, readMoreIcon, backText, servicesCards}: IServicesProps) => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.header}>
                <h2 className={styles.heading}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>
            
            <div className={styles.cardsContainer}>
                {servicesCards.map((service) => (
                    <ServiceCard key={service.id} service={service} readMoreText={readMoreText} readMoreIcon={readMoreIcon} backText={backText}  />
                ))}
            </div>
        </section>
    );
};

export default Services; 