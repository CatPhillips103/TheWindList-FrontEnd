import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import TaskCounter from './TaskCounter'
import AddTodo from './addTodo'
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4';



class App extends Component {


  state = {
    taskItems: [
      { content: 'buy travel insurance', completed: false, id: uuidv4()},
      { content: 'train to gatwick @ 5am', completed: true, id: uuidv4()},
      { content: 'don\'t forget passport!', completed: false, id: uuidv4() }

    ],
    taskCount: 0
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
    })


  }




  deleteTask = (taskId) => {
    const tasks  =  this.state.taskItems;

    const updatedContent = tasks.filter(task => task.id !== taskId);

    this.setState({
      taskItems: updatedContent
    });
  }
  


  render() {
    return (
      <div>
        <Header />
        <TaskCounter count={this.state.taskItems.length} />
        <AddTodo addTodo={this.addTask} />
        <TodoList taskItems={this.state.taskItems} deleteTaskF={this.deleteTask} />
        
      </div>
    )
  }
}

export default App;