const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-button");
const output = document.getElementById("output");

const decimalToBinary = (input) => {
  if (input === 0) {
    return "0";
  }
  const remainders = [];
  while (input > 0) {
    remainders.push(input % 2);
    input = Math.floor(input / 2);
  }
  return remainders.reverse().join("");
}

const getUserInput = () => {
  if (
    !numberInput.value ||
    parseInt(numberInput.value) < 0 ||
    isNaN(parseInt(numberInput.value))
  ) {
    alert("Enter a valid number greater than 0");
    return;
  }
  output.innerText = decimalToBinary(parseInt(numberInput.value));
};

convertBtn.addEventListener("click", getUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getUserInput();
  }
});
