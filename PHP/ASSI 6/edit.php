<?php
// Including the database connection file
require_once 'db.php';

// Retrieving the 'id' parameter from the GET request
$id = $_GET['id'];

// Constructing the SQL query to select the user with the specified 'id' from the database
$query = "SELECT * FROM users WHERE id = $id";

// Executing the select query using the database connection
$result = mysqli_query($conn, $query);

// Fetching the user data as an associative array
$user = mysqli_fetch_assoc($result);

// Checking if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieving updated name and email from the POST data
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Constructing the SQL query to update the user data in the database
    $query = "UPDATE users SET name = '$name', email = '$email' WHERE id = $id";
    
    // Executing the update query using the database connection
    mysqli_query($conn, $query);

    // Redirecting the user to the index.php page after updating the user
    header("Location: index.php");
    exit; // Exiting the script to prevent further execution
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Edit User</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <h1>Edit User</h1>
        <!-- Form for editing user details -->
        <form action="" method="post">
            <!-- Displaying current user details in input fields for editing -->
            <input type="text" name="name" placeholder="Name" value="<?php echo $user['name']; ?>" required>
            <input type="email" name="email" placeholder="Email" value="<?php echo $user['email']; ?>" required>
            <button type="submit">Update</button>
        </form>
    </div>
</body>

</html>
