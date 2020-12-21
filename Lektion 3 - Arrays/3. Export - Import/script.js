import Person from "./models/Person.js"
import User from "./models/users.js"
import { validate, print as write } from "./functions.js";

const person = new Person('Micke','Wessén')


if(!validate(person.firstName, 15) || !validate(person.lastName))
    console.log('Validering av användaren misslyckades')
else
    console.log('Validering av användaren lyckades')


const user = new User('Hans', 'Wessén', 'micke@domain.com')
console.log(user)