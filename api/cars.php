<?php
header("Access-Control-Allow-Origin: *");

$cars = array(
	array(
      "id" => 1,
      "mark" => "Opel",  
      "model" => "Astra",
      "year" => 1991,
      "maxSpeed" => 250,
      "isAutomatic" => true,
      "engine" => "I4", 
      "numberOfDoors" => 5
	),
  array(
    "id" => 2,
      "mark" => "Opel",  
      "model" => "Kadett",
      "year" => 1937,
      "maxSpeed" => 200,
      "isAutomatic" => false,
      "engine" => "1,074 cc sv I4", 
      "numberOfDoors" => 5
  ),
  array(
    "id" => 3,
      "mark" => "Ford",  
      "model" => "Focus",
      "year" => 1998,
      "maxSpeed" => 245,
      "isAutomatic" => false,
      "engine" => "5.0 L Ford Coyote V8", 
      "numberOfDoors" => 5
  )
);

echo json_encode($cars);

