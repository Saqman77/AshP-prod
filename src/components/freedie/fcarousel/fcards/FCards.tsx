import './fcards.scss'
import FB from '../../../../assets/freedi/Facebook.png'
import INSTA from '../../../../assets/freedi/insta.png'
import X from '../../../../assets/freedi/X.png'
import LINK from '../../../../assets/freedi/linked.png'
import SPOTIFY from '../../../../assets/freedi/Spotify.png'
import TREE from '../../../../assets/freedi/linktree-logo-icon.svg'
import YT from '../../../../assets/freedi/youtube.png'
import SC from '../../../../assets/freedi/soundcloud.svg'
import BANDC from '../../../../assets/freedi/bandcamp.png'
import GIT from '../../../../assets/freedi/github.png'
import { useEffect, useRef } from 'react'

interface FCardsProps {

  id: string;

  img: string;

  desc: string;

  role: string;

  mail: string;

  phone: string;

  fb: string;

  insta: string;

  x: string;

  link: string;

  spotify: string;

  tree: string;

  yt: string;

  sc: string;
  git: string;
  bandC: string;
  name: string;

}



const FCards: React.FC<FCardsProps> = (
  { id,
    img,
    desc,
    role,
    mail,
    phone,
    fb,
    insta,
    x,
    link,
    spotify,
    tree,
    yt,
    sc,
    bandC,
    name,
    git
  }) => {

    const carouselRef = useRef<HTMLDivElement | null>(null);

      useEffect(() => {
        const carouselElement = carouselRef.current;
    
        if (carouselElement) {
          carouselElement.classList.remove("active"); // Remove the class
          void carouselElement.offsetWidth; // Trigger reflow to restart animation
          carouselElement.classList.add("active"); // Reapply the class
        }
      }, [id]);
  return (
    <div className='f-card' id={id} ref={carouselRef}>
       <div className="card-top">
        <div className="left-img"
        style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize:'100% 100%'}}
        >
          <img src={img} alt="profile-photo" className='l-img'/>
        </div>
        <div className="right-main">
            <div className="right-head">
            <p className='main-name'>{name}</p>
            </div>
            <div className="right-role">
              <p className='main-role'>{role}</p>
            </div>
            <div className="right-desc">
              <p className='r-desc'>
                {desc}
              </p>
            </div>
            <div className="socials">
                {fb === ''? (<></>) : (<a href={fb} className='f-social'><img src={FB} alt="social-icon" /></a>) }
                {insta === ''? (<></>) : (<a href={insta} className='f-social'><img src={INSTA} alt="social-icon" /></a>) }
                {x === ''? (<></>) : (<a href={x} className='f-social'><img src={X} alt="social-icon" /></a>) }
                {link === ''? (<></>) : (<a href={link} className='f-social'><img src={LINK} alt="social-icon" /></a>) }
                {spotify === ''? (<></>) : (<a href={spotify} className='f-social'><img src={SPOTIFY} alt="social-icon" /></a>) }
                {tree === ''? (<></>) : (<a href={tree} className='f-social'><img src={TREE} alt="social-icon" /></a>) }
                {yt === ''? (<></>) : (<a href={yt} className='f-social'><img src={YT} alt="social-icon" /></a>) }
                {sc === ''? (<></>) : (<a href={sc} className='f-social'><img src={SC} alt="social-icon" /></a>) }
                {bandC === ''? (<></>) : (<a href={bandC} className='f-social'><img src={BANDC} alt="social-icon" /></a>) }
                {git === ''? (<></>) : (<a href={git} className='f-social'><img src={GIT} alt="social-icon" /></a>) }
              </div>
        </div>
       </div>
       <div className="card-bottom">
        <div className="f-contact">
          <div className="mail-wrapper"><p className='mail'><span className='mail-span'>E-mail:&nbsp; </span>{mail}</p></div>
          <div className="phone-wrapper"><p className='phone'><span className='phone-span'>phone:&nbsp; </span>{phone}</p></div>
        </div>
       </div>
    </div>
  )
}

export default FCards