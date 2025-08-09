function openTab(e, countryName) {

	
	const tabs = document.getElementsByClassName("tabContent");
	
	for (let i = 0; i < tabs.length; i++) {
		tabs[i].style.display = "none";
	}
	
  const btns = document.getElementsByClassName("tab-btn");

  Array.from(btns).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      Array.from(btns).forEach((btn) => {
        btn.classList.remove("active");
      });
      btn.classList.add("active");
    });
  });


	document.getElementById(countryName).style.display = "block";
	// e.target.classList.add("active")

 
}
