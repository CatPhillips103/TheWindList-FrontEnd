import React, { Component } from 'react'

class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todoTask.map(function (tasks) {
                    return <div className="container" key={tasks.id}>
                        <div className="row">
                            <div className="col-12 cp-3 text-center tasklist">
                                <div className="card">
                                    {tasks.content}
                                    <div>
                                        <button className="taskbuttons"><i className="far fa-check-circle"></i></button>
                                        <button className="taskbuttons"><i className="far fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}
export default TodoList