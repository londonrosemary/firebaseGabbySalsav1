import React from "react";
import { Container } from "react-bootstrap";

export default function Landing() {
  return (
    <Container>
      <div className="intro">
        <a href="/home">
          <img
            src="https://i.imgur.com/agVQ7eM.png"
            alt="Gabby's Salsa Motto Logo"
            className="landingLogo"
          />
        </a>
      </div>
    </Container>
  );
}
