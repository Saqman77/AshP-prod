import ContactUs from '../../get-in-touch-button/ContactUs';
import Schedule from '../../schedule/Schedule';
import ServiceParallaxe from '../serviceParallaxe/serviceParallaxe';
import './cards.scss';
import flip from '/src/assets/home/uis_flip-v.png';
import { Suspense, useState, forwardRef } from 'react';

type Props = {
  id: string;
  head: string;
  backGround: string | number | undefined;
  cardImg: string;
  desc: string;
  isDragging: boolean;

};

const Cards = forwardRef<HTMLDivElement, Props>(({ id, head, backGround, cardImg, desc, isDragging,  }, ref) => {
  const [rotate, setRotate] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const handleFlip = () => {
    if (!rotate) {
      setAnimationClass('restore-shadow');
      setRotate(true);
    } else {
      setAnimationClass('unhover-shadow');
      setRotate(false);
    }
    setTimeout(() => setAnimationClass(''), 600);
  };

  return (
    <div className={`card-wrapper ${animationClass} ${isDragging ? 'no-hover' : ''}`} id={id} ref={ref}>
      <div
        className="card"
        style={window.innerWidth < 1100 
          ? rotate 
            ? { transform: 'rotateY(-180deg)' } 
            : { transform: 'rotateY(0deg)' } 
          : {}}
      >
        <div
          className="front"
          style={{ background: backGround }}
        >
          <Suspense>
            <div className="card-img">
              <ServiceParallaxe
                src={cardImg}
                alt="service"
                className="cardImg"
                ref={ref}
                 // Pass the forwarded ref
              />
            </div>
          </Suspense>
          <div className="card-heading">
            <p>{head}</p>
          </div>
          <div className="flip-button" onClick={handleFlip}>
            <p className="flip-text">Flip to learn more</p>
            <div className="flip-img">
              <img src={flip} alt="flip-img" className="flip-icon" />
            </div>
          </div>
        </div>
        <div className="back" style={{ background: backGround }}>
          <div className="card-heading-back">
            <p className="heading-back">{head}</p>
          </div>
          <div className="card-desc">
            <p className="back-desc">
              {desc.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
          <div className='card-bottoms'>
            {id == "Consultation" ? (<div className='tapper'><Schedule/> <ContactUs /></div>):(<ContactUs />)}
            <div className='back-flipper'>
              <p className='back-text'>Back</p>
              <div className="flip-back" onClick={handleFlip}>
                <img src={flip} alt="flip-img" className='flip-icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Cards;
