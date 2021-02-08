import React from 'react';
import footerLogo from './../img/footer-logo.png'; //// lib : Logo
import {NavLink} from 'react-router-dom'; // nav link import
const Footer = (props) => ( // Footer
	<footer>
    <span className="divider" />
    <img src={footerLogo} alt="Brandon VanCamp's logo" className="App-logo-footer" />
    <p>Let's work together!</p>
    <NavLink className="btn btn-primary" to="/message/contact">Contact Brandon</NavLink>
    <ul>
      <li><a href="https://github.com/brandonv98" rel="noreferrer noopener" target="_blank" className="social github">Github</a></li>
      <li><a href="https://www.linkedin.com/in/brandon-vancamp-123360150/" rel="noreferrer noopener" target="_blank" className="social linkedin">Linkedin</a></li>
      <li><a href="https://twitter.com/developerOneB/" rel="noreferrer noopener" target="_blank" className="social twitter">Twitter</a></li>
    </ul>
    <p className="copyright">	&#169; Copyright 2018 - 2021, Brandon VanCamp</p>
  </footer>);
export default Footer;