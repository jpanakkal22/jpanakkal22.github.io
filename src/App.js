import React, { useState } from 'react';
import JmboTron from './components/JmboTron';
import { Container, Row, Col } from 'react-bootstrap';
import Projects from "./components/Projects";
import ProfilePic from "./components/ProfilePic";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import data from "./projects.json";
import "./App.css";

const App = () => {
  const [project] = useState(data); 

  return (   
    <div id="mainDiv">      
      <JmboTron /> 
      <Container fluid>        
        <Row className="d-flex justify-content-center mt-5">          
          {project.map(proj => {
            return (              
              <Projects 
              key={proj.id}
              image={proj.image}
              name={proj.name}
              description={proj.description}
              link1={proj.hrefB}
              link2={proj.hrefA}
              />              
            )            
          })}     
        </Row>  
        <Row className="footerRow pt-4 mt-5">
          <Col sm={4} className="d-flex justify-content-center">            
            <ProfilePic />       
          </Col>
          <Col sm={8}>
            <Row className="footerRow">
              <Col sm={6}>
                <About />          
              </Col>
              <Col sm={6}>
                <Contact />
              </Col>
            </Row>            
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

