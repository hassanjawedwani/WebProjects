let xp = 0;
let health = 100;
let gold = 850;
let isShowMonsterStats = false;
let monsterHealth;
let currentMonster;

const xpText = document.getElementById("xp-text");
const healthText = document.getElementById("health-text");
const goldText = document.getElementById("gold-text");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const messageText = document.getElementById("message-text");
const button3 = document.getElementById("button3");
const monsterStats = document.getElementById("monster-stats");
const monsterNameText = document.getElementById("monster-name");
const monsterHealthText = document.getElementById("monster-health");

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

let inventory = ["stick"];

const monsters = {
  slime: {
    name: "slime",
    health: 100,
    damage: 10,
  },
  fange: {
    name: "fange",
    health: 100,
    damage: 20,
  },
  dragon: {
    name: "dragon",
    health: 100,
    damage: 30,
  },
};

const locations = {
  store: {
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button function": [buyHealth, buyWeapon, goTown],
    text: "You enter the store",
    isShowMonsterStats: false,
  },
  town: {
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button function": [goStore, goCave, fightDragon],
    text: `You are in the town square. You see a sign that says "Store".`,
    isShowMonsterStats: false,
  },
  cave: {
    "button text": ["Fight Slime", "Fight fanged beast", "Go to town square"],
    "button function": [fightSlime, fightFanged, goTown],
    text: `You enter the cave. You see some monsters.`,
    isShowMonsterStats: false,
  },
  slime: {
    "button text": ["Attack", "Dodge", "Run"],
    "button function": [attack, dodge, goTown],
    text: `You are fighting Slime monster.`,
    isShowMonsterStats: true,
  },
  fange: {
    "button text": ["Attack", "Dodge", "Run"],
    "button function": [attack, dodge, goTown],
    text: `You are fighting fange monster.`,
    isShowMonsterStats: true,
  },
  dragon: {
    "button text": ["Attack", "Dodge", "Run"],
    "button function": [attack, dodge, goTown],
    text: `You are fighting dragon monster.`,
    isShowMonsterStats: true,
  },
  lose: {
    "button text": ["restart", "restart", "restart"],
    "button function": [restart, restart, restart],
    text: `wanna play again?`,
    isShowMonsterStats: false,
  },
  win: {
    "button text": ["Go to town", "Go to town", "Go to town"],
    "button function": [goTown, goTown, goTown],
    text: `Now defeat other monsters to win a game.`,
    isShowMonsterStats: false,
  },
  winGame: {
    "button text": ["Play Again", "Play Again", "Play Again"],
    "button function": [restart, restart, restart],
    text: `You won the game\nwanna play again?`,
    isShowMonsterStats: false,
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
  isShowMonsterStats = location.isShowMonsterStats;
  isShowMonsterStats
    ? monsterStats.classList.remove("hide")
    : monsterStats.classList.add("hide");
};

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

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

function updateMonsterStats(monster) {
  monsterNameText.innerText = monster.name;
  monsterHealthText.innerText = monster.health;
}

function fightSlime() {
  const monsterName = "slime";
  updateLocation(locations[monsterName]);
  monsterHealth = monsters[monsterName].health;
  currentMonster = monsters[monsterName];
  updateMonsterStats(currentMonster);
}

function getAward() {
  gold += 30;
  goldText.innerText = gold;
  messageText.innerText += "\nYou got 30 gold.";
}

function attack() {
  if (health > 0 && monsterHealth > 0) {
    if (Math.random() > 0.5) {
      monsterHealth -= weapons[inventory.length - 1].damage;
      monsterHealthText.innerText = monsterHealth;
      messageText.innerText += "\nYou attacked the monster.";
    } else {
      health -= currentMonster.damage;
      console.log(currentMonster, health);
      healthText.innerText = health;
      messageText.innerText += "\nMonster attacked you.";
    }
  }
  if (health <= 0) {
    messageText.innerText = "You lose the game";
    updateLocation(locations["lose"]);
  }
  if (monsterHealth <= 0) {
    if (currentMonster.name === "dragon") {
      updateLocation(locations["winGame"]);
    } else {
      updateLocation(locations["win"]);
    }
    messageText.innerText += "You defeated the monster";
    getAward();
  }
}

function dodge() {
  messageText.innerText = `You dodge the attact from ${currentMonster.name}`;
}

function fightFanged() {
  const monsterName = "fange";
  updateLocation(locations[monsterName]);
  monsterHealth = monsters[monsterName].health;
  currentMonster = monsters[monsterName];
  updateMonsterStats(currentMonster);
}

// fight Dragon buttons functionalities

function fightDragon() {
  const monsterName = "dragon";
  updateLocation(locations[monsterName]);
  monsterHealth = monsters[monsterName].health;
  currentMonster = monsters[monsterName];
  updateMonsterStats(currentMonster);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  xpText.innerText = xp;
  healthText.innerText = health;
  goldText.innerText = gold;
  isShowMonsterStats = false;
  monsterNameText.innerText = "";
  monsterHealthText.innerText = 100;
  inventory = ["stick"];
  updateLocation(locations["town"]);
}
