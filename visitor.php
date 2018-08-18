<?php

$servername = "http://csc412sfsu.com/phpmyadmin/";
$username = "csc412";
$password = "csc412";

$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// sql to create table
$val = mysql_query('select 1 from `MyGuests` LIMIT 1');
if($val !== FALSE)
{ 
        // Escape user inputs for security
        $name = $mysqli->real_escape_string($_REQUEST['name']);
        $email = $mysqli->real_escape_string($_REQUEST['email']);
        $comment = $mysqli->real_escape_string($_REQUEST['comment']);
// attempt insert query execution
        $sql = "INSERT INTO MyGuests (name, email, comment) VALUES ('$name', '$email', '$comment')";

        if (mysqli_query($conn, $sql)) {
            echo "Records inserted successfully.";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
} else {
    $sql = "CREATE TABLE MyGuests (
    name VARCHAR(30), 
    email VARCHAR(50),
    Textarea VARCHAR(300)
    )";

    if (mysqli_query($conn, $sql)) {
        echo "Table MyGuests created successfully";
    } else {
        echo "Error creating table: " . mysqli_error($conn);
    }
    
    // Escape user inputs for security
    $name = $mysqli->real_escape_string($_REQUEST['name']);
    $email = $mysqli->real_escape_string($_REQUEST['email']);
    $comment = $mysqli->real_escape_string($_REQUEST['comment']);
// attempt insert query execution
    $sql = "INSERT INTO MyGuests (name, email, comment) VALUES ('$name', '$email', '$comment')";

    if (mysqli_query($conn, $sql)) {
        echo "Records inserted successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

$sql = "SELECT name, quote FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "Name: " . $row["name"] . " Comment: " . $row["comment"] . "<br>";
    }
} else {
    echo "0 results";
}

mysqli_close($conn);
?>