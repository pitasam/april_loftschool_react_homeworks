import React, { Fragment, Component } from 'react';
import './ModalButton.css';
import Modal from './Modal'

class ModalButton extends Component {
  state = {
      isModalShow: false
  };

  // меняет значение isModalShow на true
  showModal = () => {
    this.setState((state)=>({isModalShow: true}));
  };

  // меняет значение isModalShow на false
  hideModal = () => {
      this.setState((state)=>({isModalShow: false}));
  };

  // рендерит кнопку
    // и компонент Modal, который отрендерится в соседний с root элемент
  render() {
    const { isModalShow } = this.state;

    return (
        <Fragment>
          <button onClick={this.showModal}>Open</button>
          <Modal show={isModalShow}>
            <div className="modal">
              <div className="modal__fog">
                <div className="modal__body">
                  <h1>Я модальное окно</h1>
                  <div> А это моё наполнение.
                    А это моё наполнение.
                    А это моё наполнение.
                    А это моё наполнение.
                    А это моё наполнение.
                  </div>
                  <button onClick={this.hideModal}>Close</button>
                </div>
              </div>
            </div>>
          </Modal>
        </Fragment>
    )
  }
}

export default ModalButton;
