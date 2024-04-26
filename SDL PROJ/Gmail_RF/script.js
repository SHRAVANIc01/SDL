/*
function validateForm() {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();
    var mobile = document.getElementById("mobile").value.trim();
    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    var mobileError = document.getElementById("mobileError");
    var isValid = true;

    // Regular expressions for validation
    var namePattern = /^[a-zA-Z]+$/;
    var emailPattern = /\S+@\S+\.\S+/;
    var mobilePattern = /^\d{10}$/;

    // First Name validation
    if (firstName === "") {
        firstNameError.innerText = "First name is required";
        isValid = false;
    } else if (!namePattern.test(firstName)) {
        firstNameError.innerText = "First name must contain only letters";
        isValid = false;
    } else {
        firstNameError.innerText = "";
    }

    // Last Name validation
    if (lastName === "") {
        lastNameError.innerText = "Last name is required";
        isValid = false;
    } else if (!namePattern.test(lastName)) {
        lastNameError.innerText = "Last name must contain only letters";
        isValid = false;
    } else {
        lastNameError.innerText = "";
    }

    // Email validation
    if (email === "") {
        emailError.innerText = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerText = "Invalid email address";
        isValid = false;
    } else {
        emailError.innerText = "";
    }

    // Password validation
    if (password === "") {
        passwordError.innerText = "Password is required";
        isValid = false;
    } else {
        passwordError.innerText = "";
    }

    // Confirm Password validation
    if (confirmPassword === "") {
        confirmPasswordError.innerText = "Confirm password is required";
        isValid = false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.innerText = "Passwords do not match";
        isValid = false;
    } else {
        confirmPasswordError.innerText = "";
    }

    // Mobile validation
    if (mobile === "") {
        mobileError.innerText = "Mobile number is required";
        isValid = false;
    } else if (!mobilePattern.test(mobile)) {
        mobileError.innerText = "Invalid mobile number";
        isValid = false;
    } else {
        mobileError.innerText = "";
    }

    return isValid;
}
*/
function validateForm() {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();
    var mobile = document.getElementById("mobile").value.trim();
    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    var mobileError = document.getElementById("mobileError");
    var isValid = true;

    // Regular expressions for validation
    var namePattern = /^[a-zA-Z]+$/;
    var emailPattern = /\S+@\S+\.\S+/;
    var mobilePattern = /^\d{10}$/;

    // First Name validation
    if (firstName === "") {
        firstNameError.innerText = "First name is required";
        isValid = false;
    } else if (!namePattern.test(firstName)) {
        firstNameError.innerText = "First name must contain only letters";
        isValid = false;
    } else {
        firstNameError.innerText = "";
    }

    // Last Name validation
    if (lastName === "") {
        lastNameError.innerText = "Last name is required";
        isValid = false;
    } else if (!namePattern.test(lastName)) {
        lastNameError.innerText = "Last name must contain only letters";
        isValid = false;
    } else {
        lastNameError.innerText = "";
    }

    // Email validation
    if (email === "") {
        emailError.innerText = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerText = "Invalid email address";
        isValid = false;
    } else {
        emailError.innerText = "";
    }

    // Password validation
    if (password === "") {
        passwordError.innerText = "Password is required";
        isValid = false;
    } else {
        passwordError.innerText = "";
    }

    // Confirm Password validation
    if (confirmPassword === "") {
        confirmPasswordError.innerText = "Confirm password is required";
        isValid = false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.innerText = "Passwords do not match";
        isValid = false;
    } else {
        confirmPasswordError.innerText = "";
    }

    // Mobile validation
    if (mobile === "") {
        mobileError.innerText = "Mobile number is required";
        isValid = false;
    } else if (!mobilePattern.test(mobile)) {
        mobileError.innerText = "Invalid mobile number";
        isValid = false;
    } else {
        mobileError.innerText = "";
    }

    // Display confirmation message if form is valid
    if (isValid) {
        alert("Registration successful!");
    }

    return isValid;
}