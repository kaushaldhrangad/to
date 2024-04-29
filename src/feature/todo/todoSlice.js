  import { createSlice, nanoid } from "@reduxjs/toolkit";

  const initialState = {
    todos: [{ id: nanoid(), todo: "Hello World", isCompleted: false }],
  };

  export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
      addTodo: (state, action) => {
        const todo = {
          id: nanoid(),
          todo: action.payload,
          isCompleted: false,
        };
        state.todos.push(todo);
      },
      removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => {
          return todo.id !== action.payload;
        });
      },
      toggleTodo: (state, action) => {
        const { id } = action.payload;
        const todo = state.todos.find((todo) => todo.id == id);
        if (todo) {
          todo.isCompleted = !todo.isCompleted;
        }
      },
    },
  });
  export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

  export default todoSlice.reducer;
