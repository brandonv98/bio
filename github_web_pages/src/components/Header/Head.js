import React from 'react';
import {Route, NavLink} from 'react-router-dom';// Dependances are : RRD, Bootstrap
import {Nav, Row, Col, Jumbotron, Panel, Grid } from 'react-bootstrap'; // ^^
import logo from './logo.png'; //// lib : Logo
const Head = (props) => {
  return (
      <div>
        <Jumbotron>
          <img src={logo} alt="My logo" className="App-logo" />
           <Panel.Heading>
             <Panel.Title componentClass="h3">Hello, I'm Brandon</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Full Stack Developer, problem solver. Team player. Tech enthusiast, and life long learner. Love to bring people together, and collaborate about new ideas.
          </Panel.Body>
          <ul>
            <li><a href="https://github.com/brandonv98" target="_blank" rel="noreferrer noopener" className="social github">Github</a></li>
            <li><a href="https://www.linkedin.com/in/brandon-vancamp-123360150/" rel="noreferrer noopener" target="_blank" className="social linkedin">Linkedin</a></li>
            <li><a href="https://twitter.com/brandondvancamp/" target="_blank" rel="noreferrer noopener" className="social twitter">Linkedin</a></li>
          </ul>
        </Jumbotron>
          <Grid>
             <Row className="show-grid">
              <Col md={12}>
                <Nav className='main-nav'>
                  <Route path='/' render={() =>
                    <li><NavLink to={`/bio`}>Bio</NavLink></li> }/>
                </Nav>
              </Col>
            </Row>
          </Grid>
      </div>);
}
export default Head;
