import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FriendsList from './components/FriendsList/FriendsList';
import Chat from './components/Chat/Chat';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Messenger App built with React</h1>
        </header>
        <Router>
          <Route exact path="/" component={FriendsList}></Route>
          <Route exact path="/chat" component={Chat}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
