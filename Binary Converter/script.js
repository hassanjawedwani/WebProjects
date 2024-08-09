const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-button");
const output = document.getElementById("output");

const getUserInput = () => {
  if (
    !numberInput.value ||
    parseInt(numberInput.value) < 0 ||
    isNaN(parseInt(numberInput.value))
  ) {
    alert("Enter a valid number greater than 0");
    return;
  }
};

convertBtn.addEventListener("click", getUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getUserInput();
  }
});
