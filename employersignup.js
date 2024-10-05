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
      if (temp == 8) {
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
        if (document.querySelector("#country").value == "") {
          cancon = false;
          document.querySelector("#country").classList.add("borderred");
        }
        if (document.querySelector("#phonenumber").value == "") {
          cancon = false;
          document.querySelector("#phonenumber").classList.add("borderred");
        }
        if (document.querySelector("#address").value == "") {
          cancon = false;
          document.querySelector("#address").classList.add("borderred");
        }
      }
      if (parseInt(i) == 4) {
        if (document.querySelector("#company").value == "") {
          cancon = false;
          document.querySelector("#company").classList.add("borderred");
        }
        if (document.querySelector("#companyaddress").value == "") {
          cancon = false;
          document.querySelector("#companyaddress").classList.add("borderred");
        }
        if (document.querySelector("#industry").value == "") {
          cancon = false;
          document.querySelector("#industry").classList.add("borderred");
        }
      }
      if (parseInt(i) == 5) {
        if (document.querySelector("#aboutcompany").value == "") {
          cancon = false;
          document.querySelector("#aboutcompany").classList.add("borderred");
        }
      }
      if (parseInt(i) == 6) {
        if (document.querySelector("#aboutemployee").value == "") {
          cancon = false;
          document.querySelector("#aboutemployee").classList.add("borderred");
        }
      }
      if (cancon == true && parseInt(i) != 6) {
        let tempy = temp * 85;
        if (window.innerWidth < 1100) {
          tempy = temp * 67;
        }
        if (window.innerWidth < 600) {
          tempy = temp * 50;
        }
        document.querySelector(".employerstepnumber").innerHTML = "Step " + temp;
        document.querySelector(".greenline").style.width = tempy + "px";
        document.querySelector(".employerform" + temp).classList.add("curform");
        document.querySelector(".curform").classList.remove("curform");
        if (temp == 2) {
          await sendEmail();
        }
      }
      if (cancon == true && parseInt(i) == 6) {
        var formData = new FormData();
        formData.append("email", document.querySelector("#email").value);
        formData.append("password", document.querySelector("#password").value);
        formData.append("country", document.querySelector("#country").value);
        formData.append("phonenumber", document.querySelector("#phonenumber").value);
        formData.append("address", document.querySelector("#address").value);
        formData.append("company", document.querySelector("#company").value);
        formData.append("companyaddress", document.querySelector("#companyaddress").value);
        formData.append("industry", document.querySelector("#industry").value);
        formData.append("aboutcompany", document.querySelector("#aboutcompany").value);
        formData.append("aboutemployee", document.querySelector("#aboutemployee").value);
        console.log(formData);
        const uploadresp = await fetch("./uploademployer.php", {
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
