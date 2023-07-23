import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, { payload }) => {
      state.todos.push(payload);
    },
    deleteTodos: (state, { payload }) => {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
    updateTodo: (state, { payload }) => {
      const { id, text } = payload;
      state.todos = state.todos.map(todo => {
        return todo.id === id ? { ...todo, text } : todo;
      });
    },
  },
});

export const { addTodos, deleteTodos, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
