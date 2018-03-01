import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// import PropTypes from 'prop-types';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me'],};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }
  componentDidMount() {
    this.setState({
      fade: true,
    });
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));
    return (
      <div>
        <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionEnter={false}
            transitionLeave={false}>
            <h1>{this.props.match.params.repo}</h1>
          </ReactCSSTransitionGroup>
      </div>
    );
  }
}
