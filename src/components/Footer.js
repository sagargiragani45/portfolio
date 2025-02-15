import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 GIRAGANI SAGAR. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/sagar-giragani/"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/sagargiragani45"><i className="fab fa-github"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
