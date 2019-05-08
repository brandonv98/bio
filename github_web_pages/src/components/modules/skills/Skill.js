import React from 'react';
import {Route, NavLink} from 'react-router-dom'; // Dependances are : RRD, Bootstrap
import {
  Nav,
  Row,
  Col,
  Jumbotron,
  Panel,
  Grid
} from 'react-bootstrap'; // ^^
import PostCardCSS from './../../../PostCard.css';
const PostCard = (props) => {
  console.log(props);
  return (
    <Col md={6}>

      <div>

        <ul className="content-block-list">
          <li className="grid-50 tablet-grid-50">
            <div className="content-block">
              <div className="grid-70 tablet-grid-70 mobile-grid-70 content-meta">
                <strong>Achievement</strong>
                <h3>Thinking in Components</h3>
                <p>React Basics</p>
                <div className="content-actions-container">
                  <span className="icon icon-complete"></span>
                  <strong>Achieved</strong>
                  <p>Sep 27, 2018</p>
                </div>
              </div>
              <div className="grid-30 tablet-grid-30 mobile-grid-30 achievement-hero">
                <img alt="Thinking in Components" src={props.image}/>
              </div>
            </div>
          </li>
        </ul>

      </div>

    </Col>
  );
}
export default PostCard;
