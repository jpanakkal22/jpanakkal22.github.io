import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    
<nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Josh Panakkal</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="https://www.linkedin.com/in/josh-panakkal-6a0644a5/"><i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></a>
          <a class="nav-item nav-link" href="https://github.com/jpanakkal22"><i class="fa fa-github fa-lg" aria-hidden="true"></i></a>
          <a class="nav-item nav-link" href="Assets/Files/Resume.pdf"><i class="fa fa-file-pdf-o fa-lg" aria-hidden="true"></i></a>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item nav-link active">
            <a class="nav-link" href="#">Home </a>
          </li>
          <li class="nav-item nav-link active">
            <a class="nav-link" href="#">Portfolio</a>
          </li>
          <li class="nav-item nav-link active">
            <a class="nav-link" href="#">Contact</a>
          </li>
          
        </ul>
      </div>
    </nav>

    
    
    
  );
}

export default Navbar;
