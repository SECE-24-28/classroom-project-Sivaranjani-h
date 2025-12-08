function signup() {
    let user = document.getElementById("signupUser").value;
    let pass = document.getElementById("signupPass").value;

    if (user === "" || pass === "") {
        alert("All fields required");
    } else {
        localStorage.setItem("mobile", user);
        localStorage.setItem("password", pass);
        alert("Account Created Successfully!");
        window.location.href = "login.html";
    }
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let storedUser = localStorage.getItem("mobile");
    let storedPass = localStorage.getItem("password");

    if (user === storedUser && pass === storedPass) {
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid Login Details!");
    }
}
