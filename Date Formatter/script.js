const dropdown = document.getElementById("dropdown");
const output = document.getElementById("output");

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();

const dropdownHandler = (e) => {
  e.preventDefault();
  const selection = Number(dropdown.value);
  if (selection === 1) {
    output.textContent = `${day}-${month}-${year}`;
  } else if (selection === 2) {
    output.textContent = `${year}-${month}-${day}`;
  } else if (selection === 3) {
    output.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
  }
};

dropdown.addEventListener("change", dropdownHandler);
