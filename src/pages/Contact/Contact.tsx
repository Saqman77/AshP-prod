import './Contact.scss'
import FB from '../../assets/freedi/Facebook.png'
import INSTA from '../../assets/freedi/insta.png'
import X from '../../assets/freedi/X.png'
import LINK from '../../assets/freedi/linked.png'

const Contact = () => {
  return (
    <div className="c-wrapper">
      <div className="c-top">
        <div className="c-left">
          <p className='c-head'>
            Get in <span className='c-colour'>touch!</span>
          </p>
        </div>
        <div className="c-right">
          <p className="c-desc">
            We are always read to help you and answer your questions!
          </p>
        </div>
      </div>
      <div className="c-bottom">
        <p className='contact c-colour'>
          Contact:
        </p>
        <div className='contact-info'>
          <div className='c-list-wrapper'>
            <div className="list-heading">
              <p className='lists-head'>        
                Contact
              </p>
            </div>
            <ul className="c-info">
              <li><span className='tag'>Phone:</span> +92 000-0000</li>
              <li><span className='tag'>Email:</span> example@example.com</li>
            </ul>
          </div>
            <div className='location-wrapper'>
              <div className="list-heading"><p className='lists-head'>Location</p></div>
              <ul className="c-location">
                <li><span className='tag'>Location:</span> Karachi, Pakistan</li>
                <li><span className='tag'>Location:</span> Karachi, Pakistan</li>
              </ul>
            </div>
          <ul className="c-socials">
            <li><a href=""><img src={FB} alt="" className='social' /></a></li>
            <li><a href=""><img src={INSTA} alt="" className='social' /></a></li>
            <li><a href=""><img src={X} alt="" className='social' /></a></li>
            <li><a href=""><img src={LINK} alt="" className='social' /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact