import React from 'react';
import Section from './Section';
import Skills from './Skills';
import {
	Row,
	Grid
} from 'react-bootstrap';

const Container = (props) => {
	let dataA = props.data;
	let overview = dataA.map((section, i) => {
		let skillData = section.skills;
		let skills = skillData.map(skill => {
			return <Skills skill={skill} key={skill}/>
		});
		return <Section
       title={section.title}
       img_next={section.img_src_next}
       img={section.img_src}
       skills={skills}
       desc={section.description}
       doesExist={section.project_link_github}
       project_link_github={section.project_link_github}
       link_src={section.link_src}
       doesHaveWebsite={section.website_domain_name}
       website_link={section.website_domain_name}
       key={i} />
	});
	return (
		<Grid>
        <Row className="show-grid">
            {overview}
        </Row>
      </Grid>);
}
export default Container;
