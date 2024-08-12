const form = document.querySelector("form");
const messageInput = document.getElementById("message-input");
const output = document.getElementById("output");

const isSpam = (msg) => {
  const helpRegex = /please help/i;
  const dollarRegex = /[0-9]+ (?:hundred |thousand |million |billion )?dollars/i;
  const moneyRegex = /(\s|^)fr[3e][3e] m[0o]n[3e]y(\s|$)/i;
  const stockRegex = /(\s|^)fr[e3][e3] [5s][7t][0o][c{([]ks(\s|$)/i;
  const regexList = [helpRegex, dollarRegex, moneyRegex, moneyRegex, stockRegex];
  return regexList.some((regex) => regex.test(msg));
};

const formHandler = (e) => {
  e.preventDefault();
  const outputMessage = isSpam(messageInput.value)
    ? "Oh! your message seems like spam"
    : "Good, your message is not spam";
  output.textContent = outputMessage;
};

form.addEventListener("submit", formHandler);