import React, { Component } from 'react';
import './Chat.css';
import { Link } from 'react-router-dom';

class Chat extends Component {

    constructor() {
        super();
        this.state = {
            friend: {},
            messages: [
                { sentByUser: false, text: "Hey!" },
                { sentByUser: false, text: "What's up?" },
                { sentByUser: true, text: "How is it going?" },
                { sentByUser: false, text: "I'm doing fine!" },
            ],
            messageToSend: ""
        }
    }

    componentDidMount() {
        this.setState({ friend: this.props.location.state.friend });
    }

    onChangeMessage = (event) => {
        this.setState({ messageToSend: event.target.value });
    }

    sendMessage = async (event) => {
        event.preventDefault();
        if (this.state.messageToSend) {
            await this.setState({ messages: [...this.state.messages, { sentByUser: true, text: this.state.messageToSend }], messageToSend: "" });
            const chat = document.getElementsByClassName("chat-messages-window")[0];
            chat.scrollTop = chat.scrollHeight;
        }
    }

    render() {
        return (
            <div className="chat-page">
                <Link className="back-btn" to="/">Return</Link>
                <h2 className="chat-title">{this.state.friend.name}</h2>
                <div className="chat-messages-window">
                    { this.state.messages.map(message =>
                        <div className="chat-message-row">
                            <div className={"chat-message " + (message.sentByUser ? "message-out" : "message-in") }>{message.text}</div>
                        </div>)
                    }
                </div>
                <form className="chat-send-message-row">
                    <input className="chat-message-input" type="text" value={this.state.messageToSend}
                        placeholder="Enter your message" onChange={this.onChangeMessage}/>
                    <button className="chat-submit-btn" type="submit" onClick={this.sendMessage}>Send</button>
                </form>
            </div>
        )
    }
}

export default Chat;