import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contact">
      <Container>
        <Row>
          <Col xl={6}>
            <h1>Available for select freelance opportunities</h1>
            <p>
              Have an exciting project you need help with? Send me an email or
              contact me via instant message!
            </p>

            <div className="social">
              <a href="mailto: amulunarayanabalaji@gmail.com">
                amulunarayanabalaji@gmail.com
              </a>

              <a href="BalajiNaidu">Instagram</a>
              <a href="BalajiNaidu">LinkedIn</a>
              <a href="BalajiNaidu">Github</a>
            </div>
          </Col>

          <Col xl={6}>
            <div className="testimonials">
              <Row>
                <Col xl={6}>
                  <p>
                    Since 2018 Tamal has been responsible for the development of
                    our website which has been instrumental to the growth of our
                    company. Even while working remotely he’s been highly
                    responsive, organized and strategic in his thinking. In
                    addition to staying on top of day-to-day site changes and
                    builds, he’s provided us with great advice to stay on top of
                    the current changes in web technologies. He’s also
                    implemented effective project management and Q&A processes.
                    As a result Tamal has been an highly valued and impactful
                    member of our team.
                  </p>
                  <p>- Mark Greenspan Founder at influenceTHIS Canada</p>
                </Col>
                <Col xl={6}>
                  <div>
                    <p>
                      Since 2018 Tamal has been responsible for the development
                      of our website which has been instrumental to the growth
                      of our company. Even while working remotely he’s been
                      highly responsive, organized and strategic in his
                      thinking. In addition to staying on top of day-to-day site
                      changes and builds, he’s provided us with great advice to
                      stay on top of the current changes in web technologies.
                      He’s also implemented effective project management and Q&A
                      processes. As a result Tamal has been an highly valued and
                      impactful member of our team.
                    </p>
                    <p>- Mark Greenspan Founder at influenceTHIS Canada</p>
                  </div>
                  <div>
                    <p>
                      Since 2018 Tamal has been responsible for the development
                      of our website which has been instrumental to the growth
                      of our company. Even while working remotely he’s been
                      highly responsive, organized and strategic in his
                      thinking. In addition to staying on top of day-to-day site
                      changes and builds, he’s provided us with great advice to
                      stay on top of the current changes in web technologies.
                      He’s also implemented effective project management and Q&A
                      processes. As a result Tamal has been an highly valued and
                      impactful member of our team.
                    </p>
                    <p>- Mark Greenspan Founder at influenceTHIS Canada</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
