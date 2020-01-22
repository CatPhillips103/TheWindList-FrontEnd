import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import TaskCounter from './TaskCounter'
import AddTodo from './addTodo'
import TodoList from './TodoList'


class App extends Component {


  state = {
    taskItems: [
      { content: 'buy travel insurance', completed: false, id: 1},
      { content: 'train to gatwick @ 5am', completed: true, id: 2 },
      { content: 'don\'t forget passport!', completed: false, id: 3 }

    ],
    taskCount: 0
  }


  addTask = (task) => {
    
    let tasks = [...this.state.taskItems, task];
    this.setState({
      taskItems: tasks
    });

    let countValue = this.state.taskCount + 1;
    this.setState({
      taskCount: countValue
    });

    
  }

  


  render() {
    return (
      <div>
        <Header />
        <TaskCounter count={this.state.taskItems.length} />
        <AddTodo addTodoTask={this.addTask} />
        <TodoList taskItems={this.state.taskItems}  />
      </div>
    )
  }
}

export default App;