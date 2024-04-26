document.getElementById('userDataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Fetching input field values
    var name = document.getElementById('name').value.trim();
    var password = document.getElementById('password').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var address = document.getElementById('address').value.trim();

    // Validation for name (not empty)
    if (name === '' || /^\s*$/.test(name)) {
        alert('Please enter your name.');
        return;
    }

    // Validation for password (at least 6 characters)
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Validation for phone number (numeric and 10 digits)
    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // Validation for email (basic format check)
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validation for address (not empty)
    if (address === '') {
        alert('Please enter your address.');
        return;
    }

    // If all validations pass, you can proceed with form submission or further processing
    alert('Form submitted successfully!');
    // You can add code here to submit the form data via AJAX or any other means
});