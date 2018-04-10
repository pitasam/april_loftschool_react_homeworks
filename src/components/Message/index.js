import React, { Component } from 'react';
import './Message.css';

class Message extends Component {

    render() {
        const { messages } = this.props;

        return (
            <ul>
                {messages.map(item => <li className="message">{ item.text }</li>)}
            </ul>
        )
    }
}

export default Message;
