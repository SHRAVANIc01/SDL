function validateName() {
    var name = document.getElementById("name").value;
    var nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(name)) {
        alert("Please enter a valid name");
        return false;
    }
    return true;
}

function validatePassword() {
    var password = document.getElementById("password").value;
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }
    return true;
}

function validatePhone() {
    var phone = document.getElementById("phone").value;
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number");
        return false;
    }
    return true;
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    return true;
}

function validateAddress() {
    var address = document.getElementById("address").value;
    if (address.trim() === "") {
        alert("Please enter your address");
        return false;
    }
    return true;
}

function validateForm() {
    if (!validateName() || !validatePassword() || !validatePhone() || !validateEmail() || !validateAddress()) {
        return false;
    }
    return true;
}