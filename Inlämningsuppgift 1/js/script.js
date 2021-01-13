const users = [];

function addUser () {

   var user = {
      id: Date.now(),  
      firstname: document.getElementById('input-fname').value,
      lastname: document.getElementById('input-lname').value,
      email: document.getElementById('input-email').value,
      phonenumber: document.getElementById('input-phonenumber').value,
      street: document.getElementById('input-street').value,
      postalcode: document.getElementById('input-postalcode').value,
      city: document.getElementById('input-city').value,
   };
   
// Lägger till användare i lista users
   users.push(user);

   
// Skapar element (divar och knappar)
   userDiv = document.createElement('div')
   flipDiv = document.createElement('div')
   panelDiv = document.createElement('div')
   updateBtn = document.createElement('button')
   removeBtn = document.createElement('button')


// Ger div och knapp klass och id
   flipDiv.className = "flip"
   panelDiv.className = "panel"
   userDiv.id = `${user.id}`
   flipDiv.id = `${user.id}-flip`
   panelDiv.id = `${user.id}-panel`
   updateBtn.className = "btn btn-success mr-3"
   updateBtn.setAttribute("onclick", "updateItem(this)")
   removeBtn.className = "btn btn-danger"
   removeBtn.setAttribute("onclick", "removeItem(this)");  

   
   flipDiv.innerText = `${user.firstname} ` + `${user.lastname}`
   updateBtn.innerText = "Update user"
   removeBtn.innerText = "Remove user"
  

   var currentDiv = document.getElementById('users');
   currentDiv.appendChild(userDiv)
   userDiv.appendChild(flipDiv)
   userDiv.appendChild(panelDiv)


// Fyll listan med userinfo
   idElement = document.createElement("p")
   idElement.innerText = `Id: ${user.id}`  

   emailElement = document.createElement("p")
   emailElement.innerText = `E-mail: ${user.email}`

   phoneElement = document.createElement("p")
   phoneElement.innerText = `Phone: ${user.phonenumber}`

   streetElement = document.createElement("p")
   streetElement.innerText = `Street: ${user.street}`

   postalcodeElement = document.createElement("p")
   postalcodeElement.innerText = `Phone: ${user.postalcode}`

   cityElement = document.createElement("p")
   cityElement.innerText = `City: ${user.city}`

   panelDiv.appendChild(idElement)
   panelDiv.appendChild(emailElement)
   panelDiv.appendChild(phoneElement)
   panelDiv.appendChild(streetElement)
   panelDiv.appendChild(postalcodeElement)
   panelDiv.appendChild(cityElement)
   panelDiv.appendChild(updateBtn)
   panelDiv.appendChild(removeBtn)

} 

// Inputs
var inputfname = document.getElementById('input-fname');
var inputlname = document.getElementById('input-lname');
var inputEmail = document.getElementById('input-email');
var inputPhonenumber = document.getElementById('input-phonenumber');
var inputStreet = document.getElementById('input-street');
var inputPostalCode = document.getElementById('input-postalcode');
var inputCity = document.getElementById('input-city');
var button = document.getElementById('submitbtn');
var regEx = /\S+@\S+\.\S+/; // string, white-space, @ , white-space, dot, white-space, value, string //
var form = document.getElementById('form');


// Validering av formuläret

function validateForm(){
    if (inputfname.value !== "" && inputlname.value !== "" && regEx.test(inputEmail.value) && inputPhonenumber.value.length == 10 && inputStreet.value !== "" && inputPostalCode.value.length == 5 && inputCity.value !== ""){            
       button.disabled = false;
    } else {       
       button.disabled = true;
    }
}

// Updatera användaren

// function updateItem(){

// }


// Ta bort användaren

function removeItem(e){
      let user = e.parentElement.value;
      e.parentElement.remove();
      users.splice(user,1);  
}


// Submit Event
form.addEventListener('submit', function(e){
     e.preventDefault();
     addUser();
     document.querySelector('form').reset(); 
     button.disabled = true;
     console.log(users)
     console.log("submitted")
})

$(document).ready(function(){
   $(".flip").click(function(){
     $(".panel").slideToggle("slow");
   });

   $("body").delegate(".flip", "click", function(){
      $(this).next(".panel").slideToggle("slow");
       });
 });
