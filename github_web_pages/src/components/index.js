import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';
import {
  HomePage
} from '../data/homePage';

export default class Home extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Photo of Brandon Doe" class="profile-image" />
          <h1 class="tag name">Hello, I’m Brandon.</h1>
          {/* <p class="tag location">My home is Kansas City, Missouri.</p> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h1 className="App-title">Welcome to the Show</h1> */}
        </header>


        <p className="App-intro">
          Hello I am <code>Brandon VanCamp</code>. I like to ...
          <br/>
            <br/>
        <p>Please <a href='#'>Contact Me</a> if you would like to collaborate togather.</p>
        </p>


        {/* line seperator */}
        <p>------------------------------------------------------------------</p>

        <h1>Let's collaborate on a project togather</h1>
        <a href='#'><span> GitHub </span></a>
        <a href='#'><span> Facebook </span></a>
        <a href='#'><span> Linkedin </span></a>


        {/* footer */}

        <Route path={`/`}
          render={ () => <CourseContainer data={HTMLCourses} /> }
        />


      </div>
    );
  }
}
