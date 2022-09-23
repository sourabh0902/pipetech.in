<?php
/*
$toEmail = "project@pipetech.in";
$mailHeaders = "From: " . $_POST["firstname"] ." ".$_POST["lastname"]. "<". $_POST["email"] .">\r\n";
$details="Name : ".$_POST["firstname"]." ".$_POST["lastname"]."\n"."Email : ".$_POST["email"]."\n"."Phone no. : + ".$_POST["countryCode"]."  ".$_POST["telephone"]."\n"."Messege : ".$_POST["subject"]."\n";
if(mail($toEmail, $mailHeaders, $details)) {
echo"<p class='success'>Contact Mail Sent.</p>";
} else {
echo"<p class='Error'>Problem in Sending Mail.</p>";
}
*/
?>
<?php 
  //creating connection to database
$con=mysqli_connect("localhost","sumedh","Dwuh_O{w8Zuk","data_storage") or die(mysqli_error());

  //check whether submit button is pressed or not
if((isset($_POST['submit'])))
{
  //fetching and storing the form data in variables
$firstname = $con->real_escape_string($_POST['firstname']);
$lastname = $con->real_escape_string($_POST['lastname']);
$email = $con->real_escape_string($_POST['email']);
$countryCode = $con->real_escape_string($_POST['countryCode']);
$telephone = $con->real_escape_string($_POST['telephone']);
$message = $con->real_escape_string($_POST['message']);

  //query to insert the variable data into the database
$sql="INSERT INTO contactform (firstname, lastname,  email, countryCode, telephone, message) VALUES ('".$firstname."', '".$lastname."', '".$email."', '".$countryCode."','".$telephone."', '".$message."')";

  //Execute the query and returning a message
if(!$result = $con->query($sql)){
die('Error occured [' . $conn->error . ']');
}
else
   echo "Thank you! We will get in touch with you soon";
}

?>
