<?php

session_start();

include ("db_connect.php");

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $username = $_POST['Username'];
    $email = $_POST['Email'];
    $password = $_POST['user_password'];
    $re_password = $_POST['user_re_password'];

    if(!empty($username) && !empty($email) && !empty($password) && !empty($re_password) && !is_numeric($username)){
        if($password === $re_password){
            $sql = "INSERT INTO user (user, email, password) VALUES ('$username', '$email', '$password')";
            $result = mysqli_query($con, $sql);
            if($result){
                header("location: login.php");
            }
            else{
                $_SESSION['error_message'] = 'something went wrong. Please try again later.';
            }
        }
        else{
            $_SESSION['error_message'] = 'Password does not match.';
        }
    }
    else{
        $_SESSION['error_message'] = 'Please fill all the fields.';
    }

}


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moonsic SignUp</title>
    <link rel="icon" type="image/x-icon" href="Assets/moon.png">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="left_bx1">
            <div class="login_content">
                <form method="post">
                    <h3>SignUp</h3>
                    <div class="login_card">
                        <label for="name">Name</label>
                        <input type="text" name="Username" placeholder="Enter your username. . . " id="">
                    </div>
                    <div class="login_card">
                        <label for="email">Email</label>
                        <input type="email" name="Email" placeholder="Enter your email address. . . " id="">
                    </div>
                    <div class="login_card">
                        <label for="password">Password</label>
                        <input type="password" name="user_password" placeholder="Enter password. . . "  id="">
                    </div>
                    <div class="login_card">
                        <label for="re-password">Re-Password</label>
                        <input type="re-password" name="user_re_password" placeholder="Re-Enter password. . . " id="">
                    </div>
                    <input type="submit" value="Sign Up" class="submit">
                    <div class="check">
                        <input type="checkbox" name="" id=""><span>Remember me</span>
                    </div>
                    <p>Arleady have an account! <a href="login.html">Login</a></p>
                </form>
            </div>
        </div>
        <div class="right_bx1">
            <img src="Assets/login_bg.png" alt="website_preview" width="85%" class="laptop">
            <!-- <h3>Incorrect Password</h3> -->
            <?php
                if(isset($_SESSION['error_message'])){
                    echo '<h3 id="errorMessage">' . $_SESSION['error_message'] . '</h3>';
                    echo '<script>
            setTimeout(function(){
                document.getElementById("errorMessage").style.display = "none";
                }, 3000); // 3000 milliseconds (1 seconds)
          </script>';
                    // unset($_SESSION['error_message']);
                    $_SESSION['error_message'] = null;
                }
            ?>
        </div>
    </header>


    
    <script src="app.js"></script>
    <script src="https://kit.fontawesome.com/54b6994b08.js" crossorigin="anonymous"></script>
</body>
</html>