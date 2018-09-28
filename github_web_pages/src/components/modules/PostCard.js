import React from 'react';
import {Route, NavLink} from 'react-router-dom';// Dependances are : RRD, Bootstrap
import {Nav, Row, Col, Jumbotron, Panel, Grid } from 'react-bootstrap'; // ^^
import PostCardCSS from './../../PostCard.css';
const PostCard = (props) => {
  return (
      <div>
        
          <Grid>
             <Row className="show-grid">
              <Col md={12}>

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
                  <img alt="Thinking in Components" src="https://achievement-images.teamtreehouse.com/badges_JavaScript_react_Stage2.png" />
                </div>
              </div>
            </li>
          </ul>
            
              </Col>
            </Row>
          </Grid>
      </div>
   );
}
export default PostCard;
