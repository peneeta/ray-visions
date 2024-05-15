import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"

export default function MainNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Ray Visions</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={ Link } to="/">Home</Nav.Link>
              
              <NavDropdown title="Light Guides" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Displays</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Industrial</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Bulbs</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={ Link } to="/">Medical</Nav.Link>
              <Nav.Link as={ Link } to="/">Pricing</Nav.Link>
              <Nav.Link as={ Link } to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
