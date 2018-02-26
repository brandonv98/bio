import React, { Component } from 'react';
import logo from '../logo.png';
//Components
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

// Components
import ProjectList from './ProjectList';
import Footer from './Footer';
import Nav from './Nav';


// Bootstrap lib
import { Grid, Jumbotron, FormGroup, FormControl, Button, Form, Col, Row, Image, Panel, bsStyle } from 'react-bootstrap';

export default class Home extends Component {

  constructor(props) {
   super(props);
   this.state =
   {
     isLoading: false
   };
 }


  render() {
    return (

      <div className="App">

        <Jumbotron>
          <img src={logo} alt="Photo of Brandon Doe" className="App-logo" />
           <Panel.Heading>
             <Panel.Title componentClass="h3">Hello, im Brandon</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Build For The Web, Web designer/developer, problem solver. Team player. Tech enthusiast, and life long learner. Love to bringing people together, and collaborate about new ideas
          </Panel.Body>
          <ul>
            <li><a href="https://github.com/brandonv98" target="_blank" class="social github">Github</a></li>
            <li><a href="https://www.linkedin.com/in/brandon-vancamp-123360150/" target="_blank" class="social linkedin">Linkedin</a></li>
            <li><a href="https://twitter.com/brandondvancamp/" target="_blank" class="social twitter">Linkedin</a></li>
          </ul>
        </Jumbotron>

        {/* <Route path='/' component={Nav} /> */}

         <ProjectList />

        <Footer />

      </div>
    );
  }
}
