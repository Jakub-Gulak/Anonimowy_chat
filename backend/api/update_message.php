<?php

require_once "../config/database.php";

$id = $_POST["id"] ?? 0;
$content = $_POST["content"] ?? "";
$ownerToken = $_POST["ownerToken"] ?? "";
$isAdmin = $_POST["isAdmin"] ?? "false";

if ($isAdmin === "true") {

    $sql = "
        UPDATE messages
        SET content = ?
        WHERE id = ?
    ";

    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        $content,
        $id
    ]);

}
else {

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

}

echo json_encode([
    "success" => true
]);