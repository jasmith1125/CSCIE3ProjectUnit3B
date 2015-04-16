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
var myRegEx = /^([a-zA-Z0-9@*#]{8,12})$/;
pass1.addEventListener("input", function() {
 
if (myRegEx.test(pass1.value))
 {
        passHint1.style.display = "none"; 
    } else {
        passHint1.style.display = "block";
    } 

}); // end event listener



} // end window onload