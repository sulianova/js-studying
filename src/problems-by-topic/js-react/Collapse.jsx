import React from 'react';
import cn from 'classnames';

export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    const { opened } = props;
    this.state = { opened };
  }

  handleToggle = () => {
    this.setState(({ opened }) => ({ opened: !opened }));
  };

  render() {
    const { opened } = this.state;
    const { text } = this.props;
    const classes = cn({
      collapse: true,
      show: opened,
    });

    return (
      <div>
        <p>
          <a
            className="btn btn-primary"
            onClick={this.handleToggle}
            data-bs-toggle="collapse"
            href="#"
            role="button"
            aria-expanded={opened}
          >
            Link with href
          </a>
        </p>
        <div className={classes}>
          <div className="card card-body">
            {text}
          </div>
        </div>
      </div>
    );
  }
}

Collapse.defaultProps = {
  opened: true,
};