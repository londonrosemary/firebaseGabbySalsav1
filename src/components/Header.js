import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import Contact from "./Contact";

export default function Header() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      className="navWrapper"
    >
      <Container>
        <Navbar.Brand href="/home">
          <img
            src="https://i.imgur.com/uYtMTCr.png"
            alt="logo"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} onClick={() => setButtonPopup(true)}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Contact trigger={buttonPopup} setTrigger={setButtonPopup} />
    </Navbar>
  );
}
