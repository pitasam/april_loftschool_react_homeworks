import React, { Component } from 'react';
import './Message.css';

class Message extends Component {

    render() {
        const { text, key } = this.props;

        return (
            <div key={ key } className="message">{ text }</div>
        )
    }
}

export default Message;
