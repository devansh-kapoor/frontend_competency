import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import knurons from "../../Assets/Projects/knurons.png";
import serverless from "../../Assets/Projects/serverless.png";
import microFrontend from "../../Assets/Projects/microFrontend.png";
import svelte from "../../Assets/Projects/svelte.png";
import comingSoon from "../../Assets/Projects/comingsoon.jpg";
import adminDashboard from "../../Assets/Projects/admin_dashboard.jpg";

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
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={adminDashboard}
              isBlog={false}
              title="EventX"
              description={
                <p>
                  EventX is an innovative mobile app built with{" "}
                  <span className="purple"> React Native</span> and
                  <span className="purple"> NestJS </span>, designed for
                  seamless event registration and management. Users can easily
                  sign up, browse events, register, and navigate to event
                  locations using Google Maps. For administrators, EventX offers
                  a comprehensive dashboard with insightful metrics on users and
                  events. Admins have full control over event management,
                  including creating, reading, updating, and deleting events.
                  This ensures a smooth, efficient, and streamlined event
                  management experience for all users.
                </p>
              }
              ghLink="https://github.com/NashTech-Labs"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={microFrontend}
              isBlog={false}
              title="OrgX"
              description={
                <p>
                  OrgX is a cutting-edge Human Resource Management System (HRMS)
                  portal designed to streamline and enhance the HR functions of
                  any organization. Developed using{" "}
                  <span className="purple"> Angular </span>,{" "}
                  <span className="purple"> React </span> &{" "}
                  <span className="purple"> NestJs </span>, OrgX is built to
                  manage multi-tenant systems, ensuring that multiple
                  organizations can operate within the same platform securely
                  and efficiently. The portal is designed to be scalable,
                  robust, and user-friendly, providing comprehensive HR
                  solutions from recruitment and onboarding to payroll and
                  performance management.
                </p>
              }
              ghLink="https://github.com/NashTech-Labs/FrontEndCompetency_MicroFrontends"
              demoLink="https://piyushagrawal1243.github.io/multi-tenant-management/login"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
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

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={serverless}
              isBlog={false}
              title="Serverless Computing with NodeJs"
              description={
                <p>
                  Embrace the power of serverless computing with our Node.js
                  backend seamlessly integrated into our Multi-Tenant Management
                  System. This project leverages the efficiency and scalability
                  of <span className="purple">serverless</span> architecture,
                  providing a robust foundation for our multi-tenant
                  environment. Enjoy the flexibility of{" "}
                  <span className="purple">Node.js</span> for streamlined,
                  event-driven processes that enhance the overall performance
                  and responsiveness of your system.
                </p>
              }
              ghLink="https://github.com/NashTech-Labs/FrontEndCompetency_Serverless"
              demoLink="https://piyushagrawal1243.github.io/multi-tenant-management/login"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={knurons}
              isBlog={false}
              title="Knurons"
              description={
                <p>
                  Kuronurs, our <span className="purple">React</span> -based
                  application, serves as a centralized hub for efficiently
                  managing IoT devices. This project brings together the power
                  of React for a dynamic and responsive user interface, ensuring
                  seamless interaction with a diverse array of IoT devices. From
                  monitoring to control, Knurons simplifies the complexity of
                  IoT device management, providing a user-friendly platform for
                  streamlined operations.
                </p>
              }
              ghLink="https://github.com/Knurons/knurons-ui"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={comingSoon}
              isBlog={false}
              title="Videogram"
              description={
                <p>
                  Videogram is an <span className="purple">Ionic Angular</span> app for sharing and discovering
                  videos. Users can upload their own videos, manage personal
                  profiles, and engage with a vibrant community through likes
                  and comments. Explore trending content and discover new
                  creators on this dynamic video-sharing platform. With a
                  user-friendly interface and robust features, Videogram ensures
                  an engaging and interactive experience for all users.
                </p>
              }
              ghLink="https://github.com/NashTech-Labs"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
