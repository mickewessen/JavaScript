var inputName = document.getElementById('input-name');
var inputMail = document.getElementById('input-mail');
var inputMessage = document.getElementById('input-message');
var button = document.querySelector('.submit-button');
var error = document.getElementById('msg')
var regEx = /\S+@\S+\.\S+/;
var form = document.querySelector('.form')

let users= [];

const addUser = (e) => {
    e.preventDefault();  //to stop the form submitting

    let user = {
        id: Date.now(),
        email: document.getElementById('input-mail').value,
        name: document.getElementById('input-name').value,
    }

    users.push(user);
    console.log(users)
    
    // rensa formuläret
    document.forms[0].reset(); 
    document.querySelector('form').reset();

    // consollog adderade användare
    console.warn('added' , {users} );    

    // Rubrik
    let flip = document.querySelector('#flip');
    flip.textContent = `${user.firstName }` + `${user.lastName}`;

    // Innehåll i listan
    let listFullName = document.querySelector('#listFullName')
    listFullName.textContent = user.firstName + user.lastName;
    let listId = document.querySelector('#listId')
    listId.textContent = user.id;
    let listEmail = document.querySelector('#listEmail')
    listEmail.textContent = user.email;
    let listPhone = document.querySelector('#listPhone')
    listPhone.textContent = user.phoneNumber;
    let listStreet = document.querySelector('#listStreet')
    listStreet.textContent = user.street;
    let listPostalCode = document.querySelector('#listPostalCode')
    listPostalCode.textContent = user.postalCode + user.city;

}

function checkInput() {
    if (inputName.value.trim() !== "" && regEx.test(inputMail.value) && inputMessage.value.trim() !== "") {
        button.style.backgroundColor = '#fa923f';
        button.disabled = false;
    } else {
        button.style.backgroundColor = '#979695';
        inputName.style.borderColor = 'green';
        button.disabled = true;


    }
}

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     console.log('Submitted');
// })

form.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('.submit-button').addEventListener('click', addUser);
});