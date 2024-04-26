<?php
// Including the database connection file
require_once 'db.php';

// Retrieving the 'id' parameter from the GET request
$id = $_GET['id'];

// Constructing the SQL query to delete the user with the specified 'id' from the database
$query = "DELETE FROM users WHERE id = $id";

// Executing the delete query using the database connection
mysqli_query($conn, $query);

// Redirecting the user to the index.php page after deleting the user
header("Location: index.php");

// Exiting the script to prevent further execution
exit;
?>
