/* ShowPassword */
function showPassword() {
  var x = document.getElementById("password");
  var checkbox = document.getElementById("checkpass")
  if (checkbox.checked == true ) {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

/* Respnsive Navbar */
function myNavBar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Internal JS for Sign Up System */
function Register() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;
  if (localStorage.getItem(username) != null){
    document.getElementById("warnmessage").innerHTML = " Username Used , Please Register again ! ";
  }
  else{
    if (password != password2) {
      document.getElementById("warnmessage").innerHTML = "Password do not match ! ";
    }
    else{
      localStorage.setItem(username, sha1(password));
      setTimeout(function(){location.replace("index.html");}, 1000);
      alert("Sign Up Successful !!!");
    }
  }
}
/* Login System */
function login() {
  localStorage.setItem("Dystress3", sha1("Dystress3"));
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (localStorage.getItem(username) != null) {
    if (localStorage.getItem(username) == sha1(password)){
      var loggedin = true;
      localStorage.setItem("LoginCheck", loggedin);
      location.replace("dolist.html");
      }
    else {
      alert("Wrong Password Entered !!! ");
      }
    }
  else {
    alert("No Such User Please Register !!!");
  }
}

/* Login Validation To Check Whether The User Login Before Access the Functions */
function logincheck(){
  if (localStorage.getItem("LoginCheck") != 'true'){
    location.replace("please_login.html");
  }
}

function logincheck2(){
  if (localStorage.getItem("LoginCheck") != 'true'){
    document.getElementById('login').style.display='block';
  }
  else {
    alert("Welcome Back !!!");
    location.replace("dolist.html");
  }
}
