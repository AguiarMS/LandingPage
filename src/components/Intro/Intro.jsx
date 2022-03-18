import './Intro.css'
import { BsArrowRightCircle } from "react-icons/bs";
import Landing from '../../img/landing_home.png'
import Arrow from '../../img/Arrow_01.png'
import Balls from '../../img/Balls.png'
import Highlight from '../../img/Highlight.png'



const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="intro-name">Hi, I am <img src={Highlight} alt="" className='i-high' />  Cristian 🎨</h1>
          <p className="intro-desc">I am a UI/UX Designer, I like to make interfaces simple and aesthetically pleasing for users; The idea is not to create an interface for creating it, it is that users prefer you because your product is easy to use.</p>
          <div className="i-button">
            <button className='i-landing-button'>Contact Me! <BsArrowRightCircle /></button>
            <div className="i-emote">
              <img src={Arrow} alt="" className="i-img-arrow" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="i-menu">
        <div className="i-menu-avatar" />
          <div className="i-title-menu">Cristian Munoz</div>

          <div className="i-tab">
            <span className="i-home">Home</span>
            <span className="i-skills">Skills</span>
            <span className="i-portifolio">Portifolio</span>
            <span className="i-blog">Blog</span>
          </div>

          <button className='i-menu-button'>Contact Me</button>
      </div>





      <div className="i-rigth">
        <div className="i-ball-wrapper">
          <img src={Balls} alt="" className="i-balls" />
        </div>
        <div className="i-bg">
          <img src={Landing} alt="" className="i-img" />
        </div>
      </div>

    </div>
  )
}

export default Intro