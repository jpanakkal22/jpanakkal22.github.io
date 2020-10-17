import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    
    <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Josh Panakkal</Link>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link to="https://www.linkedin.com/in/josh-panakkal-6a0644a5/" className="nav-item nav-link"><i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></Link>
          <Link to="https://github.com/jpanakkal22" className="nav-item nav-link"><i class="fa fa-github fa-lg" aria-hidden="true"></i></Link>
          <Link to="Assets/Files/Resume.pdf" className="nav-item nav-link"><i class="fa fa-file-pdf-o fa-lg" aria-hidden="true"></i></Link>
          {/* <a class="nav-item nav-link" href="https://www.linkedin.com/in/josh-panakkal-6a0644a5/"><i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></a>
          <a class="nav-item nav-link" href="https://github.com/jpanakkal22"><i class="fa fa-github fa-lg" aria-hidden="true"></i></a>
          <a class="nav-item nav-link" href="Assets/Files/Resume.pdf"><i class="fa fa-file-pdf-o fa-lg" aria-hidden="true"></i></a> */}
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item nav-link active">
          <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/Home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
          </Link>            
          </li>
          <li class="nav-item nav-link active">
          <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
          </Link>
            
          </li>
          <li class="nav-item nav-link active">
          <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
          </Link>
            
          </li>          
        </ul>
      </div>
    </nav>    
  );
}

export default Navbar;
