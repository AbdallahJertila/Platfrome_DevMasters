<?php

header('Content-Type: application/json');

$host = 'localhost'; 
$dbname = 'ma_base';   
$username = 'root';    
$password = ''; 

try {
    $conn = new mysqli($host, $username, $password, $dbname);
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }
    
    $sql = "SELECT * FROM utilisateurs";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $data = [];
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        echo json_encode($data);
    } else {
        echo json_encode([]);
    }
    $conn->close();
} catch (Exception $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
