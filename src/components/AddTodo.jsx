import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: nanoid(),
      todo: "Hello world",
      isCompleted: false,
    }))
  }


  const handleChange = (e) => {
    e.preventDefault()
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <>
      <div className="todoInput flex mb-5">
        <form onSubmit={handleChange} >
          <input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type="text"
            className="py-1 px-3 rounded-md w-full"
          />
          <button
            // onClick={handleAddTodo}
            className="bg-blue-600 text-white px-5 py-1 rounded-md ml-3">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
