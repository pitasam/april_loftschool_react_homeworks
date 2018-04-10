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
        this.setState(({ messageInput }) => ({messageInput: value }));
    };

    sendMessageOnEnter = (event) => {
        // нажат enter
        // сохраняем сообщение в массив
        // переменную messageInput обнуляем в пустую строку
        if (event.key === 'Enter') {
            const mes = this.state.messageInput;

            this.setState((state) => ( this.state.messages.push({'text': mes})));
            this.setState(({ messageInput }) => ({'messageInput': ''}));
        }
    };

    render() {
        const { messages } = this.state;
        const { messageInput } = this.state;

        return (
            <div className="chat">
                <Message messages={ messages } />

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

