import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import AddTodo from './addTodo'
import TodoList from './TodoList'

class App extends Component {
  state = {
    todoTask: []
  }


  render() {
    return (
      <div>
        <Header />
        <AddTodo  />
        <TodoList />

      </div>
    )
  }
}

export default App;
