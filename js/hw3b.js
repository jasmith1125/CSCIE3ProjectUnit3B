/* hw3b.js */
window.onload = function() {
'use strict';
/* 
* #1
* There are two password fields on the form. You will write code that ensures that:
* 1. Users must enter passwords of at least 8 characters.
* 2. The two fields must match.
* Users receive feedback immediately if the passwords don't match, rather than only when the form is submitted.
*/
// Get the password input elements and assign to variables
var pass1 = document.forms[0].pwd1;
var pass2 = document.forms[0].pwd2;
var passHint1 = document.getElementById("pwd1Hint");
var passHint2 = document.getElementById("pwd2Hint");
var myRegEx = /^([a-zA-Z0-9@*#~]{8,15})$/;

pass1.addEventListener("input", function() {
	// Check that password meets requirements in regular expression
	// (any letter, upper or lower case, any number, selected special characters,
	// minimum 8 characters, maximum 15 characters)
	if (myRegEx.test(pass1.value))
    {
        passHint1.style.display = "none";
        pass1.blur();
        pass2.removeAttribute('disabled');
        pass2.focus();
    } 
    else if (!myRegEx.test(pass1.value))
 	{
        passHint1.style.display = "block";
        passHint1.innerHTML = "Password length: 8-15 characters (letters, numbers, @ * # ~)";
     }
}); // end event listener

// Check that password 2 matches password 1
pass2.addEventListener("keyup", function() {
   
    if (pass1.value === pass2.value)
     {
            passHint2.style.display = "block";
            passHint2.style.color = "green";
            passHint2.innerHTML = "Passwords match" 
            
        } else {
            passHint2.style.display = "block";
            passHint2.innerHTML = "Passwords must match"
        } 

}); // end event listener

pass2.setAttribute('disabled', 'disabled');
// End password exercise


/* 
* #2
* There is a textarea on the form labeled Brief Bio. Your code will 
* provide a countdown near the 140 character limit caption that counts 
* backwards from 140 to zero to show users how many characters they have left. 
*/
	// Get the textarea
	var field = document.getElementById("bio");
	// Add an event listener that responds to keypress
	field.addEventListener("keypress", function() {
	    // Get the counter and set this equal to 140 minus the length of value from textarea
	    document.getElementById("charsLeft").innerHTML = 140 - this.value.length;
        if (field.value.length >= 140) {
            field.value = field.value.substring(0,140);
        }
	}); // end event listener

   // Add a handler to prevent pasting in more than 140 characters
    field.addEventListener("input", function() {
        // Shows how many characters the pasted text was over the limit
        document.getElementById("charsLeft").innerHTML = 140 - this.value.length;
        if (field.value.length >= 140) {
            field.value = field.value.substring(0,140);
        }
    }); // end event listener
// End textarea exercise


/*
* #3 
* Your task is to make the two complimentary SELECT controls work in this way—
* selecting a value in the first populates the second with appropriate choices.
* The types of values are entirely up to you— automobile Make/Model is just an example. */
 
// NOTE: This section is based on the select menu demo in 
// "Modern Javascript: Develop and Design" by Larry Ullman, pages 390-396

// NOTE: BECAUSE THIS FOLLOWS A TUTORIAL, I DO NOT EXPECT TO GET CREDIT FOR THIS PART OF UNIT 3B
// THIS IS FOR MY PRACTICE AND REFERENCE  

// Function called when the first menu's value changes.
// Function updates the second menu.
function updateMenu(s) {
    
    // Get references to the menus
    var primary = document.getElementById('primary');
    var primary2 = document.getElementById('primary2');

    // Create variable to store options
    var options = null;
       
    // Empty the second menu (clear out old data
    // in preparation for new data based on change
    // to first select list
    while (primary2.firstChild) {
        primary2.removeChild(primary2.firstChild);
    }

    // Determine the options available based on
    // selection from first select list
    if (primary.value == "Dog") {
        options = ["Choose Breed", "Labrador Retriever", "Golden Retriever", "Beagle", "German Shepherd", 
        "Yorkshire Terrier", "Bulldog", "Poodle", "Other"];
    } else if (primary.value == "Cat") {
        options = ["Choose Breed", "Persian", "Maine Coon", "Exotic Shorthair", "Siamese", "Ragdoll", "Other"];
    } else if (primary.value == "Other") {
        options = ["Choose Type", "Bird", "Fish", "Ferret", "Rabbit", "Rodent", "Snake", "Turtle", "Other"];
    }

    // Update the second select list based on
    // option picked in first select list
    if (options) {
        primary2.disabled = false;
        
        // Add the options to the menu
        for (var i = 0, count = options.length; i < count; i++) {
            var opt = document.createElement('option');
            opt.text = opt.value = options[i];
            primary2.appendChild(opt);
        }
        
    } else { // No selection!
        primary2.disabled = true;
    }
} // End of updateMenu() function.

    // Get the first select list
    var primary = document.getElementById('primary');

    // Clear out the existing options
    while (primary.firstChild) {
        primary.removeChild(primary.firstChild);
    }
    
    // Add the new options
    var options = ["Choose", "Dog", "Cat", "Other"];
    for (var i = 0, count = options.length; i < count; i++) {
        var opt = document.createElement('option');
        opt.text = opt.value = options[i];
        primary.appendChild(opt);
    }

    // Add an event handler
    primary.onchange = updateMenu;
    
    // Create the other select list (breeds)
    // based on choice in first select list
    var primary2 = document.createElement('select');
    primary2.id = 'primary2';
    primary2.disabled = true;
    primary.parentNode.appendChild(primary2); 

// End select box exercise


/*
* #4.
* Your form should have at least one subsection which will appear 
* depending on the value selected in a checkbox, radio button or SELECT. */

//  Get the Twitter account input elements and assign to variables
   var twitter = document.getElementById("twitter");
   var account = document.getElementById("twitterAccount");
    // Add event listener
    twitter.addEventListener("click", function() {
        if (twitter.checked) {
            account.style.display = "block";
        } else {
            account.style.display = "none";
        }
    }); // end event
// End subsection appears when checkbox checked exercise


/*
* #5
* Phone number: reformat to match the HTML5 validation pattern. User may enter any ten-digit number 
* in either xxx-xxx-xxxx, (xxx)xxx-xxxx or xxxxxxxxxx form.
* Validation should confirm ten-digit number and format as xxx-xxx-xxxx. */

// NOTE: This code is based on Mike's demo (http://jsfiddle.net/jasmith1125/vq488yht/4/).
// but adds functionality to make code work with formats other than xxx-xxx-xxxx
function reformat() {
    
    // Get the necessary elements and value
    var phone = document.getElementById("phone").value;    
    var phoneHint=document.getElementById("phoneHint");
    // I was looking for a way to remove non-digits from user input and found
    // this regEx on stackoverflow that globally replaces non-digits ("\D") with empty string.
    // Here is the URL where I found regEx: http://stackoverflow.com/questions/1862130/strip-non-numeric-characters-from-string
    var stripNonDigits = phone.replace(/\D/g,'');
    // If input matches the regEx for xxx-xxx-xxxx
    // replace the input with input formatted as regEx
    // The $1-$2-$3 grabs groups of code from the regEx   
    // and inserts hyphens in the right places
    if (stripNonDigits.match(/^(\d{3})(\d{3})(\d{4})$/)) {
       document.getElementById("phone").value = stripNonDigits.replace(/^(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3");
       phoneHint.style.display = "none";
    } else {
        // If input doesn't match regEx, offer hint
        phoneHint.style.display = "block";
        phoneHint.innerHTML =  "Phone number must be ten digits";
    }
} //end reformat
    // Call the reformat function when the user releases key
    document.getElementById("phone").onkeyup = reformat;
    // end phone number exercise  


/*
* #6
* Upon submitting the form, make sure that at least one of the Phone 
* or Email fields are completed. One or the other, or both, may be filled in, 
* but both cannot be blank. Provide a useful message to the user if they fail to complete one of these fields. */

    // Get the form
    var form = document.forms[0];
    // Add a handler to prevent submission of form unless
    // phone or email is completed
	form.addEventListener("submit", function (e) {
		// Get the phone, email and hint fields and assign to variables
	    var phone = document.getElementById("phone");
	    var email = document.getElementById("email");
	    var submitHint = document.getElementById("submitHint");
        
        // Allow form submission if phone or email is completed
    	if (phone.value || email.value) {
	        submitHint.style.display = "none";
	            
	        // If both phone and email are blank, prevent submission   
	        } else if (phone.value == "" && email.value == "") {
	    	submitHint.style.display = "block";
	        submitHint.innerHTML = "You must provide either a phone number or an email address";
	        // Prevent default behavior of submit button
        	e.preventDefault();  
	        } 
          
	}); // end event listener

} //end window onload
