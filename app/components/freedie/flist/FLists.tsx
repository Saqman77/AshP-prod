// import { freedie } from '../freedyContent'
import Flist from './list/Flist'
import './flists.scss'

interface ListProps {
  onItemClick: (index: number) => void;
  freedie: {
    id: string;
    name: string;
    imgSrc: { url: string };
    desc: string;
    role: string;
    eMail: string;
    links: {
      fb: string;
      insta: string;
      x: string;
      linkedIn: string;
      spotify: string;
      linktree: string;
      youtube: string;
      soundcloud: string;
      bandcamp: string;
      github: string;
      behance: string;
      dribble: string;
      portfolio: string;
      cv: string;
    };
    shout: string;
  }[];
}

const FLists: React.FC<ListProps> = ({ onItemClick, freedie }) => {
  return (
    <div className="lists-wrapper">
      <ul className='f-ul'>
        {freedie.map((list, index) => {
          return(
            <li key={list.id} onClick={() => onItemClick(index)}>
              <Flist
                name={list.name}
                profile={list.imgSrc.url}
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