import React, { Component } from 'react';

//Dependances
import { // BS
  Row,
  Col,
  Nav,
  Grid
} from 'react-bootstrap';
import { // RRD
	NavLink,
} from 'react-router-dom';
import axios from 'axios'; // API Connection
import { // Charts for data
  Doughnut,
  Bar,
  HorizontalBar,
} from 'react-chartjs-2';
import ForkRepo from '../img/repo-forked.svg'; // svg fork logo


export default class GitHub extends Component {

  constructor(props) {
   super(props);
   this.state =
   {
    gitData: [], // Languages data
    gitRepoData: [], // Repo Data
     owner: 'brandonv98', // username of the repo
     repo: this.props.match.params.repo, // for selected repo
     forkLink: '', // Fork link
   };
 }

  componentDidMount() {
    const owner = this.state.owner;
    let repo = this.state.repo;
    this.preformSearchData(owner, repo);
    console.log(this.refs.chart.chart_instance); // returns a Chart.js instance reference
  }
  ////////////////////////////
 //API Connection
 // more information found here : https://github.com/axios/axios
  preformSearchData = (owner, repo) => {
    // Make a request for a user with a given ID
    axios.get(`https://api.github.com/repos/${owner}/${repo}/languages`)
      .then(response => {
        this.setState({
          gitData: response.data, //Photo's Array Data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing the data', error);
      });
      // Make a request for a user with a given ID
      axios.get(`https://api.github.com/repos/${owner}/${repo}`)
        .then(response => {
          this.setState({
            gitRepoData: response.data, //Photo's Array Data
            forkLink: response.data.clone_url,
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing the data', error);
        });
  }

/// Take all languages data and get the percent used of each one.
  findPercents = (number) => {
    const repoLang = this.state.gitData;
    const total = repoLang.CSS + repoLang.JavaScript + repoLang.HTML
    let percent = (number / total) * 100;
    return percent;
  }

// //////////////////////////////////////////////////////////
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  render() {
    const repoLangs = this.state.gitData;
    const langData = {
      labels: ['JavaScript', 'CSS', 'HTML'],
      datasets: [
        {
          label: 'Languages used in Percents for ' + this.state.gitRepoData.name,
          backgroundColor: ['rgba(255,153,4,0.6)', 'rgba(22,189,244,0.6)', 'rgba(255,0,0,0.6)' ],
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: ['rgba(255,153,4,0.9)', 'rgba(22,189,244,0.9)', 'rgba(255,0,0,0.9)' ],
        hoverBorderColor: ['rgba(255,153,4,0.9)', 'rgba(22,189,244,0.9)', 'rgba(255,0,0,0.9)' ],
          data: [this.findPercents(repoLangs.JavaScript),
                this.findPercents(repoLangs.CSS),
                this.findPercents(repoLangs.HTML)],
        }
      ]
    };
    const commitData = {
    labels: ['Total Size',],
    datasets: [
      {
        label: 'Project Size for ' + this.state.gitRepoData.name,
        backgroundColor: ['rgba(169, 173, 172,0.6)'],
        borderColor: 'rgba(23, 239, 185,1)',
        borderWidth: 1,
        hoverBackgroundColor: ['rgba(169, 173, 172,0.9)'],
        hoverBorderColor: ['rgba(169, 173, 172,0.9)'],
        data: [this.state.gitRepoData.size],
      }
    ]
  };
    return (
        <Grid>
        <Row className="show-grid">
          <Col md={12}>
            <Nav className='main-nav'>
                <li>
                  <NavLink className='return-arrow' to={`/bio`}>&#8617; Return</NavLink>
                </li>
                <li>
                  <NavLink to={`${this.state.forkLink}`} rel="noreferrer noopener" target="_blank">Fork Project
                    <span><img src={ForkRepo} alt="My logo" className="octicon" /></span>
                  </NavLink>
                </li>
            </Nav>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={12}>
            <h3>More Stats For &#8628;</h3>
            <h1>{this.state.gitRepoData.name}</h1>
            <p><b>Project description</b> : {this.state.gitRepoData.description}</p>
          </Col>
          <Col md={4}>
            <p><b>Developed By</b> : Brandon V</p>
            <p><b>Created on</b> : {this.state.gitRepoData.created_at} &#8628;</p>
            <p><b>Last Updated</b> : {this.state.gitRepoData.updated_at}</p>
          </Col>
        </Row>

        {/* Grids */}
        <Row className="show-grid">
          <Col md={6}>
            <Bar
              data={langData}
              width={100}
              height={50}
              />
          </Col>
          <Col md={6}>
            <Doughnut
              ref='chart'
              data={langData}
              width={100}
              height={50} />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={12}>
            <HorizontalBar
              data={commitData}
              width={120}
              height={10} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
