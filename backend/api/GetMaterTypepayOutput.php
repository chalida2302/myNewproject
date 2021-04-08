<?php
  	header('Content-Type: application/json; charset=UTF-8');
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
  $dataReturn = array();
  $return= array();
  if ($connect->connect_error) {
    die("Failed to connect:" . $connect->connect_error);
  }
  // echo "Connected successfully" ."<br>";
  $sql = "SELECT * FROM masterpay WHERE flag=1" ;   
  $result  = mysqli_query($connect,$sql);
  $resultCheck = mysqli_num_rows($result);
if($resultCheck>0){
  while($row = mysqli_fetch_assoc($result)){
   $arraydata[]=array(
     'id'=>$row['idmsp'],
     'name'=>$row['namemsp'],
     'flag'=>$row['flag']);
    
  }

   $data_return = json_encode($arraydata);
  echo $data_return;

  return $connect;
}
}
$con = connect(); 
?>