import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../feature/todo/todoSlice";
import { MdDeleteForever } from "react-icons/md";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo({ id }));
  };

  return (
    <>
      <h2 className="text-3xl font-semibold justify-center flex mb-5 mt-11 ">
        Your Todos
      </h2>
      <div className="flex justify-center ">
        <div className="w-1/2">
          <div className="todos">
            {todos.map((item) => (
              <div
                key={item.id}
                className="todo flex items-center justify-between my-4  bg-blue-200 px-3 py-2  rounded-md">
                <input
                  name={item.id}
                  onChange={() => handleToggle(item.id)}
                  checked={item.isCompleted}
                  id=""
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
                <div
                  className={`text-lg todo-text ${
                    item.isCompleted ? "line-through" : ""
                  }`}>
                  {item.todo}
                </div>
                <div className="btn">
                  <button
                    onClick={() => dispatch(removeTodo(item.id))}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="justify-center flex mt-12 text-lg font-mono font-bold rounded-md px-2 py-3 text-white bg-blue-700">
        Created by Kaushal Dhrangad
        </div>

      </div>
      <div className="flex justify-center ">

        <a title="GitHub" className="mr-5 mt-4" target="_blank" href="https://github.com/kaushaldhrangad"><FaGithub size="2em"/></a>
        <a title="LinkedIn" target="_blank" className="mr-5 mt-4" href="https://www.linkedin.com/in/kaushaldhrangad/"><FaLinkedin size="2em"/></a>
        <a title="Twitter" target="_blank" className="mr-5 mt-4" href="https://twitter.com/KaushalDhrangad"><FaSquareXTwitter size="2em"/></a>
      </div>
    </>
  );
};
export default Todos;
