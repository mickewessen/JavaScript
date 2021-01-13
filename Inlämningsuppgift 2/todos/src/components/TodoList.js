import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => {
    
    if(todos.length === 0) {
        return (
            <div id="todolist" className="mb-5 text-center">
                No todos found. Please add a todo!
            </div>
        )
    }
        
    return (
        <div id="todolist" className="mb-5">
            <Todo />
        </div>
    )
}

export default TodoList
