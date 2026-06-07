<?php

require_once "../config/database.php";

$id = $_POST["id"] ?? 0;
$content = $_POST["content"] ?? "";
$ownerToken = $_POST["ownerToken"] ?? "";

$sql = "
    UPDATE messages
    SET content = ?
    WHERE id = ?
    AND owner_token = ?
";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    $content,
    $id,
    $ownerToken
]);

echo json_encode([
    "success" => true
]);