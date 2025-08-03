'use client';

import ContactUs from '../../get-in-touch-button/ContactUs';
import Schedule from '../../schedule/Schedule';
import './Hero.scss';
// import { heroContent } from './heroContent';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface IHeroProps {
    heading: string;
    contactButtonText: string;
    scheduleButtonText: string;
    wordsToHighlight: string[];
    scrollDownText: string;
}

const Hero = ({heading, wordsToHighlight, scrollDownText}: IHeroProps) => {
    const [mainHeading, setMainHeading] = useState<React.JSX.Element[]>();

    const highlightWords = (text: string) => {
        const parts = text?.split(new RegExp(`(${wordsToHighlight?.join('|')})`, 'gi'));
        return parts.map((part, index) => {
            if (wordsToHighlight.includes(part.toLowerCase())) {
                return (
                    <span key={index} className="highlight-wrapper">
                        <span className="highlight-bg"></span>
                        <span className="highlight">{part}</span>
                    </span>
                );
            }
            return <span key={index} className="normal">{part}</span>;
        });
    };
    
    useEffect(() => {
        // Highlight words
        const highlightedText = highlightWords(heading);
        setMainHeading(highlightedText);
    }, [heading])

    // Message box animation state
    const [msgStage, setMsgStage] = useState<'hidden' | 'icon' | 'expand' | 'retract'>('hidden');

    useEffect(() => {
        // Animation sequence: icon -> expand -> retract -> hidden
        setMsgStage('icon');
        const expandTimeout = setTimeout(() => setMsgStage('expand'), 300); // show icon, then expand
        const retractTimeout = setTimeout(() => setMsgStage('retract'), 2300); // show message, then retract
        const hideTimeout = setTimeout(() => setMsgStage('hidden'), 4000); // hide after total 4s
        return () => {
            clearTimeout(expandTimeout);
            clearTimeout(retractTimeout);
            clearTimeout(hideTimeout);
        };
    }, []);

    return (
        <div className="hero-container">
            {/* Animated Message Box */}
            <div
                className={`hero-message-box ${msgStage} left`}
                aria-live="polite"
                style={{ pointerEvents: 'none' }}
            >
                <span className="hero-message-icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14" cy="14" r="14" fill="#C2BFD6" />
                        <path d="M14 8V15" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="14" cy="19" r="1" fill="#fff" />
                    </svg>
                </span>
                <span className="hero-message-text">Accessibility Enabled!</span>
            </div>
            <div className="hero-main">
                <div className="content-wrapper">
                    <h1>{mainHeading}</h1>
                    <div className="cta-wrapper">
                        <ContactUs />
                        <Schedule />
                    </div>
                    <div className="hero-box">
                        <p className="scroll-down">{scrollDownText}</p>
                        <div className="arrow-wrapper">
                            <Image src={"/home/arrow-down.svg"} alt="down-arrow" className="down-arrow" width={100} height={100} />
                        </div>
                    </div>
                </div>
                <div className="hero-bg">
                    <div className="top-left">
                        <Image src={"/home/pinkvector.svg"} alt="top-left" width={218} height={225} priority />
                    </div>
                    <div className="bottom-right">
                        <Image src={"/home/purplevector.svg"} alt="bottom-right" width={261} height={261} priority />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero; 