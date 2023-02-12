import React from 'react';

export default ({ title, text }) => {
  if (!title && !text) {
    return null;
  }

  const titleDom = title && <h4 className="card-title">{title}</h4>;
  const textDom = text && <p className="card-text">{text}</p>;

  return (
    <div className="card">
      <div className="card-body">
        {titleDom}
        {textDom}
      </div>
    </div>
  );
};