import cn from 'classnames';
import React from 'react';

const Header = ({ children, toggle }) => (
  <div className="modal-header">
    <div className="modal-title">
      {children}
    </div>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggle} />
  </div>
);
const Body = ({ children }) => <div className="modal-body">{children}</div>;
const Footer = ({ children }) => <div className="modal-footer">{children}</div>;

export default class Modal extends React.Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const { children, isOpen } = this.props;
    const classes = cn({
      modal: true,
      fade: isOpen,
      show: isOpen,
    });

    const style = {
      display: isOpen ? 'block' : 'none',
    };

    return (
      <div className={classes} style={style} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    )
  }
}

Modal.defaultProps = {
  isOpen: false,
};