<?php

require 'phpmailer/class.phpmailer.php';
require 'phpmailer/PHPMailerAutoload.php';

 print_r($_POST);

$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$mensagem = $_POST['message'];

$mail = new PHPMailer;

$mail->IsSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'ssl://smtp.gmail.com';                 // Specify main and backup server
$mail->Port = 465;                                    // Set the SMTP port
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'evertonboni.fe@gmail.com';                // SMTP username
$mail->Password = ' ';                  // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted

$mail->From = 'evertonferreira.de@gmail.com';
$mail->FromName = 'Site Everton Boni';
#$mail->AddAddress('','Formulario de Promoções');  // Add a recipient
$mail->AddAddress('evertonferreira.de@gmail.com');               // Name is optional
#$mail->AddBCC('eboni@ie.com.br', 'Everton Boni'); // Cópia Oculta

$mail->IsHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Contato Everton Boni';

$mail->Body .= "Recebido de evertonboni.com.br <br> <br> <br>";
$mail->Body .= "Nome: ".$_POST['nome']."<br>";
$mail->Body .= "Telefone: ".$_POST['telefone']."<br>";
$mail->Body .= "E-mail: ".$_POST['email']."<br>" ;
$mail->Body .= "Mensagem: ".$_POST['message']."<br>";

#$mail->Body = (   "Nome:".$nome.
#                                                "\r\nE-mail:".$email.
#                                                "\r\nMenssagem:" .$mensagem);
#$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';





  $varaux =  $mail->Send();


return $varaux
?>
