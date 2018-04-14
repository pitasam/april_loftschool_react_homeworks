import React, { Component } from 'react';
import './CardForm.css';

class CardForm extends Component {

    handleChangeForm = (event) => {
        const { onChangeForm } = this.props;

        onChangeForm(event.target.name, event.target.value);
    };

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="card-form">
                <input className="input" type="number" name="cardNumber" onChange={this.handleChangeForm}/>
            </div>
        );
    }
}

export default CardForm;
