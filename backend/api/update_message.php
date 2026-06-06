<?php

require_once "../config/database.php";

$id = $_POST["id"] ?? 0;
$content = $_POST["content"] ?? "";

$sql = "UPDATE messages SET content = ? WHERE id = ?";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    $content,
    $id
]);

echo json_encode([
    "success" => true
]);