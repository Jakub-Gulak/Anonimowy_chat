<?php

require_once "../config/database.php";

$username = $_POST["username"] ?? "";
$password = $_POST["password"] ?? "";

$sql = "SELECT * FROM admins WHERE username = ?";

$stmt = $pdo->prepare($sql);

$stmt->execute([$username]);

$admin = $stmt->fetch(PDO::FETCH_ASSOC);

if (
    $admin &&
    password_verify($password, $admin["password"])
) {

    echo json_encode([
        "success" => true
    ]);

}
else {

    echo json_encode([
        "success" => false
    ]);

}