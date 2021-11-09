<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['email'];
$phone = $_POST['text'];
$email = $_POST['textarea'];
$token = "2105294604:AAG_zbrC1zqmQynlwFCJktrq-ua6PEzVEeA";
$chat_id = "-469281851";
$arr = array(
  'E-MAIL: ' => $name,
  'Company: ' => $phone,
  'Offer' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>