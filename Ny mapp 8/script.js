// $(document).ready(function(){
//     $("#flip").click(function(){
//       $("#panel").slideToggle("slow");
//     });

//   });


// Exercise: Create a to do list application

// todoList function used on button click to get user input and 
function todoList() {
	// store user value
	var firstname    = document.getElementById('firstname').value
	var lastname    = document.getElementById('lastname').value
	// create a text node from the user input
	var text    = document.createTextNode(firstname + lastname)
	// create a li tag
	var newItem = document.createElement('div');
	newItem.setAttribute('class', 'flip'); // and make sure myclass has some styles in css
	

	// add the user input to the li tag
	newItem.appendChild(text)
	// append the li to the html todoList id tag
	document.getElementById('todoList').appendChild(newItem)
}