import React, { useState } from "react";
import { Work } from "../../assests/Workfilterassests";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../images/Projects/project.jpg";
import './mywork.css'

const Workfilter = () => {
  const [filters, setfilters] = useState(Work);

  const allprojects = () => {
    return setfilters(Work);
  };

  const frontendProjects = () => {
    const frontend = Work.filter((x) => x.filteringID === "frontend");
    setfilters(() => frontend);
  };

  const fullstackProjects = () => {
    const fullstack = Work.filter((x) => x.filteringID === "fullstack");
    setfilters(()=>fullstack);
  };

  return (
    <div id="fiter">
      <Container>
        <div className="d-flex justify-content-flexstart align-items-center">
          <h6>Filter by :</h6>
          <button onClick={allprojects}>All</button>
          <button onClick={frontendProjects}>Frontend Projects</button>
          <button onClick={fullstackProjects}>Full stack Projects</button>
        </div>

        <Row>
          {filters.map((items) => (
            <Col xl={4} key={items.id} id="workCards">
              <a href=" ">
                <div className="card">
                  <img src={img} alt={items.description} />
                  <p>{items.description}</p>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Workfilter;
