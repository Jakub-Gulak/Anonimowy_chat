<?php

$host = "mysql";
$dbname = "chat_db";
$user = "root";
$password = "root123";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname",
        $user,
        $password
    );
}
catch(PDOException $e) {
    die("Blad polaczenia: " . $e->getMessage());
}