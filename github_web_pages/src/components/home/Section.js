import React from 'react';
import { Grid, Jumbotron, FormGroup, FormControl, Button, Form, Col, Row, Image, Panel, bsStyle } from 'react-bootstrap';
//skill Component
// import Skills from './Skills';

const Section = (props) => {
    console.log(props.img_src_next);
      // <Skills skill={props.skills} />
  return(
        <Col md={6}>
          <div className="card">
            <h2>{props.title}</h2>
            <Image src={props.img} thumbnail />
            <Image src={props.img_next} thumbnail />
            <h3>Skills</h3>
            <ul className="skills">
              {props.skills}
            </ul>
            <p>
              {props.desc}
            </p>
            <ul>
              {
                (props.doesExist)
                ? <li><a href={props.project_link} rel="noreferrer noopener" target="_blank" className="social github">Github</a></li>
                : <li></li>
              }
            </ul>
          </div>
        </Col>
  );
}

export default Section;
