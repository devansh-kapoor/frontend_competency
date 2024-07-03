import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import knurons from "../../Assets/Projects/knurons.png";
import serverless from "../../Assets/Projects/serverless.png";
import microFrontend from "../../Assets/Projects/microFrontend.png";
import svelte from "../../Assets/Projects/svelte.png";
import comingSoon from "../../Assets/Projects/comingsoon.jpg";
import adminDashboard from "../../Assets/Projects/admin_dashboard.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Solutions </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects We've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adminDashboard}
              isBlog={false}
              title="EventX"
              description={<p>Event Management System is a <span className="purple"> React Native </span>app simplifying event management. Organizers 
              effortlessly create and manage events, while participants discover and RSVP to events seamlessly. 
              Enjoy real-time updates and a user-friendly experience for organizing and attending events.
              </p>}
              ghLink="https://github.com/NashTech-Labs"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microFrontend}
              isBlog={false}
              title="Multi Tenant Management System"
              description={
                <p>
                  Our Multi-Tenant Management System leverages a cutting-edge
                  <span className="purple"> Microfrontend </span> architecture,
                  seamlessly integrating{" "}
                  <span className="purple"> Angular </span> and{" "}
                  <span className="purple"> React.js </span> components. Powered
                  by a serverless backend, this innovative approach ensures
                  scalability, flexibility, and efficient management across
                  multiple tenants. Experience the best of both Angular and
                  React within a unified system, optimizing performance and user
                  experience.
                </p>
              }
              ghLink="https://github.com/NashTech-Labs/FrontEndCompetency_MicroFrontends"
              demoLink="https://piyushagrawal1243.github.io/multi-tenant-management/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={svelte}
              isBlog={false}
              title="Learning & Development Management"
              description={
                <p>
                  Our Learning & Development Management System, built using{" "}
                  <span className="purple">Svelte.js </span>, is a streamlined
                  solution designed to effectively track and manage interns'
                  progress. With a focus on simplicity and performance,
                  Svelte.js powers a responsive and intuitive interface,
                  providing a seamless experience for monitoring and enhancing
                  interns' learning journeys. Efficiently organize, track, and
                  optimize the development of your interns with our
                  purpose-built system.
                </p>
              }
              ghLink="https://github.com/NashTech-Labs/FrontEndCompetency_Svelte"
              demoLink="https://front-end-competency-svelte-anujtomar00.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={serverless}
              isBlog={false}
              title="Serverless Computing with NodeJs"
              description={
                <p>
                  Embrace the power of serverless computing with our Node.js
                  backend seamlessly integrated into our Multi-Tenant Management
                  System. This project leverages the efficiency and scalability
                  of <span className="purple">serverless</span> architecture, providing a robust foundation for our
                  multi-tenant environment. Enjoy the flexibility of <span className="purple">Node.js</span> for streamlined, 
                  event-driven processes that enhance the overall performance and responsiveness of your system.
                </p>
              }
              ghLink="https://github.com/NashTech-Labs/FrontEndCompetency_Serverless"
              demoLink="https://piyushagrawal1243.github.io/multi-tenant-management/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={knurons}
              isBlog={false}
              title="Knurons"
              description={
                <p>Kuronurs, our <span className="purple">React</span> -based application, serves as a centralized hub for efficiently managing IoT devices. 
              This project brings together the power of React for a dynamic and responsive user interface, ensuring seamless interaction 
              with a diverse array of IoT devices. From monitoring to control, Knurons simplifies the complexity of IoT device management, 
              providing a user-friendly platform for streamlined operations.
              </p>}
              ghLink="https://github.com/Knurons/knurons-ui"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingSoon}
              isBlog={false}
              title="Videogram"
              description={<p>Videogram is an <span className="purple">Ionic Angular </span> app for sharing and discovering videos. Users can upload, 
              manage profiles, and engage with a vibrant community through likes and comments. Explore trending content 
              in this dynamic video-sharing platform.
              </p>}
              ghLink="https://github.com/NashTech-Labs"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
