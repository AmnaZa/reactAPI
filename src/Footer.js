

import React from 'react';
import './App.css'; 
import fb from './Images/facebook.jpg';
import twitter from './Images/twitter.png';
import instagram from './Images/instagram.jpeg';
import linkedin from './Images/linkedin.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={fb} alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
      <p className="attractive-stuff">Designed with ❤️ by YourName</p>
    </footer>
  );
}

export default Footer;
