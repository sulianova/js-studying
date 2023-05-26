import React from 'react';

export default class Item extends React.Component {
  render() {
    const { task, onRemove } = this.props;

    return (
      <div className="row">
        <div className="col-auto">
          <button type="button" className="btn btn-primary btn-sm" onClick={onRemove}>-</button>
        </div>
        <div className="col">
          {task.text}
        </div>
      </div>
    );
  }
}