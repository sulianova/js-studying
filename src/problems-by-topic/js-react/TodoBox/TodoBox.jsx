import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTaskText: '', tasks: [] };
  }

  handleChangeTask = ({ target: { value } }) => {
    this.setState({ newTaskText: value });
  }

  handleRemoveTask = (removingId) => (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter(({ id }) => id !== removingId) });
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { tasks, newTaskText } = this.state;
    const newTask = { id: uniqueId(), text: newTaskText };
    this.setState({ newTaskText: '', tasks: [newTask, ...tasks] });
  }

  renderForm() {
    const { newTaskText } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm} className="d-flex">
        <div className="me-3">
          <input
            type="text"
            onChange={this.handleChangeTask}
            value={newTaskText}
            required
            className="form-control"
            placeholder="I am going..."
          />
        </div>
        <button type="submit" className="btn btn-primary">add</button>
      </form>
    );
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <div className="mb-3">
          {this.renderForm()}
        </div>
        {tasks.map((task) => (
          <div key={task.id}>
            <Item task={task} onRemove={this.handleRemoveTask(task.id)} />
            <hr />
          </div>
        ))}
      </div>
    );
  }
}