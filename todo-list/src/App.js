import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  function handleDelete(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold">Todo list</h1>
      <div className="mt-5">
        <input
          className="border px-2 py-1 w-[20rem] mx-2 rounded-lg"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="bg-black text-white px-2 py-1 rounded-lg"
          onClick={addTodo}
        >
          add
        </button>
      </div>
      <div className="mt-5 ml-5">
        {todos.length > 0 &&
          todos.map((t, index) => {
            return (
              <div className="flex gap-2 my-2">
                <li>{t}</li>
                <button
                  className="bg-black text-white px-2 rounded-lg cursor-pointer"
                  onClick={() => handleDelete(index)}
                >
                  delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
