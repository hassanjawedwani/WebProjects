document.addEventListener('DOMContentLoaded', function () {
  fetch("navbar.html")
    .then(response => response.text())
    .then(result => {
      document.getElementById("header").innerHTML = result;
    });
});