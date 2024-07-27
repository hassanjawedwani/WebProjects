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

const weapons = [
  {
    name: "stick",
    damage: 10,
  },
  {
    name: "hammer",
    damage: 20,
  },
  {
    name: "knife",
    damage: 30,
  },
  {
    name: "sword",
    damage: 40,
  },
];

const inventory = ["stick"];

const monsters = {
  slime: {
    name: "slime",
    health: 100,
    damage: 10
  },
}

const locations = {
  store: {
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button function": [buyHealth, buyWeapon, goTown],
    text: "You enter the store",
  },
  town: {
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button function": [goStore, goCave, fightDragon],
    text: `You are in the town square. You see a sign that says "Store".`,
  },
  cave: {
    "button text": ["Fight Slime", "Fight fanged beast", "Go to town square"],
    "button function": [fightSlime, fightFanged, goTown],
    text: `You enter the cave. You see some monsters.`,
  },
};

const updateLocation = (location) => {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button function"][0];
  button2.onclick = location["button function"][1];
  button3.onclick = location["button function"][2];
  messageText.innerText = location.text;
};

button1.onclick = goStore;
button2.onclick = goCave;

function goStore() {
  updateLocation(locations["store"]);
}

// store buttons functionalities

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    goldText.innerText = gold;
    health += 10;
    healthText.innerText = health;
  } else {
    messageText.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (gold >= 30) {
    if (inventory.length < 4) {
      const newWeapon = weapons[inventory.length].name;
      inventory.push(newWeapon);
      messageText.innerText = `You purchased a new "${newWeapon}" weapon.\nNow you have ${inventory} in your inventory.`;
      gold -= 30;
      goldText.innerText = gold;
    } else {
      messageText.innerText = `You already have the most powerful "sword" weapon.`;
    }
  } else {
    messageText.innerText =
      "You don't have gold to buy a weapon.\nKill dragons and earn gold.";
  }
}

function goTown() {
  updateLocation(locations["town"]);
}

// cave buttons functionalities

function goCave() {
  updateLocation(locations["cave"]);
}

function fightSlime() {
  
}

function fightFanged() {

}

// fight Dragon buttons functionalities

function fightDragon() {}
