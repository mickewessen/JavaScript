import React, { useState} from 'react'
import uuid from 'react-uuid'

const Form = ({ products, setProducts }) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [disableSubmit, setDisableSubmit] = useState(true)

    const nameHandler = (e) => {
        e.target.value.length > 2 ? setDisableSubmit(false) : setDisableSubmit(true)        
        setName(e.target.value)
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setProducts([ ...products, { name: name, description: description, inStock: true, id: uuid() }])
        setName('')
        setDescription('')
        setDisableSubmit(true)
    }

    return (
        <form>
            <div className="mb-3">
                <input onChange={nameHandler} value={name} type="text" className="form-control" placeholder="Product Name"/>
            </div>
            <div className="mb-4">
                <textarea onChange={descriptionHandler} value={description} className="form-control" rows="8" placeholder="Product Description"></textarea>
            </div>
            <div className="mb-3">
                <button onClick={submitHandler} disabled={disableSubmit} type="submit" className="btn btn-secondary w-100 p-3">Add Product</button>
            </div>
        </form>
    )
}

export default Form
