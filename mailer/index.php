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

$data = json_decode(file_get_contents('php://input'), true);

foreach($data as $k => $v) {
  $data[$k] = substr($v, 0, 3000);
}

$data = array_values($data);
array_unshift($data, date('d-m-y H:i:s'));

$f = fopen('mails.log.csv', 'a+');

fputcsv($f, $data);

fclose($f);
