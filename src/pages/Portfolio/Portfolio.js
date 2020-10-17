import React from "react";
import {Row} from "react-bootstrap";
import "./style.css";

function Portfolio(props){   
return <main className="container">             
        <Row className="show-grid">{props.children}</Row>
       </main>
}

export default Portfolio;