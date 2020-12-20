import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import "./style.css";

function Footer() {
  return (
    <footer className="footer container-fluid">
      <div className="row">
        <div className="col-md-12">
        <h6><FontAwesomeIcon icon={faCoffee} /> Enjoy! <FontAwesomeIcon icon={faCopyright} /> J.Panakkal 2020</h6>
        
        </div>
      </div>      
    </footer>
  );
}

export default Footer;