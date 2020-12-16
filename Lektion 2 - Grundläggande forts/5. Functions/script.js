/* 
    FUNCTIONS
*/

// Tradionella sättet
function greeting() {
    return 'Välkommen!'
}

// Det nya sättet (ES6)
const message = () => {
    return 'Du har nu blivit antagen till någonting!'
}

const messagev2 = () => 'Förenklad'   


greeting()
message()
messagev2()

console.log(greeting())
console.log(message())
console.log(messagev2())

document.body.innerHTML = `<h2>${ greeting() }</h2>`
document.body.innerHTML += `<p>${ message() }</p>`


// En function ska bara innehålla en sak, inte som nedan!
function RegisterUSer () {
    // validate form data
    // register user via api
    // login user via api
    // redirect user to mypages
}

// Korrekt sätt att bygga funktioner
function validate() {}
function register() {}
function login() {}
function redirect() {}

function SignUpSignIn() {
    register()
    login()
}

// Callback functions

const func1 = (callback) => {
    let value ='test'
    callback(value)
}

func1(value =>  console.log(value))