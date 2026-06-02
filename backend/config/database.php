<?php

$host = "localhost";
$dbname = "chat_db";
$user = "root";
$password = "root123";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname",
        $user,
        $password
    );

    echo "Polaczono z baza";
}
catch(PDOException $e) {
    echo "Blad: " . $e->getMessage();
}