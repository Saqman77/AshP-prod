import './flist.scss'
import Image from 'next/image'
type Props = {
  name: string,
  profile: string,
  role: string
}

const Flist = ({name, profile, role}: Props) => {
  return (
    <div className='l-container'>
        <div className="profile">
          <div className="prof-container">
            <Image src={profile} alt="profile image" className='prof-img' width={150} height={150} />
          </div>
        </div>
        <div className="l-text">
            <div className="l-name">
              <p className='list-name'>{name}</p>
            </div>
            <div className="l-role">
              <p className='role'>{role}</p>
            </div>
        </div>
        <div className="f-button">
          <Image src={"/freedi/Button.svg"} alt='button' width={60} height={60} />
        </div>
    </div>
  )
}

export default Flist