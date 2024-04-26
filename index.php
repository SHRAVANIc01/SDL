<!DOCTYPE html>
<html>
<head>
<title>PHP Array Example</title>
</head>
<body>
<form method="post">
Enter an Employee name to search: <input type="text" name="search_name">
<input type="submit" value="Search">
</form>

<?php
// Indexed Array
$employee_names = array(
    "shivani",
    "mahesh"
);

// Associative Array
$employee_info = array(
    "shivani" => array("position" => "manager", "salary" => 70000),
    "mahesh" => array("position" => "developer", "salary" => 66000)
);

// Multidimensional Array
$employee_detail = array(
    array("name" => "shivani", "age" => 26, "email" => "shivani@gmail.com"),
    array("name" => "mahesh", "age" => 26, "email" => "mk21@gmail.com")
);

// Function to check if an employee name exists in the array
function checkEmployeeNameExistence($name, $array){
    if(in_array($name, $array)){
        echo "$name exists in the list.<br>";
    }
    else{
        echo "$name does not exist in the list.<br>";
    }
}

if($_SERVER["REQUEST_METHOD"] == "POST") { // Check if the request method is POST
    $search_name = $_POST["search_name"]; // If it is, retrieve the value of the input field named "search_name" from the POST data

    // Check in Indexed Array
    checkEmployeeNameExistence($search_name, $employee_names);

    // Check in Associative Array
    if(array_key_exists($search_name, $employee_info)){
        echo "Employee: $search_name <br>";
        echo "Position: " . $employee_info[$search_name]["position"] . "<br>";
        echo "Salary: " . $employee_info[$search_name]["salary"] . "<br>";
    } 
    else{
        echo "$search_name's info is not available.<br>";
    }

    // Check in the multidimensional array
    foreach($employee_detail as $employee){
        if($employee['name'] == $search_name){
            echo "Age: " . $employee['age'] . "<br>";
            echo "Email: " . $employee['email'] . "<br>";
        }
    }
}
?>
</body>
</html>
