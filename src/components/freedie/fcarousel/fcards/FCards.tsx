import './fcards.scss'

const FCards = () => {
  return (
    <div className='f-card'>
       <div className="card-header"></div>
       <div className="card-top">
        <div className="left-img"></div>
        <div className="right-main">
            <div className="right-head"></div>
            <div className="right-desc"></div>
        </div>
       </div>
       <div className="card-bottom">
        <div className="contact"></div>
       </div>
    </div>
  )
}

export default FCards