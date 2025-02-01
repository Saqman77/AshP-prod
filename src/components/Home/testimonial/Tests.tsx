import './tests.scss';
// import flip from '/src/assets/home/uis_flip-v.png';
// import { useState } from 'react';

type Props = {
  id: string;
  head: string;
  desc: string;
  // isDragging: boolean;
};

const Tests = ({ id, head,desc }: Props) => {
  // const [rotate, setRotate] = useState(false);
  // const [animationClass, setAnimationClass] = useState('');

  // const handleFlip = () => {
  //   if (!rotate) {
  //     setAnimationClass('restore-shadow');
  //     setRotate(true);
  //   } else {
  //     setAnimationClass('unhover-shadow');
  //     setRotate(false);
  //   }

  //   // Clear the animation class after the animation completes
  //   setTimeout(() => setAnimationClass(''), 600);
  // };

  return (
    <div className={`test-wrapper`} id={id}>
      <div className="test">
        <div className="test-front">
          <div className="test-heading">
            <p>{head}</p>
          </div>
          <div className="test-content">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tests;
