import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import {Button} from "react-bootstrap";

export const Jumbotron = () => {
  return (
    <div>
      <Jumbo fluid className="jumbo">
        <div className="overlay">
          <Container className="jumbo-text">
            <h1>Welcome to CSPBlog</h1>
            <p>
             I am a Traveller, and i share my travel experience with world-wide
            </p>
            <Button className="btn">Explore with CSP</Button>
          </Container>
        </div>
      </Jumbo>
    </div>
  )
};
