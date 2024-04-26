<?php
// Including the database connection file
require_once 'db.php';

// Checking if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieving name and email from the POST data
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Constructing the SQL query to insert the user data into the database
    $query = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
    
    // Executing the query using the database connection
    mysqli_query($conn, $query);

    // Redirecting the user to the index.php page after adding the user
    header("Location: index.php");
    exit; // Exiting the script to prevent further execution
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Add User</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <h1>Add User</h1>
        <!-- Form for adding a new user -->
        <form action="" method="post">
            <input type="text" name="name" placeholder="Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <button type="submit">Add</button>
        </form>
    </div>
</body>

</html>
