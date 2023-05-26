import React from 'react';

const Title = (props) => <h4 className="card-title">{props.children}</h4>;
const Text = (props) => <p className="card-text">{props.children}</p>;
const Body = (props) => <div className="card-body">{props.children}</div>;

export default class Card extends React.Component {
  static Text = Text;
  static Title = Title;
  static Body = Body;

  render() {
    const { children } = this.props;
    return <div className="card">{children}</div>;
  }
}