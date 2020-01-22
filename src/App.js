import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import TaskCounter from './TaskCounter'
import AddTodo from './addTodo'
import TodoList from './TodoList'

class App extends Component {
  

  state = {
    taskItems: [
      {content: 'buy travel insurance', completed: false},
      {content: 'don\'t forget passport!', completed: false}
    ],
    taskCount: 0
  }


  addTask = (task) => {
    task.id = Math.random();
    let tasks = [...this.state.taskItems, task];
    this.setState({
      taskItems: tasks
    });

    let toBeCompletedCount = this.state.taskCount + 1;
    this.setState({
      taskCount: toBeCompletedCount
    });


  }


  render() {
    return (
      <div>
        <Header />
        <TaskCounter count={this.state.taskItems.length} />
        <AddTodo addTodoTask={this.addTask} />
        <TodoList taskItems={this.state.taskItems} />
      </div>
    )
  }
}

export default App;