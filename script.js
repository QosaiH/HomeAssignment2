const button = document.querySelector("button");
const navmplay = document.getElementById("mobile");
button.addEventListener("click", () => {
  if (navmplay.style.display == "none" || navmplay.style.display == "") {
    navmplay.style.display = "flex";
  } else {
    navmplay.style.display = "none";
  }
});
