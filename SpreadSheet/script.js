const range = (start, end) => {
  return Array(end - start + 1).fill(start).map((el, index) => el + index);
}

const charRange = (start, end) => {
  return range(start.charCodeAt(0), end.charCodeAt(0)).map(code => String.fromCharCode(code));
}


window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = (name) => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  }
  const letters = charRange("A", "J");
  letters.forEach(createLabel);
  
}