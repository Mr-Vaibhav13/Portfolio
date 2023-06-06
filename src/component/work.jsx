import React, { Component } from 'react';
import Ing from "../image/aboutimg.jpg";
import P2 from "../image/project2.png";
import P1 from "../image/project1.png";
import P3 from "../image/project3.png";


export default class Work extends Component {
  render() {
    return (
      <div className='ipl'>
        <div className="container text-center ind">
  <div className="row aus">
    <h6 className='hhhs'>Apply My Skills on</h6>
     <h1 className='hsss'>Projects</h1>
    <div className="col sl">
      
    <div className="card sa p1">

  <img src={P3} className="card-img-top pqw" alt="..."/>
  
  <div className="card-body pqwe">
    <h5 className="card-title ctt">Crypto Hunters</h5>
    <p>HTML | Tailwind | React | Streamlit | API</p>
    <p className="card-text ctr">This is a Comprehensive crypto currency dashboard that is useful in decision making and analysis of the cryptomarket with good sight and accurate results.</p>
    {/* <a href="#" className="btn btn-info bbk kka">Github Repo</a> */}
    {/* <a href="#" className="btn btn-light bbk kkka">Live Demo</a> */}
  </div>

</div>


    </div>




    <div className="col sl">
      
    <div className="card sa p2">

<img src={P2} className="card-img-top pqw" alt="..."/>
 
<div className="card-body pqwe">
  <h5 className="card-title ctt">Portfolio Website</h5>
  <p>HTML | BootStarp | JS | React</p>
  <p className="card-text">This is a website that includes a home page that introduces me, a portfolio section that showcases my skills and work, and a contact section that provides a wayto reach out to me.</p>
  {/* <a href="#" className="btn btn-info bbk kka">Github Repo</a> */}
    {/* <a href="#" className="btn btn-light bbk kkka">Live Demo</a> */}
</div>

</div>

    </div>
    



    
    <div className="col sl ">
      
    <div className="card sa p3">

<img src={P1} className="card-img-top pqw" alt="..."/>

<div className="card-body pqwe">
  <h5 className="card-title ctt">TinDog</h5>
  <p>HTML | CSS | Bootstrap</p>
  <p className="card-text ctrr">It is a Responsive Website template which is work as Tinder for Dogs</p>
  {/* <a href="#" className="btn btn-info bbk kka">Github Repo</a> */}
    {/* <a href="#" className="btn btn-light bbk kkka">Live Demo</a> */}
</div>

</div>


    </div>
  
  
  
  </div>
</div>
      </div>
    )
  }
}
