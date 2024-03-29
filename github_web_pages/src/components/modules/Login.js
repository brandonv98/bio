import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';// Dependances are : RRD, Bootstrap
// Loading module styles //
import LoadingCss from '../../LoaderStyles.css';
// Components lib
// import brandonvancamp2 from '../../data/brandonvancamp2'; // local DB
import {Doughnut, Bar, HorizontalBar} from 'react-chartjs-2'; // Charts for data
import {Row, Col, Nav, Grid} from 'react-bootstrap';
import axios from 'axios'; // ^^
// import PostCardCSS from './../../PostCard.css'; Import skills dependence
// module
import Skill from './skills/Skill';
import Skills from './skills/Skills';

// Dependencies import {   Route,   Switch } from 'react-router-dom'; Not Found
// Page
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      badgeData: [],
      points: [],
      nodeJS: 3653,
      isLoading: false // true is default
    };
  }
  componentDidMount() {
    this.preformSearchData();
  }
  //API Connection || More information found here : https://github.com/axios/axios
  preformSearchData = () => {
    // Make a request for a user with a given ID
    axios
      .get(`https://teamtreehouse.com/brandonvancamp2.json`)
      .then(response => {
        this.setState({badgeData: response.data, points: response.data.points, isLoading: false});
      })
      .catch(error => {
        console.log('Error fetching and parsing the data', error);
      });
  }

  render() {

    const jsPoints = this.state.points.JavaScript;
    const total = this.state.points.total;
    const totalPoints = { // charts for languages
      labels: ['Total Points'], // Should make these dynamic
      datasets: [
        {
          label: ' SKILL CAP ',
          backgroundColor: [
            'rgba(255,153,4,0.9)', 'rgba(22,189,244,0.9)', 'rgba(255,0,0,0.9)'
          ],
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: [
            'rgba(255,153,4,0.6)', 'rgba(22,189,244,0.6)', 'rgba(255,0,0,0.6)'
          ],
          hoverBorderColor: [
            'rgba(255,153,4,0.9)', 'rgba(22,189,244,0.9)', 'rgba(255,0,0,0.9)'
          ],
          data: [
            total

            // this.findPercents(repoLangs.CSS), this.findPercents(repoLangs.HTML)
          ]
        }
      ]
    };
    const langData = { // charts for languages
      labels: [
        'JavaScript', 'HTML', 'CSS', 'Total', 'nodeJS'
      ], // Should make these dynamic
      datasets: [
        {
          label: ' SKILL CAP ',
          backgroundColor: [
            'rgba(255,153,4,0.9)', 'rgba(22,189,244,0.9)', 'rgba(255,0,0,0.9)', 'rgba(111, 51, 139, 0.8)', 'rgba(88, 149, 86, 0.8)'
          ],
          borderColor: [
            'rgba(255,153,4,0.6)', 'rgba(22,189,244,0.6)', 'rgba(255,0,0,0.6)', 'rgba(111, 51, 139, 0.6)'
          ],
          borderWidth: 1,
          hoverBackgroundColor: [
            'rgba(255,153,4,0.6)', 'rgba(22,189,244,0.6)', 'rgba(255,0,0,0.6)', 'rgba(111, 51, 139, 0.6)'
          ],
          hoverBorderColor: 'rgba(169, 173, 172,0.8)',
          data: [
            jsPoints, this.state.points.HTML, this.state.points.CSS, total, this.state.nodeJS

            // this.findPercents(repoLangs.CSS), this.findPercents(repoLangs.HTML)
          ]
        }
      ]
    };
    const commitData = { // Commit Chart Data, total size of repo
      labels: ['Total Skill Capped'],
      datasets: [
        {
          label: 'Skill Cap',
          backgroundColor: ['rgba(169, 173, 172,0.6)'],
          borderColor: 'rgba(23, 239, 185,1)',
          borderWidth: 1,
          hoverBackgroundColor: ['rgba(169, 173, 172,0.9)'],
          hoverBorderColor: ['rgba(169, 173, 172,0.9)'],
          data: [this.state.nodeJS]
        }
      ]
    };

    return (
      <Grid className="badge-grid">
        <Row className="show-grid">
          <Col md={6}>
            <label className="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Your Email"
                tabIndex={3}
                required/>
          </Col>

          <Col md={6}>
          <label className="form-label" htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Your password"
                tabIndex={3}
                required/>
          </Col>
        </Row>

        <Row>
          {/* Add Section Skills  */}
          <Col md={12}>
            {/* If data is loading show loader module, else show data */}
            {this.state.isLoading
              ? <div className="loader"></div>
              : <Skills data={this.state.badgeData}/>
}
          </Col>
        </Row>

        <Row className="show-grid">
          <Col md={12}>
            
          </Col>
        </Row>

      </Grid>
    );
  }
}
