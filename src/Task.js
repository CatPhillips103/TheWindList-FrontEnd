import React, { Component } from 'react'

class Task extends Component {

    clickDelete = (e) => {
       e.preventDefault();
       this.props.deleteTaskF(this.props.listItem.id);
    }

    finishedTasks = (e) => {
     this.props.completedTaskF(this.props.listItem.id);
      e.target.style.color = 'red';
     }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 cp-3 text-center tasklist">
                        <div className="card">
                            {this.props.listItem.content}
                            <div>
                                <button className="taskbuttons"onClick={this.finishedTasks}><i className="far fa-check-circle"></i></button>
                                <button className="taskbuttons" onClick={this.clickDelete}><i className="far fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Task