import React from 'react'


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Navigation/nav.css'




const Navigationbar = () => {

    const NavigationStyles={
        padding:"10px 20px",
    }
  return (
  <div id="navigation" style={NavigationStyles}>
       <Navbar expand="lg" >
    
      <Navbar.Brand href="#home" className='d-xl-none d-md-block d-sm-block' >balajinaidu<span>.</span> -</Navbar.Brand>
   
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
     
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">


       <Nav.Link href="#home">/ / home <sup>01</sup></Nav.Link> 
          <Nav.Link href="#expertise">/ / expertise <sup>02</sup></Nav.Link>
          <Nav.Link href="#work">/ / work <sup>03</sup></Nav.Link>
          <Nav.Link href="#experience">/ / experience <sup>04</sup></Nav.Link>
          <Nav.Link href="#contact">/ / contact <sup>05</sup></Nav.Link>
        </Nav>
      </Navbar.Collapse>
  

  </Navbar>
  </div>
  )
}

export default Navigationbar