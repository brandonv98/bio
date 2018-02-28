import React from 'react';
import Section from './Section';
import Skills from './Skills';
import { Grid, Jumbotron, FormGroup, FormControl, Button, Form, Col, Row, Image, Panel, bsStyle } from 'react-bootstrap';

const Container = (props) => {

let dataA = props.data;
  let overview = dataA.map((section) => {
    let skillData = section.skills;
     let skills = skillData.map(skill => {
        // console.log(skill);
        return <Skills skill={skill}/>
     });
     // console.log(section);
    return <Section
       title={section.title}
       img_next={section.img_src_next}
       img={section.img_src}
       skills={skills}
       desc={section.description}
       doesExist={section.project_link}
       project_link={section.project_link}
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
