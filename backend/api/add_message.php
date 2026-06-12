<?php

require_once "../config/database.php";

$content = trim($_POST["content"] ?? "");
$ownerToken = trim($_POST["ownerToken"] ?? "");

if ($content === "" || $ownerToken === "") {

    echo json_encode([
        "success" => false,
        "message" => "Brak wymaganych danych"
    ]);

    exit;

}

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

$sql = "
    INSERT INTO messages (
        content,
        owner_token
    )
    VALUES (?, ?)
";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    $content,
    $ownerToken
]);

echo json_encode([
    "success" => true
]);