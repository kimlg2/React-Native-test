import { configureStore } from '@reduxjs/toolkit';

import todoReducer from '../redux/slices/todoSlice.js';
export const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
});

