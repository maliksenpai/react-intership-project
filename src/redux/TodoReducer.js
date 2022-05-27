import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

export const todoSlices = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload.todo];
        },
        removeTodo: (state, action) => {
            state.todos = [...state.todos].filter((element) => {
                return element.id !== action.payload.todo.id;
            });
        }
    }
});

export const { addTodo, removeTodo } = todoSlices.actions;
export default todoSlices.reducer;