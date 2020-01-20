import React from 'react'




const TodoList = ({ todoTask }) => {
    const list = todoTask.length ? (
        todoTask.map(task => {
        return <div className="container">
            <div className="row">
                <div className="col-12 cp-3 text-center tasklist">
                    <div className="card" key={task.id}>
                        {task}
                        <div>
                            <button class="taskbuttons"><i class="far fa-check-circle"></i></button>
                            <button class="taskbuttons"><i class="far fa-trash-alt"></i></button>
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