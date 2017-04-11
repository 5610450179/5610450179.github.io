<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>ข้อ1</title>
</head>

<body>
	<form  method="post">
    	CustomerID:<input type="text" name="customerID"/><br />
        CitizenID:<input type="text" name="citizenID"/> <br />
        Firstname:<input type="text" name="fname"/><br />
        Lastname:<input type="text" name="lname"/><br />
        <input type="submit" name = "submit"/>
        
    </form>
    
    <?php
	echo "lab6 ข้อ1";
if(isset($_POST["submit"])){
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "webtech";
	
	$cusID = $_POST["customerID"];
	$citID = $_POST["citizenID"];
	$fname = $_POST["fname"];
	$lname = $_POST["lname"];
	
	try {
		$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
		// set the PDO error mode to exception
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$sql = "INSERT INTO customers (customerID , citizenID , fname ,lname )
		VALUES ('$cusID', '$citID', '$fname' ,'$lname')";
		// use exec() because no results are returned
		$conn->exec($sql);
		echo "New record created successfully";
		}
	catch(PDOException $e)
		{
		echo $sql . "<br>" . $e->getMessage();
		}
	
	$conn = null;
}

?>

</body>
</html>