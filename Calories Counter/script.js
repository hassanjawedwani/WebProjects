const budgetInput = document.getElementById("budget");
const form = document.getElementById("form");
const dropdown = document.getElementById("dropdown");
const addEntryBtn = document.getElementById("add-entry");

form.addEventListener("submit", submitHandle);
addEntryBtn.addEventListener("click", addEntryHandler);

function submitHandle(e) {
  e.preventDefault();
  const breakfastCaloriesNodes = document.querySelectorAll(
    '#breakfast input[type="number"]'
  );
  const lunchCaloriesNodes = document.querySelectorAll(
    '#lunch input[type="number"]'
  );
  const dinnerCaloriesNodes = document.querySelectorAll(
    '#dinner input[type="number"]'
  );
  const snacksCaloriesNodes = document.querySelectorAll(
    '#snacks input[type="number"]'
  );
  const exerciseCaloriesNodes = document.querySelectorAll(
    '#exercise input[type="number"]'
  );

  let breakfastCalories = 0;
  let lunchCalories = 0;
  let dinnerCalories = 0;
  let snacksCalories = 0;
  let exerciseCalories = 0;

  for (const node of breakfastCaloriesNodes) {
    breakfastCalories += changeToNumber(node.value);
  }
  for (const node of lunchCaloriesNodes) {
    lunchCalories += changeToNumber(node.value);
  }
  for (const node of dinnerCaloriesNodes) {
    dinnerCalories += changeToNumber(node.value);
  }
  for (const node of snacksCaloriesNodes) {
    snacksCalories += changeToNumber(node.value);
  }
  for (const node of exerciseCaloriesNodes) {
    exerciseCalories += changeToNumber(node.value);
  }

  const budget = changeToNumber(budgetInput.value);
  const consumedCalories = 
    breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const burnedCalories =
    exerciseCalories;
  console.log("budget", budget);
  console.log("consumed", consumedCalories);
  console.log("burned", burnedCalories);

}

function addEntryHandler() {
  const fieldsetId = dropdown.value;
  const fieldset = document.getElementById(fieldsetId);
  const inputContainer = fieldset.querySelector(".input-container");
  const entryNumber =
    document.querySelectorAll(`#${fieldsetId} input[type="text"]`).length + 1;
  console.log(entryNumber);
  const stringHTML = `
    <label for="${fieldsetId}-${entryNumber}-name">Entry ${entryNumber} Name<label>
    <input id="${fieldsetId}-${entryNumber}-name" type="text" class="block-full"/>
    <label for="${fieldsetId}-${entryNumber}-calories">Entry ${entryNumber} Calories<label>
    <input id="${fieldsetId}-${entryNumber}-calories" type="number" min="0" class="block-full" required/>
  `;
  inputContainer.insertAdjacentHTML("beforeend", stringHTML);
  console.log(inputContainer);
}

function changeToNumber(str) {
  return Number(str);
}
