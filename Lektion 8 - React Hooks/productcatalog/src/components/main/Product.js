import React from 'react'

const Product = ( { product, products, setProducts }) => {

    const deleteHandler = () => {
        setProducts(products.filter(item => item.id !==product.id))
    }

    const inStockHandler = () => {
        setProducts(products.map(item => {
            if(item.id === product.id) {
                return {
                    ...item, inStock: !item.inStock
                }
            }

            return item
        }))
    }


    return (
        <div className="border mb-2 p-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className={`${product.inStock ? 'text-dark': 'text-gray' }`}>
                    <div className="name">{product.name}</div>
                    <div className="description">{product.description}</div>
                </div>
                <div>
                    <i onClick={inStockHandler} className={ `fas fa-box cp ${product.inStock ? 'in-stock': 'out-of-stock' }` }></i>
                    <i onClick={deleteHandler} className="fas fa-trash cp"></i>
                </div>
                
            </div>
        </div>
    )
}

export default Product
