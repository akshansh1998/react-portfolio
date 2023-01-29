import AnkushPic from '../../assets/AnkushPic.jpg'
import './navbar.css'
import data from './data'
import {MdInvertColors} from 'react-icons/md'
const Navbar = () => {
  return (
        <nav>
          <div className="container nav__container">
            <a href="index.html">
              <img src={AnkushPic} alt="Ankush Anand's Picture as Logo" className='nav__logo'/>
            </a>
            <ul className='nav__menu'>
              {
                data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
              }
            </ul>
            <button id='theme__icon'><MdInvertColors/></button>
          </div>
        </nav>
    )
}

export default Navbar