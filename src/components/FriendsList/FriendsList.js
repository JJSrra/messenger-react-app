import React, { Component } from 'react';
import './FriendsList.css';

class FriendsList extends Component {
    
    constructor() {
        super();
        this.state = {
            friends: [
                { id: 0, name: "John Doe"},
                { id: 1, name: "Sarah Williams"},
                { id: 2, name: "Tom Smith"},
                { id: 3, name: "Jane Green"}
            ]
        }
    }

    render() {
        return (
            <div className="friends-list">
                { this.state.friends.map(friend => <a className="friend-chat-link">Chat with {friend.name}</a>) }
            </div>
        )
    }
}

export default FriendsList;