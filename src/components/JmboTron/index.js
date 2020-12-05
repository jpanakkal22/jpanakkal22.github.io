import React from "react";
import {Container, Jumbotron} from 'react-bootstrap';
import "./style.css";

function JmboTron() {
    return (
        <Jumbotron fluid>
            <Container className="container">
            <h1>JOSH PANAKKAL</h1>
            <p>FULL STACK WEB DEVELOPER</p>
            </Container>
      </Jumbotron>
    )
}

export default JmboTron;