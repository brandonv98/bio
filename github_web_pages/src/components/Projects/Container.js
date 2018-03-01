import React from 'react';
import Section from './Section';
import Skills from './Skills';
import {
  Row,
  Grid
 } from 'react-bootstrap';

const Container = (props) => {

let dataA = props.data;
  let overview = dataA.map((section) => {
    let skillData = section.skills;
     let skills = skillData.map(skill => {
        // console.log(skill);
        return <Skills skill={skill} key={skill}/>
     });
     // console.log(section);
    return <Section
       title={section.title}
       img_next={section.img_src_next}
       img={section.img_src}
       skills={skills}
       desc={section.description}
       doesExist={section.project_link_github}
       project_link_github={section.project_link_github}
       link_src={section.link_src}
       key={section.id} />
  });
  return (

      <Grid>
        <Row className="show-grid">
            {overview}
        </Row>
      </Grid>
  );
}

export default Container;
