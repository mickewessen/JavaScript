class Animal {
    constructor(name, age, sound = 'generic sound') {
        this.name = name.charAt(0).toUpperCase() + name.slice(1)
        this.age = age
        this.sound = sound
    }

    makeSound(){
        return `${this.name} says ${this.sound}!`
    }
}

class Dog extends Animal {
    constructor(name, age, sound) {
        super(name, age, sound) 
    }
}

class Cat extends Animal {
    constructor(name, age, sound, lifeleft) {
        super(name, age, sound)

        this.lifeleft = lifeleft
    }

    numberOfLives() {
        return `${this.name} has ${this.lifeleft} lifes!`
    }
}

const dog = new Dog ('doogini', 5, 'woof woof')
const cat = new Cat ('catini', 7, 'mjauuu', 9)
// console.log(dog)
console.log(dog.makeSound())
console.log(cat.makeSound())
console.log(cat.numberOfLives())