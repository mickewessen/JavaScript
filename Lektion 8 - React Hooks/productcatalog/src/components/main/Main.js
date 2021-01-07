import React from 'react'
import Form from './Form'
import ProductCatalog from './ProductCatalog'

const Main = () => {
    return (
        <main className="container mt-5">
            <div className="row">
                <div className="col-5">
                    <Form />
                </div>
                
                <div className="col-7 ps-5">
                    <ProductCatalog />
                </div>

            </div>
        </main>
    )
}

export default Main
