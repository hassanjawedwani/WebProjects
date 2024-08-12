const form = document.querySelector("form");
const messageInput = document.getElementById("message-input");
const output = document.getElementById("output");

const isSpam = (msg) => {
  const helpRegex = /please help/i;
  const dollarRegex = /[0-9]+ hundred|thousand|million|billion dollars/i;
  const regexList = [helpRegex, dollarRegex];
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