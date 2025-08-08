const myButton = document.querySelector<HTMLButtonElement>("button");

myButton?.addEventListener("click", function() {
	this.classList.toggle("active");
	const panel = this.nextElementSibling as HTMLElement | null;
	if (panel) {
		if (panel?.style.display === "block") {
		panel.style.display = "none";
	} else {
		panel.style.display = "block";
	}
	}
})



// const accordians = document.getElementsByClassName(".accordian");

// for (let i = 0; i < accordians.length; i++) {

// }