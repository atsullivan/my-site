import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem, Row, Col, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-body">

        <div className="intro-col">
          <h2>Andrew Sullivan</h2>
          <h1>sully</h1>
          <h2>software engineer</h2>
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
