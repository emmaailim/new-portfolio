import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';
import './contact.css'; // Import custom CSS for styling

const Contact = () => {
  const [state, handleSubmit] = useForm("xwkgzdvl"); // Replace "yourFormspreeID" with your actual Formspree form ID

  if (state.succeeded) {
    return (
      <Container className="my-5 text-center" id="contact">
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="paper-container p-4 cute-font">
              <h2 className="text-center new-fix">Thank You!</h2>
              <p>Your message has been successfully sent. I'll get back to you soon!</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="my-5" id="contact">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="paper-container p-4">
            <h2 className="text-center new-fix">Contact Me</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} placeholder="Enter your message" required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit" disabled={state.submitting}>
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
