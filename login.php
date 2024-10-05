<!DOCTYPE html>
<html lang="en">
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
    <div class="modalouter">
      <div class="modalinner">
        <h1>Who are you?</h1>
        <div>
          <a><img src="./assets/employee.svg" alt="Image of employee"><span>Job Seeker</span></a>
          <a><img src="./assets/employer.svg" alt="Image of employer"><span>Employer</span></a>
        </div>
      </div>
    </div>
    <main class="employer">
      <div>
        <div class="employerform">
          <img src="./assets/logo.png" alt="Logo image">
          <div class="employerstep logindets">
            <span>Account Login</span>
          </div>
          <div class="employerforms">
            <form class="employerform curform employerform1" action="">
              <label for="email">Email</label>
              <input id="email" name="email" type="text">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" type="text">
            </form>
            <button>Next</button>
          </div>
          <span class="haveaccount">Don't have an account? <span>Sign up</span></span>
        </div>
        <div class="testimonials">
          <h2>What our Jobseekers Said</h2>
          <div class="testimonialslide">
            <div class="testimonialcur testimonial1">
              <img src="./assets/apostrophe.svg" alt="Apostrophe image">
              <p>"When it comes to finding employees, look no further HireMe has you covered. They always find the best people for the job."</p>
              <h3>Eric Watson</h3>
              <h4>CEO of Brunsick Enterprises</h4>
            </div>
            <div class="testimonial2">
              <img src="./assets/apostrophe.svg" alt="Apostrophe image">
              <p>"Your ideal employee is always waiting at HireMe. Don't hesitate, they are the best."</p>
              <h3>James Miller</h3>
              <h4>Manager of Metro Supermarkets</h4>
            </div>
            <div class="testimonial3">
              <img src="./assets/apostrophe.svg" alt="Apostrophe image">
              <p>"HireMe is the one and only employee finder. They will be a perfect fit for you."</p>
              <h3>Dimitri Papadopoulos</h3>
              <h4>CEO of Papadopoulos Enterprises</h4>
            </div>
          </div>
          <div class="testimonialbuttons">
            <button class="testimoniall"><img src="./assets/larrow.svg" alt="Left Arrow"></button>
            <button class="testimonialr"><img src="./assets/rarrow.svg" alt="Right Arrow"></button>
          </div>
          <div class="testimonialwhiterec">
            <h3>Get the right job at the right place by applying now</h3>
            <p>Experience the true prowess of running a business with the full force of HireMe backing you.</p>
            <img class="testimonialpeopleimg" src="./assets/people.png" alt="People image">
            <div class="testimonialstar"><img src="./assets/spark.svg" alt="Spark image"></div>
          </div>
        </div>
      </div>
    </main>
  </body>
  <script src="./login.js"></script>
</html>
