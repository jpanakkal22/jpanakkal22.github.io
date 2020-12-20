import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./style.css";

function Contact() {
    return (
        <div id="contactDiv">
            <h4>CONTACT</h4>
            <p id="contactPara"><FontAwesomeIcon icon={faEnvelope} /> josh_panakkal3122@hotmail.com<br />
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Cleveland, OH</p>
            <a className="contactLink" href="https://github.com/jpanakkal22" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} size={'2x'} /></a>
            <a className="contactLink" href="https://www.linkedin.com/in/josh-panakkal-6a0644a5/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size={'2x'} /></a>
        </div>
    )
}

export default Contact;