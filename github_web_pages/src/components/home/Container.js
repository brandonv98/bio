import React from 'react';
import Section from './Section';

const Container = (props) => {
  let overview = props.data.map((section) => {
    return <Component
             title={}
             desc={course.description}
             img={course.img_src}
             key={course.id} />
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
