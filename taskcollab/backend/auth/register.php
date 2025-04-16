<?php
require_once '../db.php';
session_start();

$data = json_decode(file_get_contents("php://input"), true);

$name = trim($data['name']);
$email = trim($data['email']);
$password = $data['password'];
$role = 'user'; // default role

if (!$name || !$email || !$password) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields required']);
    exit;
}

$hashed = password_hash($password, PASSWORD_DEFAULT);

$stmt = $pdo->prepare("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)");
try {
    $stmt->execute([$name, $email, $hashed, $role]);
    echo json_encode(['success' => true]);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Email already exists']);
}
