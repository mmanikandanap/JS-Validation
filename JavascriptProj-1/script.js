function validation(){
  var name = document.f1.name.value;
  var email = document.f1.email.value;
  var password = document.f1.password.value;

  var name_error = document.querySelector("#name_error");
  var email_error = document.querySelector("#email_error");
  var password_error = document.querySelector("#password_error");

  var email_rege = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  var rvalue = true;

  var pass_rege = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  var rvalue = true;

  if(name == ""){
    name_error.innerHTML = "Name is Required";
    name_error.style.color = "red";
    rvalue = false;
  } 
  else if(name.length > 10){
    name_error.innerHTML = "Name should not be more than 10 characters";
    name_error.style.color = "red";
    rvalue = false;
  }
  else{
    name_error.innerHTML = "";
  }


  if(email == ""){
    email_error.innerHTML = "Email is Required";
    email_error.style.color = "red";
    rvalue = false;
  } 
  else if(!email_rege.test(email)){
    email_error.innerHTML = "Email not match";
    email_error.style.color = "red";
    rvalue = false; 
  }
  else{
    email_error.innerHTML = ""
  }

  if(password == ""){
    password_error.innerHTML = "Password is Required";
    password_error.style.color = "red";
    rvalue = false;
  } 
  else if(!pass_rege.test(password)){
    password_error.innerHTML = "Password not match";
    password_error.style.color = "red";
    rvalue = false; 
  }
  else{
    password_error.innerHTML = ""
  }
  


  return rvalue;
}
