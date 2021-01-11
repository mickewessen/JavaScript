//getting form fields
var id = document.forms['myform']['id'];
var firstname = document.forms['myform']['firstname'];
var lastname = document.forms['myform']['lastname'];
var email = document.forms['myform']['email'];
var phone = document.forms['myform']['phone'];
var address = document.forms['myform']['address']; ci


//getting all error divs/fields
var id_error = document.getElementById('id_error');
var firstname_error = document.getElementById('firstname_error');
var lastname_error = document.getElementById('lastname_error');
var email_error = document.getElementById('email_error');
var phone_error = document.getElementById('phone_error');
var address_error = document.getElementById('address_error');


function addRow() {
// validate id
if (id.value == "") {
id.style.border = "2px solid red";
document.getElementById('id_div').style.color = "red";
id_error.textContent = "ID is required";
id.focus();
return false;
}

// validate firstname
else if (firstname.value == "") {
firstname.style.border = "2px solid red";
document.getElementById('firstname_div').style.color = "red";
firstname_error.textContent = "Firstname is required";
firstname.focus();
return false;
}

// validate lastname
else if (lastname.value == "") {
lastname.style.border = "2px solid red";
document.getElementById('lastname_div').style.color = "red";
lastname_error.textContent = "Lastname is required";
lastname.focus();
return false;
}

// validate email
else if (email.value == "") {
email.style.border = "2px solid red";
document.getElementById('email_div').style.color = "red";
email_error.textContent = "Email is required";
email.focus();
return false;
}
// validate password
else if (address.value == "") {
address.style.border = "2px solid red";
document.getElementById('address_div').style.color = "red";
address_error.textContent = "Address is required";
address.focus();
return false;
}
else {
//creating Student Object
var student =
{
    sid: id.value,
    sfirst: firstname.value,
    slast: lastname.value,
    semail: email.value,
    sphone: phone.value,
    saddress: address.value
};

console.log(student)


//this is optional if u use 1 table 
var table = document.getElementsByTagName('table')[0];

//insert new row
var newRow = table.insertRow(table.rows.length);

// add cells to the row
var cel1 = newRow.insertCell(0);
var cel2 = newRow.insertCell(1);
var cel3 = newRow.insertCell(2);
var cel4 = newRow.insertCell(3);
var cel5 = newRow.insertCell(4);
var cel6 = newRow.insertCell(5);
var cel7 = newRow.insertCell(6);


//button create
var UpdateButton = document.createElement("button");
var DeleteButton = document.createElement("button");


//givig colors to buttons
UpdateButton.style.backgroundColor = "green";
DeleteButton.style.backgroundColor = "red";
UpdateButton.style.color = "white"
DeleteButton.style.color = "white";


// add values to the cells
cel1.innerHTML = student.sid;
cel2.innerHTML = student.sfirst;
cel3.innerHTML = student.slast;
cel4.innerHTML = student.semail;
cel5.innerHTML = student.sphone;
cel6.innerHTML = student.saddress;
cel7.appendChild(UpdateButton);
UpdateButton.innerHTML = "Update";
cel7.appendChild(DeleteButton);
DeleteButton.innerHTML = "Remove";


//delete row 
var RowIndex;

DeleteButton.addEventListener("click", function () {
    for (var j = 0; j < table.rows.length; j++) {
        //4 time execute - e.g 2nd index click - it will delete only that
        table.rows[j].onclick = function () {
            var txt;

            if (confirm("Prees Okey, If you want to delete data.")) {
                RowIndex = this.rowIndex;
                table.deleteRow(RowIndex);
            }
            else {
                txt = "You pressed Cancel!";
            }
        };
    }
});


//update row
UpdateButton.addEventListener("click", function () {
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            document.getElementById("id").value = this.cells[0].innerHTML;
            document.getElementById("firstname").value = this.cells[1].innerHTML;
            document.getElementById("lastname").value = this.cells[2].innerHTML;
            document.getElementById("email").value = this.cells[3].innerHTML;
            document.getElementById("phone").value = this.cells[4].innerHTML;
            document.getElementById("adress").value = this.cells[5].innerHTML;
        };
    }
});

return true;
}
}