import ContactUs from '../../get-in-touch-button/ContactUs';
import './cards.scss';
import flip from '/src/assets/home/uis_flip-v.png';
import { Suspense, useState } from 'react';

type Props = {
  id: string;
  head: string;
  backGround: string | number | undefined;
  cardImg: string;
  desc: string;
  isDragging: boolean;
};

const Cards = ({ id, head, backGround, cardImg, desc, isDragging }: Props) => {
  const [rotate, setRotate] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const img = cardImg

  const handleFlip = () => {
    if (!rotate) {
      setAnimationClass('restore-shadow');
      setRotate(true);
    } else {
      setAnimationClass('unhover-shadow');
      setRotate(false);
    }

    // Clear the animation class after the animation completes
    setTimeout(() => setAnimationClass(''), 600);
  };

  return (
    <div className={`card-wrapper ${animationClass} ${isDragging ? 'no-hover' : ''}`} id={id}>
      <div
        className="card"
        style={ window.innerWidth < 1100 
         ? rotate 
         ? { transform: 'rotateY(-180deg)' } : { transform: 'rotateY(0deg)' }
        : {}}
      >
        <div
          className="front"
          style={{
            background: backGround,
          }}
        >
          <Suspense>
            <div className="card-img">
              <img src={img} alt="" className="cardImg" />
            </div>
          </Suspense>
          <div className="card-heading">
            <p>{head}</p>
          </div>
          <div className="flip-button" onClick={handleFlip}>
            <p className="flip-text"> Flip to learn more</p>
            <div className="flip-img">
              <img src={flip} alt="flip-img" className='flip-icon'/>
            </div>
          </div>
        </div>
        <div
          className="back"
          style={{
            background: backGround,
          }}
        >
          <div className="card-heading-back">
            <p className="heading-back">{head}</p>
            <div className="flip-back" onClick={handleFlip}>
              <img src={flip} alt="flip-img" className='flip-icon' />
            </div>
          </div>
          {/* <div className="card-img">
            <img src={cardImg} alt="" className="cardImg" />
          </div> */}
          <div className="card-desc">
            <p className="back-desc">{desc}</p>
          </div>
          <ContactUs/>
        </div>
      </div>
    </div>
  );
};

export default Cards;
