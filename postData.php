<?php
$con = mysqli_connect('localhost', 'john', 'john', 'sap');

if (!$con) {
    die('Could not connect: ' . mysql_error());
}
  // JSON string
$someJSON = file_get_contents("php://input");
  // Convert JSON string to Array
  $someArray = json_decode($someJSON, true);
 // print_r($someArray);        // Dump all data of the Array

foreach ($someArray as $mydata) {
    // Use $field and $value here
	echo "\n";
	//echo $mydata['banfn'];
	$query = "INSERT INTO zstockprod (productid, name, category, available, unitprice, datechecked)
     VALUES('".$mydata['productid']."','".$mydata['name']."','".$mydata['category']."','".$mydata['available']."','".$mydata['unitprice']."','".$mydata['datechecked']."')";
    mysqli_query($con, $query);
}
$con->close();
?>