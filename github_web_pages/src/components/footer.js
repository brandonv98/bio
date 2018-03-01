import React from 'react';
const Footer = (props) => ( // Footer
  <footer>
    <span className="divider" />
    <p>Let's work togather!</p>
    <a className="btn btn-primary" href="mailto:brandon@overtimewebdev.com">Contact Brandon</a>
    <ul>
      <li><a href="https://github.com/brandonv98" rel="noreferrer noopener" target="_blank" className="social github">Github</a></li>
      <li><a href="https://www.linkedin.com/in/brandon-vancamp-123360150/" rel="noreferrer noopener" target="_blank" className="social linkedin">Linkedin</a></li>
      <li><a href="https://twitter.com/brandondvancamp/" rel="noreferrer noopener" target="_blank" className="social twitter">Linkedin</a></li>
    </ul>
    <p className="copyright">	&#169; Copyright 2018, Brandon VanCamp</p>
  </footer>);
export default Footer;
