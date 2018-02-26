import React from 'react';


const Footer = (props) => (

  <footer>
    <span className="divider" />
    <p>Let's work togather!</p>
    <a className="btn btn-primary" href="mailto:brandon@overtimewebdev.com">Contact Brandon</a>

    <ul>
      <li><a href="https://github.com/brandonv98" target="_blank" className="social github">Github</a></li>
      <li><a href="https://www.linkedin.com/in/brandon-vancamp-123360150/" target="_blank" className="social linkedin">Linkedin</a></li>
      <li><a href="https://twitter.com/brandondvancamp/" target="_blank" className="social twitter">Linkedin</a></li>
    </ul>
    <p className="copyright">Copyright 2018, Brandon V</p>
  </footer>
  );


export default Footer;
