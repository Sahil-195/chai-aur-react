import {createContext, useContext} from 'react';

export const todoContext = createContext({
    todos: [{
        id: 1,
        todoMsg: 'Task 1',
        completed: false
    }],
    addTodo: (todoMsg) => {},
    deleteTodo: (id) => {},
    updateTodo: (id,todo) => {},
    toggleComplete: (id) => {}
});

export const TodoProvider = todoContext.Provider;

export function useTodo() {
    return useContext(todoContext);
}
