import React, { Component } from 'react';
import Message from './../Message';
import './Chat.css';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            messageInput: '',
        };
    }

    changeInputMessage = (event) => {
        // значение input сохраняем в messageInput
        let  value;

        value  = event.target.value;
        this.setState({messageInput: value });
    };

    sendMessageOnEnter = (event) => {
        // нажат enter
        // сохраняем сообщение в массив
        // переменную messageInput обнуляем в пустую строку
        if (event.key === 'Enter') {
            const messageInput = this.state.messageInput;
            const messages = this.state.messages;

            this.setState({messages: [...messages, {text: messageInput}], messageInput: ''});
        }
    };

    render() {
        const { messages, messageInput } = this.state;

        return (
            <div className="chat">
                <div className="message-list">
                    <div className="messages">{ messages.map((message, index) => (<Message key={index} text={ message.text } />)) }</div>
                </div>


                <input className="input-message"
                       onChange={this.changeInputMessage}
                       onKeyPress={this.sendMessageOnEnter}
                       value={ messageInput }
                       type="text"/>

            </div>
        )
    }
}

export default Chat;