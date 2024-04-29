import { useEffect, useState } from "react";
import { stringify, v4 as uuidv4 } from "uuid";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   let todostring = localStorage.getItem("todos");
  //   if (todostring!==null) {
  //     try {
  //       let todos = JSON.parse(localStorage.getItem("todos"));
  //       setTodos(todos);
  //       console.log(todos);
  //     } catch (error) {
  //       console.error("Error parsing todos from localStorage:", error);
  //     }
  //   }
  // }, []);
  

  // const saveLocalStorage = (params) => {
  //   localStorage.setItem("todos", JSON.stringify(todos))
  // };

  // const handleAdd= ()=>{
  //   setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}]);
  //   setTodo("");
  //   saveLocalStorage();
  // }
  // const handleCheckbox = (e) => {
  //   let id = e.target.name;
  //   let index = todos.findIndex((item) => {
  //     return item.id === id;
  //   });
  //   let newTodos = [...todos];
  //   newTodos[index].isCompleted = !newTodos[index].isCompleted;
  //   setTodos(newTodos);
  //   saveLocalStorage();
  // };
  // const handleDelete = (id, item) => {
  //   let newTodos = todos.filter((item) => {
  //     return item.id !== id;
  //   });
  //   setTodos(newTodos);
  //   saveLocalStorage();
  // };

  //   const handleChange = (e) => {
  //     setTodo(e.target.value);
  //   };

  return (
    <>
    <Provider store={store}>
      <AddTodo />
      <Todos />
    </Provider>
    </>
  );
}

export default App;
