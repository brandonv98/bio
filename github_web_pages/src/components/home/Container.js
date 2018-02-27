import React from 'react';
import Section from './Section';
import Skills from './Skills';
import { Grid, Jumbotron, FormGroup, FormControl, Button, Form, Col, Row, Image, Panel, bsStyle } from 'react-bootstrap';

const Container = (props) => {

let dataA = props.data;
  let overview = dataA.map((section) => {
    let skillData = section.skills;
     let skills = skillData.map(s => {
        return <Skills skill={s}/>
       console.log(s);
     });
     console.log(section);
    return <Section
       title={section.title}
       desc={section.description}
       img={section.img_src}
       skills={skills}
       key={section.id} />
  });
  console.log(overview);

  return (

      <div>
        <Row className="show-grid">
            {overview}
        </Row>
      </div>
  );
}

export default Container;
