// class User {
//     constructor(firstname, lastname) {
//         this.firstName = firstname
//         this.lastName = lastname
//     }

//     displayName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const array = []

// document.getElementById('firstname').addEventListener('keyup', (e) => {
//     validateInputLength(e)
// })

// document.getElementById('btn_add').addEventListener('click', () => {
//     let user = document.getElementById('firstname')

//     array.push(user.value)
//     user.value = ''
//     console.log(array)
// })


// document.getElementById('btn_remove').addEventListener('click', () => {
//     array.pop()
//     console.log(array)
// })

// function validateInputLength(event) {
//     if(event.target.value.length < 2) {
//         document.getElementsByTagName('firstname').style.border = "3px solid red"
//         document.getElementById('firstname_msg').innerText = 'För få tecken'
//         document.getElementById('btn_add').disabled = true
//     }

//     else {
//         document.getElementById('firstname').style.border = "3px solid green"
//         document.getElementById('firstname_msg').innerText = ''
//         document.getElementById('btn_add').disabled = false
//     }
// }


// document.getElementById('regform').addEventListener('submit', (e) => {
//     e.preventDefault()
    
//     let errors = []

//     for (let element of e.target.elements) {

//         switch(element.tagName) {
//             case 'INPUT' :
//                 errors.push(validateInput(element))
//                 break
//             case 'SELECT' :
//                 errors.push(validateSelect(element))
//                 break
//         }
//     }

//     if(!errors.includes(true))
//          window.location.replace("success.php")

// })


// function validateInput(element) {

//     let error = false

//     if(element.required) {
//         if(element.value.length < 4) {
//             console.log('fältet uppfyller inte kravet på 4 tecken')
//             return true
//         }
//     }

//     return false
// }

// const validateSelect = (element) => {
//     if(element.required) {
//         if(element.value === '') {
//             console.log('Du måste ange en stad')
//             return true
//         }
//     }

//     return false
// }

// let btnShow = document.querySelector('button');
// let input = document.querySelector('input');
// let output = document.querySelector('h1')
// let firstname = document.querySelector('firstname1')

// btnShow.addEventListener('click', () => {
//     output.innerText = input.value;
// });

// input.addEventListener('keyup', () => {
//     if(input.value.length < 4) {
//         document.getElementById('firstname1').style.border = "5px solid red"
//         btnShow.disabled = true
//     }

//     else {
//         document.getElementById('firstname1').style.border = "5px solid green"
//         btnShow.disabled = false;
//     }

// })

// $(document).ready(function() {
//     init("btn", {
//         fields: ["firstname","lastname","email","phone","street","zipcode","city"],
//         enabletext: "Create user",
//         disabletext: "Enter to show button"
//     })
// })


/* Fungerar */

let inputs = document.getElementsByTagName('input')
console.log(inputs)

for (let input of inputs) {
    input.addEventListener('keyup', (e) => {
        validateInputLength(e)
    })
}


function validateInputLength(e) {
    if(e.target.value.length < 4) {
        document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken i ' + e.target.id;
        document.getElementById(`${e.target.id}`).style.borderColor = "3px solid red"

    }

    else {
        document.getElementById(`${e.target.id}-error`).innerText = ''
        document.getElementById(`${e.target.id}`).style.borderColor = "3px solid green"

    }
}


// document.getElementById('regform').addEventListener('submit', (e) => {
//     e.preventDefault()

//     console.log(e)
    
//     let errors = []

//     for (let element of e.target.elements) {

//         switch(element.tagName) {
//             case 'INPUT' :
//                 errors.push(validateInput(element))
//                 break
//             case 'SELECT' :
//                 errors.push(validateSelect(element))
//                 break
//         }
//     }

//     console.log(errors)

//     if(!errors.includes(true))
//         console.log(e.target.value)
//         //  document.getElementBy('btn_add').disabled = false

// })


// function validateInput(element) {

//     let error = false

//     if(element.required) {
//         if(element.value.length < 4) {
//             console.log('fältet uppfyller inte kravet på 4 tecken')
//             document.getElementById('firstname').style.borderColor = "red"

//             return true
//         }
//     }

//     return false
// }


// /* Gör för checkboxes */

// // const validateSelect = (element) => {
// //     console.log('värdet för inputen är:' +element.value)
// //     // if(element.required) {
// //     //     if(element.value === '') {
// //     //         console.log('Du måste ange en stad')
// //     //         return true
// //     //     }
// //     // }

// //     // return false
// // }