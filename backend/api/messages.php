<?php

require_once "../config/database.php";

// Pobranie wszystkich wiadomosci
$sql = "SELECT * FROM messages ORDER BY created_at DESC";

$stmt = $pdo->query($sql);

$messages = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($messages);