import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ECommerce from "../../Assets/Projects/ECommerce.png";
import Quiz from "../../Assets/Projects/Quiz.png";
import Food from "../../Assets/Projects/Food.png";
import Dental from "../../Assets/Projects/Dental.png";
import Construction from "../../Assets/Projects/Construction.png";
import Fraud from "../../Assets/Projects/Fraud.jpg";

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
              imgPath={ECommerce}
              isBlog={false}
              title="Desi Deals"
              description="A MERN stack-based e-commerce website is a dynamic online platform that utilizes MongoDB, Express.js, React, and Node.js to provide a seamless shopping experience.
              It allows users to browse products, manage their cart, make secure payments, and track orders, all in real-time
              "
              ghLink="https://github.com/AjayThengale/E-Commerce-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quiz}
              isBlog={false}
              title="Byte Battle"
              description="A quiz website built using Angular is a robust, interactive platform leveraging Angular's powerful framework for creating dynamic and responsive web applications.This project highlights Angular's capabilities to handle complex data flows and making it ideal for creating feature-rich quiz applications."
              ghLink="https://github.com/AjayThengale/Quiz-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Food}
              isBlog={false}
              title="Sasta Swiggy"
              description="E-commerce Website developed with a budget-friendly food delivery platform inspired by Swiggy using Angular. The application offers features like trending food, order placement, and real-time updates with a smooth user experience.
               It demonstrates my skills in building scalable front-end applications with interactive UI components."
              ghLink="https://github.com/AjayThengale/Sasta-Swiggy-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dental}
              isBlog={false}
              title="Dental Clinic"
              description="Website developed with a responsive dental clinic appointment website using Bootstrap. The platform streamlines appointment scheduling, providing an intuitive user interface for patients to book, reschedule, and manage appointments with ease. Its design ensures compatibility across various devices and screen sizes."  
              ghLink="https://github.com/AjayThengale/Clinic-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Construction}
              isBlog={false}
              title="Real State"
              description="Creating a real estate website involves using HTML, CSS, and potentially JavaScript to create an interactive, visually appealing, and user-friendly interface with CSS helps in styling and organizing the layout of the website to ensure a professional look that appeals to potential buyers and 
              sellerswhile a contact section with inquiry forms, chat options, and contact details ensures seamless communication."
              ghLink="https://github.com/AjayThengale/Construction-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fraud}
              isBlog={false}
              title="Credit Card Fraud Detection System"
              description="A credit card fraud detection system leveraging a Kaggle dataset and data science techniques.
               The system analyzes transactional data to accurately identify fraudulent activities, providing insights and enhancing financial security measures."
              ghLink="https://github.com/AjayThengale/Credit-Card-Fraud-Detection-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
