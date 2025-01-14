import { freedie } from '../freedyContent'
import Flist from './list/Flist'
import './flists.scss'
const FLists = () => {
  return (
    <div className="lists-wrapper">
      <ul className='f-ul'>
        {freedie.map((list) => {
          return(
            <li key={list.id}>
              <Flist
                
                name={list.name}
                profile={list.imgSrc}
                role={list.role}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FLists