import React, { Component } from 'react';
import './Step.css';
let classNames = require('classnames');


class Step extends Component {


    handleClick =() => {
        const { isClickable, onClick, number } = this.props;

        if (isClickable) {
            onClick(number);
        }
    };

    render() {
        const { number, title } = this.props;
        const { isClickable, isSelected } = this.props;
        let classStep = classNames('step', {'step-selected': isSelected}, { 'step-clickable': isClickable } );

        return (
            <div className={classStep} onClick={this.handleClick}>
                <div className="step__number">{number}</div>
                <div className="step__title">{title}</div>
            </div>

        )
    }
}

export default Step;
