import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import AddTodo from './addTodo'
import TodoList from './TodoList'

class App extends Component {
  state = {
    todoTask: []
  }

  addTodoTask = (task) => {
    task.id = Math.random();
    let tasks = [...this.state.todoTask, task];
    this.setState({
      todoTask: tasks 
    })
  }

  render() {
    return (
      <div>
        <Header />
        <AddTodo addTodoTask={this.addTodoTask}  />
        <TodoList todoTask={this.state.todoTask}/>

      </div>
    )
  }
}

export default App;