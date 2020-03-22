import React, { Component } from 'react';
import './FriendsList.css';
import { Link } from 'react-router-dom';

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
                { this.state.friends.map(friend => 
                    <Link className="friend-chat-link"
                    to={{ pathname: "/chat", state: { friend } }}>
                        Chat with {friend.name}
                    </Link>)
                }
            </div>
        )
    }
}

export default FriendsList;