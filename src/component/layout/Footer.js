import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Btech Burgir Wala</h2>
        <p>We are trying to give you the taste possible.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All right received @btechburgirwala</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="http://instagram.com/gagan.gupta__8950" target="_blank">
          <AiFillInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/gagan-gupta-9a906b1bb/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="http://facebook.com" target="_blank">
          <AiFillFacebook />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
