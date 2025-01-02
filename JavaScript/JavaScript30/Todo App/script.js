const inputs = document.querySelectorAll('input[type = "checkbox"]');

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    const inputs = document.querySelectorAll('input[type = "checkbox"]');
    console.log(inputs);
  });
});
