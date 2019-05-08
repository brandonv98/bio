import React from 'react';
import {Col, Image, Row} from 'react-bootstrap'; //// Dependencies : BS, RRD
import {NavLink, Link} from 'react-router-dom'; // ^^

// Import skills dependence module
import Skill from './Skill';

const Section = (props) => {

  let stateData = [];
  // Loop thew badges data array.
  let dataBadges = props.data.badges;
  const badges = () => {
    for (const key in dataBadges) {
      const badge = dataBadges[key];
      const image = badge.icon_url;
      let toPush = stateData.push(image);
    }
  };
  badges();

  let skill = stateData.map((skill, i) => {
    return <Skill image={skill}/>
  });

  return (
    <Row>
      {skill}
    </Row>
  );
}
export default Section;