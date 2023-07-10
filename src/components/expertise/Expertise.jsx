import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {MdComputer  } from 'react-icons/md'
import {FaReact  } from 'react-icons/fa'
import {BsServer } from 'react-icons/bs'
import './expertise.css'


const Expertise = () => {
  return (
    <div id="expertise">
        <Container>
            <h1>My Expertise</h1>
            <Row>
              <Col>
                 <h1><MdComputer/> Software  <br /> Development</h1>
                 <div>
                   <span>h3</span>
                    <h3>Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.</h3>
                   <span>h3</span>
                 </div>
              </Col>
              <Col>
                 <h1><FaReact/> Frontend Dev <br /> React, NextJs</h1>
                 <div>
                   <span>h3</span>
                    <h3>Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</h3>
                   <span>h3</span>
                 </div>
              </Col>
              <Col>
                 <h1><BsServer/> Backend  <br /> Development</h1>
                 <div>
                   <span>h3</span>
                    <h3>Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.</h3>
                   <span>h3</span>
                 </div>
              </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Expertise