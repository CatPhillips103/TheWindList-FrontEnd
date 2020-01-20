import React from 'react'




const TodoList = ({ todoTask }) => {
    const list = todoTask.length ? (
        todoTask.map(todo => {
        return <div className="container" key={todo.id}>
            <div className="row">
                <div className="col-12 cp-3 text-center tasklist">
                    <div className="card" key={todo.id}>
                        {todo.content}
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