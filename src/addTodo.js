import React, { Component } from 'react'

class AddTodo extends Component {
    render() {
        return (
          <div className="container my-4 taskform-container">
              <form className="col-sm-12 taskform">
                  <input type="text" class="col-sm-8 text-center tasks" placeholder="travel with ease..."/>
                  <button className="addButton"><i class="fas fa-plus-circle"></i></button>
              </form>
          </div>
        )
    }
}

export default AddTodo 