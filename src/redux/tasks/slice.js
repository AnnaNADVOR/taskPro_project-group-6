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
                console.log("payload",action.payload)
                state.tasksList.push(action.payload);
                state.tasksList.forEach(console.log)
                console.log("tasklist",state.tasksList)
            })
            .addCase(addTask.rejected, (state, action) => {
                state.isLoadingAdd = false;
                state.error = action.payload;
            })
    },
 
});

