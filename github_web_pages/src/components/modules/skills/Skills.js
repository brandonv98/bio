import React from 'react';
import {Col, Image, Row} from 'react-bootstrap'; //// Dependencies : BS, RRD
import {NavLink, Link} from 'react-router-dom'; // ^^

// Import skills dependence module
import Skill from './Skill';

const Section = (props) => {
  const sdData = []; // Store data
  // Loop thew badges data array.
  let dataBadges = props.data.badges;
  const badges = () => {
    for (const key in dataBadges) {
      const badge = dataBadges[key];
      const image = badge.icon_url;
      const name = badge;
      let toPush = sdData.push(badge);
    }
  };
  badges();

  let skill = sdData.map((skill, i) => {
    return <Skill
      key={skill.id}
      image={skill.icon_url}
      name={skill.name}
      earned_date={skill.earned_date}
      courses={
        skill.courses[0] == undefined 
        ? {title: ' '} 
        : skill.courses[0]
        }/>
  });

  return (

    <ul className="content-block-list row">
      {skill}
    </ul>

  );
}
export default Section;