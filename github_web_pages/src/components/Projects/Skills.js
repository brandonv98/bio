import React from 'react';

const Skill = (props) => {
  const lowerCase = (word) => {
    return word.toLowerCase();
  }

  return (
    <li className={lowerCase(props.skill)}>{props.skill}</li>
  );
}

export default Skill;
