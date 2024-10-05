<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);


include "connect.php";

// If request is GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	// If no querystrings, get all messages summary
	if(empty($_GET)) {
		print "no query string, get all messages";
	}
	// If querystring supplied
	else {
		// If person=<n> query string supplied
		if ( isset($_GET['person'])) {
			$user_id = $_GET['person'];
			echo "user id: $user_id";
		}
	}
}
// If request is POST
else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  echo "POST REQUEST";
}

?>
