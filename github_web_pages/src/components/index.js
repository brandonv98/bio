import React, { Component } from 'react';
import logo from '../logo.png';


// Components
import Footer from './Footer';
import Container from './home/Container';
// import LoadingNpm from './LoadingNpm';
import {
  ProjectsData
} from '../data/homePage'; // local DB
import TodoList from './fadeIn';
import GitHub from './GitHub';

// Bootstrap lib
import {Nav, Row, Col, Jumbotron, Panel, Glyphicon, Grid } from 'react-bootstrap';

import classNames from 'classnames';
import PropTypes from 'prop-types';


// Dependencies
import {
  Route,
  NavLink
} from 'react-router-dom';
import ForkRepo from '../repo-forked.svg';


export default class Home extends Component {

  constructor(props) {
   super(props);
   this.state =
   {
    // gitData: [],
    isViewingRepo: this.props.location.pathname,
    isLoading: false,
   };
 }



  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Jumbotron>
          <img src={logo} alt="My logo" className="App-logo" />
           <Panel.Heading>
             <Panel.Title componentClass="h3">Hello, I'm Brandon</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Web designer/developer, problem solver. Team player. Tech enthusiast, and life long learner. Love to bringing people together, and collaborate about new ideas
          </Panel.Body>
          <ul>
            <li><a href="https://github.com/brandonv98" target="_blank" rel="noreferrer noopener" className="social github">Github</a></li>
            <li><a href="https://www.linkedin.com/in/brandon-vancamp-123360150/" rel="noreferrer noopener" target="_blank" className="social linkedin">Linkedin</a></li>
            <li><a href="https://twitter.com/brandondvancamp/" target="_blank" rel="noreferrer noopener" className="social twitter">Linkedin</a></li>
          </ul>
        </Jumbotron>

          {/* <Grid> */}
             <Row className="show-grid">
              <Col md={12}>
                <Nav className='main-nav'>
                  <Route path='/' render={() =>
                    <li><NavLink to={`/bio`}>Bio</NavLink></li> }/>
                </Nav>
              </Col>
            </Row>


          <Route path='/' component={TodoList} />
          <Route path='/:repo/github' component={GitHub} />
          <Route path='/bio' render={() =>
              <Container data={ProjectsData}/> }/>
          <Route path='/' component={Footer} />
        {/* </Grid> */}
      </div>
    );
  }
}
