/* 
    Javascript Events
    
        Triggers: 
        click, blur, focus, keydown, keyup, mouseclick dblclick etc.

        document =  DOM - Document object model
        window =    BOM - Browser object model
*/


// let counter = 0
// const array = []

// document.getElementById('input').addEventListener('keyup', (e) => {           //event förkortas e
//     if(e.target.value.length < 4) {
//         document.getElementById('results').innerText = 'För få tecken i ' +e.target.id
//         document.getElementById('add_btn').disabled = true
//     }

//     else {
//         document.getElementById('results').innerText = ''
//         document.getElementById('add_btn').disabled = false
//     }


// })

// document.getElementById('add_btn').addEventListener('click', () => {
//     // console.log('clicked')
//     // document.getElementById('results').innerText = 'klickat ' + ++counter + 'ggr.' 

//     let element = document.getElementById('input')

//     array.push(element.value)
//     element.value = ""

//     console.log(array)
// })

// document.getElementById('remove_btn').addEventListener('click', () => { 
//     array.pop()
//     console.log(array)
// })

// document.getElementById('input').addEventListener('keyup', (e) => {
//     validateInputLength(e)
// })


// function validateInputLength(e) {
//     if(e.target.value.length < 4) {
//         document.getElementById('results').innerText = 'För få tecken i ' +e.target.id
//         document.getElementById('add_btn').disabled = true
//     }

//     else {
//         document.getElementById('results').innerText = ''
//         document.getElementById('add_btn').disabled = false
//     }
// }