const rollDiceBtn = document.getElementById("roll-dice-btn");
const dice = document.querySelectorAll(".dice div");
const rollsText = document.querySelectorAll(".round-text span")[0];
const roundText = document.querySelectorAll(".round-text span")[1];
const radioInputs = document.querySelectorAll(".score-options input");
const radioSpans = document.querySelectorAll(".score-options span");
const keepAboveSelectedBtn = document.getElementById("keep-above-selected-btn");
const scoreHistory = document.getElementById("score-history");
const totalScore = document.getElementById("total-score");
let diceArr = [];
let rolls = 0;
let round = 1;
let score = 0;

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
  arr.map((num) => {
    counts[num] ? counts[num]++ : (counts[num] = 1);
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

const resetOptions = () => {
  radioInputs.forEach((input) => {
    input.disabled = true;
    input.checked = false;
  });
  radioSpans.forEach((span) => {
    span.innerHTML = "";
  });
};

const checkFullHouse = (arr) => {
  const counts = {};
  arr.forEach((num) => {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  });
  if (Object.values(counts).includes(3) && Object.values(counts).includes(2)) {
    updateRadioOptions(2, 25);
  }
  else {
    updateRadioOptions(5, 0);
  }
};

const rollDiceHandler = () => {
  if (rolls === 3) {
    alert("Kindly select one option before moving to next round");
  } else {
    resetOptions();
    rollDice();
    rolls++;
    rollsText.textContent = rolls;
    getHighestDuplicates(diceArr);
    checkFullHouse(diceArr);
  }
};

const keepAboveSelectedHandler = (scoreValue, inputId) => {
  const selectedInput = [...radioInputs].find(
    (radio) => radio.checked === true
  );

  if (selectedInput) {
    score += Number(selectedInput.value);
    scoreHistory.innerHTML += `<li>${selectedInput.id} : ${selectedInput.value}`;
    totalScore.textContent = score;
    round++;
    rolls = 0;
    roundText.textContent = round;
    rollsText.textContent = rolls;
    if (round > 6) {
      alert(`your total score is ${score}, game over`);
      resetOptions();
      round = 1;
      roundText.textContent = round;
      rolls = 0;
      rollsText.textContent = rolls;
      score = 0;
      totalScore.textContent = score;
      dice.forEach((die) => (die.textContent = 0));
      diceArr = [];
      scoreHistory.innerHTML = ``;
    }
  } else {
    alert("please roll and select an option before submitting");
  }
};

rollDiceBtn.addEventListener("click", rollDiceHandler);
keepAboveSelectedBtn.addEventListener("click", keepAboveSelectedHandler);
resetOptions();
