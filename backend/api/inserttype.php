<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// db credentials
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', 'db1997');
define('DB_NAME', 'db_myprojectmoney');

// Connect with the database.
function connect()
{
  $connect = new mysqli(DB_HOST ,DB_USER ,DB_PASS,DB_NAME);

  if ($connect->connect_error) {
    die("Failed to connect:" . $connect->connect_error);
  }
  echo "Connected successfully" ."<br>";
  mysqli_set_charset($connect, "utf8");
  $sql="INSERT INTO masterpay (idmsp,namemsp,flag) VALUES('5','ค่าน้ำมัน','0')";
  if ($connect->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $connect->error;
  }
  return $connect;
}

$con = connect(); 