<?php

    $data_return =array();
    $arraydata = array(
        "id"=>1,
        "name"=>"รายรับ");
    array_push($data_return,$arraydata);
    $arraydata = array(
        "id"=>2,
        "name"=>"รายจ่าย");
    array_push($data_return,$arraydata);
    return http_response_code(400)
?>