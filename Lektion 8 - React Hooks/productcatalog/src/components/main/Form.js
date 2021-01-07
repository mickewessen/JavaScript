import React from 'react'

const Form = () => {
    return (
        <form>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Product Name"/>
            </div>
            <div className="mb-4">
                <textarea className="form-control" rows="8" placeholder="Product Description"></textarea>
            </div>
            <div className="mb-3">
                <button className="btn btn-secondary w-100 p-3">Add Product</button>
            </div>
        </form>
    )
}

export default Form
