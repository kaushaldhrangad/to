import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../feature/todo/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo({ id }));
  };

  return (
    <div className="todos">
      {todos.map((item) => (
        <div key={item.id} className="todo flex items-center justify-between my-4">
          <input
            name={item.id}
            onChange={() => handleToggle(item.id)}
            checked={item.isCompleted}
            id=""
            type="checkbox"
          />
          <div className={`todo-text ${item.isCompleted ? 'line-through' : ''}`}>
            {item.todo}
          </div>
          <div className="btn">
            <button
              onClick={() => dispatch(removeTodo(item.id))}
              className="bg-blue-600 text-white px-5 py-1 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
