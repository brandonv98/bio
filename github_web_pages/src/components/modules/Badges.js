import React, {
  Component
} from 'react';
// Components lib
import brandonvancamp2 from '../../data/brandonvancamp2'; // local DB
// Dependencies
// import {
//   Route,
//   Switch
// } from 'react-router-dom';
// Not Found Page
export default class Home extends Component {
  render() {
    console.log(brandonvancamp2);
    console.log(brandonvancamp2.badges['150'].icon_url);
    const iconImg = brandonvancamp2.badges['150'].icon_url;
    return (
      <div className="App">

        <img src={iconImg} />

      </div>);
  }
}
