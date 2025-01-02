const inputs = document.querySelectorAll('input[type = "checkbox"]');

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    const inputs = document.querySelectorAll('input[type = "checkbox"]');
    inputs.forEach(input => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (input.checked) {
        label.style.textDecoration = "line-through"
      } else {
        label.style.textDecoration = "none";
      }
    });
  });
});