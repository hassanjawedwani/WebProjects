const rollDiceBtn = document.getElementById("roll-dice-btn");
const dice = document.querySelectorAll(".dice div");
const rollsText = document.querySelectorAll(".round-text span")[0];
const roundText = document.querySelectorAll(".round-text span")[1];
let diceArr = [];
let rolls = 0;

const rollDice = () => {
  diceArr = [];
  for (let i = 0; i < 5; i++) {
    diceArr.push(Math.ceil(Math.random() * 6));
  }
  dice.forEach((die, index) => (die.textContent = diceArr[index]));
};

const rollDiceHandler = () => {
  if (rolls === 3) {
    alert("Kindly select one option before moving to next round");
  } else {
    rollDice();
    rolls++;
    rollsText.textContent = rolls;
  }
};

rollDiceBtn.addEventListener("click", rollDiceHandler);
