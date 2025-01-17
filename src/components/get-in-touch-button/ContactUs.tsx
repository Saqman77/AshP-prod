import { Link } from "react-router-dom";
import './ContactUs.scss'
import { useThemeContext } from "../../utils/ThemeContextProvider";



const ContactUs = ({}) => {
   const { closeMenu } = useThemeContext();
  return (
    <Link to="/contact" className="navigate-button" onClick={closeMenu}>
      <button>Get in touch!</button>
    </Link>
  );
};

export default ContactUs;