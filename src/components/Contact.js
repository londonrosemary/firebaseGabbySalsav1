import React from "react";
import { Container } from "react-bootstrap";

export default function Contact(props) {
  const emailClick = () => {
    window.open("mailto:gabbys.salsa@gmail.com");
  };

  const instaClick = () => {
    window.open("https://www.instagram.com/gabbys_salsa/", "_blank");
  };

  return props.trigger ? (
    <Container>
      <div className="contactWrapper">
        <div className="logoContainer">
          <img
            className="contactImage"
            onClick={emailClick}
            src="https://i.imgur.com/mFmZi9s.jpg"
            alt="email"
          />
          <p className="contactText">Have a question?! Email Gabby!</p>
          <img
            className="contactImage"
            onClick={instaClick}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
            alt="instagram"
          />
          <p className="contactText">Follow Gabby on Instagram</p>
          <br />
          <br />
          <br />
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            X close
          </button>
          {props.children}
        </div>
      </div>
    </Container>
  ) : (
    ""
  );
}
