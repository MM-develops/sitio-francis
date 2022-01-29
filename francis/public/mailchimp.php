<h1>Mailchimp</h1>
<?php 

$curl = curl_init();
$apiKey = "7d43b8fa6c081d4ddfcadc58b45cd069-us18";
$dataCenter = substr($apiKey, strpos($apiKey, '-')+1);
$url = "https://" . $dataCenter . "us18.api.mailchimp.com/3.0/ping";
curl_setopt($curl, CURLOPT_URL, "https://us18.api.mailchimp.com/3.0/ping");
curl_setopt($curl, CURLOPT_USERPWD, 'user:'.$apiKey);
curl_exec($curl);
curl_close($curl);

?>