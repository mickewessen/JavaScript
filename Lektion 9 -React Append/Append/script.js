const names = ['Micke', 'Daniel', 'Samuel']
const employees = [
    {firstName: 'Micke', lastName: 'Wessén'},
    {firstName: 'Samuel', lastName: 'Wessén'},
    {firstName: 'Daniel', lastName: 'Wessén'},
]

names.push('Sofie')
employees.push({ firstName: 'Sofie', lastName: 'Lesnik'})

$(function() {

    names.forEach(name => {
        $('#jquery-ul').append(`<li>${name}</li>`)
    })

    for(let i=0; i<names.length; i++) {
        $('#jquery-ul').append(`<li>${names[i]}</li>`)
    }
    for(let name of names) {
        $('#jquery-ul').append(`<li>${name}</li>`)
    }

    names.map(name => {
        $('#jquery-ul').append(`<li>${name}</li>`)
    })    

    employees.forEach(employee => {
        $('#jquery-div').append(`<div><span>${employee.firstName}</span><span>${employee.lastName}</span></div>`)
    })

    for(let i=0; i<employees.length; i++) {
        $('#jquery-div').append(`<div><span>${employees[i].firstName}</span><span>${employees[i].lastName}</span></div>`)

    }

    for(let employee of employees) {
        $('#jquery-div').append(`<div><span>${employee.firstName}</span><span>${employee.lastName}</span></div>`)

    }

    employees.map(employee => {
        $('#jquery-div').append(`<div><span>${employee.firstName}</span><span>${employee.lastName}</span></div>`)

    })

});

    names.forEach(name => {
        let li = document.createElement('li')
        li.textContent = name
        document.querySelector('#js-ul').appendChild(li)
    })

    for(let i=0; i<names.length; i++) {
        let li = document.createElement('li')
        li.textContent = names[i]
        document.querySelector('#js-ul').appendChild(li)
    }

    for(let name of names) {
        let li = document.createElement('li')
        li.textContent = name
        document.querySelector('#js-ul').appendChild(li)
    }

    names.map(name => {
        let li = document.createElement('li')
        li.textContent = name
        document.querySelector('#js-ul').appendChild(li)
    }) 



    employees.forEach(employee => {
        document.querySelector('#js-div').innerHTML += `<div><span>${employee.firstName}</span><span>${employee.lastName}</span></div>`
    })

    for(let i=0; i<employees.length; i++) {
        document.querySelector('#js-div').innerHTML += `<div><span>${employees[i].firstName}</span><span>${employees[i].lastName}</span></div>`
    }

    for(let employee of employees) {
        document.querySelector('#js-div').innerHTML += `<div><span>${employee.firstName}</span><span>${employee.lastName}</span></div>`

    }

    employees.map(employee => {
        document.querySelector('#js-div').innerHTML += `<div><span>${employee.firstName}</span><span>${employee.lastName}</span></div>`

    })    

    