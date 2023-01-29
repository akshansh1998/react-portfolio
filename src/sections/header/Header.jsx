import './header.css'
import HeaderImage from '../../assets/AnkushPic.jpg'
import data from './data'
const Header = () => {
  return (
    <header id="Header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="A Photo of Ankush Anand" />
        </div>
        <h3>Ankush Anand</h3>
        <p>
          Full Stack Developer and Designer
          specializing with 6+ Years of Experience in Modern Design & Development.
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item=> <a key={item.id} href={item.link} target="_blank" rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  );
}

export default Header