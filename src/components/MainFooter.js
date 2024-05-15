import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../styles/Footer.css'; // You can define your styles in a separate CSS file

export default function MainFooter() {
  return (
    <footer className="footer">
      <Container>
            <Row className='justify-content-around mb-3'>
                <Col md={3} sm={6}>
                    <h2 as={ Link } to="/">Ray Visions</h2>
                    <p>Liquid Core Light Guides and Radiation Imaging Products</p>
                </Col>
            
                <Col md={3}>
                    <h5>Contact Us</h5>
                    <p>Email: sales@rayvisions.com</p>
                    <p>Phone: (757)-865-6442</p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6} className="text-center">
                    <p>&copy; {new Date().getFullYear()} Ray Visions Inc. All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  );
};

