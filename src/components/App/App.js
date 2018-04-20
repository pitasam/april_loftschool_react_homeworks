import React, { Component } from 'react';
import './App.css';
import PersonalForm from '../PersonalForm';
import CardForm from './../CardForm';
import Step from './../Step';
import Title from './../Title';

class App extends Component {

    constructor(props) {
        super(props);
        this.button = React.createRef();
    };

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: '',
    };

    handleClickNextForm = () => {
       this.setState((state) => ({step: state.step + 1}));
    };

    isFormCommitable = () => {
        const { firstName, lastName, email, cardNumber, step } = this.state;

        if (step === 1) {
            return (firstName !== ''
                && lastName !== ''
                && email !== ''
                && email.includes('@')
            );
        }

        if (step === 2) {
            if (cardNumber.length === 16) {
                return true;
            }
        }

        return false;
    };

    handleChangeForm = (name, value) => {
        if (!(name && value)) return false;

        this.setState((state)=>({[name]: value}));
    };

    handleTabClick = (value = 0) => {
        this.setState((state) => ({step: value}));
    };

    renderForm = () =>  {
        const { firstName,
            lastName,
            email,
            step,
            cardNumber
        } = this.state;
        let content = null;

        if (step === 1) {
            content = (
                <PersonalForm firstName={firstName}
                              lastName={lastName}
                              email={email}
                              onChangeForm={this.handleChangeForm}
                />
            )
        } else if (step === 2) {

            content = (
                <CardForm cardNumber={cardNumber}
                          onChangeForm={this.handleChangeForm}
                          onChangeTimeOver={this.handleChangeTimeOver} />
            )
        } else if (step === 3) {
            content = (
                <p data-test="congratulations">Поздравляем!</p>
            )
        }

        return content;
    };

    renderTitle = () => {
        const { step } = this.state;
        let title;

        if (step === 1) {
            title = 'Персональная информация';
        } else if (step === 2) {
            title = 'Номер карты';
        }  else {
            return '';
        }

        return <Title title={title} />
    };

    render() {
        return (
            <div className="container">
                <div className="tab-panel">
                    <Step
                        number={1}
                        isSelected={(this.state.step === 1)}
                        isClickable={true}
                        onClick={this.handleTabClick}>
                        Personal information
                    </Step>
                    <Step number={2}
                          isSelected={(this.state.step === 2)}
                          isClickable={(this.state.step > 2)}
                          onClick={this.handleTabClick}>
                        Card information
                    </Step>
                    <Step number={3}
                          isSelected={(this.state.step === 3)}
                          isClickable={(this.state.step > 3)}
                          onClick={this.handleTabClick}>
                        Finish
                    </Step>
                </div>
                {this.renderTitle()}
                <div className="form-content">
                    {this.renderForm()}
                </div>
                <div className="button-panel">
                    <button ref={this.button} className="button-next"
                            onClick={ this.handleClickNextForm }
                            disabled={!this.isFormCommitable()}
                    >
                        Next
                    </button>
                </div>
            </div>
        )
    }
}

export default App;
