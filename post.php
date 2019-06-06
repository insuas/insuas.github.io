<?php

$usuario = $_POST['usuario'];
$pass = $_POST['pass'];

if ($usuario === '' || $pass === ''){
  json_encode("llena todos los campos");
}else{
  json_encode('Correcto: <br>Usuario:'.$usuario.'<br>Pass:'.$pass);
}