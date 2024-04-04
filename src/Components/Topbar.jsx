import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Routeshandler from "./Routeshandler";
import { Routes, Route, Link, useSearchParams } from "react-router-dom";

export default function Topbar() {
  // const [show, setShow] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <i className="bi bi-house-heart-fill h1"></i>בית
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                ראשי
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                התחברות
              </Nav.Link>
              <Nav.Link as={Link} to="/support">
                תמיכה
              </Nav.Link>
              <Nav.Link as={Link} to="/schools">
                בתי ספר
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                צור קשר
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                אודות
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routeshandler />
    </>
  );
}
