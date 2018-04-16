import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
    render() {
        const { title } = this.props;

        return (
            <h1 className="title">{title}</h1>
        )
    }
}

export default Title;
