<?php
include "connect.php";

var_dump($_POST);
$hi=$pdo->open();
$statement = $hi->prepare('INSERT INTO employer(email, password, country, phonenumber, address, company, companyaddress, industry, aboutcompany, idealemployee) VALUES (:a, :b, :c, :d, :e, :f, :g, :h, :i, :j)');
$statement->execute([
  'a'=>$_POST['email'],
  'b'=>$_POST['password'],
  'c'=>$_POST['country'],
  'd'=>$_POST['phonenumber'],
  'e'=>$_POST['address'],
  'f'=>$_POST['company'],
  'g'=>$_POST['companyaddress'],
  'h'=>$_POST['industry'],
  'i'=>$_POST['aboutcompany'],
  'j'=>$_POST['aboutemployee'],
]);


?>