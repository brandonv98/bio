import React from 'react';
import {Col, Image, Row} from 'react-bootstrap'; //// Dependencies : BS, RRD
import {NavLink, Link} from 'react-router-dom'; // ^^

// Import skills dependence module
import Skill from './Skill';

const Section = (props) => {
  console.log(props.data.badges);
  const sdData = [];
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

  // console.log(sdName);

  let skill = sdData.map((skill, i) => {
    // console.log(skill.courses[0]);
    return <Skill 
    key={skill.id}
    image={skill.icon_url}
    name={skill.name}
    earned_date={skill.earned_date}
    courses={skill.courses[0]}
    />
  });

  return (

      <ul className="content-block-list row">
        {skill}
      </ul>

  );
}
export default Section;