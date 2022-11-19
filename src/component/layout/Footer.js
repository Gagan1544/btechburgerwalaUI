import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillFacebook } from "react-icons/ai";
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
        <a href="http://instagram.com/gagan.gupta__8950">
          <AiFillInstagram />
        </a>
        <a href="http://youtube.com">
          <AiFillYoutube />
        </a>
        <a href="http://facebook.com">
          <AiFillFacebook />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
