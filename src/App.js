import React, { useState } from 'react';
import JmboTron from './components/JmboTron';
import { Container, Row, Col } from 'react-bootstrap';
import Projects from "./components/Projects";
import ProfilePic from "./components/ProfilePic";
import Footer from "./components/Footer";
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
        <Row className="d-flex flex-column mt-4">
          <Col sm={12} className="d-flex justify-content-center">
            <ProfilePic />            
          </Col>
          <Col sm={12} className="d-flex flex-column justify-content-center text-center mt-4 mb-4">
            <h3>Josh Panakkal</h3>
            <p>Full Stack Web Developer (MERN Stack) <br />Graduate of Case Western Reserve Coding Bootcamp <br />13 Years Industrial Maintenance Background <br />Father, Husband, Cyclist</p>
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>       
      </Container> 
    </div>            
  )
}
export default App;

