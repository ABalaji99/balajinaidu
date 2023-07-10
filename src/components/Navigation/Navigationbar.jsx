import React from 'react'
import { Col } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Navigation/nav.css'


const Navigationbar = () => {

    const NavigationStyles={
        padding:"10px 20px",
        
    }
  return (
  <div id="navigation" style={NavigationStyles}>
       <Navbar expand="lg" style={NavigationStyles}>
    
      <Navbar.Brand href="#home">balajinaidu<span>.</span> -</Navbar.Brand>
   
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
     
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">/ / home <sup>01</sup></Nav.Link>
          <Nav.Link href="#link">/ / expertise <sup>02</sup></Nav.Link>
          <Nav.Link href="#link">/ / work <sup>03</sup></Nav.Link>
          <Nav.Link href="#link">/ / experience <sup>04</sup></Nav.Link>
          <Nav.Link href="#link">/ / contact <sup>05</sup></Nav.Link>
        </Nav>
      </Navbar.Collapse>
  

  </Navbar>
  </div>
  )
}

export default Navigationbar