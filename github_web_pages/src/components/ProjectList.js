import React from 'react';

// Dependencies
import { Grid, Col, Row, Image } from 'react-bootstrap';

// Images
import bluecrushqc from '../project_images/bluecrushqc_full_Desktop.png';
import j3 from '../project_images/j3.png';
import towing from '../project_images/towing.png';
import fatbats from '../project_images/fatbatpipes.png';
import goodewords from '../project_images/goodewords.png';
import tuff_girl from '../project_images/tuff_girl.png';
import dashboard from '../project_images/analytics/dashboard.png';
import InGame from '../project_images/word_guessing/inGame.png';
import FlikrProject from '../project_images/flikr_project/flikr_project.png';
import FlikrProjectNoResults from '../project_images/flikr_project/No-Results-Layout.png';
import EmployeeDir from '../project_images/employee_directory/employee_directory.png';
import EmployeeOverlay from '../project_images/employee_directory/employee_overlay.png';


const ProjectList = (props) => (
  <Grid>

    <Row className="show-grid">
    <Col md={6} mdPush={6}>
      <div className="card">
        <h2>Flikr API Gallery</h2>
          <Image src={FlikrProjectNoResults} thumbnail />
          <Image src={FlikrProject} thumbnail />
        <h3>Skills</h3>
        <ul className="skills">
          <li className="react">ReactJS</li>
          <li>JSX</li>
          <li className="api">API</li>
          <li className="js">JavaScript</li>
          <li className="css">CSS</li>
          <li className="html">HTML</li>
          <li className="git">Git</li>
          <li className="rrd">React Router Dom</li>
          <li className="github">GitHub</li>
        </ul>
        <p>Ooh ReactJS, now let me tell you about this project.
          First we get a connecting with our API,
          parse the information and store it in an array. For this i used axios.
          Next we create separate components for organization.
          Now we can loop threw our data and append it onto the screen.
          React Router Dom was used to handle all of the routing, and keeping the DOM in sync.
        </p>
        <ul>
        <li><a href="https://github.com/brandonv98/React_Flickr_Gallery" rel="noreferrer noopener" target="_blank" className="social github">Github</a></li>
      </ul>
      </div>
    </Col>
    <Col md={6} mdPull={6}>
      <div className="card">
        <h2>Employee Directory Search</h2>
        <Image src={EmployeeDir} thumbnail />
        <Image src={EmployeeOverlay} thumbnail />
        <h3>Skills</h3>
        <ul className="skills">
          <li className="react">ReactJS</li>
          <li className="js">JavaScript</li>
          <li className="css">CSS</li>
          <li>JSX</li>
          <li className="api">API</li>
          <li className="rrd">React Router Dom</li>
          <li className="git">Git</li>
          <li className="github">GitHub</li>
        </ul>
        <p>This project was originaly done static, with HTML, CSS & JS.
          But we decided to refactor it more dynamically with ReactJS.
        </p>
        <ul>
          <li><a href="https://github.com/brandonv98/Employee_Directory_v2.1" rel="noreferrer noopener" target="_blank" className="social github">Github</a></li>
        </ul>
    </div>
    </Col>
  </Row>


    <Row className="show-grid">
    <Col md={6} mdPush={6}>
      <div className="card">
        <h2>Analytics Dashboard</h2>
          <Image src={dashboard} thumbnail />
        <h3>Skills</h3>
        <ul className="skills">
          <li className="js">D3.js</li>
          <li className="html">HTML</li>
          <li className="css">CSS</li>
          <li className="js">JavaScript</li>
          <li className="svg">SVG</li>
          <li className="git">Git</li>
          <li className="github">GitHub</li>
        </ul>
        <p>D3.js was clear to use here. D3.js was used for all the data and graphs. JavaScript to deliver user click events, user navigation, and handle popups/alerts.
         Example: When a user clicks on there notification they will get a popup about there notifications.
         CSS used for layout & styling. SVG for all icons. Git for version control, and tracking changes in project files.
         GitHub to post/share it to the world! </p>
         <ul>
         <li><a href="https://github.com/brandonv98/web-app-dashboard" rel="noreferrer noopener" target="_blank" className="social github">Github</a></li>
       </ul>
        </div>

    </Col>
    <Col md={6} mdPull={6}>
      <div className="card">
        <h2>Wheel Of Success</h2>
          <Image src={InGame} thumbnail />
        <h3>Skills</h3>
        <ul className="skills">
          <li className="js">JavaScript</li>
          <li className="svg">SVG</li>
          <li className="html">HTML</li>
          <li className="css">CSS</li>
          <li className="git">Git</li>
          <li className="github">GitHub</li>
        </ul>
        <p>Heavy JavaScript based project. JS was used to loop threw an array of phrases randomly.
          Once one is picked, that array is then appened to the screen, and you are ready to play!
          What happens next is to handle user input for each letter guessed.
          So we check threw each letter of the phrase of the picked array.
          If the user was correct then reveal that letter, if the user was incorrect we take a point off there score.
          Also we check to see if the game is currently still in play or if the user has lost.
          All this is done with JavaScript.</p>
          <ul>
          <li><a href="https://github.com/brandonv98/Game_Show_App" rel="noreferrer noopener" target="_blank" className="social github">Github</a></li>
        </ul>
      </div>
    </Col>
    </Row>

    <Row className="show-grid">
      <Col md={6} mdPush={6}>
        <div className="card">
          <h2>Blue Crush QC</h2>
          <Image src={bluecrushqc} thumbnail />
          <h3>Skills</h3>
          <ul className="skills">
            <li className="html">HTML</li>
            <li className="css">CSS</li>
            <li className="js">JavaScript</li>
            <li className="php">PHP</li>
            <li>WordPress</li>
            <li className="html">Search Engine Optimization</li>
          </ul>
          <p>Project was for a local bussiness, specializing in tanning, massage therapy, and beauty.
            Used JavaScript to handle the slideshow. CSS to make everything nice and cute. HTML for the initial structure.
            WordPress, and PHP for the new feed, as well for the backend. </p>
        </div>
      </Col>
      <Col md={6} mdPull={6}>
        <div className="card">
          <h2>Sketch Template</h2>
            <Image src={j3} thumbnail />
          <h3>Skills</h3>
          <ul className="skills">
            <li className="other">Sketch</li>
            <li className="html">HTML</li>
            <li className="svg">SVG</li>
            <li className="css">CSS</li>
            <li className="js">JavaScript</li>
            <li>jQuery</li>
            <li>BootStrap</li>
          </ul>
          <p>Developed with Sketch. Then brought to life with HTML, CSS, and JavaScript.
            Most of the CSS used was from BootStrap. SVG's used for footer icons.
            JavaScript & jQuery handled all the functionality with the slideshow and image overlay's. </p>
        </div>
      </Col>
    </Row>


      <Row className="show-grid">
        <Col md={6} mdPush={6}>
          <div className="card">
            <h2>goode words</h2>
              <Image src={goodewords} thumbnail />
            <h3>Skills</h3>
            <ul className="skills">
              <li>WordPress</li>
              <li className="other">Strip</li>
              <li className="html">HTML</li>
              <li className="css">SASS</li>
              <li className="js">JavaScript</li>
              <li className="html">Search Engine Optimization</li>
            </ul>
            <p></p>
          </div>
        </Col>
        <Col md={6} mdPull={6}>
          <div className="card">
            <h2>Tuff Girl Fit Wear</h2>
              <Image src={tuff_girl} thumbnail />
            <h3>Skills</h3>
            <ul className="skills">
              <li className="html">WIX</li>
              <li className="api">API's</li>
              <li className="other">Communication</li>
              <li>DNS Linking</li>
              <li className="other">Explicit Documentation</li>
            </ul>
            <p></p>
        </div>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col md={6} mdPush={6}>
          <div className="card">
            <h2>Monson Towing</h2>
              <Image src={towing} thumbnail />
              <h3>Skills</h3>
            <ul className="skills">
              <li className="react">ReactJS</li>
              <li>JSX</li>
              <li>CSS</li>
              <li className="js">JavaScript</li>
              <li className="html">Search Engine Optimization</li>
            </ul>
            <p></p>
          </div>
        </Col>
        <Col md={6} mdPull={6}>
          <div className="card">
            <h2>Fat Bat Pipes</h2>
              <Image src={fatbats} thumbnail />
              <h3>Skills</h3>
            <ul className="skills">
              <li className="react">ReactJS</li>
              <li>JSX</li>
              <li className="css">CSS</li>
              <li className="js">JavaScript</li>
              <li className="html">Search Engine Optimization</li>
            </ul>
            <p></p>
          </div>

        </Col>
      </Row>

  </Grid>
);

export default ProjectList;
