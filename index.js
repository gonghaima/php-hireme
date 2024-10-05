document.querySelectorAll(".navmen a").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelectorAll(".selecteda").forEach((e) => {
      e.classList.remove("selecteda");
    });
    e.classList.add("selecteda");
  });
});
window.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modalouter")) {
    document.querySelector(".modalouter").style.display = "none";
  }
});
document.querySelectorAll(".clickbuty").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".modalouter").style.display = "block";
  });
});

document.getElementById("nav-icon4").onclick = function () {
  if (document.getElementById("nav-icon4").classList.contains("open")) {
    document.getElementById("nav-icon4").classList.remove("open");
    document.getElementById("nav").classList.remove("open");
  } else {
    document.getElementById("nav-icon4").classList.add("open");
    document.getElementById("nav").classList.add("open");
  }
};
