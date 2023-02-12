<?php
$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$message = strip_tags($_POST['message']);

$recipient = "trev.cavill@outlook.com";
$subject = "Contact Form | Trev Cavill";

$headers = "From: $name <$email>\r\n";

mail($recipient, $subject, $message, $headers);