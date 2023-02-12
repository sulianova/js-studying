import React from 'react';

export default class Card extends React.Component {
render() {
  const vdom = (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Card title</h4>
        <p className="card-text">Some quick example text to build on the card</p>
        <button type="button" className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  );

  return vdom
}
}