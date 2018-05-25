<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$conn =mysql_connect('localhost','root','')or die(mysql_error());
$db=mysql_select_db('desi', $conn)or die(mysql_error());
?>