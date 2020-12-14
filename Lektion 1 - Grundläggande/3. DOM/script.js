/* 
    DOM - Document Object Model
*/

// document.body.innerText = "<h1>Detta är en rubrik</h1>"
// document.body.innerHTML = "<h1>Detta är en rubrik</h1>"

document.getElementById('results').innerText ="Hejsan";          //<-- Vanligaste sättet att göra på!
document.getElementById('results').innerHTML ="<h1>Hejsan</h1>";
console.log(document.getElementById('results').innerText)

let text = document.getElementById('results').innerText;
let text2 = text + ' Hejsan igen '

document.getElementById('results').innerText = text2;
console.log(document.getElementById('results').innerText)


// Detta fungera på ett input element
var name = document.getElementById('name').value
var name = document.getElementsByTagName('input')[0].value
var name = document.getElementsByName('name')[0].value
var name = document.getElementsByClassName('input-text')[0].value

// Detta fungerar på alla andra element

var last = document.getElementsByTagName('div')[0].innerText
var last = document.getElementById('results').innerText
var last = document.getElementsByClassName('div-text')[0].innerText


var last = document.querySelector('#results').innerText = "Samuel Id"
var last = document.querySelector('.div-text').innerText = "Samuel Class"
var last = document.querySelector('div').innerText = "Samuel div"

var last = document.querySelectorAll('.div-text')[0] = "Kalle class 1"
var last = document.querySelectorAll('.div-text')[1] = "Kalle class 2"
var last = document.querySelectorAll('div').innerText = "Samuel div"

// console.log(name)
// console.log(last)

