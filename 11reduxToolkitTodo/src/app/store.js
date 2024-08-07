import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/Todo/todoSlice';

// console.log(todoReducer );

export const store = configureStore({
    reducer: todoReducer
})