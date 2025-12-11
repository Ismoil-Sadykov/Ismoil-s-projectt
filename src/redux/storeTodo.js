import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from './reducers/todoList';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});

