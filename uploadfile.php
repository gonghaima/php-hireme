<?php
include "connect.php";

$hi=$pdo->open();
$statement = $hi->prepare('INSERT INTO jobseeker(email, password, name, contact, country, occupation, industry, experience) VALUES (:a, :b, :c, :d, :e, :f, :g, :h)');
$statement->execute([
  'a'=>$_POST['email'],
  'b'=>$_POST['password'],
  'c'=>$_POST['name'],
  'd'=>$_POST['contact'],
  'e'=>$_POST['country'],
  'f'=>$_POST['occupation'],
  'g'=>$_POST['industry'],
  'h'=>$_POST['experience']
]);
$statement = $hi->prepare('SELECT MAX(id) AS maxid FROM jobseeker');
$statement->execute();
$res=$statement->fetchAll();
var_dump($res);

move_uploaded_file($_FILES['files']['tmp_name'][0], './cv/'.$res[0]["maxid"].'.pdf');
move_uploaded_file($_FILES['files']['tmp_name'][1], './pictures/'.$res[0]["maxid"].'.png');
?>