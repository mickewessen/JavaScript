/* Polymorphism*/

class Animal {
    constructor(name,age) {
        this.name = name
        this.age = age
    }

    makeSound() {
        console.log(`this is the sound from the parent class`)
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name,age)
    }

    makeSound() {
        super.makeSound() 
        console.log(`${this.name} says Woof woof`)
    }
}


const dog = new Dog('Rufus', 3)

console.log(dog.makeSound())
