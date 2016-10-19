function validate(){
  //this validate comes from onclick"validate" on the html that affects the New Game button
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  if (userEntered.length < 6 || userEntered.includes(" "))
  //For length it will be "blank".length the blank is the variable defined you want to have that length//
  {
    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");

  // & then if that variable does meet that length, then it will have success//
  }
  else
  {
  document.getElementById("user").classList.add("has-success");
  //else statement is if whatever is said before else is not met then this will happen//
  }
  var passEntered = document.getElementById("pass").value;

  //variable is passEntered which is what is imputed into the password box//
  if(passEntered.length < 6 || passEntered.length > 20 )
  //if the variable "passEntered" is equal to === the actual word "password" then this will happen//
  {
    //error//
    document.getElementById("passwordError").innerHTML="Password must be at least 6 characters and no more than 20.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");

}
else if( (passEntered.toLowerCase() == "password" ) || passEntered == userEntered)
{
  document.getElementById("passwordError").innerHTML="Bad Password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");


}

else
  //this else statement is if the password entered isnt "password" then there success//
{
    document.getElementById("pass").classList.add("has-success");
}

} //this bracket closes the bracket opened at function validate//
