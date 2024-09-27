import React, { Component } from 'react'
import Logo from '../image/logo.png';


import '../App.css';
import {
  Link
} from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
        <nav id="nna" className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
        <img className="lg" src={Logo} alt="error"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link id="hh" className="nav-link abc" aria-current="page" to="/">//Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">//About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills">//Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/work">//Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/contact">//Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
