import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { RiAddLine } from "react-icons/ri";
import { AiOutlineMinus } from "react-icons/ai";
import { Container } from "react-bootstrap";




const ExperienceBlocks = ({
  company,
  designation,
  location,
  Website,
  index,
  setInd,
  resp,
}) => {
  return (
    <div className="exp-acc">
      <button style={{ width: "100%" }} onClick={setInd}>
        {company} @ {designation} {index ? <AiOutlineMinus /> : <RiAddLine />}
      </button>
      {index && (
        <div className="exp-section">
          <div className="d-flex justify-content-flexstart alignitems-center">
            <address>
              <MdLocationOn /> {location} , <FaExternalLinkAlt />{" "}
              <a href={Website}>www.kernshell.com</a>
            </address>
          </div>
          <p>{resp}</p>
          <div className="skills">
            <span>HTML</span>
            <span>CSS,SASS,BOOTSTAP,Tailwind</span>
            <span>Javascript</span>
            <span>ReactJs</span>
            <span>Redux</span>
          </div>
        </div>
      )}
    </div>
  );
};




const Experience = () => {
  const [experience, setExperience] = useState(false);
  return (
    <div id="experience">
      <Container>
        <h1>
          Professional <br />
          Experience
        </h1>

        <ExperienceBlocks
          company="Kernshell Technologies , Pvt Ltd."
          designation="Frontend Developer"
          location="Ahmedabad , Gujarat , India"
          Website="https://www.kernshell.com/"
          index={experience}
          resp="Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK."
          setInd={() => setExperience(!experience)}
        />
      </Container>
    </div>
  );
};

export default Experience;
