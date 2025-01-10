import { Link } from "react-router-dom";
import './ContactUs.scss'

const ContactUs = () => {
  return (
    <Link to="/contact" className="navigate-button">
      <button>Get in touch!</button>
    </Link>
  );
};

export default ContactUs;