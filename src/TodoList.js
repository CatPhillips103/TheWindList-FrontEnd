import React, { Component } from 'react'
import Task from './Task'

class TodoList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.taskItems.map(
                        (task) => <Task listItem={task} />
                    )
                }
            </div>

        )
    }
}
export default TodoList