<?php
include "connect.php";

session_start();
$haveFound=false;
$hi=$pdo->open();
$statement = $hi->prepare('SELECT * FROM employer WHERE email=:a AND password=:b');
$statement->execute([
  "a"=>$_GET["email"],
  "b"=>$_GET["password"]
]);
$res=$statement->fetchAll();
if(count($res)>0){
  $haveFound=true;
  $_SESSION["type"]=1;
  $_SESSION["id"]=$res[0]["id"];
  $_SESSION["email"]=$res[0]["email"];
  $_SESSION["country"]=$res[0]["country"];
  $_SESSION["phonenumber"]=$res[0]["phonenumber"];
  $_SESSION["address"]=$res[0]["address"];
  $_SESSION["company"]=$res[0]["company"];
  $_SESSION["companyaddress"]=$res[0]["companyaddress"];
  $_SESSION["industry"]=$res[0]["industry"];
  $_SESSION["aboutcompany"]=$res[0]["aboutcompany"];
  $_SESSION["idealemployee"]=$res[0]["idealemployee"];
}
else{
  $statement = $hi->prepare('SELECT * FROM jobseeker WHERE email=:a AND password=:b');
  $statement->execute([
    "a"=>$_GET["email"],
    "b"=>$_GET["password"]
  ]);
  $res=$statement->fetchAll();
  if(count($res)>0){
    $haveFound=true;
    $_SESSION["type"]=2;
    $_SESSION["id"]=$res[0]["id"];
    $_SESSION["email"]=$res[0]["email"];
    $_SESSION["name"]=$res[0]["name"];
    $_SESSION["contact"]=$res[0]["contact"];
    $_SESSION["country"]=$res[0]["country"];
    $_SESSION["occupation"]=$res[0]["occupation"];
    $_SESSION["industry"]=$res[0]["industry"];
    $_SESSION["experience"]=$res[0]["experience"];
  }
}
if($haveFound==true){
  echo "1";
}
else{
  echo "0";
}
?>