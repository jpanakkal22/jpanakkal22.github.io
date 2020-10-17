import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Project from "./components/Project";
import projects from "./projects.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects
  };
  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Router>
      <div> 
        <Navbar/>    
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio}>
          <Portfolio>{this.state.projects.map(proj =>(
            <Project
            key={proj.id}
            name={proj.name}
            image={proj.image}
            hrefA={proj.hrefA}
            hrefB={proj.hrefB}
            />
          ))}</Portfolio> 
          </Route>
          <Route exact path="/contact" component={Contact} />          
        </Wrapper>
        
        <Footer />  
      </div> 
         
    </Router>
    );
  }
}


export default App;

