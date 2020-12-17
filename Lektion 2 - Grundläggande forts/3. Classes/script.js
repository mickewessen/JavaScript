/* CLASSES */

// Göra 3 personer med object = inte optimalt!

    let po1 = {
        firstName: 'Micke',
        lastName: 'Wessén'
    }
    let po2 = {
        firstName: 'Samuel',
        lastName: 'Wessén'
    }
    let po3 = {
        firstName: 'Daniel',
        lastName: 'Wessén'
    }

// Göra 3 personer med en klass = optimalt!

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    fullname() {
        return `${this.firstName} ${this.lastName}`
    }
}

var pc1 = new Person('Micke','Wessén')
var pc2 = new Person('Samuel','Wessén')
var pc3 = new Person('Daniel','Wessén')

console.log(pc1)
console.log(pc2)
console.log(pc3)


class Car {
    constructor(carBrand, carModel, carYear, carColor, carEngine) {
        this.carBrand = carBrand
        this.carModel = carModel
        this.carYear = carYear
        this.carColor = carColor
        this.carEngine = carEngine
    }

    carSpecc() {
        return `${this.carBrand} ${this.carModel} ${this.carYear} ${this.carColor} ${this.carEngine}`
    }
}

let car1 = new Car('Audi' , 'R8' , '2008' , 'Daytona Gray' , 'V8')
let car2 = new Car('Audi' , 'R8' , '2010' , 'Black' , 'V10')
let car3 = new Car('Audi' , 'TT-RS' , '2017' , 'Pearl White' , 'V6 Twin Turbo')

console.log(car1)
console.log(car2)
console.log(car3)


