import React, { Component } from 'react'

// import { TbBrandCpp } from "react-icons/tb";
// import { DiJava } from "react-icons/di";
import { FaRedhat } from "react-icons/fa";



export default class Skills extends Component {
  render() {
    return (
      <div className="sk">

      <h6 className="hs">My Skills progress so far</h6>
      <h1 className="hss">Technical Knowledge</h1>
           


      <div className="container px-4 text-center">
  <div className="row gx-5 zz">

  
    <div className="col">
     <div className="p-3 fi q">
     
     <h2 className="software">Software Skills</h2>
     
     <ul className="list-group list-group-horizontal">
  <li className="list-group-item v"><FaRedhat className='csk'/> C/C++</li>
  <li className="list-group-item va"><FaRedhat className='csk'/> Data Structures</li>
</ul>
<ul className="list-group list-group-horizontal-sm">
  <li className="list-group-item v"><FaRedhat className='csk'/> Java</li>
  <li className="list-group-item va"><FaRedhat className='csk'/> Algorithms</li>
</ul>
<ul className="list-group list-group-horizontal-md">
  <li className="list-group-item v"><FaRedhat className='csk'/> Python</li>
  <li className="list-group-item va"><FaRedhat className='csk'/> SQL</li>
</ul>
<ul className="list-group list-group-horizontal-lg">
  <li className="list-group-item v"><FaRedhat className='csk'/> Object Oriented</li>
  <li className="list-group-item va"><FaRedhat className='csk'/> GitHub</li>
</ul>


     </div>
    </div>
  
  




    <div className="col">
      <div className="p-3 se q">
      
      <h2 className="Web">Web Development Skills</h2>
        
      <ul className="list-group list-group-horizontal">
  <li className="list-group-item v"><FaRedhat className='csk'/> HTML</li>
  <li className="list-group-item va"><FaRedhat className='csk'/> ReactJs</li>
</ul>
<ul className="list-group list-group-horizontal-sm">
  <li className="list-group-item v"><FaRedhat className='csk'/> CSS</li>
  <li className="list-group-item va"><FaRedhat className='csk'/> Bootstrap</li>
</ul>
<ul className="list-group list-group-horizontal-md">
  <li className="list-group-item v"><FaRedhat className='csk'/> JavaScipt</li>
  <li className="list-group-item va"><FaRedhat className='csk'/> NodeJs</li>
</ul>
<ul className="list-group list-group-horizontal-lg">
  {/* <li className="list-group-item"> </li> */}
  {/* <li className="list-group-item va">A third item</li> */}
</ul>

      
      
      
      
      </div>
    </div>
  
  
  </div>
</div>


      </div>
    )
  }
}
