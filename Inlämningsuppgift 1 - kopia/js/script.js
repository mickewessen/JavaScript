// $(document).ready(function(){
//     $("#flip").click(function(){
//       $("#panel").slideToggle("slow");
//     });

//   });


// INPUTS

var id = Date.now;
var firstName = document.forms['regform']['firstName'];
var lastName = document.forms['regform']['lastName'];
var email = document.forms['regform']['email'];
var phoneNumber = document.forms['regform']['phoneNumber'];
var street = document.forms['regform']['street'];
var postalCode = document.forms['regform']['postalCode'];
var city = document.forms['regform']['city'];



// FELMEDDELANDEN

var firstName_error = document.getElementById('firstName-error');
var lastName_error = document.getElementById('lastName-error');
var email_error = document.getElementById('email-error');
var phoneNumber_error = document.getElementById('phoneNumber-error');
var street_error = document.getElementById('street-error');
var postalCode_error = document.getElementById('postalCode-error');
var city_error = document.getElementById('city-error');

function addUser() 
{    
  
  // Generera ID
if(id.value == "") {
  return false;
}

// Validera firstname 
else if(firstName.value =="") {
  firstName.style.border = "2px solid red";
  firstName_error = "Please fill in your firstname";
  firstName.focus();
  return false;
}

// Validera lastname
else if (lastname.value =="") {
lastname.style.border = "2px solid red";
lastname_error = "Please fill in your lastname";
lastname.focus();
return false;
}

// Validera e-post
else if (email.value =="") {
email.style.border = "2px solid red";
email_error = "Please fill in a correct email adress";
email.focus();
return false;
}

// Validera telefonnr
else if (phoneNumber.value =="") {
phoneNumber.style.border = "2px solid red";
phoneNumber_error = "Please fill in a correct phonenumber";
phoneNumber.focus();
return false;
}

// Validera gatuadress
else if (street.value =="") {
street.style.border = "2px solid red";
street_error = "Please fill in a correct street";
street.focus();
return false;
}

// Validera postnummer
else if (postalCode.value =="") {
postalCode.style.border = "2px solid red";
postalCode_error = "Please fill in a correct zip code";
postal.focus();
return false;
}

// Validera stad
else if (city.value =="") {
city.style.border = "2px solid red";
city_error = "Please choose a city";
city.focus();
return false;
}

else {

// Skapa ett användarkonto
var user = {
  uid =id.value,
  ufirstname = firstname.value,
  ulastname = lastname.value,
  uemail = email.value,
  uphonenumber = phoneNumber.value,
  ustreet = street.value,
  upostalcode = postalCode.value,
  ucity = city.value
};

// Skapa tabell med användare
var table = document.getElementsByTagName('table')[0];

// Lägg till ny rad
var newRow = table.insertRow(table.rows.length);

// Lägg till kolumner
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);
var cell5 = newRow.insertCell(4);
var cell6 = newRow.insertCell(5);
var cell7 = newRow.insertCell(6);
var cell8 = newRow.insertCell(7);
var cell9 = newRow.insertCell(8);

// Skapa knappar
var UpdateButton = document.createElement("button");
var DeleteButton = document.createElement("button");

// Styling knappar
UpdateButton.style.backgroundColor="green";
DeleteButton.style.backgroundColor="red";
UpdateButton.style.color="white";
DeleteButton.style.color="white";


// Lägg till data i kolumner
cell1.innerHTML = user.uid;
cell2.innerHTML = user.ufirstname;
cell3.innerHTML = user.ulastName;
cell4.innerHTML = user.uemail;
cell5.innerHTML = user.uphonenumber;
cell6.innerHTML = user.ustreet;
cell7.innerHTML = user.upostalcode;
cell8.innerHTML = user.ucity;
cell9.appendChild(UpdateButton);
UpdateButton.innerHTML="Update";
cell9.appendChild(DeleteButton);
UpdateButton.innerHTML="Delete";

// Ta bort rad
var RowIndex;

DeleteButton.addEventListener("click", function() {
  for(var i=0;0<table.rows.length; i++) {
    table.rows[i].onclick=function() {

      var txt;

      if(confirm("Prees Okey, If you want to delete data."))
      {
        RowIndex=this.RowIndex;
        table.deleteRow(RowIndex);
      }
      else {
        txt ="You pressed cancel!"
      }
    };
  }
});

// Uppdatera rad
UpdateButton.addEventListener("click", function() {
  for(var j=1;i<table.rows.length;j++) {
    table.rows[j].onclick=function()  {
      document.getElementById("id").value=this.cells[0].innerHTML;
      document.getElementById("firstName").value=this.cells[1].innerHTML;
      document.getElementById("lastName").value=this.cells[2].innerHTML;
      document.getElementById("email").value=this.cells[3].innerHTML;
      document.getElementById("phoneNumber").value=this.cells[4].innerHTML;
      document.getElementById("street").value=this.cells[5].innerHTML;
      document.getElementById("postalCode").value=this.cells[6].innerHTML;
      document.getElementById("city").value=this.cells[7].innerHTML;
    };
  }
});

return true
}

}


           

