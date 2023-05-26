import React from 'react';

export default class ListGroup extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ul className="list-group">
        {React.Children.map(children, (item) => <li className="list-group-item">{item}</li>)}
      </ul>
    );
  }
}