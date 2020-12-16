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