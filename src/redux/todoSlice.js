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
  },
});

export const { addTodos, deleteTodos } = todoSlice.actions;
export default todoSlice.reducer;
