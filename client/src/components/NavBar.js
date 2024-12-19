import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../img/logo.png'

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt='Logo Scenium'></img>
      <ul>
        <li>
          <RouterLink to="/">Accueil</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">À propos</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
      </ul>
      <button>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
        >
          Contacter
        </ScrollLink>
      </button>
    </nav>
  );
};

export default NavBar;
