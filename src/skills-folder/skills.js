import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNodeJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { motion, useInView } from 'framer-motion';
import './skills.css';

const Skills = () => {
  const workExperienceRef = React.useRef(null);
  const skillsRef = React.useRef(null);
  const workExperienceInView = useInView(workExperienceRef, { once: true });
  const skillsInView = useInView(skillsRef, { once: true });

  return (
    <Container className="my-5">
      <Row className="mt-5 skill-column">
        <Col>
          <motion.div
            ref={workExperienceRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: workExperienceInView ? 1 : 0, y: workExperienceInView ? 0 : 50 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ marginTop: '5rem', marginBottom: '5rem' }}
          >
            <h2 id="work-experience" className="new-fix">Work Experience</h2>
            <ListGroup>
            <ListGroup.Item className="font-work cute-font">
  <h5>Project Coordinator - Divine Software Systems</h5>
  <p>May 2024 - Present</p>
  <p>- Developed and maintained applications</p>
  <p>- Coordinated project activities to ensure all project milestones were met and work was completed on time.</p>
  <p>- Recorded and transcribed meeting notes to facilitate clear communication and project tracking.</p>
</ListGroup.Item>
              <ListGroup.Item className="font-work cute-font">
                <h5>Corresponding Secretary - Theta Tau</h5>
                <p>August 2023 - Present</p>
                <p>- Manage and maintain the fraternity’s correspondence archive, providing an efficient digital filing system to enhance accessibility and efficiency</p>
                <p>- Communicate with other chapters of Theta Tau, playing a key role in the coordination and planning of joint events and initiatives, fostering a sense of community and collaboration </p>
                <p>- Work closely with members to streamline organizational operations, to create and maintain an e   cient, supportive environment for fraternity members, emphasizing professional development, academic excellence, and peer mentorship</p>
              </ListGroup.Item>
            </ListGroup>
          </motion.div>
        </Col>
      </Row>
      <Row className="skill-column">
        <Col>
          <motion.div
            ref={skillsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: skillsInView ? 1 : 0, y: skillsInView ? 0 : 50 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ marginTop: '20px', marginBottom: '20px' }}
          >
            <h2 className="mt-5 new-fix" id="skills">Skills & Technologies</h2>
            <ListGroup>
              <ListGroup.Item className="d-flex align-items-center font-change cute-font">
                <FontAwesomeIcon icon={faJs} className="me-2" />
                JavaScript
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center font-change cute-font">
                <FontAwesomeIcon icon={faReact} className="me-2" />
                React
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center font-change cute-font">
                <FontAwesomeIcon icon={faNodeJs} className="me-2" />
                Node.js
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center font-change cute-font">
                <FontAwesomeIcon icon={faBootstrap} className="me-2" />
                Bootstrap
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center font-change cute-font">
                <FontAwesomeIcon icon={faCode} className="me-2" />
                Python
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center font-change cute-font">
                <FontAwesomeIcon icon={faCode} className="me-2" />
                C++
              </ListGroup.Item>
            </ListGroup>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
