<?php
$data = json_decode(file_get_contents("php://input"));
include "dbs.php";
$sql = "SELECT * FROM profit WHERE date BETWEEN '$data->dateone' and '$data->datetwo'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
     $response = array() ;
	 $response['error'] = false;
    $response['list'] = array();
    while($row = $result->fetch_assoc()) {
        $temp = array();
		 $pro = array();
          $temp['bi']=$row['bi'];
		  $temp['milk']=$row['milk'];
		   $temp['ice']=$row['ice'];
		  $temp['date']=$row['date'];
		   $temp['tot']=$row['total'];
		  array_push($response['list'],$temp);
		 
    }
} else if($result->num_rows < 10){
	$data = array() ;
    $data["error"] = true;
}
else {
	echo "0";
}
echo json_encode($response);
$conn->close();
?>