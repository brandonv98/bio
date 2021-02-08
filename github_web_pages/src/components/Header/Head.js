import React from 'react';
import {Route, NavLink} from 'react-router-dom';// Dependances are : RRD, Bootstrap
import {Nav, Row, Col, Jumbotron, Panel, Grid } from 'react-bootstrap'; // ^^
// import logo from './@me-logo-dark.png'; //// lib : Logo
import logo from './@me-icon-with-logo.png'; //// lib : Logo

const Head = (props) => {
  return (
      <div>
        <Jumbotron>
          <img src={logo} alt="BitMe emoji" className="App-logo" />
           <Panel.Heading>
             <Panel.Title componentClass="h3">Hello, I'm Brandon</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Full-Stack Engineer, problem solver. Team player. Tech enthusiast, and life long learner. Love to bring people together, and collaborate about new ideas.
          </Panel.Body>
          <ul>
            <li><a href="https://github.com/brandonv98" target="_blank" rel="noreferrer noopener" className="social github">Github</a></li>
            <li><a href="https://www.linkedin.com/in/brandon-vancamp-123360150/" rel="noreferrer noopener" target="_blank" className="social linkedin">Linkedin</a></li>
            <li><a href="https://twitter.com/developerOneB/" target="_blank" rel="noreferrer noopener" className="social twitter">Linkedin</a></li>
          </ul>
        </Jumbotron>
          <Grid>
             <Row className="show-grid">
              <Col md={12}>
                <Nav className='main-nav'>
                  <Route path='/' render={() =>
                    <ul className="flex">
                    <li><NavLink to={`/bio`}>Bio</NavLink></li>
                    {/* <li><NavLink to={`/bio/badges`}>Skill Cap</NavLink></li> */}
                    {/* <li><NavLink to={`/bio/packages`}>Package Library</NavLink></li> */}
                    {/* <li><NavLink to={`/bio/wiki`}>Wikis</NavLink></li> */}
                    </ul> 
                    }/>
                </Nav>
              </Col>
            </Row>
          </Grid>
      </div>);
}
export default Head;
