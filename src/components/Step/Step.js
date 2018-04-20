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
        const { number,
            isClickable,
            isSelected,
            children
        }  = this.props;
        let classStep = classNames('step',
            {'step-selected': isSelected},
            { 'step-clickable': isClickable });

        return (
            <div className={classStep} onClick={this.handleClick}>
                <div className="step__number">{number}</div>
                <div className="step__title">{children}</div>
            </div>
        )
    }
}

export default Step;