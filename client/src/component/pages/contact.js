import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to a server
    console.log(formData);
  };

  return (
    <Container>
      <Row>
        <Col classname="text-white">
          <h1>Contact Us</h1>
          <p>Feel free to send us your feedback or suggestions.</p>

          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} name="message" value={formData.message} onChange={handleChange} required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
