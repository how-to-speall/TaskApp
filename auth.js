// auth.js
document.addEventListener("DOMContentLoaded", function() {
    const correctPassword = "123"; // Hardcoded password
    const authButton = document.getElementById("auth-button");
    const passwordField = document.getElementById("password-field");

    authButton.addEventListener("click", () => {
        const userPassword = passwordField.value;
        if (userPassword === correctPassword) {
            //alert("Access granted!");
            localStorage.setItem("authenticated", "true");
            window.location.href = "index.html"; // Redirect to the main page
        } else {
            //alert("Incorrect password. Please try again.");
        }
    });
});