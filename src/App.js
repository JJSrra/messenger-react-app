import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList/FriendsList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Messenger App built with React</h1>
        </header>
        <FriendsList/>
      </div>
    );
  }
}

export default App;
