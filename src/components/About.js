import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <Header />
      <br />
      <div className="about">
        <Container className="aboutContainer">
          {/* <h1 className="aboutHead">About Gabby</h1> */}
          <p className="aboutBody">
            <strong>Introducing Gabby</strong> the brains and style of the
            operation. Born and raised in Las Vegas, Gabby grew up learning how
            to cook authentic Mexican meals by helping her mom in the kitchen.
            She painstakingly learned the ins-and-outs of traditional Mexican
            cooking and over the years has developed her own personal flair.
            Salsa Verde has always been a traditional part of Gabby's family's
            meals and Gabby took that traditional taste and updated it to what
            it is today! Still one of the musts in Gabby's household, she is so
            thrilled to welcome everyone to bring the recipe into their own
            family gatherings. The Red Salsa is the newest addition to Gabby's
            salsa must-haves. Savory and delicious, all of Gabby's Salsas are
            traditional, delectible, and delicious. Guaranteed to have the
            freshest ingredients in every batch with <strong>big</strong>{" "}
            flavor!
          </p>
          {/* <img src="https://i.imgur.com/pNEq9l5.png" alt="Gabby's Salsa" /> */}
        </Container>
        {/* <img
          src="http://s3.wp.wsu.edu/uploads/sites/2055/2017/07/iStock-477239111-1024x683.jpg"
          alt="salsa"
          className="aboutImg"
        /> */}
      </div>
    </div>
  );
}
