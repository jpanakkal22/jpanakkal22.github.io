import React from "react";
import Card from 'react-bootstrap/Card';
import "./style.css";

function Projects(props) {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={props.image} alt={props.name}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>  
      <Card.Body>
        <Card.Link href={props.link1} target="_blank" id="link1" rel="noreferrer">GitHub</Card.Link>
        <Card.Link href={props.link2} target="_blank" id="link2" rel="noreferrer">View</Card.Link>
      </Card.Body>
    </Card> 
  )    
}

export default Projects;