import React from "react";
import Card from 'react-bootstrap/Card';
import "./style.css";

function Projects(props) {
  return (
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>  
      <Card.Body>
        <Card.Link href={props.link1} target="_blank" id="link1">GitHub</Card.Link>
        <Card.Link href={props.link2} target="_blank" id="link2">View</Card.Link>
      </Card.Body>
    </Card> 
  )    
}

export default Projects;