// Correct the import name from 'ConfigureStore' to 'configureStore'
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movies/MovieSlice';

// Use configureStore instead of ConfigureStore
export const store = configureStore({
    reducer: {
        movieSlice: movieReducer,
    }
});

