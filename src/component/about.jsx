import React, { Component } from 'react'
import Ing from "../image/Aboutimg1.jpg";
import { FaLaptopCode,FaCertificate,FaDownload} from "react-icons/fa";
import { TfiMedallAlt } from "react-icons/tfi";




export default class About extends Component {
  render() {
    return (
      <div class="row2">
        <div class="row">


        <div class="col-lg-6 ccc" >
      {/* <img class="colsss" src={Ing} alt="iphone-mockup"/> */}
     </div>

        <div class="col-lg-6 ccc ss">
        <h5 className='hh'>Who am I?</h5>
      
      <p class="psp">I am an Engineering student based in Uttar Pradesh, India who's love to solve problem solving coding questions and developing Fullstack Developer skills.</p>
      <p class="psp" id="sdds">I'm currently in the Third year of B.tech pursuing from ABES Engineering College. I always try to find opportunities to put my skills into practice.</p>
      



      <div class="container text-center expb">
  <div class="row align-items-start exp">
    <div class="col e1">
    <div class="card er">
  <div class="card-body">
    <h5 class="card-title"><FaLaptopCode className='l1'/></h5>
    <h6 class="card-subtitle mb-2 mnm">Coding Problems</h6>
    <p class="card-text cctt"> 
    <ul class="lgg">
  <li class="lgt">300+ Q's Solved</li>
  <li class="lgt">1542 Rating Codechef</li>
  {/* <li class="list-group-item"></li> */}
</ul>    
    </p>
   
  </div>
</div>
    </div>





    <div class="col e1">
    <div class="card er">
  <div class="card-body">
    
  <h5 class="card-title"><TfiMedallAlt className='l1'/></h5>
    <h6 class="card-subtitle mb-2 mnm">Experience</h6>
    <p class="card-text cctt"> 
    <ul class="lgg">
  <li class="lgt">2 months Intern</li>
  <li class="lgt">3 months Tech Faculty</li>
  {/* <li class="list-group-item"></li> */}
</ul>    
    </p>
    
  </div>
</div>
    </div>





    <div class="col e1">
    <div class="card er">
  <div class="card-body">
    
  <h5 class="card-title"><FaCertificate className='l1'/></h5>
    <h6 class="card-subtitle mb-2 mnm">Certificates</h6>
    <p class="card-text cctt"> 
    <ul class="lgg">
  <li class="lgt">15+ Techinical</li>
  <li class="lgt">10+ Non-Techinical</li>
  {/* <li class="list-group-item"></li> */}
</ul>    
    </p>
   
  </div>
</div>
    </div>
  </div>
</div>



<a target="_blank" href='https://drive.google.com/file/d/1mLC4NGGDaGdsxscv_KgcZF2ZBj4LCOqF/view?usp=drive_link'><button type="button" class="btn btn-success cvv">Download CV <FaDownload className='qwe'/></button></a>
     </div>
     
    </div>
      </div>
    )
  }
}
