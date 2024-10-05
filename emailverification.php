<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

session_start();
$mail = new PHPMailer(true);

$randNum=rand(100000000, 1000000000);
$_SESSION["rand"]=$randNum;
try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->SMTPDebug = 0;
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->SMTPSecure = 'tls';
    $mail->Username   = 'hiremeverify@gmail.com';                     //SMTP username
    $mail->Password   = 'wfeb fdig npmu eiuc';                               //SMTP password
    $mail->Port = 587;                    
    $mail->From = "hiremeverify@gmail.com";
    $mail->FromName = "HireMe";
    
    //Recipients
    $mail->addAddress($_POST["email"]);

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = "One-time password";
    $mail->Body    = "Your one-time password for HireMe is {$randNum}";
    $mail->AltBody = "Your one-time password for HireMe is {$randNum}";

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>