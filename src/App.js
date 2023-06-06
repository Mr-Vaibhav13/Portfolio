import logo from './logo.svg';
import './App.css';
import Nav from "./component/navbar";
import { Component } from 'react';
import Home from "./component/home";
import About from "./component/about";
import Skills from "./component/skills";
import Work from "./component/work";
import Contact from "./component/contact";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <Nav />
      {/* <Home/> */}
      {/* <About/>
      <Skills/>
      <Work/>
      <Contact/> */}
      

      <Switch>

      <Route exact path="/">
            <Home />
          </Route>
          
      <Route exact path="/about">
            <About />
        </Route>
      
      <Route path="/skills">
            <Skills />
          </Route>
          
      <Route path="/work">
          <Work />
        </Route>

      <Route path="/contact">
          <Contact />
        </Route>

      
        <Route path="/skills">
            <Skills />
          </Route>
        </Switch>

        </Router>


    </div>
  );
}

export default App;
