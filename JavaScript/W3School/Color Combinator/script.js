document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".input");
  inputs.forEach(input => {
    function updateInputText(e) {
      document.querySelector(`.${this.id}-output`).textContent = e.target.value;

      const redValue = Number(document.querySelector(`.red-output`).textContent);
      const greenValue = Number(document.querySelector(`.green-output`).textContent);
      const blueValue = Number(document.querySelector(`.blue-output`).textContent);
      document.getElementById("combinated-color").style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    }
    input.addEventListener("input", updateInputText);
  });

})