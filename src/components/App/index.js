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
        const isComm = this.isFormCommitable();

        if (isComm) {
            this.setState((state) => ({step: state.step + 1}));
        }
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

        if (step !== 1 | 2) {
            return false;
        }

        return false;
    };

    handleChangeForm = (name, value) => {
        if (arguments.length < 2) return false;

        this.setState((state)=>({[name]: value}));


    };

    handleTabClick = (value) => {
        if (arguments.length !== 0) {
            this.setState((state) => ({step: {value}}));
        }
    };

    onClick = (num) => {
        this.setState((state)=>({step: num}));
    };

    renderForm = () =>  {
        const { firstName,
            lastName,
            email,
            step,
            cardNumber } = this.state;
        let content = null;

        if (step === 1) {
            content = (
                <PersonalForm firstName={firstName}
                              lastName={lastName}
                              email={email}
                              onChangeForm={this.handleChangeForm}
                              buttonRef={this.button}
                              isFormCommitable={this.isFormCommitable}
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
                    <Step number={1} title={'Personal information'} isSelected={(this.state.step === 1)} isClickable={true} onClick={this.onClick}/>
                    <Step number={2} title={'Card information'} isSelected={(this.state.step === 2)} isClickable={(this.state.step > 2)} onClick={this.onClick}/>
                    <Step number={3} title={'Finish'} isSelected={(this.state.step === 3)} isClickable={(this.state.step > 3)} onClick={this.onClick}/>
                </div>
                {this.renderTitle()}
                <div className="form-content">
                    {this.renderForm()}
                </div>
                <div className="button-panel">
                    <button ref={this.button} className="button-next"
                            onClick={ this.handleClickNextForm }
                    >
                        Next
                    </button>
                </div>
            </div>
        )
    }
}

export default App;
