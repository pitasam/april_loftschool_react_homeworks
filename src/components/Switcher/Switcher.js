import React, { Component } from 'react';
import './Switcher.css';
import VideoPlayer from './../VideoPlayer';
import CardNumberHolder from './../CardNumberHolder';
import ModalButton from './../ModalButton';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0,
  };

  // берет идентификационный номер элемента и записывает его в selectedChild
  handleChangeChild = (event) => {
    const numElem = event.target.dataset.id;

    this.setState((state)=>({selectedChild: numElem}));
  };

  // возвращает скцию, которую нужно отрендерить
  renderSection = () => {
      let renderSection = '';
      const { selectedChild } = this.state;
      const { children } = this.props;

      if (selectedChild == 0) {
          renderSection = (
              React.Children.toArray(children)[0]
          );
      } else if (selectedChild == 1) {
          renderSection = (
              React.Children.toArray(children)[1]
          );
      } else if (selectedChild == 2) {
          renderSection = (
              React.Children.toArray(children)[2]
          );
      } else {
        return null;
      }

      return renderSection;
  };

    // рендерит имена детей компонента Switch
    // рендерит необходимую секцию
  render() {
    const { children } = this.props;

    return(
        <div className="switcher">
          <nav>
            <ul className="component-list">
                {
                  React.Children.toArray(children).map((item, index)=>(
                    <li className="component-list__name" data-id={index} key={index} onClick={this.handleChangeChild}>{item.type.displayName || item.type.name}</li>
                  ))
                }
            </ul>
          </nav>
          <div className="component-wrapper">
              {this.renderSection()}
          </div>
        </div>
    )
  }
}

export default Switcher;
