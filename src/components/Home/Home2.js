import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET US <span className="purple"> INTRODUCE </span> OURSELF
            </h1>
            <p className="home-about-body">
              At Nashtech, we excel in crafting exceptional user experiences through our leading frontend competency.<br />Our team combines creativity and technical prowess to deliver visually stunning, responsive designs. Key highlights include:
              <br />
              <i><b className="purple">User-Centric Design:</b></i> Prioritizing usability and aesthetics for an engaging interface.
              <br />
              <i><b className="purple">Cutting-Edge Technologies:</b></i> Expertise in 
              <i><b className="purple">ReactJs, AngularJs, NodeJs, and other top frameworks</b></i>.
              <br />
              <i><b className="purple">Performance Optimization:</b></i> Ensuring fast-loading applications through advanced optimization techniques.
              <br />
              <i><b className="purple">Cross-Browser Compatibility:</b></i> Rigorous testing for consistent experiences across major browsers.
              <br />
              <i><b className="purple">Collaborative Approach:</b></i> Seamless integration with stakeholders, designers, and backend teams.
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
            <ul className="home-about-social-links">
              {/* <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li> */}
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/showcase/information-architecture-adaptive-user-interfaces/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
