const rollDiceBtn = document.getElementById("roll-dice-btn");
const dice = document.querySelectorAll(".dice div");
const rollsText = document.querySelectorAll(".round-text span")[0];
const roundText = document.querySelectorAll(".round-text span")[1];
const radioInputs = document.querySelectorAll(".score-options input");
const radioSpans = document.querySelectorAll(".score-options span");
let diceArr = [];
let rolls = 0;

const rollDice = () => {
  diceArr = [];
  for (let i = 0; i < 5; i++) {
    diceArr.push(Math.ceil(Math.random() * 6));
  }
  dice.forEach((die, index) => (die.textContent = diceArr[index]));
};

const updateRadioOptions = (index, score) => {
  radioInputs[index].disabled = false;
  radioInputs[index].value = score;
  radioSpans[index].textContent = ` , score = ${score}`;
};

const getHighestDuplicates = (arr) => {
  const counts = {};
  arr.map(num => {
    counts[num] ? counts[num]++ : counts[num] = 1;
  });
  let highest = 0;
  for (const num in counts) {
    if (counts[num] >= 3 && counts[num] > highest) {
      highest = counts[num];
    }
    if (counts[num] >= 4 && counts[num] > highest) {
      highest = counts[num];
    }
  }
  const sum = arr.reduce((sum, num) => sum + num, 0);
  if (highest >= 4) {
    updateRadioOptions(1, sum);
  }
  if (highest >= 3) {
    updateRadioOptions(0, sum);
  }
  updateRadioOptions(5, 0);
};

const rollDiceHandler = () => {
  if (rolls === 3) {
    alert("Kindly select one option before moving to next round");
  } else {
    rollDice();
    rolls++;
    rollsText.textContent = rolls;
    getHighestDuplicates(diceArr);
  }
};

rollDiceBtn.addEventListener("click", rollDiceHandler);
