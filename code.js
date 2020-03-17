var loginButton = document.getElementById("login-btn")
var emailDiv = document.getElementById("e5vosKod")
var pwdDiv = document.getElementById("om")

var loggedIn = false

pwdDiv.addEventListener("input", (ev) => {
    var pwd = pwdDiv.value
    if(pwd.length > 11) {
        pwd = pwd.substring(0,11)                   // Ne lehessen a jelszó hosszabb mint egy 
    }                                               // OM kód(maxlength átírható => rossz)
    pwdDiv.value = pwd
})  


var Login = async () => {
    var email = emailDiv.value
    var pwd = pwdDiv.value                          // Megpróbálja a bejelentkeztetést
    console.log(email, pwd);
}

loginButton.onclick = Login
