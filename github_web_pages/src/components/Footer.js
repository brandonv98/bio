import React from 'react';
import footerLogo from './../img/footer-logo.png'; //// lib : Logo
const Footer = (props) => ( // Footer
	<footer>
    <span className="divider" />
    <img src={footerLogo} alt="Main logo" className="App-logo-footer" />
    <p>Let's work together!</p>
    <a className="btn btn-primary" href="mailto:brandon@csdevs.io">Contact Brandon</a>
    <ul>
      <li><a href="https://github.com/brandonv98" rel="noreferrer noopener" target="_blank" className="social github">Github</a></li>
      <li><a href="https://www.linkedin.com/in/brandon-vancamp-123360150/" rel="noreferrer noopener" target="_blank" className="social linkedin">Linkedin</a></li>
      <li><a href="https://twitter.com/brandondvancamp/" rel="noreferrer noopener" target="_blank" className="social twitter">Linkedin</a></li>
    </ul>
    <p className="copyright">	&#169; Copyright 2018, Brandon VanCamp</p>
  </footer>);
export default Footer;