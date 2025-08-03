import React from 'react';
import styles from './FreedieHero.module.scss';
// import { freedieHeroContent } from './content';
import Image from 'next/image';

interface IFreedieHeroProps {
    heading: {
        headingLeft: string;
        headingRight: string;
    };
    subHeading: string;
    cardText: string;
}

const FreedieHero = ({ heading, subHeading, cardText}: IFreedieHeroProps) => {
    return (
        <div className={styles.freedieHero}>
             <div className={`${styles.flower} ${styles.small} ${styles.left}`}>
                <Image src={"/freedi/freedieFlowers.svg"} alt="bg-flower" width={100} height={100} />
            </div>
            <div className={`${styles.flower} ${styles.small} ${styles.right}`}>
                <Image src={"/freedi/freedieFlowers.svg"} alt="bg-flower" width={100} height={100} />
            </div>
            <div className={`${styles.flower} ${styles.small} ${styles.bottom}`}>
                <Image src={"/freedi/freedieFlowers.svg"} alt="bg-flower" width={100} height={100} />
            </div>
            <h2 className={styles.mainHeading}>
                {heading.headingLeft}
                <span className={styles.highlighted}>
                    <span className={styles.highlightedText}>
                        {heading.headingRight}
                    </span>
                    <span className={styles.highlightedBg}></span>
                </span>
            </h2>
            <h3 className={styles.subHeading}>
                {subHeading}
            </h3>
            <div className={styles.card}>
                <p className={styles.cardText}>
                    {cardText}
                </p>
            </div>
            <div className={`${styles.flower} ${styles.medium}`}>
                <Image width={1000} height={100} src={"/freedi/freedieFlowers.svg"} alt="bg-flower" />
            </div>
        </div>
    );
};

export default FreedieHero; 