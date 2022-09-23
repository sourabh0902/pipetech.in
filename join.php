<?php
$toEmail = "hr@pipetech.in";
$mailHeaders = "From: " . $_POST["name"] . "<". $_POST["email"] .">\r\n";
$details="Name : ".$_POST["name"]."\n"."Email : ".$_POST["email"]."\n"."Phone no. : + ".$_POST["countryCode"]."  ".$_POST["telephone"];
if(mail($toEmail, $mailHeaders, $details)) {
echo"<p class='success'>Join us Mail Sent.</p>";
} else {
echo"<p class='Error'>Problem in Sending Mail.</p>";
}
?>