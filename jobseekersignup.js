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
document.querySelector(".employerform button").addEventListener("click", async () => {
  document.querySelectorAll(".borderred").forEach((e) => {
    e.classList.remove("borderred");
  });
  for (let i = 1; i <= 10; i++) {
    if (document.querySelector(".curform").classList.contains("employerform" + i)) {
      let temp = parseInt(i) + 1;
      if (temp == 7) {
        break;
      }
      let cancon = true;
      if (parseInt(i) == 1) {
        if (document.querySelector("#email").value == "") {
          cancon = false;
          document.querySelector("#email").classList.add("borderred");
        }
        if (document.querySelector("#password").value == "") {
          cancon = false;
          document.querySelector("#password").classList.add("borderred");
        }
        if (document.querySelector("#cpassword").value == "") {
          cancon = false;
          document.querySelector("#cpassword").classList.add("borderred");
        }
        if (document.querySelector("#password").value != document.querySelector("#cpassword").value) {
          cancon = false;
          document.querySelector("#password").classList.add("borderred");
          document.querySelector("#cpassword").classList.add("borderred");
        }
      }
      if (parseInt(i) == 2) {
        const isok = await checkEmail();
        if (isok == false) {
          cancon = false;
          document.querySelector("#code").classList.add("borderred");
        }
      }
      if (parseInt(i) == 3) {
        if (document.querySelector("#name").value == "") {
          cancon = false;
          document.querySelector("#name").classList.add("borderred");
        }
        if (document.querySelector("#contact").value == "") {
          cancon = false;
          document.querySelector("#contact").classList.add("borderred");
        }
        if (document.querySelector("#country").value == "") {
          cancon = false;
          document.querySelector("#country").classList.add("borderred");
        }
      }
      if (parseInt(i) == 4) {
        if (document.querySelector("#occupation").value == "") {
          cancon = false;
          document.querySelector("#occupation").classList.add("borderred");
        }
        if (document.querySelector("#industry").value == "") {
          cancon = false;
          document.querySelector("#industry").classList.add("borderred");
        }
        if (document.querySelector("#workexperience").value == "") {
          cancon = false;
          document.querySelector("#workexperience").classList.add("borderred");
        }
        if (isNaN(document.querySelector("#workexperience").value) == true) {
          cancon = false;
          document.querySelector("#workexperience").classList.add("borderred");
        }
      }
      if (parseInt(i) == 5) {
        if (document.querySelector("#uploadcv").files.length == 0) {
          cancon = false;
          document.querySelector("#uploadcv").classList.add("borderred");
        }
        if (document.querySelector("#uploadpicture").files.length == 0) {
          cancon = false;
          document.querySelector("#uploadpicture").classList.add("borderred");
        }
      }
      if (cancon == true && parseInt(i) != 5) {
        let tempy = temp * 100;
        if (window.innerWidth < 1100) {
          tempy = temp * 80;
        }
        if (window.innerWidth < 600) {
          tempy = temp * 60;
        }
        document.querySelector(".employerstepnumber").innerHTML = "Step " + temp;
        document.querySelector(".greenline").style.width = tempy + "px";
        document.querySelector(".employerform" + temp).classList.add("curform");
        document.querySelector(".curform").classList.remove("curform");
        if (temp == 2) {
          await sendEmail();
        }
      }
      if (cancon == true && parseInt(i) == 5) {
        var file1 = document.querySelector("#uploadcv").files[0];
        var file2 = document.querySelector("#uploadpicture").files[0];
        var formData = new FormData();
        formData.append("files[]", file1);
        formData.append("files[]", file2);
        formData.append("email", document.querySelector("#email").value);
        formData.append("password", document.querySelector("#password").value);
        formData.append("name", document.querySelector("#name").value);
        formData.append("contact", document.querySelector("#contact").value);
        formData.append("country", document.querySelector("#country").value);
        formData.append("occupation", document.querySelector("#occupation").value);
        formData.append("industry", document.querySelector("#industry").value);
        formData.append("experience", document.querySelector("#workexperience").value);
        const uploadresp = await fetch("./uploadfile.php", {
          body: formData,
          method: "POST",
        });
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const res = await fetch("./checkcredentials.php?email=" + email + "&password=" + password);
        const resp = await res.text();
        if (resp == "1") {
          location.href = "./dashboard.php";
        }
        //const res = await uploadresp.text();
      }
      break;
    }
  }
});
async function sendEmail() {
  var dat = new FormData();
  dat.append("email", document.querySelector(".employerform #email").value);
  const resp = await fetch("./emailverification.php", {
    body: dat,
    method: "POST",
  });
  //const result = await resp.text();
  //console.log(result);
}
async function checkEmail() {
  const response = await fetch("./checkonetimecode.php?rand=" + document.querySelector("#code").value);
  const dat = await response.text();
  if (dat == "0") {
    return false;
  } else {
    return true;
  }
}
