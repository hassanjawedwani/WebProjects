const input = document.getElementById("number");
const checkBtn = document.getElementById("check-button");
const clearBtn = document.getElementById("clear-button");

const enterKeyHandler = (e) => {
  if (e.key === "Enter") {
    checkNumber();
  }
};

const checkNumber = () => {
  const inputValue = input.value;
  console.log(inputValue);
};

input.addEventListener("keydown", enterKeyHandler);
checkBtn.addEventListener("click", checkNumber);
clearBtn.addEventListener("click", () => {
  input.value = "";
});
