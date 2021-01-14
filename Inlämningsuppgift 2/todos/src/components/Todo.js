import React from 'react'


const Todo = ({ todo, todos, setTodos }) => {

    const statusHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, status: !item.status
                }
            }

            return item
        }))        
    }

    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }




    return (
        <div className={`border mb-3 p-3 ${ todo.status ? 'border-1 border-success' : 'border-1 border-danger'}`}>
            <div className="d-flex justify-content-between align-items-center">
                <div className={ `${ todo.status ? 'text-decoration-line-through' : 'text-gray'}` }>
                    <div className="todo">{todo.todoname}</div>                    
                    <div className="name">{todo.name}</div>                    
                    <div className="deadline">{todo.deadline}</div>                    
                    <div className="description">{todo.description}</div>
                    <div id="status"></div>                  
                </div>
                <div className="d-flex">
                    <div>
                        <i onClick={statusHandler} className={ `far fa-thumbs-down cursor-pointer ${todo.status ? 'status-done' : 'status-not-done' }` }></i>
                    </div>
                    <div id="trashcan">
                        <i onClick={deleteHandler} className="fas fa-trash cursor-pointer"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
