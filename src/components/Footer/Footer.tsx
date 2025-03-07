import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '/src/assets/header/toplogo (2).svg';
// import logo1 from '../../assets/footer/BIPOC-Chapter-300x300.png';
// import logo2 from '../../assets/footer/ETC+Member+Circle.png';
// import logo3 from '../../assets/footer/pro_reader.png';
// import logo4 from '../../assets/footer/Simple_Logo_ALT.png';
// import logo5 from '../../assets/footer/R&R logo final-03 (1).png';
import linkeding from '/src/assets/footer/newlinkedin.svg'
import instagram from '/src/assets/footer/newInsta.svg'
// import twitter from '/src/assets/footer/twitter.png'
import FB from '/src/assets/footer/newFacebook.svg'
import Blue from '/src/assets/footer/Bluesky_Logo.svg.png'
// import AI from '/src/assets/footer/Graduate Website Badge_AI for Editors.png'
import SUB from '/src/assets/footer/substack-icon.svg'
// import favR from '/src/assets/footer/favorited_reviews.png'
import threads from '/src/assets/footer/threads-app-icon.png'
import ContactUs from '../get-in-touch-button/ContactUs';
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="gear-container">
        <svg width="374" height="374" viewBox="0 0 374 374" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M204 11.4006C211.5 -7.09944 239 -1.59943 238.9 18.3006C238.8 34.5006 258.5 42.7006 269.9 31.1006C283.9 16.9006 307.2 32.5006 299.4 50.8006C293.1 65.8006 308.1 80.8006 323.1 74.5006C341.5 66.7006 357 90.0006 342.8 104.001C331.2 115.401 339.4 135.101 355.6 135.001C375.5 134.901 381 162.401 362.5 169.901C347.4 176.001 347.4 197.301 362.5 203.401C381 210.901 375.5 238.401 355.6 238.301C339.4 238.201 331.2 257.901 342.8 269.301C357 283.301 341.4 306.601 323.1 298.801C308.1 292.501 293.1 307.501 299.4 322.501C307.2 340.901 283.9 356.401 269.9 342.201C258.5 330.601 238.8 338.801 238.9 355.001C239 374.901 211.5 380.401 204 361.901C197.9 346.801 176.6 346.801 170.5 361.901C163 380.401 135.5 374.901 135.6 355.001C135.7 338.801 116 330.601 104.6 342.201C90.6002 356.401 67.3002 340.801 75.1002 322.501C81.4002 307.501 66.4002 292.501 51.4002 298.801C33.0002 306.601 17.5002 283.301 31.7002 269.301C43.3002 257.901 35.1002 238.201 18.9002 238.301C-0.999825 238.401 -6.49983 210.901 12.0002 203.401C27.1002 197.301 27.1002 176.001 12.0002 169.901C-6.49983 162.401 -0.999825 134.901 18.9002 135.001C35.1002 135.101 43.3002 115.401 31.7002 104.001C17.5002 90.0006 33.1002 66.7006 51.4002 74.5006C66.4002 80.8006 81.4002 65.8006 75.1002 50.8006C67.3002 32.4006 90.6002 16.9006 104.6 31.1006C116 42.7006 135.7 34.5006 135.6 18.3006C135.5 -1.59943 163 -7.09944 170.5 11.4006C176.6 26.5006 197.9 26.5006 204 11.4006Z" fill="white"/>
        </svg>
      </div>
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <Link to="/" className='reads'>
            <img src={logo} alt="main-logo" className="main-logo" />
          </Link>
          {/* <div className='members'>
            <p className='head-members'>
              Memberships
            </p>
            <div className='member'>
              <a href="https://www.the-efa.org/chapters/bipoc" className='logos'><img src={logo1} alt="" /></a>
              <a href="https://www.editorsteaclub.org" className='logos'><img src={logo2} alt="" /></a>
              <a href="https://www.netgalley.com/member/profile" className='logos'><img src={logo3} alt="" /></a>
              <a href="https://www.indieauthorconnect.com" className='logos'><img src={logo4} alt="" /></a>
              <a href="https://reviseresub.com/" className='logos'><img src={logo5} alt="" /></a>
              <a href="https://www.aiforeditors.com/" className='logos'><img src={AI} alt="" /></a>
              <a href="https://www.aiforeditors.com/" className='logos'><img src={AI} alt="" /></a>
            </div>
          </div> */}
        </div>
        {/* Navigation Links */}
        <nav className="footer-nav">
          <ul>
            <li>
              <Link to="/"
                
              >Home</Link>
            </li>
            <li>
              <Link to="/about"
                
              >About</Link>
            </li>
            <li>
              <Link to="/fredibuddies"
                
              >FrEdiBuddies</Link>
            </li>
            <li>
              <Link to="/contact"
                
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="footer-social">
          <div className="footer-contact">
          <p className='head-Contact'>
            {/* Contact Us */}
          </p>
          <ContactUs/>
          </div>
          <div className='social-container'>
            <p className='head-socials'>
              Follow Us
            </p>
            <ul>
              <li>
                <a href="https://www.facebook.com/AshPReads" target="_blank" rel="noopener noreferrer" className='social'>
                  <img src={FB} alt="facebook-logo" className='social-img' />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ashpreads" target="_blank" rel="noopener noreferrer" className='social'>
                  <img src={instagram} alt="instagram-logo" className='social-img' />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ashpreads/" target="_blank" rel="noopener noreferrer" className='social'>
                  <img src={linkeding} alt="linkedin-logo" className='social-img' />
                </a>
              </li>
              <li>
                <a href="https://www.threads.net/@ashpreads" target="_blank" rel="noopener noreferrer" className='social'>
                  <img src={threads} alt="threads-logo" className='social-img' />
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/ashpreads.bsky.social" target="_blank" rel="noopener noreferrer" className='social'>
                  <img src={Blue} alt="Blue-logo" className='social-img' />
                </a>
              </li>
              <li>
                <a href="https://ashpreads.substack.com?r=3z9e8q&utm_medium=ios" target="_blank" rel="noopener noreferrer" className='social'>
                  <img src={SUB} alt="Blue-logo" className='social-img' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className='copyright'>
            © {new Date().getFullYear()}  Ash P Reads Editing Services. All Rights Reserved. Designed & Developed by <strong>Saqlain&nbsp;Haider.</strong> Illustrations by <strong>Amna&nbsp;Ali</strong>.
       </p>
      </div>

    </footer>
  );
};

export default Footer;
