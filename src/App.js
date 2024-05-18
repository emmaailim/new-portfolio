// src/App.js

import React from 'react';
import { Container } from 'react-bootstrap';
import MyNavbar from './navbar-folder/navbar'; // Adjust the path as necessary
import Introduction from './intro-folder/introduction';
import Skills from './skills-folder/skills';
import Projects from './projects-folder/projects';
import Contact from './contact-folder/contact';
import Footer from './footer-folder/footer'; // Adjust the path as necessary

function App() {
  return (
    <div>
      <MyNavbar />
      <Container fluid className="pt-5">
        <Introduction />
        <Skills />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
