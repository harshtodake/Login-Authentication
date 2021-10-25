const loginText = document.querySelector(".title-text .login");
         const loginForm = document.querySelector("form.login");
         const loginBtn = document.querySelector("label.login");
         const signupBtn = document.querySelector("label.signup");
         const signupLink = document.querySelector("form .signup-link a");
         signupBtn.onclick = (()=>{
           loginForm.style.marginLeft = "-50%";
           loginText.style.marginLeft = "-50%";
         });
         loginBtn.onclick = (()=>{
           loginForm.style.marginLeft = "0%";
           loginText.style.marginLeft = "0%";
         });
         signupLink.onclick = (()=>{
           signupBtn.click();
           return false;
         });




  // var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
var username = document.getElementById("email").value;
var password = document.getElementById("psw").value;
if ( username == "harsh@gmail.com" || password == "Harsh@123"){
alert ("Login successfully");
window.location.assign("https://www.tutorialrepublic.com"); // Redirecting to other page.
return false;
}
else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
alert("Please try again !");
// Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("email").disabled = true;
// document.getElementById("psw").disabled = true;
// document.getElementById("login").disabled = true;
// return false;
// }
}
}