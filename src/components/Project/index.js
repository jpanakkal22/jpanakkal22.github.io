import React from "react";
import {Col} from "react-bootstrap";
import "./style.css";

function Project(props){
    console.log(props.image);
    return(
        <Col md={6} className="background">
        <div className="card">
            <img alt={props.name} src={props.image} />
            <div className="card-body">
            <h6 className="card-title text-body">{props.name}</h6>
            </div>
            <div className="card-body">
                <a href={props.hrefA} className="card-link" target="_blank" rel="noopener noreferrer">URL</a>
                <a href={props.hrefB} className="card-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
        </Col>
        
        
    )
}

export default Project;