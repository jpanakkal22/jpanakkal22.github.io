import React from "react";
import "./style.css";
import Profile from "./Img/profile-picture.jpg";




function About() {
  return (
    <main className="container main">
      <header className="row">
        <div className="col-md-12">
          <h3>About Me</h3>
          <hr/>
        </div>
      </header>      
      <div className="row">
        <img className="col-md-3" src={Profile} alt="Profile Picture"/>
        
        <div className="col-md-9">
          <p className="para">Hello everyone! My name is Josh Panakkal, and I am from Cleveland, Ohio. I am married to my lovely wife Vino, and am a new, 
            proud father to my son Gabriel. I am also switching careers and taking a Coding Bootcamp offered through Case Western Reserve 
            University.
          </p>         
          <p>
          I am a Web Developer with a Full Stack Web Development Certificate through Case Western Reserve University. I am knowledgeable with 
          HTML, CSS, Javascript, JQuery, API’s, the MERN stack, and GIT . I have strong problem solving skills gained from completing a Bachelors 
          in Science at Cleveland State University, and extensive professional experience troubleshooting industrial automation equipment for 13 years. Recently,
            I wanted to learn programming after gaining experience with using programmable logic controllers to troubleshoot machine controls. I have a strong work ethic both professionally and personally, and it is displayed through raising a family while learning coding through a bootcamp. I really enjoy creating things, especially on the graphics side which can be seen in some of my GitHub pages. On the other hand, I am driven to master the programming side because of the challenges of using computer language to interact with the user.  

          </p>
        </div>
      </div>   

    </main>
  );
}

export default About;
