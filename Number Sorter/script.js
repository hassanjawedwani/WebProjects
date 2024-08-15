const sortButton = document.getElementById("sort-button");

const updateUI = (arr) => {
  arr.forEach((number, id) => {
    const element = document.getElementById(`output-value-${id}`);
    element.innerText = number;
  });
}

const sortInputValues = (e) => {
  e.preventDefault();
  const inputValues = [...document.getElementsByClassName("input-values")].map(input => Number(input.value));
  updateUI(inputValues);
}

sortButton.addEventListener("click", sortInputValues);