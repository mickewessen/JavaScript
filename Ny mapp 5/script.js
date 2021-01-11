let users = []
console.log(users)

function addUsers() {
    let template = users.map(user => `<li>${user}</li>`).join('\n');
    document.querySelector('ul').innerHTML = template;
}

addUsers()

let btnAdd = document.querySelector('button');
let input =  document.querySelector('input');

input.addEventListener('keyup', (e) => {
    if(input.value.length < 4)
        input.style.borderColor = 'red';
    else 
        btnAdd.disabled = false;
})

btnAdd.addEventListener('click', () => {
    users.push(input.value);
    input.value = '';
    addUsers();
})

