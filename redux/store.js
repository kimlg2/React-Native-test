import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './slices/todo/todoSlice';
export const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
});