import React, { Component } from 'react';
import './Message.css';

class Message extends Component {

    render() {
        const { messages } = this.props;

        return (
            messages.map(item => <div className="message">{ item.text }</div>)
        )
    }
}

export default Message;
