import { createSlice } from "@reduxjs/toolkit";
import { addTask } from "./operation";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasksList: [],
        error: null,
        isLoading: false,
        isLoadingAdd: false,
    },
    extraReducers: builder => {
        builder
            .addCase(addTask.pending, state => {
                state.isLoadingAdd = true;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.isLoadingAdd = false;
                state.error = null;
                state.tasksList.push(action.payload);
            })
            .addCase(addTask.rejected, (state, action) => {
                state.isLoadingAdd = false;
                state.error = action.payload;
            })
    },
 
});

