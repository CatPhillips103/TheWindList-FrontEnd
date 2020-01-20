import React, { Component } from 'react'

class AddTodo extends Component {
    // the state of the taskform content is currently empty, however using the onChange event
    // value entered in the form will change the state of the empty string content.

    state = {
        content: ' '
    }

    appChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    // accessing the props which is a card that displays tasks and completed / deleted buttons

    taskSubmit = (e) => {
        e.preventDefault();
        this.props.addTodoTask(this.state);
    }

    render() {
        return (
            <div className="container my-4 taskform-container">
                <form onSubmit={this.taskSubmit} className="col-sm-12 taskform">
                    <input type="text" className="col-sm-8 text-center tasks" placeholder="travel with ease..." onChange={this.appChange} />
                    <button className="addButton"><i className="fas fa-plus-circle"></i></button>
                </form>
            </div>
        )
    }
}

export default AddTodo 