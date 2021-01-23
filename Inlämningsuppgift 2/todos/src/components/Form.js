import React, { useState } from 'react'
import uuid from 'react-uuid'

const Form = ({ todos, setTodos }) => {

    const [todoname , setTodoname] = useState('')
    const [name, setName] = useState ('')
    const [deadline, setDeadline] = useState ('')
    const [description, setDescription] = useState ('')

    const [submitState, setSubmitState] = useState (true)

    const todoHandler = (e) => { 
        if(e.target.value !== '') {            
            document.getElementById('error').innerText = "Thank you"
            document.getElementById('error').style.color = "green"
            document.getElementById('todoname').style.border = '2px solid green'
            setSubmitState(false)  
        }        

        else {
            document.getElementById('todoname').style.border = '2px solid red'
            document.getElementById('error').innerText ="You have to choose a todo"
            document.getElementById('error').style.color = "red"
            setSubmitState(true)  
        }  
        setTodoname(e.target.value)
    }    


    // Validerar på att ett namn måste väljas
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
        setSubmitState(true)
    }

    const resetHandler =(e) =>{
        e.preventDefault()
        setTodoname('')
        setName('')
        setDeadline('')
        setDescription('')
    }    

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="todoname" className="form-label">Pick a todo</label>
                <select onChange={todoHandler} value={todoname} id="todoname" className="form-select" aria-label="Default select example">
                        <option value=""></option>
                        <option value="Clean The House">Clean the house</option>
                        <option value="Take out the garbage">Take out the garbage</option>
                        <option value="Do the dishes">Do the dishes</option>
                        <option value="Walk the dog">Walk the dog</option>
                        <option value="Make the beds">Make the beds</option>
                        <option value="Mown the garden">Mown the garden</option>
                </select>
                <div id="error">Please choose a todo</div>
            </div>

            <div className="mb-3">
            <label htmlFor="name" className="form-label">Choose a person (optional)</label>
                <select onChange={nameHandler} value={name} id="name" className="form-select" aria-label="Default select example">
                        <option value=""></option>
                        <option value="Michael Wessén">Michael Wessén</option>
                        <option value="Daniel Wessén">Daniel Wessén</option>
                        <option value="Samuel Wessén">Samuel Wessén</option>
                        <option value="Kenneth Wessén">Kenneth Wessén</option>
                        <option value="Maud Wessén">Maud Wessén</option>
                        <option value="Sofie Lesnik">Sofie Lesnik</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="deadline" className="form-label">Deadline: (optional)</label>
                <input onChange={deadlineHandler} value={deadline} type="date" className="form-control" id="deadline" placeholder="Pick a date"/>
            </div>

            <div className="mb-3">
                <textarea onChange={descriptionHandler} value={description} className="form-control" id="tododesc" rows="7" placeholder="Todo description (optional)"></textarea>
            </div>
            
            <div id="div-buttons" className="mb-3">
                <button id="button" onClick={submitHandler} disabled={submitState} type="submit" className="btn btn-secondary p-3">Add new Todo</button>
                <button id="reset" onClick={resetHandler} className="btn btn-secondary p-3">Reset form</button>
            </div>
        </form>
    )
}

export default Form
