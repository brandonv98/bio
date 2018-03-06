import React, { Component } from 'react';
// Components lib
import {
  ProjectsData
} from '../data/Projects'; // local DB
import Head from './Header/Head'; // Header
import Container from './Projects/Container'; // Home page
import GitHub from './GitHub'; // github API
import Footer from './Footer';
// Dependencies
import {
  Route,
  Switch
} from 'react-router-dom';
// Not Found Page
import NotFound from './404Error/NotFound';
export default class Home extends Component {
  render() {
    console.log('Looking for the sourse code? Just send me a email for it! Brandon@overtimewebdev.com :)');
    return (
      <div className="App">
          <Head />
          <Switch> {/* SWITCH */}
            <Route path='/:repo/github' component={GitHub} />
            <Route path='/bio' render={() =>
                <Container data={ProjectsData}/> }/>
            <Route component={NotFound} />
        </Switch>
        <Route path='/' component={Footer} />
      </div>);
  }
}
