import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="homeWrapper">
        <Container>
          <h3 className="homePageTextWrapper">
            <div className="homePageText1">Authentic Recipe.</div>
            <div className="homePageText2"> Small batch.</div>
            <div className="homePageText3">
              Made to order with the freshest ingredients.
            </div>
          </h3>
        </Container>
        {/* <div className="newsletter">
          <h3 className="newsletter-title">Upcoming Events</h3>
        </div>
        <div className="eventsWrapper">
          <div className="events">
            <ul>
              <li>
                We are always updating our events schedule, but we don't have
                any upcoming events scheduled at the moment. Check back soon,
                though!
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}
