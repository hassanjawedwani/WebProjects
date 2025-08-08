var myButton = document.querySelector("button");
myButton === null || myButton === void 0 ? void 0 : myButton.addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel) {
        if ((panel === null || panel === void 0 ? void 0 : panel.style.display) === "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }
    }
});
// const accordians = document.getElementsByClassName(".accordian");
// for (let i = 0; i < accordians.length; i++) {
// }
