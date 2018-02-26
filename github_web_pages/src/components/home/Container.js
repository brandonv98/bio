import React from 'react';
import Section from './Section';

const Container = (props) => {
  let overview = props.data.map((section) => {
    return <Section
             // title={}
             // desc={course.description}
             img={section.img_src}
             key={section.id} />
  });
  return (
      <div>
        <ul>
          {overview}
        </ul>
      </div>
  );
}

export default Container;
