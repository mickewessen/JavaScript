/* Inheritance*/

class Animal {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}

class Dog extends Animal {
    constructor(name, age, forHunting) {
        super(name,age)
        this.forHunting = forHunting
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name,age)
    }
}


const dog = new Dog('Rufus', 3, true)
const cat = new Cat('Pelle', 6)

console.log(dog.name, dog.forHunting)
console.log(cat.name, cat.forHunting)
