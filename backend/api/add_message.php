<?php

require_once "../config/database.php";

$content = $_POST["content"] ?? "";
$ownerToken = $_POST["ownerToken"] ?? "";

$badWords = [
    "kurwa",
    "idiota",
    "ciota",
    "chuj",
    "cwel",
    "debil",
    "frajer"
];

$content = str_ireplace(
    $badWords,
    "*****",
    $content
);

$sql = "INSERT INTO messages (content, owner_token)
        VALUES (?, ?)";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    $content,
    $ownerToken
]);

echo json_encode([
    "success" => true
]);