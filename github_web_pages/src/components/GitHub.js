import React, {
	Component
} from 'react';
import {
	Row,
	Col,
	Nav,
	Grid
} from 'react-bootstrap'; // Dependencies are : BS, RRD, Axios, React Chartjs 2, || Documentation Links : axios - https://github.com/jerairrest/react-chartjs-2 ///  BS - https://react-bootstrap.github.io/getting-started/introduction/  //// ChartJS 2 : https://octicons.github.com/
import {
	NavLink,
	Link,
} from 'react-router-dom'; // ^^
import axios from 'axios'; // ^^
import {
	Doughnut,
	Bar,
	HorizontalBar
} from 'react-chartjs-2'; // Charts for data ^^
import ForkRepo from '../img/repo-forked.svg'; // SVG fork logo
export default class GitHub extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gitData: [], // Languages data
			gitRepoData: [], // Repo Data
			owner: 'brandonv98', // username of the repo
			repo: this.props.match.params.repo, // for selected repo
			forkLink: '', // Fork link
			repoName: '',
		};
	}
	componentDidMount() {
		const owner = this.state.owner;
		let repo = this.state.repo;
		this.preformSearchData(owner, repo); // API State
		// console.log(this.refs.chart.chart_instance); // returns a Chart.js instance reference
	}
	//API Connection || More information found here : https://github.com/axios/axios
	preformSearchData = (owner, repo) => {
		// Make a request for a user with a given ID
		axios.get(`https://api.github.com/repos/${owner}/${repo}/languages`)
			.then(response => {
				this.setState({
					gitData: response.data, //Git languages used in this repo
				});
			})
			.catch(error => {
				console.log('Error fetching and parsing the data', error);
			});
		// Make our 2nd request
		axios.get(`https://api.github.com/repos/${owner}/${repo}`)
			.then(response => {
				this.setState({
					gitRepoData: response.data, //Git Repo Data
					forkLink: response.data.clone_url, // fork link for repo
					repoName: response.data.name, // Name of the repo
				});
			})
			.catch(error => {
				console.log('Error fetching and parsing the data', error);
			});
	}
	findPercents = (number) => { // Take all languages data and get the percent used of each one.
		const repoLang = this.state.gitData; // Get all languages
		const total = repoLang.CSS + repoLang.JavaScript + repoLang.HTML // Add all languages
		let percent = (number / total) * 100; // Find the percent used of each language 
		return percent;
	}
	handleRepoNameUnderScores = (title) => { //  Delete the under scores _ for the repo name
		const delUnderScores = title.replace(/_/g, ' '); // remove all "_"(underscores) and return with " "(space).
		return delUnderScores;
	}
	returnBack = (e) => {
		e.preventDefault();
		window.history.back();
	}
	render() { // RENDER()
		const repoLangs = this.state.gitData; // repo lang data
		const langData = { // charts for languages
			labels: ['JavaScript', 'CSS', 'HTML'], // Should make these dynamic
			datasets: [{
				label: 'Languages used in Percents for ' + this.state.gitRepoData.name,
				backgroundColor: ['rgba(255,153,4,0.9)', 'rgba(22,189,244,0.9)', 'rgba(255,0,0,0.9)'],
				borderColor: 'rgba(255,99,132,1)',
				borderWidth: 1,
				hoverBackgroundColor: ['rgba(255,153,4,0.6)', 'rgba(22,189,244,0.6)', 'rgba(255,0,0,0.6)'],
				hoverBorderColor: ['rgba(255,153,4,0.9)', 'rgba(22,189,244,0.9)', 'rgba(255,0,0,0.9)'],
				data: [this.findPercents(repoLangs.JavaScript),
          this.findPercents(repoLangs.CSS),
          this.findPercents(repoLangs.HTML)
        ],
      }]
		};
		const commitData = { // Commit Chart Data, total size of repo
			labels: ['Total Size', ],
			datasets: [{
				label: 'Project Size for ' + this.state.gitRepoData.name,
				backgroundColor: ['rgba(169, 173, 172,0.6)'],
				borderColor: 'rgba(23, 239, 185,1)',
				borderWidth: 1,
				hoverBackgroundColor: ['rgba(169, 173, 172,0.9)'],
				hoverBorderColor: ['rgba(169, 173, 172,0.9)'],
				data: [this.state.gitRepoData.size],
      }]
		};
		return (
			<Grid>
        <Row className="show-grid">
          <Col md={12}>
            <Nav className='main-nav'>
                <li>
                  <NavLink className='return-arrow' onClick={this.returnBack} to={`/bio`}>&#8617; Return</NavLink>
                </li>
                <li>
                  <a href={`${this.state.forkLink}`} rel="noreferrer noopener" target="_blank">Fork Project
                    <span><img src={ForkRepo} alt="forked gh icon" className="octicon" /></span>
                  </a>
                </li>

            </Nav>
						<Nav className='main-nav'>
							<li>
								<a href={`https://brandonv98.github.io/${this.state.repoName}`} rel="noreferrer noopener" target="_blank">Live Demo</a>
							</li>
						</Nav>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={12}>
            <h3>More Stats For &#8628;</h3>
            <h4><b>{this.handleRepoNameUnderScores(this.state.repoName)}</b></h4>
            <p><b>Project description</b> : {this.state.gitRepoData.description}</p>
          </Col>
          <Col md={4}>
            <p><b>Developed By</b>: Brandon VanCamp</p>
            <p><b>Created on</b>: {this.state.gitRepoData.created_at} &#8628;</p>
            <p><b>Last Updated</b>: {this.state.gitRepoData.updated_at}</p>
				<p><b>Open Project Documentation</b>: <a href={`https://brandonv98.github.io/${this.state.repoName}`} rel="noreferrer noopener" target="_blank">Wiki</a></p>
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
              width={100}
              height={30} />
          </Col>
        </Row>
      </Grid>);
	}
}
