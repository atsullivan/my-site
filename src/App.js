import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem, Row, Col, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-body">

        <Navbar className="custom-navbar" fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">SULLY</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">About</NavItem>
            <NavItem eventKey={2} href="#">Work</NavItem>
            <NavItem eventKey={3} href="#">Contact</NavItem>
          </Nav>
        </Navbar>

        <Grid>
          <Row className="intro">
            <Col className="intro-col">
              <h1>SULLY</h1>
            </Col>
          </Row>
          <Row className="about">
            <Col>
              <p>
                I'm a Developer with a passion for design, living in Santa Barbara, CA.
                I work for Procore Technologies as a backend engineer.
              </p>
            </Col>
          </Row>
          <Row className="work">
            <Col>
            <h1>Latest Projects</h1>
            </Col>
          </Row>
          <Row className="contact">
            <Col>
            <h1>Let's talk</h1>
            <h2>andrew.sullivan@procore.com</h2>
            </Col>
          </Row>
          <Row className="footer">
            <Col>
            <h1>Links</h1>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
