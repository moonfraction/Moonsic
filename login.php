<?php

session_start();
include("db_connect.php");


if (isset($_POST['Username']) && isset($_POST['user_password'])) {
    $user_name = $_POST['Username'];
    $user_password = $_POST['user_password'];

    $query = "SELECT * FROM user WHERE user = '" . $user_name . "' AND password = '" . $user_password . "' limit 1";

    $result = mysqli_query($con, $query);

    if (mysqli_num_rows($result) == 1) {
        $_SESSION['user_name'] = $user_name;
        header("location: index.php");
        exit();
    } else {
        $_SESSION['error_message'] = 'Incorrect Username or Password';
    }
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moonsic Login</title>
    <link rel="icon" type="image/x-icon" href="Assets/moon.png">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <div class="left_bx1">
            <div class="login_content">
                <form method="post">
                    <h3>Login</h3>
                    <div class="login_card">
                        <label for="name">Name</label>
                        <input type="text" name="Username" placeholder="Enter your username. . . " required id="">
                    </div>
                    <div class="login_card">
                        <label for="password">Password</label>
                        <input type="password" name="user_password" placeholder="Enter password. . . " required id="">
                    </div>
                    <input type="submit" value="Login" class="submit">
                    <div class="check">
                        <input type="checkbox" name="" id=""><span>Remember me</span>
                    </div>
                    <p>Don't have an account yet ?<a href="signup.html">Sign Up</a></p>
                </form>
            </div>
        </div>
        <div class="right_bx1">
            <img src="Assets/login_bg.png" alt="website_preview" width="85%" class="laptop">
            <?php
            echo '<h3 id="errorMessage">' . $_SESSION['error_message'] . '</h3>';
            echo '<script>
            setTimeout(function(){
                document.getElementById("errorMessage").style.display = "none";
                }, 3000); // 3000 milliseconds (1 seconds)
          </script>';
            // unset($_SESSION['error_message']);
            $_SESSION['error_message'] = null;
            ?>
            <!-- <h3>Incorrect Password</h3> -->
        </div>
    </header>



    <script src="app.js"></script>
    <script src="https://kit.fontawesome.com/54b6994b08.js" crossorigin="anonymous"></script>
</body>

</html>