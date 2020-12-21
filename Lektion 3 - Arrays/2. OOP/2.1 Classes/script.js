class Product {
    constructor(name, desc, price) {
        this.name = name
        this.desc = desc
        this.price = price
    }

    inStock = true

    inclVat() {
        return this.price * 1.25
    }

}

let product1 = new Product('Product 1','desc for product', 100)

product1.inStock = 'hejsan'
console.log(product1.inStock)

product1.inclVat ='hejsan'
console.log(product1.inclVat())