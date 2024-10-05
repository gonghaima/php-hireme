<!DOCTYPE html>
<html lang="en">
  <?php
    session_start();
  ?>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>HireMe</title>
    <link rel="icon" type="image/x-icon" href="./assets/logo.svg">
    <meta name="title" content="HireMe" />
    <meta name="description" content="HireMe, where legends are forged" />
    <meta name="twitter:site" content="HireMe, where legends are forged" />
    <meta name="og:title" content="HireMe" />
    <meta name="og:description" content="HireMe, where legends are forged" />
    <meta name="og:type" content="website" />
    <meta name="og:site_name" content="HireMe" />
    <meta name="og:url" content="" />
    <meta name="og:image" content="./assets/logo.svg" />
    <meta name="og:image:alt" content="HireMe" />
    <meta name="og:image:width" content="1073" />
    <meta name="og:image:height" content="806" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preload" fetchpriority="high" as="image" href="./assets/logo.svg" type="image/webp" />  
    <link type="text/css" rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main class="dashboard">
      <img src="./assets/logo.png" alt="">
      <div class="dashboardmain">
        <div class="dashboardl">
          <img src="./assets/profileimage.svg" alt="">
          <?php
            if($_SESSION["type"]=="1"){
              echo <<< "CDATA"
              <a href="">View Candidates</a>
              <a href="">Edit requirements</a>
              <a href="">View Messages</a>
              <a href="./logout.php">Logout</a>
              CDATA;
            }
            else{
              echo <<< "CDATA"
              <a href="">Edit profile</a>
              <a href="">View Messages</a>
              <a href="./logout.php">Logout</a>
              CDATA;
            }
          ?>
        </div>
        <div class="dashboardr">
          <h1><?php if($_SESSION["type"]=="1"){echo $_SESSION["company"];}else{echo $_SESSION["name"];}?></h1>
          <h2><?php echo $_SESSION["industry"]?></h2>
          <div class="greyunderline"></div>
          <?php
            if($_SESSION["type"]=="1"){
              echo <<< "CDATA"
              <div>
                <span>Email:</span>
                <span>{$_SESSION["email"]}</span>
              </div>
              <div>
                <span>Country:</span>
                <span>{$_SESSION["country"]}</span>
              </div>
              <div>
                <span>Phone Number:</span>
                <span>{$_SESSION["phonenumber"]}</span>
              </div>
              <div>
                <span>About My Company:</span>
                <span>{$_SESSION["aboutcompany"]}</span>
              </div>
              <div>
                <span>Ideal Employee:</span>
                <span>{$_SESSION["idealemployee"]}</span>
              </div>
              CDATA;
            }
            else{
              echo <<< "CDATA"
              <div>
                <span>Email:</span>
                <span>{$_SESSION["email"]}</span>
              </div>
              <div>
                <span>Country:</span>
                <span>{$_SESSION["country"]}</span>
              </div>
              <div>
                <span>Phone Number:</span>
                <span>{$_SESSION["contact"]}</span>
              </div>
              <div>
                <span>Occupation:</span>
                <span>{$_SESSION["occupation"]}</span>
              </div>
              <div>
                <span>Experience:</span>
                <span>{$_SESSION["experience"]}</span>
              </div>
              CDATA;
            }
          ?>
        </div>
      </div>
    </main>
  </body>
  <script src="./login.js"></script>
</html>
