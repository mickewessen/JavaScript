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
document.body.innerHTML += `<p>${ messagev2() }</p>`


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

// const main = (callback) => {
//     let value ='test'
//     callback(value)
// }



// Här skapar vi funktionen
function main(data, callback) {

    /*  Gör en massa saker med data
        som att skicka det till ett 
        api och få nån form av respons från det som gör något
    */

    let successful = false

    if(data === 'Micke')
        successful = true
        
    callback(successful)
}

let name  ='Micke'


// Här kör vi funktionen
main(name, function(data) { 
    document.body.innerHTML += `<p>${data}</p>`
})