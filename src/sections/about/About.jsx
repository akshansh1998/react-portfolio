import {AiOutlineDownload} from 'react-icons/ai'
import AnkushCV from '../../assets/AnkushCV.pdf'
import AnkushPic from '../../assets/AnkushPic.jpg'
import data from './data'
import Card from '../../components/Card'
import './about.css'
const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AnkushPic} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map( item => (
                <Card key={item.id} className="about__card">
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>

          <p>Founder of <a href='https://drabdigital.com' rel='dofollow' className='dark'>M/S DrabDigital</a> - Skilled in Developing Websites, Brand & UI/UX Design, Digital Marketing and Love to Share my Knowledge through Blogging and <a href='https://ankus.co/youtube' className='dark'>YouTube</a></p>

          <p>Full Stack Developer and Designer specializing with 6+ Years of Experience in modern design & development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, PHP OOP, JavaScript, CSS, MySQL. Strong background in project management, Team Management and customer relations.</p>

          <a href={AnkushCV} download className='btn primary'>{<AiOutlineDownload/>}Download CV</a>
        </div>
      </div>
    </section>
  )
}

export default About