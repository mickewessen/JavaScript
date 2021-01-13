import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'

const Main = () => {

    const [todos, setTodos] = useState ([])

    return (
        <main className="container mt-5">
            <div className="row">
                <div className="col-5">
                    <Form todos={todos} setTodos={setTodos}/>
                </div>
                <div className="col-7 ps-3">
                    <TodoList todos={todos}/>
                </div>
            </div>
        </main>
    )
}

export default Main
