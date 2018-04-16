import React, { Component } from 'react';
import './Message.css';

class Message extends Component {

    render() {
        const { text, key } = this.props;

        return (
            <span key={ key } className="message">{ text }</span>
        )
    }
}

export default Message;