import React from 'react'

const Todo = () => {
    return (
        <div id="" className="border mb-3 p-3">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <div className="todo">Todo</div>                    
                    <div className="name">Name</div>                    
                    <div className="deadline">Deadline</div>                    
                    <div className="description">Description</div>                  
                </div>
                <div>
                    <i className="fas fa-check"></i>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
        </div>
    )
}

export default Todo
