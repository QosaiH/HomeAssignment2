function shownavmobile() {
  const navmplay = document.getElementById("mobile");
  if (navmplay.style.display == "none" || navmplay.style.display == "") {
    navmplay.style.display = "flex";
  } else {
    navmplay.style.display = "none";
  }
}
