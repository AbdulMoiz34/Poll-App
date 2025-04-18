let button = document.getElementById("signupbutton");
let arry = JSON.parse(localStorage.getItem("users")) || [];

button.addEventListener("click", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log(email, password);

    let user = {
        email: email,
        password: password,
        userId: Date.now()
    };

    arry.push(user);
    localStorage.setItem("users", JSON.stringify(arry));
    window.location.href = "../loginpage.html";
    alert("Signup successful!");

});
