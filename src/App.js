import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem, Row, Col, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-body">

        <Navbar className="custom-navbar" staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">sully</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">About</NavItem>
            <NavItem eventKey={2} href="#">Work</NavItem>
            <NavItem eventKey={3} href="#">Contact</NavItem>
          </Nav>
        </Navbar>

        <div className="intro section">
          <h2>Hello World.  I'm a software engineer and a designer</h2>
        </div>

        <div className="about section">
          <h2>
            Web Development: Rails and react,
            UI Design,
            Brand Development,
            Writing,
            Security
          </h2>
        </div>

        <div className="contact section">
          <h1>Let's Talk.</h1>
          <h2><a href="mailto:andrew.sullivan@procore.com?">andrew.sullivan@procore.com</a></h2>
        </div>


        <div className="footer">
          <i href="/" className="fa fa-linkedin-square fa-3x"></i>
          <i className="fa fa-github fa-3x"></i>
          <i className="fa fa-instagram fa-3x"></i>
          <i className="fa fa-facebook-official fa-3x"></i>
        </div>

      </div>
    );
  }
}

export default App;
