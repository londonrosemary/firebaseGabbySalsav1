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
          <h2 className="aboutHead">Introducing Gabby!</h2>
          <p className="aboutBody">
            She's the brains and talent behind this salsa operation. Born and
            raised in Las Vegas, Gabby grew up cooking authentic Mexican meals
            when helping her mom in the kitchen. She learned the ins-and-outs of
            traditional Mexican cooking and over the years has developed her own
            personal flair. <br />
            <br />
            Salsa Verde has always been a traditional part of Gabby's family's
            meals and Gabby has taken that traditional taste, honed it, and
            added her own unqiue spin on it to make it what it is today! Still
            one of the musts in Gabby's household, she is so thrilled to welcome
            everyone to bring the recipe into their own family gatherings.
            <br />
            <br />
            Gabby's Spicy Red Salsa is the newest addition to Gabby's
            must-haves. Savory and delicious, all of Gabby's Salsas are
            traditional, delectible, and delicious. Guaranteed to have the
            freshest ingredients in every batch with <strong>big</strong>{" "}
            flavor!
          </p>
          {/* <img src="https://i.imgur.com/pNEq9l5.png" alt="Gabby's Salsa" /> */}
        </Container>
      </div>
    </div>
  );
}
