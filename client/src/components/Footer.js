import React from "react";
import logo from "../img/logogrand.png";
import insta from "../img/insta.png";
import tiktok from "../img/tiktok.png";
import linkedin from "../img/linkedin.png";
import x from "../img/x.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img src={logo} alt="logo Scenium"></img>
        <div className="menu">
          <a href='#'>MENTIONS LÉGALES</a>
          <a href='#'>POLITIQUE DE CONFIDENTIALITÉ</a>
          <a href='#'>GESTION COOKIES</a>
        </div>
        <div className="rs">
          <a href='#'><img src={insta} alt="logo Scenium"></img></a>
          <a href='#'><img src={tiktok} alt="logo Scenium"></img></a>
          <a href='#'><img src={linkedin} alt="logo Scenium"></img></a>
          <a href='#'><img src={x} alt="logo Scenium"></img></a>
        </div>
      </div>
      <p className="copyright">Copyright © 2024 Scenium, Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
