'use client';
import './Footer.scss';
import { footerContent } from './footerContent';
import { useSanityData } from "../../lib/sanityContext";
import CTA from './CTA/CTA';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";


const Footer: React.FC = () => {
  // Data from CMS
  const data = useSanityData();
  const pathname = usePathname();
  return (
    <footer className="footer">
      <CTA />
      <div className="footer__content">
        <div className="footer__heading">
          <span className="footer__heading-part1">{data.footer.headingPart1}</span>
          <span className="footer__heading-part2">{data.footer.headingPart2}</span>
        </div>
        <nav className="footer__nav">
          <ul>
            {footerContent.navigationLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  href={link.href}
                  className={`${link.href === pathname ? 'active' : ''}`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__bottom">
          <p className="footer__bottom-copyright">
            {data.footer.text}
          </p>
          <div className="footer__bottom-socials">
            {data.footer.socialLinks && data.footer.socialLinks.map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                <Image src={social.url} alt={social.alt} className="social-icon" width={40} height={40} quality={100} loading='lazy' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
