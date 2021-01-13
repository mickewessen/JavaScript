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

        setTodos([...todos,{todoname: todoname, name: name, deadline: deadline, description: description, status: false, id: uuid() }])

        setTodoname('')
        setName('')
        setDeadline('')
        setDescription('')
    }

    return (
        <form>
            <div className="mb-3">
                <select onChange={todoHandler} value={todoname} id="todoname" className="form-select" aria-label="Default select example">
                        <option value="">List of todos</option>
                        <option value="Clean The House">Clean the house</option>
                        <option value="Take out the garbage">Take out the garbage</option>
                        <option value="Do the dishes">Do the dishes</option>
                        <option value="walk the dog">Walk the dog</option>
                        <option value="Make the beds">Make the beds</option>
                        <option value="Mown the garden">Mown the garden</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Enter a name:</label>
                <input onChange={nameHandler} value={name} type="text" className="form-control" id="name" placeholder="Who is responsible for the todo"/>
            </div>

            <div className="mb-3">
                <label htmlFor="deadline" className="form-label">Deadline:</label>
                <input onChange={deadlineHandler} value={deadline} type="date" className="form-control" id="deadline" placeholder="Pick a date"/>
            </div>

            <div className="mb-3">
                <textarea onChange={descriptionHandler} value={description} className="form-control" id="tododesc" rows="7" placeholder="Todo description (optional)"></textarea>
            </div>
            
            <div className="mb-3">
                <button onClick={submitHandler} type="submit" className="btn btn-secondary w-100 p-3">Add new Todo</button>
            </div>
        </form>
    )
}

export default Form
