import React from 'react';
// import { resultsContent } from './resultsContent';
import './Results.scss';
import Image from 'next/image';

interface IResultsProps {
    heading: string;
    cards: {
        label: string;
        value: string;
        icon?: {
            url: string;
        };
    }[];
}

const Results = ({heading, cards}: IResultsProps) => {
    return (
        <section className="results-section">
            <div className="spark-wrapper">
                <Image src={"/home/resultSpark.svg"} alt="spark-graphic" width={100} height={100} quality={100} />
            </div>
            <h2 className="results-heading">{heading}</h2>
            <div className="results-cards">
                {cards && cards.map((card, index) => (
                    <div key={index} className="result-card">
                        <div className="card-top">
                            <div className="card-icon">
                                {card.icon && <Image src={card.icon.url} alt="" className="icon-svg" width={100} height={100} quality={100} loading='lazy' />}
                            </div>
                            <h3 className="card-title">{card.value}</h3>
                        </div>
                        <p className="card-description">{card.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Results;
