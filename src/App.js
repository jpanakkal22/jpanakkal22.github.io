import React, { useState } from 'react';
import JmboTron from './components/JmboTron';
import { Container, Row, Col } from 'react-bootstrap';
import Projects from "./components/Projects";
import data from "./projects.json";
import "./App.css";

function App() {
  const [project] = useState(data); 

  return (   
    <div>      
      <JmboTron /> 
      <Container fluid>        
        <Row className="row1 mt-5">
          {project.map(proj => {
            return (
              <Col sm={3} className="d-flex justify-content-center p-3">
                <Projects 
                image={proj.image}
                name={proj.name}
                />                          
              </Col>
            )            
          })}     
        </Row>
      </Container> 
    </div>            
  )
}
export default App;

