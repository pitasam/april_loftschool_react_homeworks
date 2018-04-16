import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  // рендерит модальное окно в блоке #portal (разполагается на уровне с root)
  render() {
    const { show, children } = this.props;

      return (show ? ReactDOM.createPortal(children, document.getElementById('portal')) : null);
  }
}

export default Modal;
