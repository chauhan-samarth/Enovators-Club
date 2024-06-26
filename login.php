<!-- login.php -->

<?php
// Define your credentials array
$credentials = array(
    '784923' => "32589714",
    '158736' => "96480251",
    '407215' => "73954681",
    // Add all your credentials here
);

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the submitted login ID and password
    $loginID = $_POST['loginID'];
    $password = $_POST['password'];

    // Check if the credentials match
    if (isset($credentials[$loginID]) && $credentials[$loginID] === $password) {
        // Successful login, redirect to the appropriate page
        $redirectURL = "echus-stellarum/" . $loginID . "-" . $password . ".html";
        header("Location: $redirectURL");
        exit();
    } else {
        // Invalid credentials, redirect back to login page with an error message
        header("Location: index.php?error=invalid_credentials");
        exit();
    }
}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process login form submission
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Example validation (replace with your logic)
    if ($username === 'admin' && $password === 'password') {
        echo "Login successful!";
    } else {
        echo "Invalid username or password.";
    }
} else {
    echo "Method Not Allowed";
}
?>


