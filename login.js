loginform.addEventListener("submit", (e) =>{
    const loginform = document.getElementById("loginform")
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    const errorusername = document.getElementById("errorusername")
    const errorpassword = document.getElementById("errorpassword")

    e.preventDefault()
    let flag = 0

    if (username.value.length < 5){
        errorusername.innerHTML = "Username must be at least 5 characters"
        username.value = ""
        flag = 1
    }

    if (password.value.length < 7){
        errorpassword.innerHTML = "Password must be at least characters"
        password.value = ""
        flag = 1
    }

    if (flag == 0){
        window.location = "index.html"
    }

})