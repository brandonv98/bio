import React from 'react';
import { Grid, Jumbotron, FormGroup, FormControl, Button, Form, Col, Row, Image, Panel, bsStyle } from 'react-bootstrap';

const Section = (props) => (
    <Row className="show-grid">
        <Col md={6} mdPush={6}>
          <code>Blue Crush QC</code>
          <Image src={props.img} thumbnail />
        </Col>
        {/* <Col md={6} mdPull={6}>
          <code>Blue Crush QC</code>
          <Image src={props.img} thumbnail />
        </Col> */}
      </Row>
  );

export default Section;
