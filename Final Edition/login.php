<?php
//Giving access if the credentail matched or display errors message if it does not
if(isset($_POST["checkpass"])) {
      
       $login=$_POST['username'];
       $password=$_POST['password'];
           if(check_pass($login, $password)) { //check_pass returns 0 or 1    
			   header("Location: admin.html");
           }
           else {
            echo '<script language="javascript">';
            echo 'alert("Invalid Credentials. Try Again")';
            echo '</script>';
           }
       }
?>
<html>
<head>
    <!--Login Form -->
<title>Login page</title>
<link rel="stylesheet" href="user.css">
<link rel="stylesheet" href="login.css">

</head>
<body>

<form id='login' method='post'>


<div class="imgcontainer">
    <img src="FPULogo.png" alt="Avatar" class="avatar">
  </div>

  <div class="container">
    <label for="username"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="username" required>
       <br>
    <label for="password"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required>
        <hr>
        <a href="main.html">
       <input type="button" value="Go Back" />
        </a>
		<input type='submit' name='checkpass' value='Submit' />

    <label>
      


</form>
<?php
      
       //Comparing the user's input with the credentail inside the cred.txt file
       function check_pass($login, $password) {
          
       if(!$fh = fopen("cred.txt", "r")) {die("<P>Could Not Open Password File");} //open file
       $match = 0;
        
       while(!feof($fh)) {
               $line = fgets($fh, 4096);
               $user_pass = explode(",", $line); //splits line based on delimeter
               if($user_pass[0] == $login) {
                   if(rtrim($user_pass[1]) == $password) {
                       $match = 1;
                       break;
                   }
               }
           }
          
           if($match) {
               return 1;
           }
           else {
               return 0;
           }  
           fclose($fh);
       }
      
?>
</body>
</html>