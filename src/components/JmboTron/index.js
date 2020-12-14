import React from "react";
import {Container, Jumbotron} from 'react-bootstrap';
import "./style.css";

function JmboTron() {
    return (
        <Jumbotron className="mb-0 d-flex align-items-center">
            <Container className="d-flex flex-column align-items-center text-center">
                <h1>JOSH PANAKKAL</h1>
                <p>FULL STACK WEB DEVELOPER</p>
            </Container>
        </Jumbotron>
    )
}

export default JmboTron;