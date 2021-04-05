<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


// db credentials
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', 'db1997');

// Connect with the database.
function connect()
{
  $connect = new mysqli(DB_HOST ,DB_USER ,DB_PASS);

  if ($connect->connect_error) {
    die("Failed to connect:" . $connect->connect_error);
  }
  echo "Connected successfully";
  mysqli_set_charset($connect, "utf8");
  $sql="INSERT INTO income (inid,typeitem,listname,price,date) VALUES('1111','1111','bbb','bbb','03/01/2564')";
  if ($connect->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $connect->error;
  }
  return $connect;
}

$con = connect(); 