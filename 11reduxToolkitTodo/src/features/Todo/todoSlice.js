import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "1", todoMsg: "hello world", disabled: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // console.log('add todo called');
      const todo = {
        id: nanoid(),
        todoMsg: action.payload,
        disabled: false,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      // console.log('remove todo called');
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateAll: (state, action) => {
      // console.log('updateALL called',action.payload.id)
      state.todos = state.todos.map((todo) => {
        if (action.payload.editable === true) {
          todo.disabled = false;
        } else {
          todo.disabled = todo.id === action.payload.id ? false : true;
        }
        return todo;
      });
    },

    updateTodo: (state, action) => {
      // console.log('updatetodo called',action.payload)
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.todoMsg = action.payload.newtodoMsg;
        }
        return todo;
      });
    },
  },
});

// console.log(todoSlice.actions);
export const { addTodo, removeTodo, updateAll, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
