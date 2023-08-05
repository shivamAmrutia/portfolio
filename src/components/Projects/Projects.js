import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import healthify from "../../Assets/Projects/healthify.png";
import readews from "../../Assets/Projects/readews.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthify}
              isBlog={false}
              title="Healthify"
              description="Healthify is a web application designed to empower individuals in remote areas with limited medical aid. This user-friendly platform offers a symptom checker and evidence-based remedies, providing vital health information to those in need. With multilingual support and offline accessibility, Healthify aims to bridge healthcare gaps and improve well-being for all, regardless of location."
              ghLink="https://github.com/shivamAmrutia/healthGo-frontend"
              demoLink="https://github.com/shivamAmrutia/healthGo-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={readews}
              isBlog={false}
              title="Readews"
              description="Readews is a web application that provides a seamless news consumption experience. Stay informed with a glance at the latest headlines, and if something piques your interest, dive deeper into the full articles. With Readews, you have the power to filter news by various topics, creating a personalized newsfeed tailored to your preferences. Discover and explore the world's stories, effortlessly curated just for you, all in one place.  "
              ghLink="https://github.com/shivamAmrutia/Readews"
              demoLink="https://readews.netlify.app/  "
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
