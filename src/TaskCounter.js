import React, {Component} from 'react'

class TaskCounter extends Component {
    render() {
        return (
            <div className="container">
            <h2 className="count">{this.props.count}</h2>
          </div>
        )
    }
}

export default TaskCounter