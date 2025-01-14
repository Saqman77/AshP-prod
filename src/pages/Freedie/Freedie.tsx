import wheel from '../../assets/freedi/Brutalist 52.png'
import gear from '../../assets/freedi/Brutalist Shape 181 (1).svg'
import FLists from '../../components/freedie/flist/FLists'
import './Freedie.scss'

const Freedie = () => {
  return (
    <div className="f-container">
      <div className="f-wrapper">
        <div className="f-top">
          <div className="f-left">
              <h2 className="f-heading">
                A supportive platform for all <br/><span className="f-colour">freelancers</span>
              </h2>
              <p className='fredi-desc'>Ash P Reads FrEdiBuddies is a collective of verified and authenticated freelancers.</p>
          </div>
          <div className="f-right">
              <div className='wheel'>
                <img src={wheel} alt="wheel-image" className='wheel-img' />
              </div>
          </div>
        </div>
        <div className="f-bottom">
          <div className="f-headingb"><p className='f-hb'>Meet Our FrEdiBuddies
          </p></div>
          <FLists/>
        </div>
      </div>
      <div className="back-gear">
        <div className="f-gear">
          <img src={gear} alt="gear-image" className='gear-img' />
        </div>
      </div>
    </div>
  )
}

export default Freedie