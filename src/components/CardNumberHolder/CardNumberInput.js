import React, {Component} from 'react';

class CardNumberInput extends Component {

  state = {
    number: '',
  };

  // форматирует переданный агрумент, вставляя пробелы через 4 символа
    format = (value) => {
        let result = '';

        if (value) {
            result = value.replace(/(\d{0,4})/g, '$1 ').trim();
        }

        return result;
    };

  // форматирует переданный агрумент, убирая все пробелы
  normalize = (value) => {
      let result = value.replace(/\s/g, '');

      return result;
  };

  // берет прокинутое значение из cardNumber
  componentWillReceiveProps (nextProps) {
      this.setState({ number: this.format(nextProps.cardNumber) });
  }

  // по изменению инпута, прокидывает значение инпута
  // в компонент-родитель в cardNumber
  onChange = (event) => {
    const { onChange } = this.props;
    const cardNumber = this.normalize(event.target.value);

    onChange(cardNumber);
  };

  render() {
    const { number } = this.state;

    return (
        <input value={number} type="text" onChange={this.onChange} />
    );
  }
}

export default CardNumberInput;
