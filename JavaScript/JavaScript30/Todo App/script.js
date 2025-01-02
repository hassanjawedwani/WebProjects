const inputs = document.querySelectorAll('input[type = "checkbox"]');

// todo app
// inputs.forEach((input) => {
//   input.addEventListener("click", (e) => {
//     const inputs = document.querySelectorAll('input[type = "checkbox"]');
//     inputs.forEach(input => {
//       const label = document.querySelector(`label[for="${input.id}"]`);
//       if (input.checked) {
//         label.style.textDecoration = "line-through"
//       } else {
//         label.style.textDecoration = "none";
//       }
//     });
//   });
// });

// shift selection

let inBetween = false;
let lastCheck;

function handleCheck(e) {
  const checkBoxes = document.querySelectorAll('input[type = "checkbox"]');
  checkBoxes.forEach((input) => {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (input.checked) {
      label.style.textDecoration = "line-through";
    } else {
      label.style.textDecoration = "none";
    }
  });

  if (e.shiftKey && this.checked) {
    checkBoxes.forEach((checkBox) => {
      if (checkBox === lastCheck || checkBox === this) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        console.log(checkBox)
        checkBox.checked = true;
        const label = document.querySelector(`label[for="${checkBox.id}"]`);
        if (checkBox.checked) {
          label.style.textDecoration = "line-through";
        } else {
          label.style.textDecoration = "none";
        }
      }
    });
  }

  lastCheck = this;
}

inputs.forEach((input) => {
  input.addEventListener("click", handleCheck);
});
