import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import AddTodo from './addTodo'

class App extends Component {
  state = {
    todoTask: [
      
    ]
  }





  render() {
    return (
      <div>
        <Header />
        <AddTodo />
      </div>
    )
  }
}

export default App;
