<?php

$server_name = "localhost";
$user_name = "root";
$user_pass = "";
$database_name = "moonsic_user";

$con = mysqli_connect($server_name, $user_name, $user_pass, $database_name);

if(!$con){
    die("Connection Failed : " . mysqli_connect_error());
}
// else{
//     echo ("Successfully Connected");
// }



?>