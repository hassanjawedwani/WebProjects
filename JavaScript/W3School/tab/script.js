function openTab(e, countryName) {
    var tabs = document.getElementsByClassName("tabContent");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    var btns = document.getElementsByClassName("tab-btn");
    Array.from(btns).forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            Array.from(btns).forEach(function (btn) {
                btn.classList.remove("active");
            });
            btn.classList.add("active");
        });
    });
    document.getElementById(countryName).style.display = "block";
    // e.target.classList.add("active")
}
