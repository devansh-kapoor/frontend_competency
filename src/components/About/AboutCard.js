import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          At Nashtech, we excel in crafting exceptional user experiences through our leading frontend competency.<br />Our team combines creativity and technical prowess to deliver visually stunning, responsive designs. Key highlights include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <i><b className="purple">User-Centric Design:</b></i> Prioritizing usability and aesthetics for an engaging interface.
            </li>
            <li className="about-activity">
              <ImPointRight /> <i><b className="purple">Cutting-Edge Technologies:</b></i> Expertise in 
              <i><b className="purple">ReactJs, AngularJs, NodeJs, and other top frameworks</b></i>.
            </li>
            <li className="about-activity">
              <ImPointRight /> <i><b className="purple">Performance Optimization:</b></i> Ensuring fast-loading applications through advanced optimization techniques.
            </li>
            <li className="about-activity">
              <ImPointRight /> <i><b className="purple">Cross-Browser Compatibility:</b></i> Rigorous testing for consistent experiences across major browsers.
            </li>
            <li className="about-activity">
              <ImPointRight /> <i><b className="purple">Collaborative Approach:</b></i> Seamless integration with stakeholders, designers, and backend teams.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
