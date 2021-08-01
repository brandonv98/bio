// const request = require('request'); <-- Review l8er
import React, { Component } from 'react';
import {
	Row,
	Col,
	Nav
} from 'react-bootstrap'; // //Dependances are : BS, RRD, Axios, React Chartjs 2, || Documentation Links : axios - https://github.com/jerairrest/react-chartjs-2 ///  BS - https://react-bootstrap.github.io/getting-started/introduction/  //// ChartJS 2 : https://octicons.github.com/
import {
	NavLink,
	Link
} from 'react-router-dom'; // ^^
import axios from 'axios'; // ^^


export default class GitHubLogin extends Component {
  constructor(props) {
    super(props);
      this.state = {
        gitHubOAuthURL: 'https://github.com/login/oauth/access_token',    //
        gitHubLoginResponse: {},  // GitHub HTML response data 
        gitHubHTML: {},
        userId: '' // GitHub username
      }
  }
  componentDidMount() {
		// const user = this.state.userId;
		// let gitHubHTML = this.state.gitHubLoginResponse;
		this.userLogin(); // API State
		// console.log(this.refs.chart.chart_instance); // returns a Chart.js instance reference
	}

//  Perform user login
userLogin = () => {
//       'code': 'ad2ef22a6810cae8399833d346d611f3ffe27255'                //  Code: Client Secrets (Keys)
//       'client_id': '2f7e4ff0a2db1d1c0323'                                           //  GitHub Application Name: Local Development (2f7e4ff0a2db1d1c0323)
//       'client_secret': 'ad2ef22a6810cae8399833d346d611f3ffe27255     //         - Client Secrets (Keys): ad2ef22a6810cae8399833d346d611f3ffe27255

    axios.defaults.baseURL = 'http://localhost:3000';
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Accept'] = 'application/json';
    axios(
      {
        method: 'GET',
        url: 'https://github.com/login/oauth/authorize',
        headers: {
          ['Access-Control-Allow-Origin']: '*',
        }
      }).then(res => {
      console.log(res, 'SOMETHING');
        this.setState({
          gitHubHTML: res.body
        });
    }).catch(err => {console.error(err)});

    // Request for a user with a given ID    
		// axios({
    //     method: 'POST',
    //     url: 'https://github.com/login/oauth/access_token',
    //     headers: {
    //       Authorization: 'bearer' + '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',
    //       Cookie: 'Cookie_1=value; _device_id=dfb8231e3bed59033ac2fb924d32a3fe; _gh_sess=Lj3byIznvmhqEGBWOnonzVEi3hWD5bLC05giV%2FRBah7SFu%2FQp9SL8jZOA4gofkDs7iNeg7z4zAPDjP1sCm66ZkFg19zUIRcKB98t86DYc5N7jvIQ9j5gmH%2BHGA3P8QF7iuKz4jUAREL6kxYU7ozxv99iCkPj1%2B6%2BhwYW%2Fbo%2BSQJ9JCawZXYX8YrjywoLCobEtyRcug%3D%3D--Svx9EmzyWkmAQfAI--tvu4DdIWW0X1wBMJPQTjrw%3D%3D; _octo=GH1.1.518464387.1623399591; logged_in=no'
    //     },
    //     body: {
    //       grant_type: 'authorization_code',
    //       code: 'ad2ef22a6810cae8399833d346d611f3ffe27255',
    //       client_id: '2f7e4ff0a2db1d1c0323',
    //       client_secret: 'ad2ef22a6810cae8399833d346d611f3ffe27255',
    //       redirect_uri: 'http://localhost:3000/v1/callback',
    //       ['Access-Control-Allow-Origin']: '*',
    //       ['X-OAuth-Scopes']: 'user, profile',
    //       ['X-Accepted-OAuth-Scopes']: 'user'
    //     },
    //   })
    // .then(response => {
    //   console.log(response.data);
    //   this.setState({
    //     gitHubLogResponse: response.body, //GitHub login HTML response
    //   });
    // })
    // .catch(error => {
    //   console.error('Error fetching and parsing the data', error);
    // });

  }

    render() {
      this.userLogin();
      console.log(this.state.gitHubLoginResponse);
      return (
        <div>
          {this.state.gitHubLogResponse}        
      </div>
    )
  }
};

