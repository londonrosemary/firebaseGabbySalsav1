import React from "react";
import { Container } from "react-bootstrap";

export default function Contact(props) {
  //   const githubClick = () => {
  //     window.open("https://github.com/koltvictor", "_blank");
  //   };

  //   const twitterClick = () => {
  //     window.open("https://twitter.com/koltadams", "_blank");
  //   };

  //   const emailClick = () => {
  //     window.open("mailto:kolt@koltdesigns.com");
  //   };

  //   const linkedInClick = () => {
  //     window.open("https://www.linkedin.com/in/koltadams/", "_blank");
  //   };

  return props.trigger ? (
    <Container>
      <div className="contactWrapper">
        <div className="logoContainer">
          <img
            className="contactImage"
            // onClick={emailClick}
            src="https://i.imgur.com/mFmZi9s.jpg"
            alt="email"
          />
          <p className="contactText">Have a question?! Email Gabby!</p>
          <img
            className="contactImage"
            // onClick={linkedInClick}
            src="https://i.imgur.com/aNFgBpX.png"
            alt="LinkedIn"
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
