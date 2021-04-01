<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Authorization, Role, Id, Language, Content-Type');
    //echo "hello";
    $data_return =array();
    $arraydata = array(
        "id"=>1,
        "name"=>"รายรับ");
    array_push($data_return,$arraydata);
    $arraydata = array(
        "id"=>2,
        "name"=>"รายจ่าย");
    array_push($data_return,$arraydata);
    echo json_encode($data_return);
?>