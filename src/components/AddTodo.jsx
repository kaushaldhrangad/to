import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";
import { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <>
    <h1 className="mt-11 flex justify-center font-bold text-4xl text-blue-800">Add Todo</h1>
      <div className="mt-10 max-w-sm mx-auto">
        <div className="todoInput flex mb-5">
          <form onSubmit={handleChange} className="flex w-full">
            <input
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
              type="text"
              className="py-2 px-3 rounded-md w-full border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter your todo here"
            />
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md ml-3 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
