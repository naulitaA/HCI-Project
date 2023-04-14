const registerform = document.getElementById("registerform")
const username = document.getElementById("username")
const password = document.getElementById("password")
const address = document.getElementById("address")
const errorusername = document.getElementById("errorusername")
const errorpassword = document.getElementById("errorpassword")
const erroraddress = document.getElementById("erroraddress")

var flag = 0

registerform.addEventListener("submit", (e) =>{
    e.preventDefault()
    flag = 0

    if (username.value.length < 5){
        errorusername.innerHTML = "Name must be at least 5 characters."
        username.value = ""
        flag = 1
    }

    if (password.value.length < 7){
        errorpassword.innerHTML = "Password must be at least 7 characters."
        password.value = ""
        flag = 1
    }

    if (address.value.length < 20){
        erroraddress.innerHTML = "Address must be longer"
        address.value = ""
        flag = 1
    }

    if (flag == 0){
        window.location = "index.html"
    } else{

    }


})