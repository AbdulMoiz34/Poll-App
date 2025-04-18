let loginpage = document.getElementById("loginpage");

loginpage.addEventListener("click", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the matching user
    let matchedUser = users.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (matchedUser) {
        alert("Login successful!");
        window.location.href = "https://www.youtube.com/watch?v=6--TvFJBf3U&list=PLCVtKyctr15fPxLJ4EbicmjZwSlDs3jxY&index=37";
    } else {
        alert("Incorrect email or password");
    }
});
