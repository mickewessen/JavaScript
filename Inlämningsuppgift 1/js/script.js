$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });

  });

// Lista över användare

let users= [];

// Lägg till användare i users

const addUser = (e) => {
    e.preventDefault();  //to stop the form submitting

    let user = {
        id: Date.now(),
        email: document.getElementById('email').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        street: document.getElementById('street').value,
        postalCode: document.getElementById('postalCode').value,
        city: document.getElementById('city').value,

    }
    users.push(user);
    
    // rensa formuläret
    document.forms[0].reset(); 
    document.querySelector('form').reset();

    // consollogga adderade användare
    console.warn('added' , {users} );    

    // Rubrik på drop-down listan
    let flip = document.querySelector('#flip');
    flip.textContent = `${user.firstName }` + `${user.lastName}`;

    // Innehåll i drop-down listan
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

// Validerar all inputs
let inputs = document.getElementsByTagName('input')
 
for (let input of inputs) {
    input.addEventListener('keyup', (e) => {
        if(e.target.value.length < 2)  {
            document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken '
            document.getElementById(`${e.target.id}`).style.border = "3px solid red"
            document.getElementById('button').disabled = true;
            } 

        else {
            document.getElementById(`${e.target.id}-error`).innerText = ''
            document.getElementById(`${e.target.id}`).style.border = "3px solid green"
            document.getElementById('button').disabled = false
        }
    })
}


// validera Email

var mail = document.getElementById('email');
var mailvalidate = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

mail.addEventListener('keyup', e => {
  if(mailvalidate.test(mail.value)) {
    document.getElementById('email').style.border = "3px solid green"
    document.getElementById(`${e.target.id}-error`).innerText = ''
    
  }  
  else {
    document.getElementById('email').style.border = "3px solid red"
    document.getElementById(`${e.target.id}-error`).innerText = 'Detta är ingen giltig email-adress'
  }

})
 
// validera PostalCode
var postalcode = document.getElementById('postalCode');
var validatenumbers = /^[-+]?[0-9]+$/;

document.getElementById('postalCode').addEventListener('keyup', (e) => {
    if(e.target.value.length !== 5 )  {
        document.getElementById(`${e.target.id}-error`).innerText = 'Ange ett giltigt postnr'
        document.getElementById(`${e.target.id}`).style.border = "3px solid red"
        document.getElementById('button').disabled = true
    }
    else {
        document.getElementById(`${e.target.id}-error`).innerText = ''
        document.getElementById(`${e.target.id}`).style.border = "3px solid green"
        document.getElementById('button').disabled = false
    }
})

// validera City








