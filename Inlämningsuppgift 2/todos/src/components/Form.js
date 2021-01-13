import React, { useState } from 'react'
import uuid from 'react-uuid'

const Form = ({ todos, setTodos }) => {

    const [todoname , setTodoname] = useState('')
    const [name, setName] = useState ('')
    const [deadline, setDeadline] = useState ('')
    const [description, setDescription] = useState ('')

    const todoHandler = (e) => {
        setTodoname(e.target.value)
    }

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const deadlineHandler = (e) => {
        setDeadline(e.target.value)
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        setTodos([...todos,{todoname: todoname, name: name, deadline: deadline, description: description, status: true, id: uuid() }])

        setTodoname('')
        setName('')
        setDeadline('')
        setDescription('')
    }

    return (
        <form>
            <div className="mb-3">
                <input onChange={todoHandler} value={todoname} type="text" className="form-control" id="todoname" placeholder="Add new todo"/>
            </div>

            <div className="mb-3">
                <input onChange={nameHandler} value={name} type="text" className="form-control" id="name" placeholder="Who is responsible for the todo"/>
            </div>

            <div className="mb-3">
                <input onChange={deadlineHandler} value={deadline} type="text" className="form-control" id="deadline" placeholder="Pick a date"/>
            </div>

            <div className="mb-3">
                <textarea onChange={descriptionHandler} value={description} className="form-control" id="tododesc" rows="3" placeholder="Todo description"></textarea>
            </div>
            
            <div className="mb-3">
                <button onClick={submitHandler} type="submit" className="btn btn-secondary w-100 p-3">Add new Todo</button>
            </div>
        </form>
    )
}

export default Form
