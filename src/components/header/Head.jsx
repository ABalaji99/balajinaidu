import React from "react";
import { Container } from "react-bootstrap";
import Navigationbar from "../Navigation/Navigationbar";
import { BsMouse3Fill } from "react-icons/bs";

import '../header/header.css'

const Head = () => {



  const headerTextStyles={
   
    textAlign:"center",
    position:"relative",
    bottom:"100%"
  }
  return (
    <div id="home">
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
