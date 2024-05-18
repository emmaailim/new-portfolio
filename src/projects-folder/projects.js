import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import img1 from './img1.png';
import './projects.css';
import img2 from './img2.png';

const projects = [
  {
    title: 'My Portfolio',
    description: 'This project showcases the development of a modern web application, demonstrating my skills in front-end. I choose to use Bootstrap and CSS for styling, as well as Framer Motion for animations. It was my first experience using React, and I successfully built an interactive and dynamic user interface.',
    technologies: 'Technologies Used: React, Bootstrap, Node.js, JSX',
    link: 'https://github.com/emmaailim/new-portfolio',
    image: img1
  },
  {
    title: 'Rover Project',
    description: 'This porject was completed with various engineering majors. I contributed to implementing motor and controller controls using Vex Robotics, resulting in enhanced rover maneuverability. Additionally, I refined control systems to ensure reliable performance under different terrain conditions.',
    technologies: 'Technologies Used: Vex Robotics and C++',
    link: '#',
    image: img2
  }
];

const Projects = () => {
  const projectsRef = React.useRef(null);
  const projectsInView = useInView(projectsRef, { once: true });

  return (
    <Container className="my-5" id="projects">
      <Row>
        <Col>
          <motion.div
            ref={projectsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: projectsInView ? 1 : 0, y: projectsInView ? 0 : 50 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ marginTop: '5rem', marginBottom: '5rem' }}
          >
            <h2 className="new-fix">Projects</h2>
            <Row>
              {projects.map((project, index) => (
                <Col key={index} md={6}>
                  <Card className="my-3 project-card" onClick={() => window.location.href = project.link}>
                    <Card.Img variant="top" src={project.image} />
                    <Card.Body>
                      <Card.Title className="cute-font">{project.title}</Card.Title>
                      <Card.Text className="cute-font">{project.description}</Card.Text>
                      <Card.Text className="cute-font"><small className="text-muted">{project.technologies}</small></Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