// // Lista över användare

// let users= [];
// console.log(users)

// // Lägg till användare i users

// const addUser = (e) => {
//     e.preventDefault();  //to stop the form submitting

//     let user = {
//         id: Date.now(),
//         email: document.getElementById('email').value,
//         firstName: document.getElementById('firstName').value,
//         lastName: document.getElementById('lastName').value,
//         phoneNumber: document.getElementById('phoneNumber').value,
//         street: document.getElementById('street').value,
//         postalCode: document.getElementById('postalCode').value,
//         city: document.getElementById('city').value,

//     }
//     users.push(user);
    
//     // rensa formuläret
//     document.forms[0].reset(); 
//     document.querySelector('form').reset();

//     // consollogga adderade användare
//     console.warn('added' , {users} );    

//     // Rubrik på drop-down listan
//     let flip = document.querySelector('#flip');
//     flip.textContent = `${user.firstName }` + `${ user.lastName}`;

//     // Innehåll i drop-down listan
//     let listFirstName = document.querySelector('#listFirstName')
//     listFirstName.textContent = user.firstName;
//     let listLastName = document.querySelector('#listLastName')
//     listLastName.textContent = user.lastName;
//     let listId = document.querySelector('#listId')
//     listId.textContent = user.id;
//     let listEmail = document.querySelector('#listEmail')
//     listEmail.textContent = user.email;
//     let listPhone = document.querySelector('#listPhone')
//     listPhone.textContent = user.phoneNumber;
//     let listStreet = document.querySelector('#listStreet')
//     listStreet.textContent = user.street;
//     let listPostalCode = document.querySelector('#listPostalCode')
//     listPostalCode.textContent = user.postalCode + user.city;

// }

// // Validerar all inputs
// let inputs = document.getElementsByTagName('input')
 
// for (let input of inputs) {
//     input.addEventListener('keyup', (e) => {
//         if(e.target.value.length < 2)  {
//             document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken '
//             document.getElementById(`${e.target.id}`).style.border = "3px solid red"
//             document.getElementById('button').disabled = true;
//             } 

//         else {
//             document.getElementById(`${e.target.id}-error`).innerText = ''
//             document.getElementById(`${e.target.id}`).style.border = "3px solid green"
//             document.getElementById('button').disabled = false
//         }
//     })
// }


// // validera Email

// var mail = document.getElementById('email');
// var mailvalidate = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

// mail.addEventListener('keyup', e => {
//   if(mailvalidate.test(mail.value)) {
//     document.getElementById('email').style.border = "3px solid green"
//     document.getElementById(`${e.target.id}-error`).innerText = ''
    
//   }  
//   else {
//     document.getElementById('email').style.border = "3px solid red"
//     document.getElementById(`${e.target.id}-error`).innerText = 'Detta är ingen giltig email-adress'
//   }

// })
 
// // validera PostalCode
// var postalcode = document.getElementById('postalCode');
// var validatenumbers = /^[-+]?[0-9]+$/;

// document.getElementById('postalCode').addEventListener('keyup', (e) => {
//     if(e.target.value.length !== 5 )  {
//         document.getElementById(`${e.target.id}-error`).innerText = 'Ange ett giltigt postnr'
//         document.getElementById(`${e.target.id}`).style.border = "3px solid red"
//         document.getElementById('button').disabled = true
//     }
//     else {
//         document.getElementById(`${e.target.id}-error`).innerText = ''
//         document.getElementById(`${e.target.id}`).style.border = "3px solid green"
//         document.getElementById('button').disabled = false
//     }
// })

// // validera City







// // Event Submit
// document.addEventListener('DOMContentLoaded', ()=>{
//   document.getElementById('button').addEventListener('click', addUser);
// });








