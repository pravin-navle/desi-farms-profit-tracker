<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
 
$result = mysql_query("SELECT * FROM profit WHERE date ='$data->myDate' ");

if( mysql_num_rows($result) > 0) {
	//$ice = $data->oreo+$data->choc+$data->mag;
	//$milk = $data->cgold+$data->crbm+$data->cgir+$data->rgold+$data->rrbm+$data->rgir;
	//$bi = $data->lassi+$data->dahi+$data->paneer;
	$tot = $data->ice+$data->milk+$data->bi;
    mysql_query("UPDATE profit SET cgold = '$data->cgold',crbm = '$data->crbm',cgir = '$data->cgir',rgold = '$data->rgold',rrbm = '$data->rrbm',rgir = '$data->rgir',oreo = '$data->oreo',choc = '$data->choc', mag = '$data->mag',lassi = '$data->lassi',dahi = '$data->dahi',paneer = '$data->paneer',profit= '$data->profit',ice = '$data->ice',milk = '$data->milk', bi = '$data->bi',total ='$tot' WHERE date = '$data->myDate' ");
}
else
{

	//$ice = $data->oreo+$data->choc+$data->mag;
	//$milk = $data->cgold+$data->crbm+$data->cgir+$data->rgold+$data->rrbm+$data->rgir;
	//$bi = $data->lassi+$data->dahi+$data->paneer;
	$tot = $data->ice+$data->milk+$data->bi;
    mysql_query("INSERT INTO profit (cgold,crbm,cgir,rgold,rrbm,rgir,oreo,choc,mag,lassi,dahi,paneer,profit,ice,milk,bi,total,date) VALUES ('$data->cgold','$data->crbm','$data->cgir','$data->rgold','$data->rrbm','$data->rgir','$data->oreo','$data->choc','$data->mag','$data->lassi','$data->dahi','$data->paneer','$data->profit','$data->ice','$data->milk','$data->bi','$tot','$data->myDate') ");
}
$db = array() ;
    $db[0]["error"] = true;
	$db[1]["errors"] = true;
echo json_encode($db);
die();
$conn->close();
?>