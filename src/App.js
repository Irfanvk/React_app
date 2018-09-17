import React, { Component } from 'react';
import './App.css';
import Items from './components/Items'
import NewItem from './components/NewItem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Illuminate - react-redux</h1>
        </header>
        <NewItem />
        <Items />
      </div>
    );
  }
}

export default App;
