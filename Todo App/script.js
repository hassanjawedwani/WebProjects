const newTaskBtn = document.getElementById("new-task-button");
const form = document.getElementById("form");
const crossBtn = document.getElementById("cross-button");
const inputTitle = document.getElementById("input-title");
const inputDate = document.getElementById("input-date");
const inputDescription = document.getElementById("input-description");
const taskContainer = document.querySelector(".task-container");

const taskArr = [];

const newTaskBtnHandler = () => {
  form.classList.remove("hide");
};

const renderUI = () => {
  const stringHTML = taskArr.map((task) => {
    let date;
    if (task.date) {
      const [year, month, day] = task.date.split("-");
      date = `${day}-${month}-${year}`;
    } else {
      date = "";
    }
    return `
      <div class="task">
          <p><strong>Title: </strong>${task.title}</p>
          <p><strong>Date: </strong>${date}</p>
          <p class="description">
            <strong>Description: </strong>${task.description}
          </p>
          <div class="task-controls">
            <button type="button" class="btn btn-small">Edit</button>
            <button type="button" class="btn btn-small">Delete</button>
          </div>
        </div>
    `;
  });
  taskContainer.innerHTML = stringHTML;
};

const formHandler = (e) => {
  e.preventDefault();
  const title = inputTitle.value;
  const date = inputDate.value;
  const description = inputDescription.value;
  taskArr.push({
    title,
    date,
    description,
  });
  inputTitle.value = "";
  inputDate.value = "";
  inputDescription.value = "";
  crossBtnHandler();
  renderUI();
};

const crossBtnHandler = () => {
  form.classList.add("hide");
};

newTaskBtn.addEventListener("click", newTaskBtnHandler);
form.addEventListener("submit", formHandler);
crossBtn.addEventListener("click", crossBtnHandler);
