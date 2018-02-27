import React from 'react';
import { Grid, Jumbotron, FormGroup, FormControl, Button, Form, Col, Row, Image, Panel, bsStyle } from 'react-bootstrap';
//skill Component
// import Skills from './Skills';

const Section = (props) => {
    console.log(props.skills);
      // <Skills skill={props.skills} />
  return(
        <Col md={6}>
          <div className="card">
            <h2>{props.title}</h2>
            <Image src={props.img} thumbnail />
            {/* <Image src={props.img} thumbnail /> */}
            <h3>Skills</h3>
            <ul className="skills">
              {props.skills}
            </ul>
            <p>{props.desc}</p>
            <ul>
              <li><a href="https://github.com/brandonv98/React_Flickr_Gallery" rel="noreferrer noopener" target="_blank" className="social github">Github</a></li>
            </ul>
          </div>
        </Col>
  );
}

export default Section;
