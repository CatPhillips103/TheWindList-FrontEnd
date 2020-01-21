import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import AddTodo from './addTodo'
import TodoList from './TodoList'

class App extends Component {
  // empty array props: todoTask state will change when a new task is added using either enter or
  // plus button will update the state to have content inside

  state = {
    todoTask: [],
    taskCount: 0
  }


  // addTodoTask takes in a task as a function value which a new variable is assigned using
  // an array which has accesses the current state of the todoTask, whilst adding new task onto the array


  addTodoTask = (task) => {
    // each task has unique id for keys within React
    task.id = Math.random();
    let tasks = [...this.state.todoTask, task];
    this.setState({
      todoTask: tasks
    });

    let tobeCompleted = this.state.taskCount + 1;
    this.setState({
      taskCount: tobeCompleted
    });
  }


  render() {
    return (
      <div>
        <Header taskCount={this.taskCount} />
        <div className="container">
          <h2 className="counter">{this.state.taskCount}</h2>
        </div>
        <AddTodo addTodoTask={this.addTodoTask} />
        <TodoList todoTask={this.state.todoTask}/>
      </div>
    )
  }
}

export default App;