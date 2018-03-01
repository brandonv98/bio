import React, { Component } from 'react';

//Dependances
import {
  Row,
  Col,
  Nav
} from 'react-bootstrap';
import {
	NavLink
} from 'react-router-dom';
import axios from 'axios';
import {
  Doughnut,
  Bar,
  defaults,
  HorizontalBar,
  Line
} from 'react-chartjs-2';
import ForkRepo from '../repo-forked.svg';


export default class GitHub extends Component {

  constructor(props) {
   super(props);
   this.state =
   {
    gitData: [],
    gitRepoData: [],
     isLoading: false,
     username: 'brandonv98',
     owner: 'brandonv98',
     repo: this.props.match.params.repo,
     forkLink: '',
   };
 }

  componentDidMount() {
    console.log(this.props.match.params.repo);
    const username = 'brandonv98';
    const owner = this.state.owner;
    let forkLink = this.state.gitRepoData.clone_url;
    let repo = this.state.repo;
    this.preformSearchData(username, owner, repo);
    this.preformSearchRepo(owner, repo);
    console.log(this.refs.chart.chart_instance); // returns a Chart.js instance reference
  }

  ////////////////////////////
 //API Connection
 // more information found here : https://github.com/axios/axios
  preformSearchData = (username, owner, repo) => {
    // Make a request for a user with a given ID
    // let url = '/users/:username/repos';
    // let url =  '/repos/${owner}/${repo}/stats/contributors';
    axios.get(`https://api.github.com/repos/${owner}/${repo}/languages`)
      .then(response => {
        this.setState({
          gitData: response.data, //Photo's Array Data
          // resaultsTitle: query, // Results Title
          // isLoading: false, // Oviii :)
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing the data', error);
      });
  }
////////\\\\\\\\\\/////////\\\\\\\\\\\///////\\\\\\\\////////\\\\\\
  preformSearchRepo = (owner, repo) => {
  // Make a request for a user with a given ID
  // let url = '/users/:username/repos';
  // let url =  '/repos/${owner}/${repo}/stats/contributors';
  // "https://api.github.com/repos/brandonv98/bio" add this
  //https://api.github.com/repos/brandonv98/${repo}/commits
  axios.get(`https://api.github.com/repos/${owner}/${repo}`)
    .then(response => {
      this.setState({
        gitRepoData: response.data, //Photo's Array Data
        forkLink: response.data.clone_url,
        // resaultsTitle: query, // Results Title
        // isLoading: false, // Oviii :)
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing the data', error);
    });
}

///////////////////////
///
  findPercents = (number) => {
    const repoLang = this.state.gitData;
    const total = repoLang.CSS + repoLang.JavaScript + repoLang.HTML
    let percent = (number / total) * 100;
    return percent;
  }
////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  render() {
    const repo = this.state.gitData;
    console.log(this.state.gitRepoData.created_at);
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
          data: [this.findPercents(repo.JavaScript),
                this.findPercents(repo.CSS),
                this.findPercents(repo.HTML)],
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
    console.log(this.state.gitRepoData.clone_url, this.props);
    return (
      <div>
        <Row className="show-grid">
              <Col md={12}>
                <Nav className='main-nav'>
                    <li>
                      <NavLink className='return-arrow' to={`/bio`}>&#8617; Return</NavLink>
                    </li>
                    <li>
                      <NavLink to={`${this.state.forkLink}`}>Fork Project
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
        <Row className="show-grid">
          <Col md={6}>
            <Bar
              data={langData}
              width={110}
              height={50}
              options={{
                maintainAspectRatio: true
               }}
          />
          </Col>
          <Col md={6}>
            <Doughnut ref='chart' data={langData}
              width={120}
              height={50} />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col md={12}>
            <HorizontalBar
              data={commitData}
              width={100}
                height={10} />
          </Col>
          <Col md={6}>

          </Col>
        </Row>
      </div>
    );
  }
}
