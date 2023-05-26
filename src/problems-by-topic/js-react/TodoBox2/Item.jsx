import React from 'react';

const Item = ({ task, onClick }) => {
  const link = <a href="#" className="todo-task" onClick={onClick}>{task.text}</a>;

  return (
    <div className="row">
      <div className="col-1">
        {task.id}
      </div>
      <div className="col">
        {task.state === 'finished' ? (<s>{link}</s>) : link}
      </div>
    </div>
  );
};

export default Item;