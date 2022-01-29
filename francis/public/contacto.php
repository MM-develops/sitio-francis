<?php

// The message
if($_POST["from"] = "contacto"){
    $message = "Alguien solicito información a través del formulario de contacto de francisliving.mx \r\n";
}else{
    $message = "Alguien solicito más información sobre la calete a través de una forma de contacto en francisliving.mx\r\n";
}

$message .= " Nombre: " . $_POST["name"] . "\r\n Apellido: " . $_POST["lastname"] . "\r\n Correo: ". $_POST["email"];
// In case any of our lines are larger than 70 characters, we should use wordwrap()
$message = wordwrap($message, 70, "\r\n");

// Send
$success = mail('vive@francisliving.mx', 'Nueva solicitud', $message);


if($success){
    echo "Recibimos tu información, gracias!";
}else{
    echo "Tuvimos problemas tecnicos, porfavor intentalo más tarde";
}