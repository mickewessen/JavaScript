import React from 'react'

const Product = () => {
    return (
        <div className="border mb-2 p-3">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <div className="name">Product Name</div>
                    <div className="description">Product Description</div>
                </div>
                <div>
                    <i className="fas fa-box"></i>
                    <i className="fas fa-trash"></i>
                </div>
                
            </div>
        </div>
    )
}

export default Product
