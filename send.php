<?php
// echo 'Hello World !';
//
// var_dump($_POST);
//
// var_dump($_FILES)
//
// $separator = md5(time());
// $eol = "\r\n";
//
// $to      = 'salvatore.seidita@yahoo.com';
// $subject = 'Contact Form From ' . $_POST['name'];
// $headers =  'From:' . $_POST['name'] . "\r\n" .
//             'Reply-To:' . $_POST['name'] . "\r\n" .
//             'X-Mailer: PHP/' . phpversion();
//
// // message
// $body = "--" . $separator . $eol;
// $body .= "Content-Type: text/plain; charset=\"iso-8859-1\"" . $eol;
// $body .= "Content-Transfer-Encoding: 8bit" . $eol;
// $body .= $_POST['message'] . $eol;
//
// // attachment
// $body .= "--" . $separator . $eol;
// $body .= "Content-Type: application/octet-stream; name=\"" . $filename . "\"" . $eol;
// $body .= "Content-Transfer-Encoding: base64" . $eol;
// $body .= "Content-Disposition: attachment" . $eol;
// $body .= $content . $eol;
// $body .= "--" . $separator . "--";
//
// mail($to, $subject, $body);//, $headers);


    // $filename = 'file';
    // $path = '';
    // $file = $path . "/" . $filename;

    $mailto = 'salvatore@seidita.co.uk';
    $subject = 'Contact Form from '.$_POST['name'];
    $message = $_POST['message'];

    // $content = file_get_contents($file);
    // $content = chunk_split(base64_encode($content));

    // a random hash will be necessary to send mixed content
    $separator = md5(time());

    // carriage return type (RFC)
    $eol = "\r\n";

    // main header (multipart mandatory)
    $headers = "From: " . $_POST['email'] . $eol;
    $headers .= "MIME-Version: 1.0" . $eol;
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
    $headers .= "Content-Transfer-Encoding: 7bit" . $eol;
    $headers .= "This is a MIME encoded message." . $eol;

    // message
    $body = "--" . $separator . $eol;
    $body .= "Content-Type: text/plain; charset=\"iso-8859-1\"" . $eol;
    $body .= "Content-Transfer-Encoding: 8bit" . $eol;
    $body .= $message . $eol;

    // attachment
    $body .= "--" . $separator . $eol;
    $body .= "Content-Type: application/octet-stream; name=\"" . $filename . "\"" . $eol;
    $body .= "Content-Transfer-Encoding: base64" . $eol;
    $body .= "Content-Disposition: attachment" . $eol;
    // $body .= $content . $eol;
    $body .= "--" . $separator . "--";

    //SEND Mail
    if (mail($mailto, $subject, $body, $headers)) {
        echo "mail send ... OK"; // or use booleans here
    } else {
        echo "mail send ... ERROR!";
        print_r( error_get_last() );
    }

?>
