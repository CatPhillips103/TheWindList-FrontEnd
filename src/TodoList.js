import React, { Component } from 'react'
import Task from './Task'

class TodoList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.taskItems.map(
                        (task) => <Task listItem={task} deleteTaskF={this.props.deleteTaskF} key={task.id} />
                    )
                }


                
            </div>

        )
    }
}
export default TodoList