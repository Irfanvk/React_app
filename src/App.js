import React, { Component } from 'react';
import {connect } from 'react-redux'
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
        <NewItem data={this.props.editData}/>
        <Items />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editData: state.items.editingItem
  }
}

export default connect(
  mapStateToProps,
  null
)(App)
