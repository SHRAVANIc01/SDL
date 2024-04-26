function validateForm() {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    var isValid = true;

    // Regular expression to validate names containing only letters
    var namePattern = /^[a-zA-Z]+$/;

    if (firstName === "") {
        firstNameError.innerText = "First name is required";
        isValid = false;
    } else if (!namePattern.test(firstName)) {
        firstNameError.innerText = "First name must contain only letters";
        isValid = false;
    } else {
        firstNameError.innerText = "";
    }

    if (lastName === "") {
        lastNameError.innerText = "Last name is required";
        isValid = false;
    } else if (!namePattern.test(lastName)) {
        lastNameError.innerText = "Last name must contain only letters";
        isValid = false;
    } else {
        lastNameError.innerText = "";
    }

    if (email === "") {
        emailError.innerText = "Email is required";
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.innerText = "Invalid email address";
        isValid = false;
    } else {
        emailError.innerText = "";
    }

    if (password === "") {
        passwordError.innerText = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters";
        isValid = false;
    } else {
        passwordError.innerText = "";
    }

    if (isValid) {
        // Registration successful, show confirmation message
        alert("You have registered successfully!");
    }

    return isValid;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}