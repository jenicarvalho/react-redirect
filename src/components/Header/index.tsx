import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/contact" exact>Contato</NavLink></li>
        <li><NavLink to="/portfolio" exact>Portfolio</NavLink></li>
      </ul>
    </div>
  );
}

export default Header;