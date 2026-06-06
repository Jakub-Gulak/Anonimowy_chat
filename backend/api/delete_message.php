<?php

require_once "../config/database.php";

$id = $_POST["id"] ?? 0;

$sql = "DELETE FROM messages WHERE id = ?";

$stmt = $pdo->prepare($sql);

$stmt->execute([$id]);

echo json_encode([
    "success" => true
]);