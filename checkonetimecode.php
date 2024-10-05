<?php
session_start();
if($_SESSION["rand"]==$_GET["rand"]){
  echo "1";
}
else{
  echo "0";
}
?>