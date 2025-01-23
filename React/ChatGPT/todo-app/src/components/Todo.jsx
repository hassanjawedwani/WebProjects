import { useEffect, useReducer, useState } from "react";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [inputEditValue, setInputEditValue] = useState("");
  const [formType, setFormType] = useState("");
  const [inputEditId, setInputEditId] = useState(null);

  const [todos, dispatch] = useReducer(reducer, [], () => {
    const localTodos = localStorage.getItem("todos");
      return (localTodos) ? JSON.parse(localTodos) : []
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.trim()) {
      alert("Task can't be empty!");
      return;
    }
    console.log(inputValue, e);
    dispatch({ type: "add", title: inputValue });
    setInputValue("");
    setFormType("");
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    if (!inputEditValue.trim()) {
      alert("Update task can't be empty!");
      return;
    }
    console.log(inputEditValue, inputEditId);
    dispatch({ type: "update", id: inputEditId, title: inputEditValue });
    setInputEditId(null);
    setInputEditValue("");
    setFormType("");
  }

  function handleEdit(prevTodo) {
    setFormType("edit");
    setInputEditValue(prevTodo.title)
    setInputEditId(prevTodo.id);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="w-96 text-white mx-auto mt-12">
      {/* Heading */}
      <h1 className="text-3xl text-center font-bold mb-8">Todo App</h1>

      <button
        className="bg-white text-blue-950 text-3xl w-12 h-12 rounded-full block mx-auto my-8 border-4 border-solid border-yellow-500 hover:bg-blue-950 hover:text-white"
        onClick={() => {
          setFormType("add");
        }}
      >
        +
      </button>

      {/* new/edit task Form */}
      {formType && (
        <form
          className="flex"
          onSubmit={formType === "add" ? handleSubmit : handleEditSubmit}
        >
          <input
            className="w-2/3 p-3 text-blue-950"
            type="text"
            placeholder={
              formType === "add" ? "Enter new Task" : "Enter Updated Task"
            }
            name={formType === "add" ? "newTaskInput" : "editTaskInput"}
            value={formType === "add" ? inputValue : inputEditValue}
            onChange={(e) => {
              formType === "add" ? setInputValue(e.target.value) : setInputEditValue(e.target.value)
            }}
          />
          <button
            className="w-1/3 border hover:bg-white hover:border-4 hover:border-solid hover:border-yellow-500 hover:text-blue-950 font-bold"
            type="submit"
          >
            {formType === "add" ? "Add task" : "Update Task"}
          </button>
        </form>
      )}

      {/*Todo Display */}
      <div className="bg-white border-4 border-solid border-yellow-500 text-blue-950 mt-8">
        {todos.length === 0 ? (
          <p className="text-2xl text-center">No task added!</p>
        ) : (
          <div>
            <h3 className="text-2xl pl-1 pb-2">Tasks:</h3>
            {todos.map((todo, index) => (
              <div key={todo.id} className="border-t-2 rounded p-2 flex ">
                <label className="w-2/3 break-words">
                  {index + 1}: {todo.title}
                </label>
                <div className="w-1/3">
                  <button
                    type="button"
                    className="w-1/2 border shadow hover:bg-green-700 hover:text-white"
                    onClick={() => { handleEdit(todo) }}
                    aria-label="edit task"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="w-1/2 border shadow hover:bg-red-600 hover:text-white"
                    onClick={() => { dispatch({ type: "delete", id: todo.id }) }}
                    aria-label="delete task"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


function reducer(state = [], action) {
  let newState;
  switch (action.type) {
    case "add":
      newState = [...state, { id: Date.now(), title: action.title }];
      break;
    case "update":
      newState = state.map(todo => todo.id === action.id ? { ...todo, title: action.title } : todo);
      break;
    case "delete":
      newState = state.filter(todo => todo.id !== action.id);
      break;
    default:
      newState = state;
  }
  return newState;
}

export default Todo;