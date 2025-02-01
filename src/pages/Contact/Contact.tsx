import './Contact.scss'
import FB from '../../assets/freedi/Facebook.png'
import INSTA from '../../assets/freedi/insta.png'
import X from '../../assets/freedi/X.png'
import LINK from '../../assets/freedi/linked.png'
import Schedule from '../../components/schedule/Schedule'
import Email from '../../components/email/Email'
// import { useThemeContext } from '../../utils/ThemeContextProvider'
// import { useEffect } from 'react'

const Contact = () => {

      // const {isActive,removeClass} = useThemeContext();
      
      
      // useEffect(()=>{
      //   if(isActive){
      //     removeClass();
      //     document.documentElement.classList.remove('active')
      //     document.body.classList.remove('active')
      //   }
      // },[])
    
  return (
    <div className="c-wrapper">
      <div className='c-t-wrapper'>
        <div className="c-top">
          <div className="c-left">
            <p className='c-head'>
              Get in <span className='c-colour'>touch!</span>
            </p>
          </div>
          <div className="c-right">
            <p className="c-desc">
              We are always ready to help you and answer your <span className='c-colour'>questions!</span>
            </p>
            
          </div>
        </div>
        <div className="top-bg">
              <div className="bg-container">
                <svg className="contact-img"width="177" height="144" viewBox="0 0 177 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M175.582 68.1415C175.193 60.8736 174.883 53.4759 174.581 46.3229C174.288 39.3568 173.985 32.1533 173.609 25.0713C173.065 14.7867 167.774 7.29417 158.308 3.40359C154.965 2.0307 150.852 1.30472 145.741 1.18222C132.204 0.860342 118.439 0.711559 105.126 0.56691C100.387 0.515217 95.649 0.46112 90.9115 0.40465C90.7922 0.305737 90.6424 0.251378 90.4875 0.251299H79.4525C70.4852 0.251299 61.5185 0.253954 52.5531 0.258298C50.9122 0.258298 49.266 0.254587 47.6257 0.250025C42.6943 0.233084 37.5944 0.219024 32.5787 0.401468C25.7308 0.649721 20.4578 1.98858 15.9854 4.61576C6.92797 9.93791 2.09649 17.5349 1.62514 27.1972C1.37682 32.2854 1.29317 37.4607 1.21277 42.4661L1.16026 45.6C1.08765 49.801 1.01178 54.001 0.932679 58.2003C0.677877 72.0374 0.414 86.3455 0.309616 100.423C0.267473 106.027 0.550151 112.656 2.96137 119.34C6.52729 129.227 13.1048 135.618 23.07 138.88C32.3414 141.843 42.0098 143.363 51.7388 143.384C75.9223 143.698 101.288 143.846 131.141 143.846H136.94C142.426 143.94 147.903 143.344 153.242 142.073C165.482 138.926 172.735 131.387 174.801 119.662C175.458 115.685 175.914 111.676 176.168 107.652C177.062 95.4416 176.391 83.0674 175.742 71.0991L175.582 68.1415ZM62.4885 132.736C52.0131 132.704 40.8199 132.306 29.9451 129.625C25.5694 128.547 22.4398 127.284 19.9391 125.576L73.9078 75.696L75.4146 77.325C76.9162 78.9494 78.4664 80.6259 80.0322 82.2874C84.5641 87.0981 89.0105 87.4923 94.0223 83.5293C96.073 81.9089 98.0213 80.0753 99.9054 78.3082C100.619 77.6371 101.34 76.9614 102.071 76.2889L154.893 129.871C153.067 131.379 150.86 131.695 148.535 132.028L147.867 132.124C145.37 132.458 142.852 132.613 140.332 132.587L125.557 132.641C104.884 132.718 83.5106 132.799 62.4885 132.736ZM144.959 21.38C137.055 28.5507 128.884 35.9648 121.091 43.5212C113.315 51.0613 105.691 58.9635 98.317 66.6077C95.2652 69.7718 92.1142 73.0388 89.0027 76.2264L23.3676 11.5338C23.8374 11.4082 24.3036 11.2814 24.7661 11.1532C26.5555 10.6639 28.2458 10.2004 29.9723 9.85959C38.5572 8.16547 47.3961 8.39587 55.9447 8.62197C57.8541 8.67149 59.7628 8.72049 61.6709 8.75176C64.5742 8.79737 67.5293 8.89466 70.386 8.98914C72.8672 9.07058 75.4327 9.15529 77.9594 9.20546C85.0647 9.34666 92.1699 9.48219 99.2759 9.61211C114.635 9.90011 130.517 10.1989 146.134 10.5755C148.33 10.6973 150.513 11.0061 152.657 11.4988C153.499 11.6675 154.373 11.8407 155.24 11.9919V12.0135C151.824 15.1509 148.335 18.3175 144.957 21.3826L144.959 21.38ZM34.4148 100.077C27.8321 106.367 21.0329 112.866 14.4579 119.507C11.7271 113.032 10.3117 107.718 9.89029 102.389C8.72326 87.6069 9.20823 72.8929 9.8086 59.0891C10.0829 52.7942 10.1924 46.3916 10.2988 40.1996C10.3714 35.9904 10.4466 31.6377 10.5724 27.3633C10.702 22.8296 12.2107 19.6483 15.5848 16.8367L66.8693 67.4698C56.429 79.036 45.2384 89.7318 34.411 100.082L34.4148 100.077ZM163.703 118.401C163.463 119.7 163.142 120.982 162.742 122.24C162.598 122.728 162.454 123.217 162.318 123.706L162.112 123.775L107.749 70.5361C126.542 51.0534 144.364 34.4378 162.19 19.7771C162.266 20.1218 162.344 20.4573 162.421 20.7844C162.738 21.9717 162.949 23.1849 163.051 24.4102C163.652 36.7407 164.142 48.9096 164.502 58.1347C164.84 66.7915 165.128 75.3324 165.358 83.5222C165.647 93.8921 165.679 106.148 163.699 118.404L163.703 118.401Z" fill="black"/>
                </svg>
              </div>
              <div className="bg-container2">
                <svg className="contact-img"width="177" height="144" viewBox="0 0 177 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M175.582 68.1415C175.193 60.8736 174.883 53.4759 174.581 46.3229C174.288 39.3568 173.985 32.1533 173.609 25.0713C173.065 14.7867 167.774 7.29417 158.308 3.40359C154.965 2.0307 150.852 1.30472 145.741 1.18222C132.204 0.860342 118.439 0.711559 105.126 0.56691C100.387 0.515217 95.649 0.46112 90.9115 0.40465C90.7922 0.305737 90.6424 0.251378 90.4875 0.251299H79.4525C70.4852 0.251299 61.5185 0.253954 52.5531 0.258298C50.9122 0.258298 49.266 0.254587 47.6257 0.250025C42.6943 0.233084 37.5944 0.219024 32.5787 0.401468C25.7308 0.649721 20.4578 1.98858 15.9854 4.61576C6.92797 9.93791 2.09649 17.5349 1.62514 27.1972C1.37682 32.2854 1.29317 37.4607 1.21277 42.4661L1.16026 45.6C1.08765 49.801 1.01178 54.001 0.932679 58.2003C0.677877 72.0374 0.414 86.3455 0.309616 100.423C0.267473 106.027 0.550151 112.656 2.96137 119.34C6.52729 129.227 13.1048 135.618 23.07 138.88C32.3414 141.843 42.0098 143.363 51.7388 143.384C75.9223 143.698 101.288 143.846 131.141 143.846H136.94C142.426 143.94 147.903 143.344 153.242 142.073C165.482 138.926 172.735 131.387 174.801 119.662C175.458 115.685 175.914 111.676 176.168 107.652C177.062 95.4416 176.391 83.0674 175.742 71.0991L175.582 68.1415ZM62.4885 132.736C52.0131 132.704 40.8199 132.306 29.9451 129.625C25.5694 128.547 22.4398 127.284 19.9391 125.576L73.9078 75.696L75.4146 77.325C76.9162 78.9494 78.4664 80.6259 80.0322 82.2874C84.5641 87.0981 89.0105 87.4923 94.0223 83.5293C96.073 81.9089 98.0213 80.0753 99.9054 78.3082C100.619 77.6371 101.34 76.9614 102.071 76.2889L154.893 129.871C153.067 131.379 150.86 131.695 148.535 132.028L147.867 132.124C145.37 132.458 142.852 132.613 140.332 132.587L125.557 132.641C104.884 132.718 83.5106 132.799 62.4885 132.736ZM144.959 21.38C137.055 28.5507 128.884 35.9648 121.091 43.5212C113.315 51.0613 105.691 58.9635 98.317 66.6077C95.2652 69.7718 92.1142 73.0388 89.0027 76.2264L23.3676 11.5338C23.8374 11.4082 24.3036 11.2814 24.7661 11.1532C26.5555 10.6639 28.2458 10.2004 29.9723 9.85959C38.5572 8.16547 47.3961 8.39587 55.9447 8.62197C57.8541 8.67149 59.7628 8.72049 61.6709 8.75176C64.5742 8.79737 67.5293 8.89466 70.386 8.98914C72.8672 9.07058 75.4327 9.15529 77.9594 9.20546C85.0647 9.34666 92.1699 9.48219 99.2759 9.61211C114.635 9.90011 130.517 10.1989 146.134 10.5755C148.33 10.6973 150.513 11.0061 152.657 11.4988C153.499 11.6675 154.373 11.8407 155.24 11.9919V12.0135C151.824 15.1509 148.335 18.3175 144.957 21.3826L144.959 21.38ZM34.4148 100.077C27.8321 106.367 21.0329 112.866 14.4579 119.507C11.7271 113.032 10.3117 107.718 9.89029 102.389C8.72326 87.6069 9.20823 72.8929 9.8086 59.0891C10.0829 52.7942 10.1924 46.3916 10.2988 40.1996C10.3714 35.9904 10.4466 31.6377 10.5724 27.3633C10.702 22.8296 12.2107 19.6483 15.5848 16.8367L66.8693 67.4698C56.429 79.036 45.2384 89.7318 34.411 100.082L34.4148 100.077ZM163.703 118.401C163.463 119.7 163.142 120.982 162.742 122.24C162.598 122.728 162.454 123.217 162.318 123.706L162.112 123.775L107.749 70.5361C126.542 51.0534 144.364 34.4378 162.19 19.7771C162.266 20.1218 162.344 20.4573 162.421 20.7844C162.738 21.9717 162.949 23.1849 163.051 24.4102C163.652 36.7407 164.142 48.9096 164.502 58.1347C164.84 66.7915 165.128 75.3324 165.358 83.5222C165.647 93.8921 165.679 106.148 163.699 118.404L163.703 118.401Z" fill="black"/>
                </svg>
              </div>
              <div className="bg-container3">
                <svg className="contact-img"width="177" height="144" viewBox="0 0 177 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M175.582 68.1415C175.193 60.8736 174.883 53.4759 174.581 46.3229C174.288 39.3568 173.985 32.1533 173.609 25.0713C173.065 14.7867 167.774 7.29417 158.308 3.40359C154.965 2.0307 150.852 1.30472 145.741 1.18222C132.204 0.860342 118.439 0.711559 105.126 0.56691C100.387 0.515217 95.649 0.46112 90.9115 0.40465C90.7922 0.305737 90.6424 0.251378 90.4875 0.251299H79.4525C70.4852 0.251299 61.5185 0.253954 52.5531 0.258298C50.9122 0.258298 49.266 0.254587 47.6257 0.250025C42.6943 0.233084 37.5944 0.219024 32.5787 0.401468C25.7308 0.649721 20.4578 1.98858 15.9854 4.61576C6.92797 9.93791 2.09649 17.5349 1.62514 27.1972C1.37682 32.2854 1.29317 37.4607 1.21277 42.4661L1.16026 45.6C1.08765 49.801 1.01178 54.001 0.932679 58.2003C0.677877 72.0374 0.414 86.3455 0.309616 100.423C0.267473 106.027 0.550151 112.656 2.96137 119.34C6.52729 129.227 13.1048 135.618 23.07 138.88C32.3414 141.843 42.0098 143.363 51.7388 143.384C75.9223 143.698 101.288 143.846 131.141 143.846H136.94C142.426 143.94 147.903 143.344 153.242 142.073C165.482 138.926 172.735 131.387 174.801 119.662C175.458 115.685 175.914 111.676 176.168 107.652C177.062 95.4416 176.391 83.0674 175.742 71.0991L175.582 68.1415ZM62.4885 132.736C52.0131 132.704 40.8199 132.306 29.9451 129.625C25.5694 128.547 22.4398 127.284 19.9391 125.576L73.9078 75.696L75.4146 77.325C76.9162 78.9494 78.4664 80.6259 80.0322 82.2874C84.5641 87.0981 89.0105 87.4923 94.0223 83.5293C96.073 81.9089 98.0213 80.0753 99.9054 78.3082C100.619 77.6371 101.34 76.9614 102.071 76.2889L154.893 129.871C153.067 131.379 150.86 131.695 148.535 132.028L147.867 132.124C145.37 132.458 142.852 132.613 140.332 132.587L125.557 132.641C104.884 132.718 83.5106 132.799 62.4885 132.736ZM144.959 21.38C137.055 28.5507 128.884 35.9648 121.091 43.5212C113.315 51.0613 105.691 58.9635 98.317 66.6077C95.2652 69.7718 92.1142 73.0388 89.0027 76.2264L23.3676 11.5338C23.8374 11.4082 24.3036 11.2814 24.7661 11.1532C26.5555 10.6639 28.2458 10.2004 29.9723 9.85959C38.5572 8.16547 47.3961 8.39587 55.9447 8.62197C57.8541 8.67149 59.7628 8.72049 61.6709 8.75176C64.5742 8.79737 67.5293 8.89466 70.386 8.98914C72.8672 9.07058 75.4327 9.15529 77.9594 9.20546C85.0647 9.34666 92.1699 9.48219 99.2759 9.61211C114.635 9.90011 130.517 10.1989 146.134 10.5755C148.33 10.6973 150.513 11.0061 152.657 11.4988C153.499 11.6675 154.373 11.8407 155.24 11.9919V12.0135C151.824 15.1509 148.335 18.3175 144.957 21.3826L144.959 21.38ZM34.4148 100.077C27.8321 106.367 21.0329 112.866 14.4579 119.507C11.7271 113.032 10.3117 107.718 9.89029 102.389C8.72326 87.6069 9.20823 72.8929 9.8086 59.0891C10.0829 52.7942 10.1924 46.3916 10.2988 40.1996C10.3714 35.9904 10.4466 31.6377 10.5724 27.3633C10.702 22.8296 12.2107 19.6483 15.5848 16.8367L66.8693 67.4698C56.429 79.036 45.2384 89.7318 34.411 100.082L34.4148 100.077ZM163.703 118.401C163.463 119.7 163.142 120.982 162.742 122.24C162.598 122.728 162.454 123.217 162.318 123.706L162.112 123.775L107.749 70.5361C126.542 51.0534 144.364 34.4378 162.19 19.7771C162.266 20.1218 162.344 20.4573 162.421 20.7844C162.738 21.9717 162.949 23.1849 163.051 24.4102C163.652 36.7407 164.142 48.9096 164.502 58.1347C164.84 66.7915 165.128 75.3324 165.358 83.5222C165.647 93.8921 165.679 106.148 163.699 118.404L163.703 118.401Z" fill="black"/>
                </svg>
              </div>
        </div>
      </div>
      <div className='c-b-wrapper'>
        <Schedule/>
        <Email/>
      </div>
      <div className="c-bottom">
        <p className='contact '>
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