window.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modalouter")) {
    document.querySelector(".modalouter").style.display = "none";
  }
});
document.querySelectorAll(".haveaccount span").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".modalouter").style.display = "block";
  });
});
document.querySelector(".employerforms button").addEventListener("click", async () => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const res = await fetch("./checkcredentials.php?email=" + email + "&password=" + password);
  const resp = await res.text();
  if (resp == "1") {
    location.href = "./dashboard.php";
  }
});
document.querySelector(".testimonialr").addEventListener("click", () => {
  let seen = 0;
  document.querySelectorAll(".testimonialslide > div").forEach((e) => {
    if (e.classList.contains("testimonialcur") && seen == 0) {
      seen = 1;
      for (let i = 1; i <= 10; i++) {
        if (e.classList.contains("testimonial" + i)) {
          let temp = parseInt(i) + 1;
          if (temp == 4) {
            temp = 1;
          }
          document.querySelector(".testimonial" + temp).classList.add("testimonialcur");
          e.classList.remove("testimonialcur");
          break;
        }
      }
    }
  });
});
document.querySelector(".testimoniall").addEventListener("click", () => {
  let seen = 0;
  document.querySelectorAll(".testimonialslide > div").forEach((e) => {
    if (e.classList.contains("testimonialcur") && seen == 0) {
      seen = 1;
      for (let i = 1; i <= 10; i++) {
        if (e.classList.contains("testimonial" + i)) {
          let temp = parseInt(i) - 1;
          if (temp == 0) {
            temp = 3;
          }
          document.querySelector(".testimonial" + temp).classList.add("testimonialcur");
          e.classList.remove("testimonialcur");
          break;
        }
      }
    }
  });
});
