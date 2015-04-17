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

//NOTE: This section is based on the select menu demo in 
// "Modern Javascript: Develop and Design" by Larry Ullman, pages 390-396

// Function called when the first menu's value changes.
// Function updates the second menu.
function updateMenu() {
    'use strict';
    
    // Get references to the menus:
    var primary = document.getElementById('primary');
    var primary2 = document.getElementById('primary2');

    // For storing the options:
    var options = null;
       
    // Empty the second menu:
    while (primary2.firstChild) {
        primary2.removeChild(primary2.firstChild);
    }

    // Determine the options:
    if (primary.value == "Red") {
        options = ["Choose Shade", "Cardinal", "Vermillion", "Rose", "Sangria", "Peony"];
    } else if (primary.value == "Blue") {
        options = ["Choose Shade", "Azure", "Indigo", "Navy", "Aqua", "Blueberry"];
    } else if (primary.value == "Yellow") {
        options = ["Choose Shade", "Canary", "Buttercup", "Banana", "Gold", "Lemon"];
    }

    // Update the menu:
    if (options) {
        primary2.disabled = false;
        
        // Add the options to the menu:
        for (var i = 0, count = options.length; i < count; i++) {
            var opt = document.createElement('option');
            opt.text = opt.value = options[i];
            primary2.appendChild(opt);
        }
        
    } else { // No selection!
        primary2.disabled = true;
    }

} // End of updateMenu() function.

    // Get the select menu:
    var primary = document.getElementById('primary');

    // Clear out the existing options:
    while (primary.firstChild) {
        primary.removeChild(primary.firstChild);
    }
    
    // Add the new options:
    var options = ["Choose", "Red", "Blue", "Yellow"];
    for (var i = 0, count = options.length; i < count; i++) {
        var opt = document.createElement('option');
        opt.text = opt.value = options[i];
        primary.appendChild(opt);
    }
    
    // Add an event handler:
    primary.onchange = updateMenu;
    
    // Create the other select menu:
    var primary2 = document.createElement('select');
    primary2.id = 'primary2';
    primary2.disabled = true;
    primary.parentNode.appendChild(primary2); 

// End select box exercise

// Your form should have at least one subsection which will appear 
// depending on the value selected in a checkbox, radio button or SELECT.

// NOTE: I got the code for hiding the account name field when the checkbox is checked a second time
// from: http://stackoverflow.com/questions/19734907/javascript-hide-show-div-on-checkbox-checked-unchecked

// Get the Twitter account input elements and assign to variables
var twitter = document.getElementById("twitter");
var account = document.getElementById("twitterAccount");
twitter.checked = false;
// Add event listener
twitter.addEventListener("change", function(e) {
    if (e.target.name == "twitter") {
        account.style.display = this.checked ? "block" : "none";
    } 
}); // end event


// Phone number: reformat to match the HTML5 validation pattern. User may enter any ten-digit number 
// in either xxx-xxx-xxxx, (xxx)xxx-xxxx or xxxxxxxxxx form.
// Validation should confirm ten-digit number and format as xxx-xxx-xxxx. 

// Get the phone input element and assign to variable
var myRegEx = /^\d{3}-\d{3}-\d{4}$/; 
var phone = document.getElementById("phone");
var phoneHint = document.getElementById("phoneHint");

    phone.addEventListener("change", function() {
    // Check that phone input meets requirements in regular expression
    // xxx-xxx-xxxx
    if (myRegEx.test(phone.value))
    {
        phoneHint.style.display = "none"; 
    } 
    // If password doesn't conform to regular expression requirements, 
    // offer a hint
    else {
        phoneHint.style.display = "block";
        phoneHint.innerHTML = "Phone number must be ten digits";
        
    } 

}); // end event listener
} //end window onload

// http://www.the-art-of-web.com/javascript/validate-password/