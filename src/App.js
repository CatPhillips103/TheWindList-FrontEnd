import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import TaskCounter from './TaskCounter'
import AddTodo from './addTodo'
import TodoList from './TodoList'
import CompletedTasks from './CompletedTasks'
import uuidv4 from 'uuid/v4';



class App extends Component {


  state = {
    taskItems: [
      { content: 'buy travel insurance', completed: false, id: uuidv4() },
      { content: 'train to gatwick @ 5am', completed: false, id: uuidv4() },
      { content: 'don\'t forget passport!', completed: true, id: uuidv4() }

    ]
  }


  addTask = (taskContent) => {

    const taskAdded = {
      content: taskContent,
      completed: false,
      id: uuidv4()
    };

    const appendTasks = this.state.taskItems;

    appendTasks.push(taskAdded);

    this.setState({
      taskItems: appendTasks
    });

  }

  deleteTask = (taskId) => {
    const tasks = this.state.taskItems;

    const updatedContent = tasks.filter(task => task.id !== taskId);

    this.setState({
      taskItems: updatedContent
    });
  }

  finishedTask = (taskId) => {

    const completed = this.state.taskItems;

    for (let t = 0; t < completed.length; t++) {
      const task = completed[t];
      console.log(task.content)

      if (task.id === taskId) {
        task.completed = true;
        break;
      }
    }

    this.setState({
      taskItems: completed
    })
  }

  render() {
    return (
      <div>
        <Header />
        <TaskCounter count={this.state.taskItems.length} />
        <AddTodo addTodo={this.addTask} />
        <TodoList taskItems={this.state.taskItems}
          deleteTaskF={this.deleteTask}
          completedTaskF={this.finishedTask} />
        <CompletedTasks  />

      </div>
    )
  }
}

export default App;