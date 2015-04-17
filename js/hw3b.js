/* hw3b.js */
window.onload = function() {
/* 
There are two password fields on the form. You will write code that ensures that:
1. Users must enter passwords of at least 8 characters.
2. The two fields must match.
Users receive feedback immediately if the passwords don't match, rather than only when the form is submitted.
*/
// Get the password input elements and assign to variables
var pass1 = document.forms[0].pwd1;
var pass2 = document.forms[0].pwd2;
var passHint1 = document.getElementById("pwd1Hint");
var passHint2 = document.getElementById("pwd2Hint");
var myRegEx = /^([a-zA-Z0-9@*#!]{8,15})$/;

pass1.addEventListener("input", function() {
	// Check that password meets requirements in regular expression
	// (any letter, upper or lower case, any number, selected special characters,
	// minimum 8 characters, maximum 15 characters)
	if (myRegEx.test(pass1.value))
 	{
        passHint1.style.display = "none"; 
    } 
    // If password doesn't conform to regular expression requirements, 
    // offer a hint
    else {
        passHint1.style.display = "block";
        passHint1.innerHTML = "Password must be between 8 and 15 characters";
        return false;
    } 

}); // end event listener


// Check that password 2 matches password 1
pass2.addEventListener("input", function() {
 
if (pass1.value === pass2.value)
 {
        passHint2.style.display = "none"; 
    } else {
        passHint2.style.display = "block";
        passHint2.innerHTML = "Passwords must match"
    } 

}); // end event listener

/* 
There is a textarea on the form labeled Brief Bio. Your code will 
provide a countdown near the 140 character limit caption that counts 
backwards from 140 to zero to show users how many characters they have left. 
*/
// Get the textarea
var field = document.getElementById("bio");
// Add an event listener that responds to keypress
field.addEventListener("keypress", function() {
    // Get the counter and set this equal to 140 minus the length of value from textarea
    document.getElementById("charsLeft").innerHTML = 140 - this.value.length;

}); // end event listener

/* 
Your task is to make the two complimentary SELECT controls work in this way—
selecting a value in the first populates the second with appropriate choices.
The types of values are entirely up to you— automobile Make/Model is just an example.  
*/
var primary = document.getElementById("firstSelect");
var secondary = document.getElementById("secondSelect");
var selectList = {
	"colors": ["Red", "Blue", "Yellow"]
}

for (var i = 0; i < selectList.colors.length; i++) {
	// create <option>
	var s = document.createElement("option");
	// create text node
	var t = document.createTextNode(selectList.colors[i]);
	// add text node to option
	s.appendChild(t);
	// set value = "" on the <option>
	s.setAttribute("value", selectList.colors[i]);
	// add the new <option> to the <select>
	primary.appendChild(s);
}

//Create an object with the options from first select field as the properties. 
//Store the options for the second select field in each property.

var myColors ={
    Red:["Cardinal", "Vermillion", "Rose Madder", "Sangria", "Peony"],
    Blue:["Azure", "Indigo", "Navy", "Aqua", "Blueberry"],
    Yellow:["Canary", "Buttercup", "Banana", "Gold", "Lemon"]
}

primary.onchange = function() {
	//When an option is selected, use the value of the selectField to select the property of your object
	alert(myColors[primary.value]);
	
}




} // end window onload

// http://www.the-art-of-web.com/javascript/validate-password/