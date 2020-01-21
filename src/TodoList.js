import React from 'react'

// prop destructured
const TodoList = ({ todoTask }) => {
    const list = todoTask.length ? (
        todoTask.map(task => {
            return <div className="container" key={task.id}>
                <div className="row">
                    <div className="col-12 cp-3 text-center tasklist">
                        <div className="card" key={task.id}>
                            {task.content}
                            <div>
                                <button className="taskbuttons"><i className="far fa-check-circle"></i></button>
                                <button className="taskbuttons"><i className="far fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })
    ) : (
            null
        )

    return (
        <div className="list">
            {list}
        </div>
    )
}




export default TodoList