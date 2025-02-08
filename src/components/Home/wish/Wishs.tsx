import { useState } from 'react';
import flip from '/src/assets/home/uis_flip-v.png';
import './wishs.scss'



const Wishs = () => {


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
    
        // Clear the animation class after the animation completes
        // setTimeout(() => setAnimationClass(''), 600);
      };

  return (
    <div className='wish-main'>
        <div className={`wish-box ${animationClass}`}>
            <div className={`wish-wrapper`}
                         style={ window.innerWidth < 1250 
                            ? rotate 
                            ? { transform: 'rotateY(-180deg)' } : { transform: 'rotateY(0deg)' }
                           : {}}
            >
                <div className="wish-front">
                    <div className="wish-heading">
                        <h3 className='wish-head'>
                            Wishing for
                        </h3>
                    </div>
                    <div className="wish-description">
                        <p className='wish-desc'>
                            Safe-for-work Fiction and Nonfiction manuscripts for all ages. Children’s Literature is on top of the list.
                        </p>
                        <p className='wish-desc'>
                        Picture/Illustrated Books, Chapter Books, Novels, Novellas, Short Stories, Anthologies, Comic Books, Graphic Novels, Graphic Memoirs, Biographies, Poetry.
                        </p>
                    </div>
                    <div className="flip-button" onClick={handleFlip}>
                        <p className="flip-text"> Flip to learn more</p>
                        <div className="flip-img">
                        <img src={flip} alt="flip-img" className='flip-icon'/>
                        </div>
                    </div>
                </div>
                <div className="wish-back">

                <div className="wish-list">
                        <div className="w-list-heading">
                            <p>
                                Compatible Genres
                            </p>




                        </div>
                        <ul>
                            <li>Action/Adventure</li>
                            <li>Comedy</li>
                            <li>Cozy Mystery</li>
                            <li>Paranormal</li>
                            <li>Science Fiction</li>
                            <li>Fantasy</li>
                            <li>Urban Fantasy</li>
                            <li>Mystery</li>
                            <li>Thriller</li>
                            <li>Family</li>
                            <li>Slice of Life</li>
                            <li>Inspirational</li>
                            <li>Women's Fiction</li>
                            <li>General Fiction</li>
                            <li>Horror (MG only)</li>
                        </ul>
                        <div className="flip-back" onClick={handleFlip}>
                                    <img src={flip} alt="flip-img" className='flip-icon' />
                            </div>
                    </div>
                    {/* <div className="wish-bottom">
                        <p>
                            Ideally, manuscripts ranging between 50k-80k words.
                        </p>
                    </div> */}
                    
                </div>
            </div>
        </div>
        <div className={`wish-box ${animationClass}`}>
            <div className={`wish-wrapper`}
                         style={ window.innerWidth < 1250 
                            ? rotate 
                            ? { transform: 'rotateY(-180deg)' } : { transform: 'rotateY(0deg)' }
                           : {}}
            >
                <div className="wish-front not">
                    <div className="wish-heading">
                        <h3 className='wish-head'>
                            Not wishing for
                        </h3>
                    </div>
                    <div className="wish-description">
                        <p className='wish-desc'>
                         Manuscripts with Excessive Profanity, Racism, Religious Prejudice, or depiction of Toxic Relationships as healthy.
                        </p>
                    </div>
                    <div className="flip-button" onClick={handleFlip}>
                        <p className="flip-text"> Flip to learn more</p>
                        <div className="flip-img">
                        <img src={flip} alt="flip-img" className='flip-icon'/>
                        </div>
                    </div>
                </div>
                <div className="wish-back not">

                <div className="wish-list">
                        <div className="w-list-heading">
                            <p>
                                Incompatible Genres
                            </p>




                        </div>
                        <ul>
                            <li>Historical Fiction </li>
                            <li>Historical Romance</li>
                            <li>Bully Romance</li>
                            <li>NSFW Content</li>
                            <li>LGBTQIAP+</li>
                            <li>Violent Horror </li>
                            <li>Gore</li>
                        </ul>
                    </div>
                    {/* <div className="wish-bottom">
                        <p>
                        Manuscripts of 100k words or more.
                        </p>
                    </div> */}
                                                <div className="flip-back" onClick={handleFlip}>
                                    <img src={flip} alt="flip-img" className='flip-icon' />
                            </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Wishs