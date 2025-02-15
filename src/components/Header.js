import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="header-content">
       
        <h1>GIRAGANI SAGAR</h1>
        <p>Azure DevOps Engineer | Cloud Specialist | Automation Enthusiast</p>
        <div className="contact-info">
          <p><i className="fas fa-phone"></i> +91-63001758608</p>
          <p><i className="fas fa-envelope"></i> sagargoud2606@gmail.com</p>
        </div>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
