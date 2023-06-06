import React, { Component } from 'react'

import { BiPhoneCall } from "react-icons/bi";


export default class Contact extends Component {
  render() {
    return (
      <div className='yoo'>
        <h6 className="hs">i want to hear from you</h6>
        <h1 className="hss">Contact Me</h1>
        

        <div className="row">
    <div className="col-lg-6">
       
    <div className='iii'>
    
      <h3 className='carry1'>Call Me:</h3>
      <h2 className='carry'>+91 9315233552</h2>
      </div>

      <div className='ii'>
      <h3 className='carry1'>Email Me:</h3>
      <h2 className='carry'>vaibhav008mn@gmail.com</h2>
      </div>

      <div className='ii'>
      <h3 className='carry1'>Location:</h3>
      <h2 className='carry'>Uttar Pradesh, India</h2>
      </div>

    </div>


    <div className="col-lg-6 fm">
      
    <form className="row g-3">
  <div className="col-md-6">
    <label for="inp4" className="form-label"></label>
    <input type="text" className="form-control" id="in4" placeholder="Enter Your Name"/>
  </div>
  <div className="col-md-6">
    <label for="isp4" className="form-label"></label>
    <input type="email" className="form-control" id="isp4" placeholder="Enter Your Email"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label"></label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Subject"/>
  </div>
  <div className="col-12">
  <textarea id="w3" rows="4" cols="83" placeholder="Your Message"></textarea>
  </div>
  
  <div className="col-12 asd">
  <a href='mailto:vaibhav008mn@gmail.com'>
  <button type="button" className="btn btn-success asdf">Mail  Me</button>
  </a>
  </div>
</form>



    </div>
    <p className='enddd'>@  2023 All Rights Reserved | Made by Vaibhav Sharma  (.VAI) </p>
  </div>



      </div>
    )
  }
}
