let apiUrl = "https://682199f9259dad2655afc0f9.mockapi.io/Users";
let form = document.getElementById("register-form")
let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")

let message = document.getElementById("register-message")

form.addEventListener("submit", async(e) => {
    e.preventDefault();
    message.textContent = "";

    if (username.value.length <= 4) {
        message.textContent = "UserName Must Be More Than 4 Character"
        return;
    }
    if (password.value.length <= 6) {
        message.textContent = "Password Must Be More Than 6 Numbers"
        return;
    }


    try {

        let res = await fetch(apiUrl);
        let users = await res.json();

        let userExists = users.find(user => user.username === username.value);
        if (userExists) {
            message.textContent = "UserName Already Exists"
            return;
        }

        await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username.value,
                email: email.value,
                password: password.value,
            })
        });
        alert("Registration SuccessFully");
        window.location.href = "login.html";
    } catch (err) {
        console.error("Error during registration:", err);
        message.textContent = "Error during Registration, Try Again"
    }
})