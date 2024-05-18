import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCode, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'; // Import the CSS file
import logo from './logo.png'; // Adjust the path if necessary

const MyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar className={`navbar-custom ${scrolled ? 'scrolled' : ''}`} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#introduction">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="My Portfolio logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#work-experience">
              <FontAwesomeIcon icon={faBriefcase} className="me-2 nav-icon-custom" />
              Work Experience
            </Nav.Link>
            <Nav.Link href="#skills">
              <FontAwesomeIcon icon={faCode} className="me-2 nav-icon-custom" />
              Skills
            </Nav.Link>
            <Nav.Link href="#projects">
              <FontAwesomeIcon icon={faProjectDiagram} className="me-2 nav-icon-custom"  />
              Projects
            </Nav.Link>
            <Nav.Link href="#contact">
              <FontAwesomeIcon icon={faEnvelope} className="me-2 nav-icon-custom" />
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
