import React, { Component } from 'react';
import "../App.css";
import Img from "../image/homeimg1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope,faHippo,faLinkedin } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp , faTwitter, faInstagram, faGithub ,faDiscord, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

import { FaDownload ,FaAngleDoubleRight} from "react-icons/fa";

export default class Home extends Component {
  render() {
    return (
      <div className="row1">


    <div className="dddd">
     {/* <h5 className='hh'>Student</h5> */}
      <h1 className="one">Hey! I AM</h1>
      <h1 id="o" className="one">VAIBHAV SHARMA</h1>
      <p className="pp">Passionate Full Stack Developer who love to Code and Looking for an opportunity to apply my skills</p>
      
      <div className='mi'>
      <a target="_blank" href='https://drive.google.com/file/d/1mLC4NGGDaGdsxscv_KgcZF2ZBj4LCOqF/view?usp=drive_link'><button id="dd" type="button" className="btn btn-warning bb">Download CV<FaDownload className='qwe'/></button></a>
      
      <a href='mailto:vaibhav008mn@gmail.com'><button type="button" id="hire" className="btn btn-outline-warning bb">Hire me <FaAngleDoubleRight className='wwww' /></button></a>
      
      </div>

      <p className='soc'>Social Media:</p>
      
      <div className='iccon'>
      


      <a target="_blank" href="https://instagram.com/vaibhav.sharma13?igshid=MzNlNGNkZWQ4Mg==">
      <FontAwesomeIcon icon={faInstagram} className='yuu'/>
      </a>

      <a target="_blank" href="https://wa.me/9315233552?text=">
      <FontAwesomeIcon icon={faWhatsapp} className='yuu'/>
      </a>

      <a target="_blank" href="https://twitter.com/Vaibhav13mn?t=Ej0XBfJ2TnDFY2EJPUl8ZA&s=09">
      <FontAwesomeIcon icon={faTwitter} className='yuu'/>
      </a>


      <a target="_blank" href="https://github.com/Mr-Vaibhav13">
      <FontAwesomeIcon icon={faGithub} className='yuu'/>
      </a>


      <a target="_blank" href="https://www.linkedin.com/in/vaibhav-sharma-404088203/">
      <FontAwesomeIcon icon={faLinkedinIn} className='yuu'/>
      </a>


      </div>


    </div>
    
  </div>

      
    )
  }
}
