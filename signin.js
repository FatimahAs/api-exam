let apiUrl = "https://682199f9259dad2655afc0f9.mockapi.io/Users";
let form = document.getElementById("login-form")
let usernameInput = document.getElementById("username")
let passwordInput = document.getElementById("password")
let message = document.getElementById("register-message")

form.addEventListener("submit", async(e) => {
    e.preventDefault();
    message.textContent = "";

    if (username.value === usernameInput.id && password.value === passwordInput.id) {
        message.textContent = "UserName Must Be More Than 4 Character"

        alert("Sign in SuccessFully");
        window.location.href = "index.html";

    } else {
        alert("Error Sign in ");
        window.location.href = "signin.html";
    }


    localStorage.setItem("loggedUser")
})