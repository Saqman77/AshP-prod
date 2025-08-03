import Image from 'next/image';
import ContactUs from '../../get-in-touch-button/ContactUs';
import { useSanityData } from "../../../lib/sanityContext";
import Schedule from '../../schedule/Schedule';
import './CTA.scss';
// import { ctaContent } from './ctaContent';

const CTA: React.FC = () => {
    const ctaData = useSanityData().callToAction;
    const splitHeading = (text: string) => {
        // Split the text into words
        const words = text.split(' ');
        // Get the last word (which will be highlighted)
        const highlightedWord = words.pop();
        // Join the remaining words for the main text
        const mainText = words.join(' ');

        return {
            mainText,
            highlightedWord
        };
    };

    const { mainText, highlightedWord } = splitHeading(ctaData.title);

    return (
        <div className="cta-container">
            <div className="lets-svg">
                <Image src={ctaData.bgImageLeft.url} alt="lets Svg" width={364} height={317} />
            </div>
            <div className="together-svg">
                <Image src={ctaData.bgImageRight.url} alt="together Svg" width={364} height={317} />
            </div>
            <div className="cta-content">
                <h2>
                    <span className="main-text">{mainText}</span>{' '}
                    <span className="highlight-together">
                        {highlightedWord}
                        <span className="highlight-bg-together"></span>
                    </span>
                </h2>
                <p>{ctaData.description}</p>
                <div className="cta-wrapper">
                    <ContactUs />
                    <Schedule />
                </div>
            </div>
        </div>
    );
};

export default CTA;