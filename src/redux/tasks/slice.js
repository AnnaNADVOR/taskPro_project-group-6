import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasksList: [],
        error: null,
        isLoading: false,
    },
    // extraReducers: builder => {
    //     builder
    //         .addCase()
    // },
 
});
