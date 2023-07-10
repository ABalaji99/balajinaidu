import React from "react";
import { Container } from "react-bootstrap";
import Navigationbar from "../Navigation/Navigationbar";
import { BsMouse3Fill } from "react-icons/bs";

import '../header/header.css'

const Head = () => {
  const headStyle = {
    height: "100vh",
    position : "relative",
    width: "100%",
    color: "#fff",
  };


  const headerTextStyles={
   
    textAlign:"center",
    position:"relative",
    bottom:"100%"
  }
  return (
    <div id="home" style={headStyle}>
      <Container fluid style={{ padding: "0" }}>
        <Navigationbar />
        <Container id="header-txt" style={headerTextStyles}>
          <h1>
            BALAJI NAIDU
          </h1>
          <p>SOFTWARE ENGINEER, FRONT END DEVELOPER.</p>

          <div className="mouse">
            <BsMouse3Fill style={{ color: "#000" }} />
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Head;
