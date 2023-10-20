import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      state.todo.push(actions.payload);
    }
  },
});

// Action creators are generated for each case reducer function
export const { setIsLogin } = todoSlice.actions

const todoReducer = todoSlice.reducer;

export default todoReducer;