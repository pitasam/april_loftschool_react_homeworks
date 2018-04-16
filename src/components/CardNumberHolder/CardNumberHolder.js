import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {

  state = {
      cardNumber: '',
  };

  handleChange =(value) => {
    this.setState((state)=>({cardNumber: value}));
  };

  render() {
    const { cardNumber } = this.state;
    return (
      <CardNumberInput cardNumber={cardNumber}
                       onChange={this.handleChange} />
    );
  }
}

export default CardNumberHolder;
