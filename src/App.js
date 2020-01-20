import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import AddTodo from './addTodo'
import TodoList from './TodoList'

class App extends Component {
  // empty array props: todoTask state will change when a new task is added using either enter or
  // plus button will update the state to have content inside

  state = {
    todoTask: []
  }


  // addTodoTask takes in a task as a function value which a new variable is assign using
  // an array which has accesses the current state of the todoTask, whilst adding new task onto the array


  addTodoTask = (task) => {
    // each task has unique id for keys within React
    task.id = Math.random();
    let tasks = [...this.state.todoTask, task];
    this.setState({
      todoTask: tasks
    });
  }

  render() {
    return (
      <div>
        <Header />
        <AddTodo addTodoTask={this.addTodoTask} />
        <TodoList todoTask={this.state.todoTask} />

      </div>
    )
  }
}

export default App;