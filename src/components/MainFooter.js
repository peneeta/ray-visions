import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../styles/Footer.css'; // You can define your styles in a separate CSS file

export default function MainFooter() {
  return (
    <footer className="footer">
      <Container>
            <Row>
                <Col md={4} sm={6}>
                    <h2>Ray Visions</h2>
                    <p>Liquid Core Light Guides and Radiation Imaging Products</p>
                </Col>
            </Row>

            <Row>
                <Col md={4} sm={6}>
                    <h5><Link to={"/"}>Home</Link></h5>
                    <h5>Light Guides</h5>
                    <ul className="footer-links">
                        <li><Link to={"/"}>Displays</Link></li>
                        <li><Link to={"/"}>Industrial</Link></li>
                        <li><Link to={"/"}>Bulbs</Link></li>
                        <li><Link to={"/"}>Medical</Link></li>
                    </ul>
                    <h5><Link to={"/"}>Pricing</Link></h5>
                    <h5><Link to={"/contact"}>Contact</Link></h5>
                </Col>
                <Col md={4}>
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

