import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <div className="footer-container">
      <h1>Built by Gio Chomakhashvili, Feel free to contact me.</h1>
      <a href="https://www.linkedin.com/in/gio-chomakhashvili-a739911b9/">
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
      <a href="https://www.facebook.com/thekoexygen/">
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      <a href="https://github.com/koexygen">
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a href="mailto:ggiosweb@gmail.com">
        <FontAwesomeIcon icon={faGoogle} size="3x" />
      </a>
    </div>
  );
};

export default Footer;
