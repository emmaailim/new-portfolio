import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import myPic from './emma.png';
import './intro.css'; // Import custom CSS for styling

const Introduction = () => {
  return (
    <Container className="my-5 intro-class" id="introduction">
      <Row className="align-items-center">
        <Col md={8}>
          <h1 className="cute-font">Hello, I'm Emma Lim!</h1>
          <p className="cute-font">I'm a sophomore, pursuing Computer Science at California State University, Fullerton.</p>
        </Col>
        <Col md={4}>
          <Image src={myPic} rounded fluid className="intro-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
