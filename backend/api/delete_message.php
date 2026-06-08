<?php

require_once "../config/database.php";

$id = $_POST["id"] ?? 0;
$ownerToken = $_POST["ownerToken"] ?? "";
$isAdmin = $_POST["isAdmin"] ?? "false";

if ($isAdmin === "true") {

    $sql = "
        DELETE FROM messages
        WHERE id = ?
    ";

    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        $id
    ]);

}
else {

    $sql = "
        DELETE FROM messages
        WHERE id = ?
        AND owner_token = ?
    ";

    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        $id,
        $ownerToken
    ]);

}

echo json_encode([
    "success" => true
]);