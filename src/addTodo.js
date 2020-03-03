import React, { Component } from 'react'

class AddTodo extends Component {
    
    state = {
        taskContent: ''
    }

    enterSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.taskContent);
    }

    clickButton = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.taskContent);
    }


    newContent = (e) => {
        this.setState({
            taskContent: e.target.value
        })

    }

    render() {
        return (
            <div className="container my-4 taskform-container">
                <form className="col-sm-12 taskform" onSubmit={this.enterSubmit}>
                    <input type="text" className="col-sm-8 text-center tasks" placeholder="travel with ease..." onChange={this.newContent} />
                    <button onClick={this.clickButton} type="button" className="addButton"><i className="fas fa-plus-circle"></i></button>
                </form>
            </div>
        )
    }
}

export default AddTodo 