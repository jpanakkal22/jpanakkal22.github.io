import React from "react";
import Nav from 'react-bootstrap/Nav';
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (    
    <Nav className="justify-content-around navbar">
    <Nav.Item>
      <Nav.Link eventKey="link-1">LinkedIn</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">GitHub</Nav.Link>
    </Nav.Item>    
  </Nav>   
  );
}

export default Navbar;
