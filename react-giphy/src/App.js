import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './SearchContainer/SearchContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Giphy Search</h1>
        <Search />
      </div>
    );
  }
}

export default App;
