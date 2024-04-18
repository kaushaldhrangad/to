import { useEffect, useState } from "react";
import { stringify, v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let todostring = localStorage.getItem("todos");
    if (todostring!==null) {
      try {
        let todos = JSON.parse(localStorage.getItem("todos"));
        setTodos(todos);
        console.log(todos);
      } catch (error) {
        console.error("Error parsing todos from localStorage:", error);
      }
    }
  }, []);
  

  const saveLocalStorage = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  };

  const handleAdd= ()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}]);
    setTodo("");
    saveLocalStorage();
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveLocalStorage();
  };
  const handleDelete = (id, item) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveLocalStorage();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-full max-w-xl">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-5">
            Add Todo
          </h2>
          <div className="todoInput flex mb-5">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              className="py-1 px-3 rounded-md w-full"
            />
            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white px-5 py-1 rounded-md ml-3">
              Save
            </button>
          </div>

          <div className="todos">
            {todos.map((item) => {
              return (
                <div
                  key={item.id}
                  className="todo flex items-center justify-between my-4">
                  <input
                    name={item.id}
                    onChange={handleCheckbox}
                    value={item.isCompleted}
                    id=""
                    type="checkbox"
                  />
                  <div className={item.isCompleted ? "line-through" : ""}>
                    {item.todo}
                  </div>
                  <div className="btn">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-blue-600 text-white px-5 py-1 rounded-md">
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
