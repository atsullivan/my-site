import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem, Row, Col, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-body">

        <div className="header">
          <h2>Andrew Sullivan</h2>
          <h1>sully</h1>
          <h2>software engineer</h2>
        </div>

        {/* picture, paragraph about myself */}
        <div className="about">
          <h1>Hi, I'm Andrew Sullivan.</h1>
          <p>
            I'm a rails developer working at Procore Technologies in beautiful Santa Barbara California.
            I am as passionate about write code as I am about designing beautiful products.
          </p>
        </div>



        {/* web development, ui design, ... */}
        <div className="whatido"></div>
        {/* languages, tools, knowledge */}
        <div className="skills"></div>
        <div className="work"></div>



        <div className="footer">
          <i className="fa fa-envelope-o fa-3x"></i>
          <i className="fa fa-linkedin-square fa-3x"></i>
          <i className="fa fa-github fa-3x"></i>
          <i className="fa fa-instagram fa-3x"></i>
          <i className="fa fa-facebook-official fa-3x"></i>
          <h1>sully</h1>
        </div>

      </div>
    );
  }
}

export default App;
