import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <div>
      <Container>
        <h1>About Me</h1>

        <Row>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="profile-picture.jpg" // Ganti dengan URL gambar profil Anda
              />
              <Card.Body>
                <Card.Title>Your Name</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac leo eget lorem scelerisque facilisis.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>My CV</Card.Title>
                <Card.Text>
                  <strong>Education:</strong>
                  <ul>
                    <li>Bachelor's Degree in Computer Science - University XYZ</li>
                    <li>Master's Degree in Web Development - University ABC</li>
                  </ul>
                  <strong>Work Experience:</strong>
                  <ul>
                    <li>Software Engineer at Company 123 (2010-2015)</li>
                    <li>Front-end Developer at Company XYZ (2016-Present)</li>
                  </ul>
                  <strong>Skills:</strong>
                  <ul>
                    <li>Web Development (HTML, CSS, JavaScript)</li>
                    <li>React, React Bootstrap</li>
                    <li>Node.js, Express.js</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
