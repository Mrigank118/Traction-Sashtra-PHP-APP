<?php
session_start();

function isLoggedIn() {
    return isset($_SESSION['user_id']);
}

function isAdmin() {
    return $_SESSION['role'] === 'admin';
}

function checkAccess($redirect = true) {
    if (!isLoggedIn() && $redirect) {
        header("Location: /public/login.html");
        exit();
    }
}
?>
