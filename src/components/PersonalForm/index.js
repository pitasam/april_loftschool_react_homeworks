import React, { Component } from 'react';
import './PersonalForm.css';

class PersonalForm extends Component {

    handleChangeForm = (event) => {
        const { onChangeForm} = this.props;

        onChangeForm(event.target.name, event.target.value);
    };

    render() {

        return (
            <div className="personal-form">
                <input className="input" type="text" name="firstName" onInput={this.handleChangeForm} placeholder="firstName"/>
                <input className="input" type="text" name="lastName" onInput={this.handleChangeForm} placeholder="lastName"/>
                <input className="input" type="text" name="email" onInput={this.handleChangeForm} placeholder="email"/>
            </div>
        )
    }
}

export default PersonalForm;