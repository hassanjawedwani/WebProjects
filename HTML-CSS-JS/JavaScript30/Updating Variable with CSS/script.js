const inputs = document.querySelectorAll(".controls input");

function handleInput() {
  const suffix = this.dataset.sizing || "";
  console.log(document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix));
}

inputs.forEach((input) => input.addEventListener("click", handleInput));
inputs.forEach((input) => input.addEventListener("mousemove", handleInput));