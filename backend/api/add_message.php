<?php

require_once "../config/database.php";

// Pobrana wiadomosc z formularza
$content = $_POST["content"] ?? "";

$sql = "INSERT INTO messages (content, owner_token) VALUES (?, ?)";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    $content,
    uniqid()
]);

echo json_encode([
    "success" => true
]);