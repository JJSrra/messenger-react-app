import React, { Component } from 'react';
import './Chat.css';
import { Link } from 'react-router-dom';

class Chat extends Component {

    constructor() {
        super();
        this.state = {
            friend: {},
            messages: []
        }
    }

    componentDidMount() {
        this.setState({ friend: this.props.location.state.friend });
    }

    render() {
        return (
            <div>
                <h2>{this.state.friend.name}</h2>
                <Link to="/">Back</Link>
            </div>
        )
    }
}

export default Chat;