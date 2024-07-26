let xp = 0;
let health = 100;
let gold = 50;

const xpText = document.getElementById("xp-text");
const healthText = document.getElementById("health-text");
const goldText = document.getElementById("gold-text");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const messageText = document.getElementById("message-text");

const locations = {
  store: {
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    text: "You enter the store",
  },
  cave: {
    "button text": ["Fight Slime", "Fight fanged beast", "Go to town square"],
    text: "You enter the cave. You see some monsters.",
  },
};

const updateLocation = (location) => {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  messageText.innerText = location.text;
};

button1.onclick = goStore;

function goStore() {
  updateLocation(locations["store"]);
};