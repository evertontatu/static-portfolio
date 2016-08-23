<?php

require 'phpmailer/class.phpmailer.php';
require 'phpmailer/PHPMailerAutoload.php';

print_r($_POST);

$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$mensagem = $_POST['message'];



//envia email de resposta para o cliente
$resposta = new PHPMailer;

$resposta->IsSMTP();                                      // Set mailer to use SMTP
$resposta->Host = 'ssl://smtp.gmail.com';                 // Specify main and backup server
$resposta->Port = 465;                                    // Set the SMTP port
$resposta->SMTPAuth = true;                               // Enable SMTP authentication
$resposta->Username = 'evertonferreira.de@gmail.com';                // SMTP username
$resposta->Password = 'ferreira2131626';                  // SMTP password
$resposta->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted

$resposta->From = 'evertonferreira.de@gmail.com';
$resposta->FromName = 'Everton Boni';
#$resposta->AddAddress('','Formulario de Promoções');  // Add a recipient
$resposta->AddAddress($_POST['email']);
#$resposta->AddAddress('atendimento@likeabird.com.br');               // Name is optional
#$resposta->AddBCC('eboni@ie.com.br', 'Everton Boni'); // Cópia Oculta

$resposta->IsHTML(true); // Set email format to HTML

$resposta->Subject = 'Contato';

//Monta o email resposta
$resposta->Body .=  "<body style='background-color: #ededed;'>
<center>
<br><br>
	<table style='width: 599px; height: 255px; margin: 0 auto;>
		<tr>
			<td style='width: 599px; height: 255px; margin: 0 auto;>
				<h1>Success!!</h1>
			</td>
		</tr>
	</table>
</center>
</body>";

$resposta->Send();




//envia email para o Atendente likeabird
$mail = new PHPMailer;

$mail->IsSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'ssl://smtp.gmail.com';                 // Specify main and backup server
$mail->Port = 465;                                    // Set the SMTP port
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'evertonferreira.de@gmail.com';                // SMTP username
$mail->Password = 'ferreira2131626';                  // SMTP password
$mail->SMTPSecure = 'tls';


$mail->From = 'evertonferreira.de@gmail.com';
$mail->FromName = 'Everton Boni';
#$mail->AddAddress('','Formulario de Promoções');  // Add a recipient
#$mail->AddAddress('eboni@ie.com.br');
$mail->AddAddress('evertonferreira.de@gmail.com'); // Name is optional
#$mail->AddBCC('eboni@ie.com.br', 'Everton Boni'); // Cópia Oculta

$mail->IsHTML(true); // Set email format to HTML

$mail->Subject = 'Contato Everton Boni';

//Monta o email com dados do formulario
$mail->Body = " ";
$mail->Body .= "Recebido de evertonboni.com.br <br> <br> <br>";
$mail->Body .= "Nome: ".$_POST['nome']."<br>";
$mail->Body .= "Telefone: ".$_POST['telefone']."<br>";
$mail->Body .= "E-mail: ".$_POST['email']."<br>" ;
$mail->Body .= "Mensagem: ".$_POST['message']."<br>";

$sendmail =  $mail->Send();
return $sendmail






?>
