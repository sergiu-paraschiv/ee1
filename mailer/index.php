<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With, X-Auth-Token, content-type');

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    die;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    die;
}

$data = substr(var_export($_POST, true), 0, 3000);

$f = fopen('mails.log.txt', 'a+');

fwrite($f, '>>> ' . date('d-m-y H:i:s') . PHP_EOL);
fwrite($f, '>>> ' . $data  . PHP_EOL . PHP_EOL);

fclose($f);
