<?php
$data = json_decode(file_get_contents("php://input"));
include "dbs.php";
$sql = "SELECT * FROM profit WHERE date = '$data->myDate'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
		$data["error"] = false;
    }
} else if($result->num_rows < 10){
	$data = array() ;
    $data[0]["error"] = true;
}
else {
	echo "0";
}
echo json_encode($data);
$conn->close();
?>