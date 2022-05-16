import React from "react";
import { Container } from "react-bootstrap";

export default function Landing() {
  return (
    <Container>
      <div className="intro">
        <a href="/home">
          <img
            src="https://i.imgur.com/LpgEW8O.png"
            alt="Gabby's Salsa Motto Logo"
            className="fade-in-text"
          />
        </a>
        <br />
        <a href="/home">
          <img
            src="https://i.imgur.com/RHjJSbv.png?1"
            alt="Gabby's Salsa"
            className="landingLogo"
          />
        </a>
      </div>
    </Container>
  );
}
