import React from 'react'
import { Container , Row , Col } from 'react-bootstrap';

import video from "../../videos/projects.mp4"
import Workfilter from './Workfilter';

const Myworks = () => {
  return (
    <div id='myworks'>
      <Container>
        <Row>
          <Col xl={6}>
            <h1>My Works</h1>
            <p>Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.
Collaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualization.</p>
          </Col>
          <Col xl={6}>
              <Row>
                <Col xl={6}>
                    <h5>Featured Projects</h5>
                    <h3>Open source Application</h3>
                </Col>
                <Col>
                  <video src={video} autoPlay muted loop style={{width:"100%", objectFit:"contain"}}></video>
                </Col>
              </Row>
          </Col>
        </Row>
        <Workfilter/>
      </Container>
    </div>
  )
}

export default Myworks