const inputs = document.querySelectorAll(".controls input");

function handleInput() {
  console.log(this.value);
}

inputs.forEach((input) => input.addEventListener("click", handleInput));
inputs.forEach((input) => input.addEventListener("mousemove", handleInput));