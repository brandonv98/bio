import React, {
  Component
} from 'react';
// Components lib
import brandonvancamp2 from '../../data/brandonvancamp2'; // local DB
import {
	Doughnut,
	Bar,
	HorizontalBar
} from 'react-chartjs-2'; // Charts for data
import {
	Row,
	Col,
	Nav,
	Grid
} from 'react-bootstrap';
import axios from 'axios'; // ^^
// import PostCardCSS from './../../PostCard.css';

import PostCard from './PostCard';

// Dependencies
// import {
//   Route,
//   Switch
// } from 'react-router-dom';
// Not Found Page
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      badges: [],
      points: []
    };
  }
  componentDidMount() {
    this.preformSearchData();
  }
  	//API Connection || More information found here : https://github.com/axios/axios
	preformSearchData = () => {
		// Make a request for a user with a given ID
		axios.get(`https://teamtreehouse.com/brandonvancamp2.json`)
			.then(response => {
        console.log(response);
				this.setState({
          badges: response.data,
          points: response.data.points
				});
			})
			.catch(error => {
				console.log('Error fetching and parsing the data', error);
      });
    }



  render() {
    console.log(this.state.points);

    const jsPoints = this.state.points.JavaScript;
    const total = this.state.points.total;
    const totalPoints = { // charts for languages
			labels: ['Total Points'], // Should make these dynamic
			datasets: [{
				label: ' SKILL CAP ',
				backgroundColor: ['rgba(255,153,4,0.9)', 'rgba(22,189,244,0.9)', 'rgba(255,0,0,0.9)'],
				borderColor: 'rgba(255,99,132,1)',
				borderWidth: 1,
				hoverBackgroundColor: ['rgba(255,153,4,0.6)', 'rgba(22,189,244,0.6)', 'rgba(255,0,0,0.6)'],
				hoverBorderColor: ['rgba(255,153,4,0.9)', 'rgba(22,189,244,0.9)', 'rgba(255,0,0,0.9)'],
        data: [
              total
              
          // this.findPercents(repoLangs.CSS),
          // this.findPercents(repoLangs.HTML)
        ],
      }]
		};
    const langData = { // charts for languages
			labels: ['JavaScript', 'HTML', 'CSS', 'Total'], // Should make these dynamic
			datasets: [{
				label: ' SKILL CAP ',
				backgroundColor: ['rgba(255,153,4,0.9)', 'rgba(22,189,244,0.9)', 'rgba(255,0,0,0.9)', 'rgba(111, 51, 139, 0.8)'],
				borderColor: 'rgba(169, 173, 172,0.8)',
				borderWidth: 1,
				hoverBackgroundColor: ['rgba(255,153,4,0.6)', 'rgba(22,189,244,0.6)', 'rgba(255,0,0,0.6)', 'rgba(111, 51, 139, 0.6)'],
				hoverBorderColor: ['rgba(255,153,4,0.9)', 'rgba(22,189,244,0.9)', 'rgba(255,0,0,0.9)'],
        data: [jsPoints, 
              this.state.points.HTML,
              this.state.points.CSS,
              total
              
          // this.findPercents(repoLangs.CSS),
          // this.findPercents(repoLangs.HTML)
        ],
      }]
		};
    return (
      <Grid className="badge-grid">
      {/* <img src={iconImg} /> */}
          {/* <p>{jsPoints}</p> */}
        <Row className="show-grid">
          <Col md={6}>
            <Doughnut
              ref='chart'
              data={langData}
              width={100}
              height={50} 
            />
          </Col>

          <Col md={6}>
              <Bar
                data={totalPoints}
                width={100}
                height={50}
                />
            </Col>
        </Row>
        
        <Row>
          <Col md={12}>
            <PostCard />
          </Col>
          
        </Row>
      </Grid>
    );
  }
}
