// Header.js
import React from 'react';
import logo from './logoo.png';

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1>My React App</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
